<template> 
  <section class="hero is-danger is-fullheight">

    <navbar></navbar>

    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          500!
        </h1>
        <h2 class="subtitle">
          Internal server error. Please contact your system admin
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