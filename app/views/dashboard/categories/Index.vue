<template>
  <div id="content">
    
    <main>

      <section class="hero is-primary">

        <navbar active="dashboard"></navbar>

      </section>

      <nav class="navbar has-shadow has-text-white" style="background: #00B899">
        <div class="container">
          <nav class="breadcrumb has-text-white" aria-label="breadcrumbs">
            <ul>
              <li>Dashboard&nbsp;</li>
              <li>&nbsp;Categories</li>
            </ul>
          </nav>
        </div>
      </nav>

      <div class="modal" :class="{ 'is-active': modal }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <section class="modal-card-body">
            <strong>
              Are you sure you want to delete {{ temp.title }} from the category list?
            </strong>
            <hr>
            <button 
              class="button"
              @click="modal=false"
            >
              Cancel
            </button>
            <button 
              class="button is-danger is-pulled-right" 
              @click="deleteCategory(temp.index, temp.id)"
            >
              Delete
            </button>
          </section>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="modal=false"></button>
      </div>

      <section class="container is-fluid app-content">

        <div class="columns">

          <!-- <tile  -->
            <!-- v-for="(category,index) in categories" -->
            <!-- :category="category" -->
            <!-- :index="index" -->
            <!-- :key="index" -->
            <!-- setDelete="confirmDelete" -->
          <!-- > -->
          <!-- </tile> -->

          <div class="column"
            v-for="(category,index) in categories"
            :key="index"
          >
            <div class="card has-text-centered">
              <div class="card-image">
                <i class="fa-4x category-icon" :class="category.icon"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>
                    {{ category.title }} <br />
                    Learning Resources
                  </h4>
                </div>
              </div>
              <footer class="card-footer">
                <a :href="'/categories/' + category.slug + '/bookmarks'" class="card-footer-item">
                  <i class="fas fa-eye"></i>
                </a>
                <a href="#" class="card-footer-item" @click.prevent="confirmDelete(index,category)">
                  <i class="fas fa-trash"></i>
                </a>
              </footer>
            </div>
          
        </div>

        </div>

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
  import tile from './_components/Tile.vue' // Import the tile component
  import AppFooter from './_components/Footer.vue' // Import the footer component

  export default {
    data: () => {
      return {} // Data from the controller is injected here
    },
    components: {
      navbar, // Import navbar and make the <navbar></navbar> tags available
      tile, // Import tile and make the <tile></tile> tags available
      AppFooter // Import footer and make the <app-footer></app-footer> tags available
    },
    methods: {
      // Navigate to the selected collection
      goTo(id) {
        location.href = '/dashboard/category/' + id
      },
      // Confirm delete and launch modal
      confirmDelete(index, category) {
        app.temp = category
        app.temp.index = index
        app.modal = true
      },
      // Delete method via an xhr request to the server
      deleteCategory: (index, id) => {
        axios.delete('/categories/' + id, { data: { id } })
          .then((res) => {
            app.categories.splice(index,1)
            app.temp = {}
            app.modal = false
          })
          .catch((err) => {
            console.log(err)
          })
      } 
    }
  }
</script>