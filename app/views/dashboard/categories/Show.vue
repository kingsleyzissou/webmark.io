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
              <li>&nbsp;{{ title | capitalise }}</li>
            </ul>
          </nav>
        </div>
      </nav>

      <div class="modal" :class="{ 'is-active': modal }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <section class="modal-card-body">
            <strong>
              Are you sure you want to delete {{ temp.title }} from the bookmark list?
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
              @click="deleteBookmark(temp.index, temp.id)"
            >
              Delete
            </button>
          </section>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="modal=false"></button>
      </div>

      <section class="container is-fluid app-content">

        <!-- <h2>{{ title | capitalise }} References:</h2>
        <hr> -->
        <table class="table is-fullwidth is-hoverable">
          <thead>
            <th>Title</th>
            <th>Url</th>
            <th>Description</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr 
              v-for="(bookmark, index) in bookmarks"
              v-if="bookmarks.length > 0" 
              :key="index">
              <td>{{ bookmark.title }}</td>
              <td>
                <a :href="bookmark.url" target="__blank">
                  {{ bookmark.url }}
                </a>
              </td>
              <td>
                {{ bookmark.description }}
              </td>
              <td class="has-text-centered" width="5%">
                <button 
                  class="button is-danger is-small"
                  @click="confirmDelete(index, bookmark)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr v-if="bookmarks.length == 0">
              <td class="has-text-centered" colspan="4">No bookmarks to show for this category</td>
            </tr>
          </tbody>
        </table>

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
  import AppFooter from './_components/Footer.vue' // Import the footer component
  

  export default {
    data: () => {
      return {}  // Data from the controller is injected here
    },
    components: {
      navbar, // Import navbar and make the <navbar></navbar> tags available
      AppFooter // Import footer and make the <app-footer></app-footer> tags available
    },
    methods: {
      // Confirm delete and launch modal
      confirmDelete(index, bookmark) {
        app.temp = bookmark
        app.temp.index = index
        app.modal = true
      },
      // Delete method via an xhr request to the server
      deleteBookmark: (index, id) => {
        axios.delete('/bookmarks/' + id, { data: { id } })
          .then((res) => {
            console.log(app.bookmarks)
            app.bookmarks.splice(index,1)
            app.temp = {}
            modal = false
          })
          .catch((err) => {
            console.log(err)
          })
      } 
    },
    filters: {
      capitalise: (string) => {
        return string.toUpperCase()
      }
    }
  }
</script>