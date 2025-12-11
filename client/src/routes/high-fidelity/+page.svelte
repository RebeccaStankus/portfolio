<script lang="ts">
   import VRGallery from "$lib/components/VRGallery.svelte";

   const vrObjects = [
      {
         name: "Bingo",
         image: "/images/hifi-vr/bingo.webp",
         description: "Interactive multiplayer bingo game built for up to 500 avatars live",
         link: "https://www.youtube.com/watch?v=9PlmidEF2fo"
      },
      {
         name: "Instruments",
         image: "/images/hifi-vr/instruments.webp",
         description: "Musical instruments with spatial audio synthesis",
         link: "/videos/instruments.mp4"
      },
      {
         name: "4Square",
         image: "/images/hifi-vr/4square.webp",
         description: "Multiplayer ball game in VR with physics-based gameplay"
      },
      {
         name: "Lectures",
         image: "/images/hifi-vr/lectures.webp",
         description: "Interactive presentation system for virtual events"
      },
      {
         name: "Egyptian Tombs",
         image: "/images/hifi-vr/egyptian-tombs.webp",
         description: "Immersive historical VR experience"
      },
      {
         name: "Holiday Blaster",
         image: "/images/hifi-vr/holiday-gun.webp",
         description: "Festive VR shooter with interactive elements"
      },
      {
         name: "New Years",
         image: "/images/hifi-vr/new-years.webp",
         description: "Celebratory VR experience with fireworks and social spaces"
      },
      {
         name: "Orbs",
         image: "/images/hifi-vr/orbs.webp",
         description: "Interactive light and sound installation"
      },
      {
         name: "Color Cannon",
         image: "/images/hifi-vr/color-cannon.webp",
         description: "Interactive color-changing particle cannon"
      },
      {
         name: "Whiteboard",
         image: "/images/hifi-vr/whiteboard.webp",
         description: "Collaborative whiteboard for drawing and presentations"
      }
   ];
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
   <h2>VR Objects</h2>
   <p class="section-description">Click any image to view details</p>
   <VRGallery objects={vrObjects} />
</section>

<section class="project-section">
   <h2>Web Applications</h2>
   <div class="project-grid">
      <div class="card project-card">
         <h3>HiFi Tutorial App</h3>
         <p>Interactive tutorial system for onboarding new users</p>
      </div>
      <div class="card project-card">
         <h3>BigWorld</h3>
         <p>Large-scale web application with GPT-3.0 AI integration and custom UI components</p>
      </div>
      <div class="card project-card">
         <h3>BigWorld Tutorial</h3>
         <p>Guided tutorial experience for BigWorld platform</p>
      </div>
      <div class="card project-card">
         <h3>HiFi Stolen Avatar UI</h3>
         <p>User interface for avatar management system</p>
      </div>
      <div class="card project-card">
         <h3>WebRTC Systems</h3>
         <p>Real-time communication and streaming applications</p>
      </div>
      <div class="card project-card">
         <h3>UI Work</h3>
         <p>Interface design and development for platform tools</p>
      </div>
   </div>
</section>

<section class="project-section">
   <h2>Infrastructure & DevOps</h2>
   <p class="section-description">
      <a href="https://github.com/RebeccaStankus/hifi-spatial-audio-js" target="_blank" rel="noopener" class="external-link">View HiFi Spatial Audio JS Repository →</a>
   </p>
   <div class="info-card">
      <p>Developed automated testing pipelines, CI/CD infrastructure, and deployment systems. Built comprehensive test suites with Jest and TypeScript covering unit, integration, and health tests. Implemented 6 GitHub Actions workflows including automated testing with PR gating, security scanning with CodeQL, deployment automation, and Docker image updates. Created encrypted secrets handling for secure testing environments and custom test failure detection scripts. Established development workflows for team collaboration with bot filtering and manual override capabilities.</p>
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
   margin-bottom: 0.5rem;
   color: var(--color-accent);
}

.section-description {
   margin-bottom: 1rem;
   color: var(--color-text-secondary);
   font-size: 0.95rem;
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

.card-link {
   display: inline-block;
   margin-top: 0.5rem;
   color: var(--color-accent);
   text-decoration: none;
   font-size: 0.9rem;
}

.card-link:hover {
   text-decoration: underline;
}

.card-link-full {
   text-decoration: none;
   color: inherit;
   display: flex;
   flex-direction: column;
}

.card-link-full:hover {
   transform: translateY(-2px);
   transition: transform 0.2s ease;
}

.info-card {
   background: var(--color-bg-secondary);
   border: 1px solid var(--color-border);
   border-radius: 8px;
   padding: 1.5rem;
}

.info-card p {
   color: var(--color-text-secondary);
   margin: 0;
   line-height: 1.6;
}
</style>
