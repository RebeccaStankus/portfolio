<script lang="ts">
</script>

<svelte:head>
   <title>High Fidelity Work - Rebecca Stankus</title>
</svelte:head>

<section class="page-header">
   <h1>High Fidelity</h1>
   <p class="lead">
      Spatial audio platform and virtual worlds. Contributed to VR experiences,
      web applications, and real-time communication systems.
   </p>
</section>

<section class="project-section">
   <h2>VR Projects</h2>
   <div class="project-grid">
      <div class="card project-card">
         <h3>Bingo</h3>
         <p>Interactive multiplayer bingo game in VR with spatial audio</p>
      </div>
      <div class="card project-card">
         <h3>Instruments</h3>
         <p>Musical instruments with spatial audio synthesis</p>
      </div>
      <div class="card project-card">
         <h3>Tutorial Web App</h3>
         <p>Interactive tutorial system for onboarding new users</p>
      </div>
      <div class="card project-card">
         <h3>Holiday Blaster</h3>
         <p>Festive VR experience with interactive elements</p>
      </div>
      <div class="card project-card">
         <h3>Mexico</h3>
         <p>Virtual environment showcase</p>
      </div>
      <div class="card project-card">
         <h3>The Hub</h3>
         <p>Central social space for community gathering</p>
      </div>
   </div>
</section>

<section class="project-section">
   <h2>Web Applications</h2>
   <div class="project-grid">
      <div class="card project-card">
         <h3>BigWorld</h3>
         <p>Large-scale web application with GPT-3.0 AI integration and custom UI components</p>
      </div>
      <div class="card project-card">
         <h3>UI Work</h3>
         <p>Interface design and development for platform tools</p>
      </div>
   </div>
</section>

<section class="project-section">
   <h2>Infrastructure</h2>
   <div class="project-grid">
      <div class="card project-card">
         <h3>Testing & CI/CD</h3>
         <p>Automated testing pipelines and deployment infrastructure</p>
      </div>
      <div class="card project-card">
         <h3>WebRTC Systems</h3>
         <p>Real-time communication and streaming infrastructure</p>
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
