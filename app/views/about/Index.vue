<template>
  <div id="content">

    <main>

      <section class="hero is-primary">

        <navbar active="about" ></navbar>

      </section>

      <section class="container is-fluid app-content">

        <h3>Get in touch:</h3>
        <hr>
        <gmap></gmap>

      </section>

      
    </main>

    <footer>

        <div class="footer is-marginless is-paddingless">

          <app-footer></app-footer>

        </div>      

    </footer>

  </div>
</template>

<script>
  import navbar from './_components/Navbar.vue' // Import the navbar component
  import gmap from './_components/Map.vue' // Import the google maps component
  import AppFooter from './_components/Footer.vue' // Import the footer component
  
  
  export default {
    data: () => {
      return {}
    },
    components: {
      navbar, // Make the <navbar></navbar> tags available
      gmap, // Make the <gmap></gmap> tags available
      AppFooter // Import footer and make the <app-footer></app-footer> tags available      
    }
  }
</script>

