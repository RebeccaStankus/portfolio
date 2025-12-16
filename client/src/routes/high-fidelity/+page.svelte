<script lang="ts">
   import VRGallery from "$lib/components/VRGallery.svelte";

   const vrObjects = [
      {
         name: "Bingo Extremo",
         image: "/images/hifi-vr/bingo.webp",
         description: "Our interactive bingo game designed for as many as 500 avatars in a single space was unprecedented! We hosted several games where users won prizes such as cash and VR headsets. The code for this game was complex with many server and client scripts. View the code at: https://github.com/RebeccaStankus/hifi-content/tree/master/events/bingo",
         link: "https://www.youtube.com/watch?v=9PlmidEF2fo",
         linkText: "See a live game"
      },
      {
         name: "Instruments",
         image: "/images/hifi-vr/instruments.webp",
         description: "Musical instruments with spatial audio synthesis",
         link: "https://pub-5ee5bb131af7402fb9d6eace1faa7d29.r2.dev/videos/instruments.mp4"
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
         description: "Collaborative whiteboard for drawing and presentations",
         link: "https://pub-5ee5bb131af7402fb9d6eace1faa7d29.r2.dev/videos/whiteboard.mp4"
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
   <h2>VR Content</h2>
   <p class="section-description">
      <a href="https://github.com/RebeccaStankus/hifi-content" target="_blank" rel="noopener" class="external-link">View HiFi Content Repository →</a>
   </p>
   <VRGallery objects={vrObjects} />
</section>

<section class="project-section">
   <h2>Web Applications</h2>
   <div class="project-grid">
      <a href="/enterprise-vr" class="card project-card enterprise-vr-card">
         <h3>Enterprise VR</h3>
         <p>Tutorial system for onboarding new users to a 3D work environment</p>
      </a>
      <a href="/bigworld" class="card project-card bigworld-card">
         <h3>BigWorld</h3>
         <p>Large-scale web application with GPT-3.0 AI integration, custom UI components, and WebRTC real-time communication systems</p>
      </a>
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

.enterprise-vr-card {
   background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/enterprise/enterprise-island.webp');
   background-size: 133%;
   background-position: left center;
   background-repeat: no-repeat;
   text-decoration: none;
   color: var(--color-text-primary);
   position: relative;
   transition: all 0.3s ease;
}

.enterprise-vr-card h3 {
   color: var(--color-text-primary);
}

.enterprise-vr-card p {
   color: rgba(255, 255, 255, 0.9);
}

.enterprise-vr-card:hover {
   transform: translateY(-4px);
   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/enterprise/enterprise-island.webp');
}

.bigworld-card {
   background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/bigworld/bigworld-entrance.webp');
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
   text-decoration: none;
   color: var(--color-text-primary);
   position: relative;
   transition: all 0.3s ease;
}

.bigworld-card h3 {
   color: var(--color-text-primary);
}

.bigworld-card p {
   color: rgba(255, 255, 255, 0.9);
}

.bigworld-card:hover {
   transform: translateY(-4px);
   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bigworld/bigworld-entrance.webp');
}
</style>
