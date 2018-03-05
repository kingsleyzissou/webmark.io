<template> 
  <section class="hero is-danger is-fullheight">

    <navbar></navbar>

    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          404!
        </h1>
        <h2 class="subtitle">
          Oops, page doesn't exist.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
  import navbar from './_components/Navbar.vue' // import the navbar component

  export default {
    data: ()=> {
      return {}
    },
    components: {
      navbar // Import navbar and make the <navbar></navbar> tags available
    }
  }
</script>