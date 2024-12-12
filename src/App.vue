<template>
  <div class="wrap">
    <Header />
      <main class="wrap-content">
        <router-view/>
      </main>
    <Footer /> 
  </div>
</template>


<script>
  import Header from "@layouts/header/Header";
  import Footer from "@layouts/footer/Footer";
  
  export default {
    name: 'LayoutWeb',
    components: {
      Header,
      Footer
    }
  };
</script>
