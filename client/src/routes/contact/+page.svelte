<script lang="ts">
   import "./contact.css";
</script>

<svelte:head>
   <title>Contact - Rebecca Stankus</title>
</svelte:head>

<section class="contact">
   <h1>Get in Touch</h1>
   <p class="lead">Interested in collaborating or have questions about my work? Feel free to reach out.</p>

   <div class="contact-content">
      <div class="contact-info">
         <h2>Contact Information</h2>
         <div class="info-grid">
            <div class="info-item">
               <h3>Email</h3>
               <a href="mailto:RebeccaSStankus@gmail.com">RebeccaSStankus@gmail.com</a>
            </div>
            <div class="info-item">
               <h3>GitHub</h3>
               <a href="https://github.com/RebeccaStankus?tab=repositories" target="_blank" rel="noopener">github.com/RebeccaStankus</a>
            </div>
            <div class="info-item">
               <h3>LinkedIn</h3>
               <a href="https://www.linkedin.com/in/rebeccastankus" target="_blank" rel="noopener">linkedin.com/in/rebeccastankus</a>
            </div>
         </div>
      </div>

      <div class="contact-form-section">
         <h2>Send a Message</h2>
         <form class="contact-form">
            <div class="form-group">
               <label for="name">Name</label>
               <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
               <label for="email">Email</label>
               <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
               <label for="message">Message</label>
               <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" class="btn btn-send">Send Message</button>
         </form>
      </div>
   </div>
</section>
