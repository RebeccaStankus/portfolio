<svelte:head>
   <title>BigWorld - Rebecca Stankus</title>
</svelte:head>

<section class="page-header">
   <div class="header-image-container">
      <img src="/images/bigworld/bigworld-entrance.webp" alt="BigWorld Entrance" class="header-image" />
   </div>
   <h1>BigWorld</h1>
</section>

<section class="content-section">
   <div class="story-block">
      <p>
         As our exploration of enterprise wound down, we started to think about what the minimal requirements are for someone to express themself in a virtual world. Our first requirement was spatial audio so we envisioned a world of audio. From afar it might look like dots of light across the globe.
      </p>
      <img src="/images/bigworld/bigworld-idea.webp" alt="BigWorld Concept" class="content-image" />
   </div>

   <div class="story-block">
      <p>
         It might look like people congregating around audio mixers to chat.
      </p>
      <img src="/images/bigworld/bigworld-vr.webp" alt="BigWorld VR" class="content-image" />
   </div>

   <div class="story-block">
      <p>
         What about avatars? Do they need eyes?
      </p>
      <img src="/images/bigworld/bigworld-avatars-eyes.webp" alt="BigWorld Avatars with Eyes" class="content-image" />
   </div>

   <div class="story-block">
      <p>
         ...or maybe just a sense of direction? That's where we landed with our last avatars in 3D.
      </p>
      <img src="/images/bigworld/bigworld-avatars.webp" alt="BigWorld Avatars" class="content-image" />
   </div>

   <div class="story-block">
      <p>
         With that, we shut down our 3D virtual world servers for good and began to think about spatial audio in a 2D world during the great era of social distance.
      </p>
      <p>
         I worked with one other engineer on initial prototypes where we were just dots around mixers on a 2D map. As we progressed, the UI became more intricate, using some serious math on HTML canvas elements to perfect movement and rotation of avatars while preserving map orientation.
      </p>
      <video controls class="content-video">
         <source src="https://pub-5ee5bb131af7402fb9d6eace1faa7d29.r2.dev/videos/bigworld-canvas.mp4" type="video/mp4" />
         <track kind="captions" />
         Your browser does not support the video tag.
      </video>
   </div>

   <div class="story-block">
      <p>
         In the following videos you can see how I implemented a follow feature so users could lead friends around the map while maintaining audio proximity. There was always a focus on accessibility and simple intuitive UI experiences. I implemented text-to-speech (TTS) and speech-to-text (STT) features to ensure the platform was accessible to as many users as possible.
      </p>
      <div class="video-grid">
         <video controls>
            <source src="https://pub-5ee5bb131af7402fb9d6eace1faa7d29.r2.dev/videos/bigworld-follow.mp4" type="video/mp4" />
            <track kind="captions" />
            Your browser does not support the video tag.
         </video>
         <video controls>
            <source src="https://pub-5ee5bb131af7402fb9d6eace1faa7d29.r2.dev/videos/bigworld-follow2.mp4" type="video/mp4" />
            <track kind="captions" />
            Your browser does not support the video tag.
         </video>
      </div>
   </div>

   <div class="story-block">
      <p>
         I worked on some fun social features next including an early integration of GPT 3.0. I created a deck of cards
      </p>
      <div class="image-grid-2">
         <img src="/images/bigworld/cards.webp" alt="Card Deck Interface" />
         <img src="/images/bigworld/cards2.webp" alt="Card Deck Detail" />
      </div>
      <p>
         and experimented with separating stems for a unique music experience.
      </p>
      <video controls class="content-video">
         <source src="https://pub-5ee5bb131af7402fb9d6eace1faa7d29.r2.dev/videos/bigworld-guster-demo.mp4" type="video/mp4" />
         <track kind="captions" />
         Your browser does not support the video tag.
      </video>
   </div>

   <div class="story-block">
      <p>
         We hosted quite a few virtual concerts and you can still see some of the BigWorld 2D audio demo at <a href="https://www.highfidelity.com/spatial-audio-demos" target="_blank" rel="noopener" class="external-link">highfidelity.com/spatial-audio-demos</a>.
      </p>
   </div>
</section>

<section class="next-up">
   <a href="/linden-lab" class="next-link">
      <span class="next-label">Next Up</span>
      <h3>Linden Lab</h3>
      <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
   </a>
</section>

<style>
.page-header {
   margin-bottom: 3rem;
}

.header-image-container {
   margin-bottom: 2rem;
   overflow: hidden;
   border-radius: 8px;
   border: 2px solid var(--color-border);
   max-height: 400px;
}

.header-image {
   width: 100%;
   max-width: none;
   height: 400px;
   object-fit: cover;
   object-position: center center;
   margin-left: 0;
}

.page-header h1 {
   color: var(--color-accent);
   margin: 0;
}

.content-section {
   display: flex;
   flex-direction: column;
   gap: 3rem;
}

.story-block {
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
}

.story-block p {
   color: var(--color-text-secondary);
   line-height: 1.6;
   font-size: 1.1rem;
   max-width: 800px;
}

.content-image {
   width: 100%;
   max-width: 800px;
   border-radius: 8px;
   border: 2px solid var(--color-border);
}

.content-video {
   width: 100%;
   max-width: 800px;
   border-radius: 8px;
   border: 2px solid var(--color-border);
}

.video-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 1.5rem;
   max-width: 800px;
}

.video-grid video {
   width: 100%;
   border-radius: 8px;
   border: 2px solid var(--color-border);
}

.image-grid-2 {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 1.5rem;
   max-width: 800px;
}

.image-grid-2 img {
   width: 100%;
   border-radius: 8px;
   border: 2px solid var(--color-border);
}

.external-link {
   color: var(--color-accent);
   text-decoration: none;
   border-bottom: 1px solid var(--color-accent);
}

.external-link:hover {
   color: var(--color-accent-hover);
   border-bottom-color: var(--color-accent-hover);
}

.next-up {
   margin-top: 4rem;
   padding: 2rem 0;
   border-top: 1px solid var(--color-border);
}

.next-link {
   display: flex;
   align-items: center;
   gap: 1rem;
   text-decoration: none;
   color: var(--color-text-primary);
   transition: all 0.3s ease;
   padding: 1.5rem;
   border: 2px solid var(--color-border);
   border-radius: 8px;
   background: var(--color-bg-secondary);
}

.next-link:hover {
   border-color: var(--color-accent);
   transform: translateX(8px);
}

.next-link:hover .arrow-icon {
   transform: translateX(4px);
}

.next-label {
   font-size: 0.85rem;
   color: var(--color-text-secondary);
   text-transform: uppercase;
   letter-spacing: 0.1em;
}

.next-link h3 {
   flex: 1;
   margin: 0;
   color: var(--color-accent);
}

.arrow-icon {
   width: 32px;
   height: 32px;
   color: var(--color-accent);
   transition: transform 0.3s ease;
}

@media (max-width: 768px) {
   .video-grid {
      grid-template-columns: 1fr;
   }

   .image-grid-2 {
      grid-template-columns: 1fr;
   }
}
</style>
