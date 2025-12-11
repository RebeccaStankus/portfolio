<script>
   import "./global.css";
   import Starfield from "$lib/components/Starfield.svelte";
   import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

   injectSpeedInsights();
</script>

<Starfield />

<header class="header">
   <div class="header-container">
      <a href="/" class="logo">Rebecca Stankus</a>
      <nav class="nav">
         <a href="/" class="nav-link">Home</a>
         <a href="/high-fidelity" class="nav-link">High Fidelity</a>
         <a href="/linden-lab" class="nav-link">Linden Lab</a>
         <a href="/projects" class="nav-link">Recent Work</a>
         <a href="/about" class="nav-link">About</a>
         <a href="/contact" class="nav-link">Contact</a>
      </nav>
   </div>
</header>

<main class="main">
   <slot />
</main>

<footer class="footer">
   <p>&copy; 2025 Rebecca Stankus. All rights reserved.</p>
</footer>
