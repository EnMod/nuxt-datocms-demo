<template lang="pug">
  main-page(:title='title' :section='section' :pages='pages')
    div(slot='blurb')
      :markdown-it()
        **Click on one of the tabs above** to find videos and information about Blackboard and to get help using Blackboard's many features, including:
      br
      br
      br
      .row.bb-landing
        .col
          nuxt-link(to='/route2/child1'): img(src='https://placekitten.com/200/100')
          h3 Child 1
        .col
          nuxt-link(to='/route2/child2'): img(src='https://placekitten.com/200/100')
          h3 Child 2
        .col
          nuxt-link(to='/route2/child3'): img(src='https://placekitten.com/200/100')
          h3 Child 3
</template>

<script>
import mainPage from "~/components/mainPage.vue"
import mainPageTransition from "~/mixins/mainPageTransition"

export default {
  components: { "main-page": mainPage },
  mixins: [mainPageTransition],
  data() {
    return {
      title: "Route 2",
      section: "route2",
      pages: {
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
  text-align: center
</style>

