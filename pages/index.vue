<template lang="pug">
  .container
    header.g-txt-cen
      br
      br
      br
      br
      .banner-wrap
        flickity(ref='flickity' :options='flickityOptions')
          .carousel-cell.ev1-banner
            h1 First event!
            h3 January 29th, 2019
            h4
              nuxt-link(to='/route1') Click here
              |&nbsp;for more information!

          .carousel-cell.ev2-banner
            .row
              .col.s4.hide-touch
                .g-txt-cen
                  nuxt-link(to='/ev1')
                    img(src='https://placekitten.com/300/200')
              .col
                br
                h1 Second event!
                h3 January 29th, 2019
                h4
                  nuxt-link(to='/ev2') Click here
                  |&nbsp;for more information!

          .carousel-cell.ev3-banner
            h1 Third event!
            br
            h3 January 29th, 2019
            h4
              nuxt-link(to='/ev3') Click here
              |&nbsp;for more information!
        
        br
        .tiles
          .row
            .col
              nuxt-link(to='/route1')
                img(src='https://placekitten.com/g/400/200')
            .col
              nuxt-link(to='/route2')
                img(src='https://placekitten.com/400/200')
            .col
              nuxt-link(to='/route3')
                img(src='https://placekitten.com/g/400/200')

</template>

<script>
import flickity from "~/components/flickity.vue"
import mainPageTransition from "~/mixins/mainPageTransition"

export default {
  mixins: [mainPageTransition],
  components: { flickity },
  data() {
    return {
      flickityOptions: {
        setGallerySize: false,
        autoPlay: 4000,
        wrapAround: true
      }
    }
  }

  // methods: {
  //   next() {
  //     this.$refs.flickity.next()
  //   },

  //   previous() {
  //     this.$refs.flickity.previous()
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
img
  width: 400px

@media (max-width: 1000px)
  .tiles
    margin: 5%



</style>

