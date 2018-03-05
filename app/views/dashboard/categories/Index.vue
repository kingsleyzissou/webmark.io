<template>
  <div>
    
    <section class="hero is-primary">

      <navbar active="dashboard"></navbar>

    </section>

    <section class="container" style="margin: 0 auto; padding: 3rem 0">


      <h2>Categories:</h2>
      <hr>
      <div class="columns">

        <tile 
          v-for="(category,index) in categories"
          :slug="category.slug"
          :title="category.title"
          :icon="category.icon"
          :key="index"
        >
        </tile>

      </div>

    </section>

  </div>
</template>

<script>
  import navbar from './_components/Navbar.vue' // Import the navbar component
  import tile from './_components/Tile.vue' // Import the tile component

  export default {
    data: () => {
      return {} // Data from the controller is injected here
    },
    components: {
      navbar, // Import navbar and make the <navbar></navbar> tags available
      tile // Import tile and make the <tile></tile> tags available
    },
    mounted: () => {
      console.log(axios)
      axios.get('/test')
        .then(res => {
          console.log(res)
        })
    },
    methods: {
      goTo(id) {
        console.log('clicked')
        location.href = '/dashboard/category/' + id
      }
    }
  }
</script>