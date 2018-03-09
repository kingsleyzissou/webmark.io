<template>
  <div>
    <section class="hero is-primary has-bg-img is-fullheight">
      <!-- Hero head: will stick at the top -->
      <navbar></navbar>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Welcome to Bookmark.io
          </h1>
          <h2 class="subtitle">
            The easiest way to keep your bookmarks organised and up to date.  Bookmark.io is a web app designed to help you keep track of your bookmarks in an easy and efficient way.
          </h2>
          <a class="button is-primary is-medium is-inverted is-outlined">Get Started</a>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
  import navbar from './_components/Navbar.vue' // import the navbar component

  export default {
    data: () => {
      return {} // Data from the controller is injected here
    },
    components: {
      navbar // Import navbar and make the <navbar></navbar> tags available
    }
  }
</script>
