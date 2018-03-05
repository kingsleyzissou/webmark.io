<template>
    <div class="card has-text-centered">
      <div class="card-image">
        <!-- <i class="fa-4x" :class="icon" style="padding: 1em 0"></i> -->
        <div id="map" style="min-height:200px"></div>
      </div>
      <div class="card-content">
        <div class="content">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Gianluca</p>
                <p class="title"><i class="fas fa-user"></i></p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Uluru, Australia</p>
                <p class="title"><i class="fas fa-home"></i></p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">+555 555-5555</p>
                <p class="title"><i class="fas fa-phone"></i></p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">fake@email.com</p>
                <p class="title"><i class="fas fa-at"></i></p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    // props: ['slug', 'title', 'icon']
    data: () => {
      return {}
    }
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