<script lang="ts">
   // This page is intentionally blank - redirects handled by projects page
   import { goto } from '$app/navigation';
   import { onMount } from 'svelte';

   onMount(() => {
      goto('/projects');
   });
</script>
