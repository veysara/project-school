<template>
  <div class="footer">
    <section class="footer-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-3">
            <div class="image text-center">
              <b-img
                :src="require('@/assets/images/header/logo4.png')"
                fluid alt="Camsolution Logo"
                class="img-fluid"
              ></b-img>
            </div>
            <div class="short-descrite ">
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem laudantium totam rem aperiamea queipsa quae
                abillo inventore veritatise.
              </p>
            </div>

            <div class="subcrib-form">
              <input
                name="name"
                type="text"
                class="form-control"
                placeholder="Enter Your Email"
              />
              <b-link href="#" class="btn-subcrib">
                <b-icon-chat-square-text-fill />
              </b-link>
            </div>
          </div>    
          <div class="col-lg-4 col-md-6">
           <div class="foot-list">
            <div class="item">
              <div class="title">
                <h4>Information</h4>
              </div>
              <ul class="nav sitemap flex-column mt-3">
                <li class="nav-item">
                  <b-link :to="{ name: 'Service' }">
                    <b-icon-chevron-double-right />
                    Home
                  </b-link>
                </li>
                <li class="nav-item">
                  <b-link :to="{ name: 'Portfolio' }">
                    <b-icon-chevron-double-right />
                    About School
                  </b-link>
                </li>
                <li class="nav-item">
                  <b-link :to="{ name: 'Career' }">
                    <b-icon-chevron-double-right />
                    About Teacher
                  </b-link>
                </li>
                <li class="nav-item">
                  <b-link :to="{ name: 'Condition' }">
                    <b-icon-chevron-double-right />
                    Courses
                  </b-link>
                </li>
                <li class="nav-item">
                  <b-link :to="{ name: 'Privacy' }">
                    <b-icon-chevron-double-right />
                    The Faculty of Education (FoEd) is in the process of providing courses from bachelor to doctoral degrees in the fields of educational.
                  </b-link>
                </li>
              </ul>
            </div>
           </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="item">
              <div class="title">
                <h4>Contact Us</h4>
              </div>
              <div class="foot-info">
                <address class="mt-3">
                  <b-icon-geo-alt-fill /> 
                  Address: St#371, Tropeang Chhuk, Sangkat Toek Thla, Khan Sensok,Phnom Penh, Cambodia
                </address>
                <p>
                  <a href="mailto:someone@example.com">
                    <b-icon-envelope/>
                    saravey@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:123-456-7890">
                    <b-icon-telephone/>
                    088 34 52 939
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="title py-2 text-center">
          <p>©Copy Right By Sara VEY Web Developer</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  import Button from '@/core/components/button/Button';

  export default {
    name: 'Footer',
    components: {
      Button,
    },
    data() {
      return {
        serviceBackground: require('@/assets/images/cta_bg1.png'),
        visible: false,
      };
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/layout/footer';
</style>
