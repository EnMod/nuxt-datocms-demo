<template lang="pug">
  main-page(:title='title' :section='section' :pages='pages')
</template>

<script>
import mainPage from "~/components/mainPage.vue"
import mainPageTransition from "~/mixins/mainPageTransition"

export default {
  components: { "main-page": mainPage },
  mixins: [mainPageTransition],
  data() {
    return {
      title: "Route 3",
      section: "route3",
      pages: {
        "Child 1": "child1",
        "Child 2": "child2"
      }
    }
  }
}
</script>

