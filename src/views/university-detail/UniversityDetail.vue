<template>
    <div class="university-detail">
        <section class="slide-section">
            <swiper
                class="swiper"
                :options="swiperOptions"
                :breakpoints="swiperOptions.breakpoints"
            >
                <swiper-slide v-for="(data, index) in slide_datas" :key="index.id">
                    <div class="image">
                        <img :src="data.slide_img" :alt="data.alt" class="img-fluid">
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev">
                    <div class="wrap">
                        <b-icon shift-h="-5" icon="arrow-left"></b-icon>
                        <span>Previous</span>
                    </div>
                </div>
                <div class="swiper-button-next" slot="button-next">
                    <div class="wrap">
                        <span>Next</span>
                        <b-icon shift-h="5" icon="arrow-right"></b-icon>
                    </div>
                </div>
            </swiper>
        </section>

        <section class="form-group">
            <div class="container" v-for="(list_data, index) in ListData" :key="index.id">
                <h4 class="card-title">{{list_data.title}}</h4>
                <p class="text-muted mt-3">{{list_data.description}}</p>
            </div>
        </section>
    </div>
</template>


<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    
    export default {
        name: 'UniversityDetail',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                slide_datas:[
                    {
                        id: 1,
                        slide_img:require('@assets/images/university-detail/6.jpg'),
                        alt:'activity_01'
                    },
                    {
                        id: 2,
                        slide_img:require('@assets/images/university-detail/8.jpg'),
                        alt:'activity_02'
                    },
                    {
                        id: 3,
                        slide_img:require('@assets/images/university-detail/4.jpg'),
                        alt:'activity_03'
                    },
                    {
                        id: 4,
                        slide_img:require('@assets/images/university-detail/3.jpg'),
                        alt:'activity_04'
                    },
                    {
                        id: 5,
                        slide_img:require('@assets/images/university-detail/2.jpg'),
                        alt:'activity_05'
                    },
                    {
                        id: 6,
                        slide_img:require('@assets/images/university-detail/1.jpg'),
                        alt:'activity_06'
                    },
                ],
                swiperOptions:{
                    loop:true,
                    slidesPerView: 2,
                    breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    }
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                ListData: [
                    {
                        title: "TECHNO",
                        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
                    }
                ]
            }
        },
    };
</script>



<style lang="scss">
    @import '@core/assets/scss/swiper';
    @import '../../assets/scss/pages/university-detail/university-detail';
</style>