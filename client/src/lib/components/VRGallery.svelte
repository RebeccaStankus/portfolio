<script lang="ts">
   import emblaCarouselSvelte from 'embla-carousel-svelte';
   import Autoplay from 'embla-carousel-autoplay';
   import type { EmblaCarouselType } from 'embla-carousel';

   interface VRObject {
      name: string;
      image: string;
      description: string;
      link?: string;
      linkText?: string;
   }

   export let objects: VRObject[] = [];

   let emblaApi: EmblaCarouselType;
   let selectedIndex: number | null = null;

   const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

   function onInit(event: CustomEvent<EmblaCarouselType>) {
      emblaApi = event.detail;
   }

   function scrollPrev() {
      if (emblaApi) emblaApi.scrollPrev();
   }

   function scrollNext() {
      if (emblaApi) emblaApi.scrollNext();
   }

   function handleClick(index: number) {
      selectedIndex = index;
      if (emblaApi) autoplay.stop();
   }

   function closeOverlay() {
      selectedIndex = null;
      if (emblaApi) autoplay.play();
   }

   function handleMouseEnter() {
      if (emblaApi) autoplay.stop();
   }

   function handleMouseLeave() {
      if (emblaApi) autoplay.play();
   }
</script>

<div
   class="vr-gallery"
   on:mouseenter={handleMouseEnter}
   on:mouseleave={handleMouseLeave}
>
   <button
      class="nav-arrow nav-arrow-left"
      on:click={scrollPrev}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      aria-label="Previous">
   </button>

   <div
      class="embla"
      use:emblaCarouselSvelte={{
         options: {
            loop: true,
            align: 'start',
            slidesToScroll: 1
         },
         plugins: [autoplay]
      }}
      on:emblaInit={onInit}
   >
      <div class="embla__container">
         {#each objects as object, index}
            <div class="embla__slide">
               <button
                  class="gallery-item"
                  on:click={() => handleClick(index)}
                  aria-label={`View ${object.name}`}
               >
                  <img src={object.image} alt={object.name} loading="lazy" />
                  <div class="item-overlay">
                     <h3>{object.name}</h3>
                  </div>
               </button>
            </div>
         {/each}
      </div>
   </div>

   <button
      class="nav-arrow nav-arrow-right"
      on:click={scrollNext}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      aria-label="Next">
   </button>
</div>

{#if selectedIndex !== null && objects[selectedIndex]}
   <div
      class="expanded-overlay"
      on:click={closeOverlay}
      on:keydown={(e) => e.key === 'Escape' && closeOverlay()}
      role="dialog"
      aria-modal="true"
   >
      <button class="close-button" on:click={closeOverlay} aria-label="Close">
         ✕
      </button>
      <div class="expanded-content" on:click={(e) => e.stopPropagation()}>
         {#if objects[selectedIndex].link && objects[selectedIndex].link.endsWith('.mp4')}
            <video controls autoplay class="expanded-video">
               <source src={objects[selectedIndex].link} type="video/mp4" />
               <track kind="captions" />
               Your browser does not support the video tag.
            </video>
         {:else}
            <img src={objects[selectedIndex].image} alt={objects[selectedIndex].name} />
         {/if}
         <div class="expanded-info">
            <h2>{objects[selectedIndex].name}</h2>
            <p>{objects[selectedIndex].description}</p>
            {#if objects[selectedIndex].link && !objects[selectedIndex].link.endsWith('.mp4')}
               <a href={objects[selectedIndex].link} target="_blank" rel="noopener" class="view-link">
                  {objects[selectedIndex].linkText || 'View More'} →
               </a>
            {/if}
         </div>
      </div>
   </div>
{/if}

<style>
   .vr-gallery {
      margin: 2rem 0;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      gap: 1rem;
   }

   .nav-arrow {
      background: linear-gradient(145deg, var(--color-accent), #2a8fb8);
      border: none;
      color: var(--color-bg-primary);
      font-size: 2.5rem;
      width: 2rem;
      height: 6rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      flex-shrink: 0;
      z-index: 10;
      line-height: 1;
      padding: 0;
      box-shadow:
         0 4px 8px rgba(0, 0, 0, 0.3),
         inset 0 1px 0 rgba(255, 255, 255, 0.2),
         inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      position: relative;
   }

   .nav-arrow-left {
      clip-path: polygon(
         40% 0%,
         100% 0%,
         100% 100%,
         40% 100%,
         0% 50%
      );
      padding-right: 0.5rem;
   }

   .nav-arrow-right {
      clip-path: polygon(
         0% 0%,
         60% 0%,
         100% 50%,
         60% 100%,
         0% 100%
      );
      padding-left: 0.5rem;
   }

   .nav-arrow:hover {
      background: linear-gradient(145deg, #4dd4ff, var(--color-accent));
      transform: scale(1.05);
      box-shadow:
         0 6px 12px rgba(61, 190, 241, 0.4),
         inset 0 1px 0 rgba(255, 255, 255, 0.3),
         inset 0 -1px 0 rgba(0, 0, 0, 0.3);
   }

   .nav-arrow:active {
      transform: scale(0.98);
      box-shadow:
         0 2px 4px rgba(0, 0, 0, 0.3),
         inset 0 2px 4px rgba(0, 0, 0, 0.3);
   }

   .embla {
      overflow: hidden;
      flex: 1;
      max-width: 992px;
      padding: 6px 0;
      margin: -6px 0;
   }

   .embla__container {
      display: flex;
   }

   .embla__slide {
      flex: 0 0 320px;
      min-width: 0;
      margin-right: 1rem;
   }

   .gallery-item {
      position: relative;
      width: 100%;
      height: 200px;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid var(--color-border);
      background: var(--color-bg-secondary);
      transition: all 0.3s ease;
      padding: 0;
      display: block;
   }

   .gallery-item:hover {
      border-color: var(--color-accent);
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(61, 190, 241, 0.2);
   }

   .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .item-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(2, 0, 8, 0.9), rgba(2, 0, 8, 0.6) 60%, transparent);
      padding: 0.75rem 1rem;
   }

   .item-overlay h3 {
      color: var(--color-text-primary);
      margin: 0;
      font-size: 1rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
   }

   .expanded-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(2, 0, 8, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 2rem;
      cursor: pointer;
   }

   .close-button {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: transparent;
      border: 2px solid var(--color-accent);
      color: var(--color-accent);
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      z-index: 1001;
   }

   .close-button:hover {
      background: var(--color-accent);
      color: var(--color-bg-primary);
      transform: rotate(90deg);
   }

   .expanded-content {
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      cursor: default;
   }

   .expanded-content img,
   .expanded-content .expanded-video {
      max-width: 100%;
      max-height: 60vh;
      object-fit: contain;
      border-radius: 8px;
      border: 2px solid var(--color-accent);
   }

   .expanded-info {
      background: var(--color-bg-secondary);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--color-border);
   }

   .expanded-info h2 {
      color: var(--color-accent);
      margin: 0 0 0.75rem 0;
   }

   .expanded-info p {
      color: var(--color-text-secondary);
      margin: 0;
      line-height: 1.6;
   }

   .view-link {
      display: inline-block;
      margin-top: 1rem;
      color: var(--color-accent);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;
   }

   .view-link:hover {
      color: var(--color-accent-hover);
      text-decoration: underline;
   }

   @media (max-width: 768px) {
      .embla {
         max-width: 100%;
      }

      .embla__slide {
         flex: 0 0 280px;
         margin-right: 1rem;
      }

      .gallery-item {
         height: 180px;
      }

      .nav-arrow {
         width: 1.5rem;
         height: 4.5rem;
         font-size: 1.8rem;
      }

      .expanded-content {
         max-width: 95vw;
      }

      .expanded-info {
         padding: 1rem;
      }

      .close-button {
         top: 1rem;
         right: 1rem;
         width: 2.5rem;
         height: 2.5rem;
         font-size: 1.5rem;
      }
   }
</style>
