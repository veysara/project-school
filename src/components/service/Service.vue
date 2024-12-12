<template>
    <section
      class="service-list sy"
      :style="{ 'background-image': 'url(' + serviceBackground + ')' }"
    >
      <div class="container">
        <div class="head text-center mb-4" 
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay='200'
        >
          <h5 class="head-title">Popular it Service</h5>
          <div class="title"><h2>Solutions For It Business</h2></div>
        </div>
        <div class="row justify-content-center" v-if="home && home.serviceList && home.serviceList.length > 0">
          <div
            class="col-lg-4 col-6 mb-4 " id="service"
            data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay='200'
            v-for="(service, index) in home.serviceList" 
            :key="'service' + index"
          >
            <div class="service-item">
             
              <div class="image">
                <b-link :to="{
                  name: 'ServiceDetail',
                  query: {
                    _post: service.uuid,
                    text: service.slug,
                  },
                }">
                <img
                  :src="assetUrl + service.thumbnail"
                  :alt="service.title"
                  class="img-fluid"
                />
              </b-link>
              </div>
              <div class="content text-center">
                <div class="title one-line">
                  <h4>{{ service.title }}</h4>
                </div>
                <div class="short one-line">{{ service.shortDescript }}</div>
                <Button link="#" class="btn-service" title="Learn More"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  import Button from '@/core/components/button/Button';
  import { mapActions, mapGetters } from 'vuex';

  export default { name:'serviceList', props: ['serviceLists'], components: { Button }, data(){
    return{
      assetUrl: process.env.VUE_APP_ASSET_URL + '/',
        serviceBackground: require('@/assets/images/list-service.png'),
    }
  },
  
  methods: {
    ...mapActions(['fetchHome']),
  },
  computed: {
    ...mapGetters(['home']),
  },
  mounted() {
    this.fetchHome({
      filter: {
        locale: this.$router.currentRoute.params.locale
          ? this.$router.currentRoute.params.locale
          : 'en',
      },
    });
  },
}
</script>

<style lang="scss">
  @import '@assets/scss/components/service.scss';
</style>