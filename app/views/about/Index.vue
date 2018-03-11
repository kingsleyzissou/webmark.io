<template>
  <div id="content">

    <main>

      <section class="hero is-primary">

        <navbar active="about" ></navbar>

      </section>

      <nav class="navbar has-shadow has-text-white" style="background: #00B899">
        <div class="container">
          <nav class="breadcrumb has-text-white" aria-label="breadcrumbs">
            <ul>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </nav>

      <section class="container is-fluid app-content">

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

