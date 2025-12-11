<script lang="ts">
</script>

<svelte:head>
   <title>Instruments - Rebecca Stankus</title>
</svelte:head>

<section class="page-header">
   <h1>Virtual Instruments</h1>
   <p class="lead">
      Musical instruments with spatial audio synthesis built for High Fidelity VR platform.
   </p>
</section>

<section class="instrument-section">
   <h2>Instrument 1</h2>
   <div class="instrument-content">
      <div class="video-container">
         <!-- Add YouTube embed URL here -->
         <!-- <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Instrument 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      </div>
      <!-- Or add image -->
      <!-- <img src="/images/instruments/instrument1.jpg" alt="Instrument 1" class="instrument-image" /> -->
   </div>
</section>

<section class="instrument-section">
   <h2>Instrument 2</h2>
   <div class="instrument-content">
      <div class="video-container">
         <!-- Add YouTube embed URL here -->
         <!-- <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Instrument 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      </div>
      <!-- Or add image -->
      <!-- <img src="/images/instruments/instrument2.jpg" alt="Instrument 2" class="instrument-image" /> -->
   </div>
</section>

<section class="instrument-section">
   <h2>Instrument 3</h2>
   <div class="instrument-content">
      <div class="video-container">
         <!-- Add YouTube embed URL here -->
         <!-- <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Instrument 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      </div>
      <!-- Or add image -->
      <!-- <img src="/images/instruments/instrument3.jpg" alt="Instrument 3" class="instrument-image" /> -->
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

.instrument-section {
   margin-bottom: 4rem;
}

.instrument-section h2 {
   margin-bottom: 1.5rem;
   color: var(--color-accent);
}

.instrument-content {
   max-width: 800px;
}

.video-container {
   position: relative;
   padding-bottom: 56.25%; /* 16:9 aspect ratio */
   height: 0;
   overflow: hidden;
   border-radius: 8px;
   background: var(--color-bg-secondary);
}

.video-container iframe {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border: none;
}

.instrument-image {
   width: 100%;
   max-width: 800px;
   height: auto;
   border-radius: 8px;
}
</style>
