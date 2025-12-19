<script lang="ts">
   import VRGallery from "$lib/components/VRGallery.svelte";

   const vrContent = [
      {
         name: "Ice Skates",
         image: "/images/sl-vr/skates2.webp",
         description: "Interactive ice skates with varying capabilities depending on VIP level, including special moves, particle effects, multiple skating styles, speed changes, and different stances",
         link: "https://www.youtube.com/watch?v=SAM-kmIjP8w&t=43s",
         linkText: "See in action"
      },
      {
         name: "Portals",
         image: "/images/sl-vr/portal.webp",
         description: "Dynamic portal system with scripts that scrape external sites for images and data about destinations. Portals could randomize according to category, creating sets of linked portals leading to various themed destinations like educational sites, entertainment venues, and more"
      },
      {
         name: "Bears",
         image: "/images/sl-vr/bears.webp",
         description: "Interactive bears complete with special effects including particles, music, lights, and animations. One of my first projects and a cherished Linden Lab tradition"
      },
      {
         name: "Vehicles",
         image: "/images/sl-vr/vehicles.webp",
         description: "Custom vehicles tackling complex physics problems including realistic movement, collision detection, and multi-passenger support"
      },
      {
         name: "Vendors",
         image: "/images/sl-vr/vendor.webp",
         description: "Gift distribution system - interactive billboard-style objects that allowed creators to give free items to residents during special events and promotions"
      }
   ];

   const casinoGames = [
      {
         name: "Slots",
         image: "/images/casino/slots.webp",
         description: "Classic slot machine game"
      },
      {
         name: "Multiline Slots",
         image: "/images/casino/multiline-slots.webp",
         description: "Advanced multiline slot machine with multiple paylines"
      },
      {
         name: "Blackjack",
         image: "/images/casino/blackjack.webp",
         description: "Multiplayer blackjack table with real-time gameplay"
      },
      {
         name: "Roulette",
         image: "/images/casino/roulette.webp",
         description: "Multiplayer roulette wheel with live betting"
      },
      {
         name: "Video Poker",
         image: "/images/casino/poker.png",
         description: "Video poker game with multiple variants"
      }
   ];
</script>

<svelte:head>
   <title>Linden Lab - Rebecca Stankus</title>
</svelte:head>

<section class="page-header">
   <div class="header-video-container">
      <iframe
         src="https://www.youtube.com/embed/SAM-kmIjP8w?autoplay=1&mute=1&loop=1&playlist=SAM-kmIjP8w&rel=0"
         title="Linden Lab Casino Demo"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen
         class="header-video">
      </iframe>
   </div>
   <h1>Linden Lab</h1>
   <p class="lead">
      Second Life platform development. Created casino games, interactive VR content, and platform tools for the world's largest virtual world.
   </p>
</section>

<section class="project-section">
   <h2>VR Content</h2>
   <p class="section-description">
      Interactive objects and experiences for Second Life residents
   </p>
   <VRGallery objects={vrContent} />
</section>

<section class="project-section">
   <h2>Casino Project</h2>
   <p class="section-description">
      Multiplayer casino games with real-time betting and gameplay mechanics
   </p>
   <VRGallery objects={casinoGames} />
</section>

<section class="project-section">
   <h2>Platform Tools</h2>

   <div class="tool-card">
      <h3>Tutorials</h3>
      <p>
         I developed interactive, responsive web app tutorials designed to guide users through complex workflows. I worked primarily with modern web technologies including HTML5, CSS3, and JavaScript frameworks, building interfaces that were both accessible and consistent across devices. My work involved integrating dynamic, interactive elements such as step-by-step guidance, tooltips, and visual cues, while addressing technical challenges like asynchronous API calls, state management, and performance optimization. I collaborated closely with designers and QA to refine tutorial flow, ensure accessibility compliance, and troubleshoot cross-browser issues, resolving edge cases and rendering inconsistencies to create a seamless, user-friendly experience.
      </p>
   </div>

   <div class="tool-card">
      <h3>Team Tools</h3>
      <p>
         I built internal tools to help my coworkers streamline their workflows, including systems to issue and track refunds for land payments, telemetry dashboards for monitoring usage of portals to skilled gaming regions, and integration systems that connected in-world objects with external web applications and APIs.
      </p>
   </div>
</section>

<style>
.page-header {
   margin-bottom: 3rem;
}

.header-video-container {
   margin-bottom: 2rem;
   overflow: hidden;
   border-radius: 8px;
   border: 2px solid var(--color-border);
   aspect-ratio: 16 / 9;
   max-width: 800px;
}

.header-video {
   width: calc(100% + 4px);
   height: calc(100% + 4px);
   display: block;
   margin: -2px;
   border-radius: 8px;
}

.page-header h1 {
   color: var(--color-accent);
   margin: 0 0 1rem 0;
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

.tool-card {
   background: var(--color-bg-secondary);
   border: 1px solid var(--color-border);
   border-radius: 8px;
   padding: 1.5rem;
   margin-bottom: 1.5rem;
}

.tool-card h3 {
   color: var(--color-accent);
   margin: 0 0 1rem 0;
}

.tool-card p {
   color: var(--color-text-secondary);
   margin: 0;
   line-height: 1.6;
}
</style>
