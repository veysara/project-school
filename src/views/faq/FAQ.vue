<template>
    <div class="faq">
        <div class="container">
            <div class="row">
                <div class=""  v-for="faq in FAQ" :key="faq.id">
                    <div class="from-group" @click="toggleMute">
                        <div class="accordion" >
                            <p class="title">{{faq.title}}</p>
                            <span class="show">+</span>
                        </div>
                        <div class="info">
                            <p>{{faq.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
    export default {
        name: 'FAQ',
        components: {
        
        },
        data() {
            return {
                FAQ: [
                    {
                        id: 1,
                        title: "Question 1",
                        description: "1 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    },
                    {
                        id: 2,
                        title: "Question 2",
                        description: "2 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    },
                    {
                        id: 3,
                        title: "Question 3",
                        description: "3 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    },
                    {
                        id: 4,
                        title: "Question 4",
                        description: "4 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    },
                    {
                        id: 5,
                        title: "Question 5",
                        description: "5 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    },
                    {
                        id: 6,
                        title: "Question 6",
                        description: "6 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    },
                ]
            }
        },
        methods: {
            toggleMute:function(){
                var shows = document.querySelectorAll(".show");
                var infos = document.querySelectorAll(".info");
                var accordions = document.querySelectorAll(".accordion");

                for (let i = 0; i < shows.length; i++) {
                    shows[i].onclick = function() {
                        for (let j = 0; j < shows.length; j++) {
                        if (shows[j] != this) {
                            infos[j].classList.remove("reveal");
                            shows[j].innerHTML = "+";
                            accordions[j].classList.remove("radius");
                        }
                        }
                        accordions[i].classList.toggle("radius");
                        infos[i].classList.toggle("reveal");
                        if (infos[i].className.includes("reveal")) shows[i].innerHTML = "-";
                        else shows[i].innerHTML = "+";
                    };
                }
            }
        }
    };
</script>


<style lang="scss">
    @import '../../assets/scss/pages/faq/faq';
</style>
  