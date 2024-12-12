<template>
  <div class="home">
    <section class="swiper-container">
      <swiper :options="optionSlide" class="swiper">
        <swiper-slide  v-for="(slide, index) in List_Slide" :key="'slide' + index">
          <img :src="slide.img" class="img-fluid" alt="..." />
        </swiper-slide>
      </swiper>
    </section>

    <section class="list-school">
      <div class="container">
        <div class="row">
          <h1 class="title">University</h1>
          <div class="col-md-4 col-sm-6" v-for="(list_school, index) in List_School" :key="'list_school' + index">
            <div class="card">
              <router-link class="card-img-tiles" to="/university-detail" data-abc="true">
                <div class="inner">
                  <div class="hover-zoomin">
                    <router-link to="/university-detail">
                      <img :src="list_school.image_one" alt="Category" />
                    </router-link>
                  </div>
                  <div class="thumblist">
                    <img :src="list_school.image_two" alt="Category">
                    <img :src="list_school.image_three" alt="Category">
                  </div>
                </div>
              </router-link>
              <div class="card-body">
                <router-link to="/university-detail">
                  <h4 class="card-title">{{list_school.title}}</h4>
                </router-link>
                <p class="text-muted">{{list_school.description}}</p>
                <a class="btn" href="/university-detail" data-abc="true">{{list_school.btn_link}}</a>
              </div>
            </div>
          </div>
          <div class="text-center mt-3">
            <a href="#">
              <strong class="font">See More</strong><br>
              <span class="icon">
                <b-icon icon="caret-down-fill"></b-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>


    <section class="scholarships-school">
      <div class="container">
        <div class="row">
          <h1 class="title">Scholarships for university</h1>
          <div class="col-sm-6" v-for="scholarships in Scholarships_School" :key="scholarships.id">
            <div class="card">
              <div class="row d-flex">
                <div class="col-sm-6 justify-content-center align-items-center align-middle m-auto">
                  <h2>{{scholarships.title}}</h2>
                  <p>{{scholarships.school}}</p>
                  
                  <button type="button" class="btn mt-3">
                    <router-link to="/scholarships">{{scholarships.btn_app}}</router-link>
                  </button>
                </div>
                <div class="col-sm-6  justify-content-center align-items-center align-middle m-auto">
                  <img :src="scholarships.image" class="w-100"> 
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-3">
            <a href="#">
              <strong class="font">See More</strong><br>
              <span class="icon">
                <b-icon icon="caret-down-fill"></b-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

  export default {
    name: 'Home',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        optionSlide: {
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          spaceBetween: 30,
          loopFillGroupWithBlank: true,
          breakpoints: {
            992: {
              slidesPerView: 1,
            },
          },
        },
        
        List_Slide: [
          {
            img: require('../../../src/assets/images/home/6.png'),
          },
          {
            img: require('../../../src/assets/images/home/3.png'),
          },
          {
            img: require('../../../src/assets/images/home/4.png'),
          },
          {
            img: require('../../../src/assets/images/home/1.png'),
          },
          {
            img: require('../../../src/assets/images/home/2.png'),
          },
        ],

        List_School: [
          {
            image_one: require('@/assets/images/home/4.jpg'),
            image_two: require('@/assets/images/home/2.jpg'),
            image_three: require('@/assets/images/home/1.jpg'),
            title: "TECHNO",
            description: "We conduct up-to-date degree programs to equip our students with skills that companies nowadays are looking for.",
            btn_link: "View More"
          },
          {
            image_one: require('@/assets/images/home/6.jpg'),
            image_two: require('@/assets/images/home/7.jpg'),
            image_three: require('@/assets/images/home/2.jpg'),
            title: "RUPP",
            description: "We conduct up-to-date degree programs to equip our students with skills that companies nowadays are looking for.",
            btn_link: "View More"
          },
          {
            image_one: require('@/assets/images/home/2.jpg'),
            image_two: require('@/assets/images/home/1.jpg'),
            image_three: require('@/assets/images/home/8.jpg'),
            title: "SETEC",
            description: "We conduct up-to-date degree programs to equip our students with skills that companies nowadays are looking for.",
            btn_link: "View More"
          },
        ],
        
        Scholarships_School: [
          {
            title: "PNC",
            school: "Scholarships for study 100% at Phnom Penh City",
          
            image: require('@/assets/images/home/KMS.png'),
            btn_app: "Apply Now"
          },
          {
            title: "PNC",
            school: "Scholarships for study 100% at Phnom Penh City",
         
            image: require('@/assets/images/home/KMS.png'),
            btn_app: "Apply Now"
          }
        ]
      }
    },
  };
</script>

<style lang="scss">
  @import '@core/assets/scss/swiper';
  @import '../../assets/scss/pages/home/home';
</style>
