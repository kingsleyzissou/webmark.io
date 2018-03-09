<template>
  <div>
    
    <section class="hero is-primary">

      <navbar active="dashboard"></navbar>

    </section>

    <section class="container" style="margin: 0 auto; padding: 3rem 0">

      <h2>{{ title | capitalise }} References:</h2>
      <hr>
      <table class="table is-fullwidth is-hoverable">
        <thead>
          <th></th>
          <th>Title</th>
          <th>Url</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr 
            v-for="(bookmark, index) in bookmarks"
            v-if="bookmarks.length > 0" 
            :key="index">
            <td width="10%">
              <figure class="image is-64x64">
                <img :src="bookmark.image">
              </figure>
            </td>
            <td>{{ bookmark.title }}</td>
            <td>
              <a :href="bookmark.url" target="__blank">
                Link
              </a>
            </td>
            <td class="has-text-centered" width="5%">
              <button 
                class="button is-danger is-small"
                @click="deleteBookmark(index, bookmark.id)"
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

  </div>
</template>

<script>
  import navbar from './_components/Navbar.vue' // Import the navbar component

  export default {
    data: () => {
      return {}  // Data from the controller is injected here
    },
    components: {
      navbar // Import navbar and make the <navbar></navbar> tags available
    },
    methods: {
      // Delete method via an xhr request to the server
      deleteBookmark: (index, id) => {
        axios.delete('/bookmarks/' + id, { data: { id } })
          .then((res) => {
            console.log(app.bookmarks)
            app.bookmarks.splice(index,1)
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