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
      title: "Event 2",
      section: "ev2",
      pages: {
        Information: "info",
        Registration: "registration",
        Sessions: "sessions"
      }
    }
  }
}
</script>

