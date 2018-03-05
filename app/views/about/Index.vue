<template>
  <div>

    <section class="hero is-primary">

      <navbar active="about" ></navbar>

    </section>

    <section class="container" style="margin: 0 auto; padding: 3rem 0">

      <h3>Get in touch:</h3>
      <hr>
      <gmap></gmap>

    </section>

  </div>
</template>

<script>
  import navbar from './_components/Navbar.vue' // Import the navbar component
  import gmap from './_components/Map.vue' // Import the google maps component
  
  export default {
    data: () => {
      return {}
    },
    components: {
      navbar, // Make the <navbar></navbar> tags available
      gmap // Make the <gmap></gmap> tags available
    }
  }
</script>

