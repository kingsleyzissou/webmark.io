<template>
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar main-navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="/" class="navbar-item">
              <i class="fas fa-anchor"></i>&nbsp;&nbsp;
              WEBMARK.IO
            </a>
            <span class="navbar-burger burger" :class="{'is-active': active}" @click="active = !active">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="navbar-menu" :class="{'is-active': active}">
            <div class="navbar-end">
              <a href="/categories" class="navbar-item" :class="{'is-active': current === 'dashboard'}">
                Dashboard
              </a>
              <a href="/about" class="navbar-item" :class="{'is-active': current === 'about'}">
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
    props: ['current'],
    data: () => {
      return {
        active: false
      }
    }
  }

</script>