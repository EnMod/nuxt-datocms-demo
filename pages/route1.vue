<template lang="pug">
  main-page(:title='title' :section='section' :pages='pages')
    div(slot='blurb')
      .info
        :markdown-it()
          **Click on one of the links above** to find more information.
      br
      .row
        .col
          img(src='https://placekitten.com/300/200')
        .col
          .tedtalks
            h3 Some exciting links (they lead to the landing page)
            p: a(target='_blank' rel='noreferrer noopener' href="/") First link
            p: a(target='_blank' rel='noreferrer noopener' href="/") 2nd Link
            p: a(target='_blank' rel='noreferrer noopener' href="/") Link 3rd
            p: a(target='_blank' rel='noreferrer noopener' href="/") The 4th Link
            p: a(target='_blank' rel='noreferrer noopener' href="/") The 5th Link

</template>
<script>
import mainPage from "~/components/mainPage.vue"
import mainPageTransition from "~/mixins/mainPageTransition"

export default {
  components: { "main-page": mainPage },
  mixins: [mainPageTransition],
  data() {
    return {
      title: "Route 1",
      section: "route1",
      pages: {
        // "Child title":"slug" 
        "Child 1": "child1",
        "Child 2": "child2",
        "Child 3": "child3"
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
h3
  margin-top: 0

.info
  text-align: center
</style>
