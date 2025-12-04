<script lang="ts">
   import { onMount } from "svelte";

   interface Star {
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      vx: number;
      vy: number;
   }

   let stars: Star[] = [];
   let nextId = 0;
   let animationFrame: number;
   let centerX = 0;
   let centerY = 0;

   function updateCenter() {
      centerX = window.innerWidth / 2;
      centerY = window.innerHeight / 2;
   }

   function createStar(): Star {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      // Calculate direction from center to this position
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Normalize and apply speed
      const speed = Math.random() * 0.1 + 0.05;
      const vx = (dx / distance) * speed;
      const vy = (dy / distance) * speed;

      return {
         id: nextId++,
         x,
         y,
         size: Math.random() * 2 + 1,
         opacity: Math.random() * 0.8 + 0.2,
         vx,
         vy,
      };
   }

   function animate() {
      // Add new stars periodically
      if (Math.random() < 0.3) {
         stars = [...stars, createStar()];
      }

      // Update existing stars
      stars = stars
         .map((s) => ({
            ...s,
            x: s.x + s.vx,
            y: s.y + s.vy,
            opacity: s.opacity - 0.001,
         }))
         .filter((s) => s.opacity > 0);

      animationFrame = requestAnimationFrame(animate);
   }

   onMount(() => {
      updateCenter();
      window.addEventListener("resize", updateCenter);
      animate();

      return () => {
         window.removeEventListener("resize", updateCenter);
         if (animationFrame) cancelAnimationFrame(animationFrame);
      };
   });
</script>

<div class="starfield-container">
   {#each stars as star (star.id)}
      <div
         class="star"
         style="
				left: {star.x}px;
				top: {star.y}px;
				width: {star.size}px;
				height: {star.size}px;
				opacity: {star.opacity};
			"
      />
   {/each}
</div>

<style>
   .starfield-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
   }

   .star {
      position: absolute;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
   }
</style>
