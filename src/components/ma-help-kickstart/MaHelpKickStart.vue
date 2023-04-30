<template>
<div class="help-kickstart">
  <div class="kick-container">
    <div class="wrap"  v-for="(info, index) in help_data" :key="index.id">
      <div class="video-container">
        <iframe
            class="video"
            :src="info.video_src +
           '?modestbranding=1&rel=1?&cc_load_policy=1?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&loop=1&mute=1&showinfo=0'"
            frameborder="0" allow="autoplay; encrypted-media"
        >
        </iframe>
      </div>
      <b-container>
        <div class="content">
          <h3 class="top-title text-center">{{info.title}}</h3>
          <h2 class="quote text-center"><img :src="quote_right" alt="quote_right" class="img-fluid">{{info.quote}}</h2>
          <h5 class="subtitle">-{{info.sub_title}}<img :src="quote_left" alt="quote_left" class="img-fluid"></h5>
          <div class="button-wrap text-center">
            <b-button>KICKSTART US</b-button>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MaHelpKickStart",
  props:['help_data'],
  data () {
    return {
      quote_right:require('@assets/images/slide-detail/right-quote.png'),
      quote_left:require('@assets/images/slide-detail/left-quote.png')
    }
  }
}
</script>

<style lang="scss">
@import "@assets/scss/components/help-kickstart.scss";
</style>