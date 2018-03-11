<template>
  <div class="container has-text-centered app-footer">
      <p>
        <strong>Webmark.io</strong> by 20079110 <br />
        This is a web app development assignment.
      </p>
      <nav class="breadcrumb has-dot-separator is-centered is-marginless" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="https://facebook.com/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
  
  export default {
    data: () => {
      return {
        active: false
      }
    }
  }

</script>