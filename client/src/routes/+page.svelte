<script lang="ts">
   import "./home.css";
</script>

<svelte:head>
   <title>Rebecca Stankus - Software Engineer</title>
</svelte:head>

<section class="hero">
   <!-- <img src="/images/profilePic.jpg" alt="Rebecca Stankus" class="profile-pic" /> -->
   <h1>Rebecca Stankus</h1>
   <p class="subtitle">Software Engineer | Full-Stack Developer | XR Specialist</p>
   <p class="intro">Experienced software engineer with expertise in immersive experiences, web applications, and real-time systems. Previous work at High Fidelity and Linden Lab building virtual worlds, WebRTC applications, and interactive 3D environments.</p>
   <div class="cta-buttons">
      <a href="/high-fidelity" class="btn btn-work">View Work</a>
      <a href="/contact" class="btn btn-contact">Get in Touch</a>
   </div>
</section>

<section class="highlights">
   <h2>Expertise</h2>
   <div class="grid">
      <div class="card">
         <h3>Virtual Worlds</h3>
         <p>High Fidelity, Second Life, 3D environments, immersive experiences</p>
      </div>
      <div class="card">
         <h3>Web Development</h3>
         <p>SvelteKit, TypeScript, Node.js, full-stack applications</p>
      </div>
      <div class="card">
         <h3>Real-Time Systems</h3>
         <p>WebRTC, spatial audio, streaming, peer-to-peer networking</p>
      </div>
      <div class="card">
         <h3>Infrastructure</h3>
         <p>CI/CD pipelines, automated testing, DevOps, build systems</p>
      </div>
   </div>
</section>

<style>
   .hero {
      text-align: center;
      padding: 4rem 0;
      max-width: 800px;
      margin: 0 auto;
   }

   .subtitle {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      margin-bottom: 2rem;
   }

   .intro {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--color-text-secondary);
      margin-bottom: 2rem;
   }

   .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
   }

   .highlights {
      margin-top: 4rem;
   }

   .highlights h2 {
      text-align: center;
      margin-bottom: 2rem;
   }

   .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
   }

   .grid .card h3 {
      color: var(--color-accent);
      margin-bottom: 0.5rem;
   }

   .grid .card p {
      color: var(--color-text-secondary);
      margin: 0;
   }
</style>
