<template>
  <div class="column">
    <a :href="'/categories/' + slug + '/bookmarks'">
      <div class="card has-text-centered">
        <div class="card-image">
          <i class="fa-4x" :class="icon" style="padding: 1em 0"></i>
        </div>
        <div class="card-content">
          <div class="content">
            <h4>{{ title }}</h4>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

  export default {
    props: ['slug', 'title', 'icon']
  }

</script>

<style>

  .card:hover {
    background: rgba(0,0,0,0.2);
  }

  .card-image i {
    color: #3273dc;
  }

  .card:hover .card-image i {
    color: #363636;
  }

</style>