<template>
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              BOOKMARK.IO
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a href="/" class="navbar-item">
                Home
              </a>
              <a href="/categories" class="navbar-item" :class="{'is-active': active === 'dashboard'}">
                Dashboard
              </a>
              <a href="/about" class="navbar-item" :class="{'is-active': active === 'about'}">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
  
  export default {
    props: ['active']
  }

</script>