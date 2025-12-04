<script lang="ts">
</script>

<svelte:head>
   <title>About - Rebecca Stankus</title>
</svelte:head>

<section class="about">
   <h1>About Me</h1>

   <div class="content">
      <section class="bio">
         <h2>Background</h2>
         <p>Software engineer with extensive experience building immersive experiences, real-time multiplayer systems, and interactive web applications. Previously worked at High Fidelity and Linden Lab on virtual world platforms and spatial audio systems.</p>
      </section>

      <section class="skills">
         <h2>Technical Skills</h2>
         <div class="skill-grid">
            <div class="skill-category">
               <h3>Languages</h3>
               <ul>
                  <li>TypeScript / JavaScript</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>HTML / CSS</li>
               </ul>
            </div>
            <div class="skill-category">
               <h3>Frameworks & Libraries</h3>
               <ul>
                  <li>SvelteKit</li>
                  <li>Node.js / Express</li>
                  <li>Canvas API / WebXR</li>
               </ul>
            </div>
            <div class="skill-category">
               <h3>Technologies</h3>
               <ul>
                  <li>WebRTC</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                  <li>CI/CD Pipelines</li>
               </ul>
            </div>
            <div class="skill-category">
               <h3>Specialties</h3>
               <ul>
                  <li>Interactive Multiplayer Systems</li>
                  <li>Spatial Audio</li>
                  <li>Real-time Systems</li>
                  <li>Full-Stack Development</li>
               </ul>
            </div>
         </div>
      </section>

      <section class="experience">
         <h2>Experience</h2>
         <div class="timeline">
            <div class="timeline-item">
               <h3>High Fidelity</h3>
               <p class="role">Software Engineer</p>
               <p class="description">Developed VR experiences, web applications, and real-time communication systems for spatial audio platform. Worked on testing infrastructure and CI/CD pipelines.</p>
            </div>
            <div class="timeline-item">
               <h3>Linden Lab</h3>
               <p class="role">Software Engineer</p>
               <p class="description">Contributed to Second Life platform. Built casino games, tutorial systems, developer tools, and navigation features for virtual world.</p>
            </div>
         </div>
      </section>
   </div>
</section>

<style>
   .about {
      max-width: 900px;
   }

   .content {
      display: flex;
      flex-direction: column;
      gap: 3rem;
   }

   h2 {
      color: var(--color-accent);
      margin-bottom: 1.5rem;
   }

   .bio p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--color-text-secondary);
   }

   .skill-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
   }

   .skill-category h3 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: var(--color-text-primary);
   }

   .skill-category ul {
      list-style: none;
      padding: 0;
   }

   .skill-category li {
      padding: 0.4rem 0;
      color: var(--color-text-secondary);
      font-size: 0.95rem;
   }

   .skill-category li::before {
      content: "▹ ";
      color: var(--color-accent);
      margin-right: 0.5rem;
   }

   .timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
   }

   .timeline-item {
      padding: 1.5rem;
      background-color: var(--color-card-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius);
   }

   .timeline-item h3 {
      color: var(--color-text-primary);
      margin-bottom: 0.5rem;
   }

   .role {
      color: var(--color-accent);
      font-weight: 500;
      margin-bottom: 1rem;
   }

   .description {
      color: var(--color-text-secondary);
      line-height: 1.7;
   }
</style>
