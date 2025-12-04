<script lang="ts">
</script>

<svelte:head>
   <title>Recent Work - Rebecca Stankus</title>
</svelte:head>

<section class="page-header">
   <h1>Recent Work</h1>
   <p class="lead">
      Side projects and experiments in web development, XR, and interactive experiences.
   </p>
</section>

<section class="projects">
   <div class="project-grid">
      <a href="https://cluckingham.com" target="_blank" rel="noopener" class="card project-card">
         <h3>Cluckingham Guard</h3>
         <p>Smart chicken monitoring platform with live camera streaming. Features real-time video feed via MediaMTX. Future development includes AI-powered predator detection, egg laying tracking, health monitoring, supplies management, and social networking for chicken keepers.</p>
         <span class="tech-stack">SvelteKit • Express • TypeScript • MediaMTX • Computer Vision</span>
      </a>

      <div class="card project-card">
         <h3>Audio XR</h3>
         <p>Immersive spatial audio platform (work in progress). Artists can upload multi-track stems and adjust spatial positioning in real-time. Includes accessibility features with adaptive spatial audio mixing and customizable listening environments, benefiting neurodivergent listeners and those with different sensory processing needs.</p>
         <span class="tech-stack">Canvas API • Spatial Audio • Web Audio API</span>
      </div>

      <div class="card project-card">
         <h3>Land of Merriment</h3>
         <p>Portfolio site for handmade renaissance faire clothing with inventory tracking system and custom admin interface. Future development includes full e-commerce functionality with checkout and payment integration.</p>
         <span class="tech-stack">SvelteKit • MongoDB • Express</span>
      </div>
   </div>
</section>

<style>
.page-header {
   margin-bottom: 3rem;
}

.lead {
   font-size: 1.15rem;
   color: var(--color-text-secondary);
   max-width: 800px;
}

.projects {
   margin-top: 2rem;
}

.project-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
   gap: 2rem;
}

.project-card {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   text-decoration: none;
   color: inherit;
}

.project-card h3 {
   color: var(--color-accent);
   margin: 0;
}

.project-card p {
   color: var(--color-text-secondary);
   margin: 0;
   flex: 1;
}

.tech-stack {
   font-size: 0.85rem;
   color: var(--color-text-muted);
   font-family: var(--font-mono);
}

a.project-card:hover h3 {
   color: var(--color-accent-hover);
}
</style>
