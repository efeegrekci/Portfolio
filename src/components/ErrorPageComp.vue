<template>
  <div class="errorPage">
    <div class="errorBox">
      <div class="imageBox">
        <img src="../assets/img/404-page-not-found-4349579-3613908.png" alt="">
      </div>
      <div class="textBox">
        <div class="title">404 Error</div>
        <div class="desc">The page you are looking for was not found, or the page name has been changed.</div>
      </div>
      <div class="homeButton">
        <router-link to="/">
          <span>Home</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/errorPage.min.css"

export default {

}

</script>
