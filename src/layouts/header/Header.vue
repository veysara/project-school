<template>
  <div id="header">
    <section class="header-group">
      <div class="container">
        <b-navbar toggleable="lg">
          <div class="logo">
            <b-link :to="{ name: 'Home' }">
              <b-img
                :src="require('@/assets/images/header/logo4.png')"
                fluid
                alt="Camsolution Logo"
              ></b-img>
            </b-link>
          </div>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" class="justify-content-center" is-nav>
            <b-navbar-nav class="text nav ml-auto">
              <b-nav-item :to="{ name: 'Home' }">HOME</b-nav-item>
              <b-nav-item>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                  <ul class="dropdown-menu bg-light" aria-labelledby="navbarDropdownMenuLink">
                    <li><router-link class="dropdown-item nav-link bg-light" to="/about-school">School</router-link></li>
                    <li><router-link class="dropdown-item nav-link bg-light" to="/about-teacher">Teacher</router-link></li>
                  </ul>
                </li>
              </b-nav-item>
              <b-nav-item :to="{ name: 'Courses' }">COURSES</b-nav-item>
              <b-nav-item :to="{ name: 'FAQ' }">FAQ</b-nav-item>
              <b-nav-item class="btn-kickstart" :to="{ name: 'ContactUs' }">
                <b-button>CONTACT US</b-button>
              </b-nav-item>
              <b-nav-item>
                <div class="menu">
                  <div class="button-wrap">
                    <b-icon icon="share" /> 
                  </div>
                  <ul class="menu-dropdown">
                    <b-dropdown-item><img :src="face_img" class="img-fluid icon" alt="facebook">Facebook</b-dropdown-item>
                    <b-dropdown-item><img :src="instagram_img" class="img-fluid icon" alt="instagram">Instagram</b-dropdown-item>
                    <b-dropdown-item><img :src="twitter_img" class="img-fluid icon" alt="twitter">Twitter</b-dropdown-item>
                    <b-dropdown-item><img :src="linkedin_img" class="img-fluid icon" alt="twitter">Linkedin</b-dropdown-item>
                  </ul>
                </div>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    name: "Header",
    data () {
      return {
        face_img: require('@assets/images/header/facebook.png'),
        instagram_img: require('@assets/images/header/instagram.png'),
        twitter_img: require('@assets/images/header/twitter.png'),
        linkedin_img: require('@assets/images/header/linkedin.png')
      }
    }
  };
</script>


<style lang="scss">
  @import "../../assets/scss/layout/header";
</style>
