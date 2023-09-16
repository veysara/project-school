<template>
    <div class="contact-us-page">
        <section class="contact_us">
            <div class="container">
                <h1 class="title text-center">Welcome to our School</h1>
                <div class="contact_inner">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact_form_inner">
                                <div class="contact_field">
                                    <h3>Contatc Us</h3>
                                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                    <input type="text" class="form-control form-group" placeholder="Name" />
                                    <input type="text" class="form-control form-group" placeholder="Email" />
                                    <textarea class="form-control form-group" placeholder="Message"></textarea>
                                    <button class="contact_form_submit">Send</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="contact_info_sec">
                                <h4>Contact Info</h4>
                                <div class="d-flex info_single align-items-center">
                                    <i class="fas fa-headset"></i>
                                    <span>+91 8009 054294</span>
                                </div>
                                <div class="d-flex info_single align-items-center">
                                    <i class="fas fa-envelope-open-text"></i>
                                    <span>info@flightmantra.com</span>
                                </div>
                                <div class="d-flex info_single align-items-center">
                                    <i class="fas fa-map-marked-alt"></i>
                                    <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="map_sec">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="map_inner">
                            <h4>Find Us on Google Map</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                            <div class="map_bind">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        name: 'ContactUs',
        components: {
           
        },

        data() {
            return {
                
            }
        },
    };
</script>


<style lang="scss">
    @import '../../assets/scss/pages/contact-us/contact-us';
</style>