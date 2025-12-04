<script lang="ts">
</script>

<svelte:head>
   <title>Linden Lab Work - Rebecca Stankus</title>
</svelte:head>

<section class="page-header">
   <h1>Linden Lab</h1>
   <p class="lead">
      Contributed to Second Life and related projects. Built casino games,
      tutorial systems, and developer tools for the virtual world platform.
   </p>
</section>

<section class="project-section">
   <h2>Casino Project</h2>
   <div class="project-grid">
      <div class="card project-card">
         <h3>Casino Games</h3>
         <p>Interactive gambling games with real-time multiplayer mechanics</p>
      </div>
      <div class="card project-card">
         <h3>Leaderboards</h3>
         <p>Competitive ranking and statistics tracking system</p>
      </div>
      <div class="card project-card">
         <h3>Prize System</h3>
         <p>Reward distribution and inventory management</p>
      </div>
   </div>
</section>

<section class="project-section">
   <h2>Platform Tools</h2>
   <div class="project-grid">
      <div class="card project-card">
         <h3>Tutorial System</h3>
         <p>Interactive onboarding and learning platform for new users</p>
      </div>
      <div class="card project-card">
         <h3>Team Helper Tools</h3>
         <p>Internal tools and utilities for development team workflows</p>
      </div>
      <div class="card project-card">
         <h3>Portals</h3>
         <p>Teleportation and navigation system for virtual spaces</p>
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

.project-section {
   margin-bottom: 3rem;
}

.project-section h2 {
   margin-bottom: 1.5rem;
   color: var(--color-accent);
}

.project-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
   gap: 1.5rem;
}

.project-card {
   cursor: pointer;
}

.project-card h3 {
   margin-bottom: 0.75rem;
}

.project-card p {
   color: var(--color-text-secondary);
   margin: 0;
   font-size: 0.95rem;
}
</style>
