<script lang="ts">
   import { onMount } from 'svelte';

   interface VRObject {
      name: string;
      image: string;
      description: string;
      link?: string;
   }

   export let objects: VRObject[] = [];

   let scrollContainer: HTMLDivElement;
   let autoScrollInterval: number;
   let isPaused = false;
   let selectedIndex: number | null = null;
   let lastInteractionTime = 0;
   let currentItemIndex = objects.length; // Start at first item of middle set

   // Triple the array for infinite scrolling
   $: totalObjects = [...objects, ...objects, ...objects];

   function scrollToNext() {
      if (!scrollContainer || scrollContainer.children.length === 0) return;

      currentItemIndex++;
      scrollToItem(currentItemIndex);
      checkAndResetPosition();
   }

   function scrollToPrevious() {
      if (!scrollContainer || scrollContainer.children.length === 0) return;

      currentItemIndex--;
      scrollToItem(currentItemIndex);
      checkAndResetPosition();
   }

   function checkAndResetPosition() {
      // If we've scrolled well into the third set, jump back to middle set without animation
      if (currentItemIndex >= objects.length * 2 + 3) {
         setTimeout(() => {
            currentItemIndex = objects.length + (currentItemIndex % objects.length);
            scrollToItem(currentItemIndex, false);
         }, 700);
      }
      // If we've scrolled well into the first set, jump to middle set without animation
      else if (currentItemIndex < objects.length - 3) {
         setTimeout(() => {
            currentItemIndex = objects.length + (currentItemIndex % objects.length);
            scrollToItem(currentItemIndex, false);
         }, 700);
      }
   }

   function scrollToItem(index: number, smooth = true) {
      if (!scrollContainer || scrollContainer.children.length === 0) return;

      const itemWidth = (scrollContainer.children[0] as HTMLElement).offsetWidth;
      const gap = 16;
      const scrollPosition = index * (itemWidth + gap);

      scrollContainer.scrollTo({ left: scrollPosition, behavior: smooth ? 'smooth' : 'auto' });
   }

   function handleNextClick() {
      isPaused = true;
      scrollToNext();
      setTimeout(() => { isPaused = false; }, 5000); // Resume after 5 seconds
   }

   function handlePreviousClick() {
      isPaused = true;
      scrollToPrevious();
      setTimeout(() => { isPaused = false; }, 5000); // Resume after 5 seconds
   }

   function handleMouseEnter() {
      isPaused = true;
   }

   function handleMouseLeave() {
      isPaused = false;
   }

   function handleClick(index: number) {
      // Map tripled array index back to original object index
      selectedIndex = index % objects.length;
      isPaused = true;
   }

   function closeOverlay() {
      selectedIndex = null;
      isPaused = false;
   }

   function handleTouchStart() {
      isPaused = true;
      lastInteractionTime = Date.now();
   }

   function handleTouchEnd() {
      // Resume auto-scroll after 3 seconds of no interaction
      setTimeout(() => {
         if (Date.now() - lastInteractionTime >= 3000) {
            isPaused = false;
         }
      }, 3000);
   }

   onMount(() => {
      // Initialize scroll position to middle set
      setTimeout(() => {
         scrollToItem(currentItemIndex, false);
      }, 100);

      autoScrollInterval = window.setInterval(() => {
         if (!isPaused) {
            scrollToNext();
         }
      }, 3000);

      return () => {
         clearInterval(autoScrollInterval);
      };
   });
</script>

<div
   class="vr-gallery"
   on:mouseenter={handleMouseEnter}
   on:mouseleave={handleMouseLeave}
>
   <button
      class="nav-arrow nav-arrow-left"
      on:click={handlePreviousClick}
      aria-label="Previous">
   </button>
   <div
      bind:this={scrollContainer}
      class="gallery-container"
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
      role="region"
      aria-label="VR Objects Gallery"
   >
      {#each totalObjects as object, index}
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
      {/each}
   </div>
   <button
      class="nav-arrow nav-arrow-right"
      on:click={handleNextClick}
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
                  View More →
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

   .gallery-container {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      padding: 1rem 0;
      scrollbar-width: none;
      -ms-overflow-style: none;
      flex: 1;
   }

   .gallery-container::-webkit-scrollbar {
      display: none;
   }

   .gallery-item {
      position: relative;
      width: 320px;
      height: 200px;
      flex-shrink: 0;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid var(--color-border);
      background: var(--color-bg-secondary);
      transition: all 0.3s ease;
      padding: 0;
      scroll-snap-align: start;
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
      .gallery-item {
         width: 280px;
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
