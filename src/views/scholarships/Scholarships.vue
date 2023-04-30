<template>
    <div class="scholarships">
        <section class="form-section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 flex-xxl-row-reverse">
                        <section class="section-contact">
                            <div class="form-contact">
                                <input type="text" name="name" class="text" id="name" placeholder="Frist Name" />
                                <input type="text" name="name" class="text mt-3" id="name" placeholder="Last Name" />
                                <input type="text" name="number" class="text mt-3" id="number" placeholder="Phone Number" />
                                <input type="email" name="email" class="text mt-3" id="email" placeholder="Email" />
                                <textarea name="textarea-339" class="textarea mt-3" aria-invalid="false" placeholder="Write Message" />
                                <Button link="#" class="bg-color mt-3" title="Learn More">
                                    Submit <b-icon icon="arrow-right" />
                                </Button>
                            </div>
                        </section>
                    </div>
                    <div class="col-sm-1" />
                    <div class="col-sm-7">
                        <section class="section-service">
                            <div class="form-service">
                                <img src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" class="card-img-top" alt="...">
                                <div class="content-center">
                                    <div class="box-content">
                                        <div class="title d-flex">
                                            <strong> Terms of admission
                                                <b-icon icon="pen-fill" />
                                            </strong>
                                        </div>
                                        <div class="descript d-flex justify-content-between">
                                            <p>English</p>
                                            <p>Logic</p>
                                            <p>Biology</p>
                                        </div>
                                    </div>
                                    <div class="box-content">
                                        <div class="title d-flex">
                                            <strong> Terms of admission
                                                <b-icon icon="arrow-up-circle-fill" />
                                            </strong>
                                        </div>
                                        <div class="descript">
                                            <p>Students need to pass exams and interview with teachers. And students love to study. Their family is poor because school helps poor families.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>  
        </section>
    </div>
</template>


<script>
    export default {
        name: 'Scholarships',
        components: {
           
        },
        data() {
            return {
                
            }
        },
    };
</script>


<style lang="scss">
    @import '../../assets/scss/pages/scholarships/scholarships';
</style>