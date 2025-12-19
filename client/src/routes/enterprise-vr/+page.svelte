<svelte:head>
   <title>Enterprise VR - Rebecca Stankus</title>
</svelte:head>

<section class="page-header">
   <div class="header-image-container">
      <img src="/images/enterprise/enterprise-island.webp" alt="Enterprise VR Island" class="header-image" />
   </div>
   <h1>Enterprise VR</h1>
</section>

<section class="content-section">
   <div class="story-block">
      <p>
         Toward the end of 2019, we started to look at VR for work, not realizing how much we would rely on it in a couple of months with the onset of the COVID-19 pandemic. We stripped down our VR platform to work essentials (and maybe a bit of fun content for down time).
      </p>
      <img src="/images/enterprise/enterprise-meeting.webp" alt="Enterprise VR Meeting" class="content-image" />
   </div>

   <div class="story-block">
      <p>
         I really started my web app UI work here, making pixel-perfect pages for our new-user onboarding experience.
      </p>
      <div class="image-grid">
         <div class="image-column">
            <img src="/images/enterprise/enterprise-tutorial-avatar.webp" alt="Tutorial - Avatar Setup" />
            <img src="/images/enterprise/enterprise-tutorial-movement.webp" alt="Tutorial - Movement Controls" />
         </div>
         <div class="audio-container">
            <img src="/images/enterprise/enterprise-tutorial-audio.webp" alt="Tutorial - Audio Setup" class="tall-image" />
         </div>
      </div>
   </div>
</section>

<section class="next-up">
   <a href="/bigworld" class="next-link">
      <span class="next-label">Next Up</span>
      <h3>BigWorld</h3>
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
   width: 133%;
   max-width: none;
   height: 400px;
   object-fit: cover;
   object-position: left center;
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

.image-grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1.5rem;
   align-items: center;
}

.image-column {
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
}

.image-column img {
   width: 100%;
   border-radius: 8px;
   border: 2px solid var(--color-border);
}

.audio-container {
   display: flex;
   align-items: center;
   justify-content: center;
}

.audio-container .tall-image {
   width: 70%;
   height: auto;
   border-radius: 8px;
   border: 2px solid var(--color-border);
}

@media (max-width: 768px) {
   .image-grid {
      grid-template-columns: 1fr;
   }

   .tall-image {
      height: auto;
   }
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
</style>
