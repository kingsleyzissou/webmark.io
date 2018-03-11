<template>
  <div class="column">
    <!-- <a :href="'/categories/' + slug + '/bookmarks'"> -->
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
          <!-- <a href="#" class="card-footer-item">Edit</a> -->
          <a href="#" class="card-footer-item" @click.prevent="deleteCategory(index,category)">
            <i class="fas fa-trash"></i>
          </a>
        </footer>
      </div>
     
    <!-- </a> -->
  </div>
</template>

<script>

  export default {
    props: ['category', 'index'],
    methods: {
      deleteCategory: (index, category) => {

        let obj = {index, category}

        app.$emit('setDelete', obj)

      }
    }
  }

</script>