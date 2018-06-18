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
      title: "Event 3",
      section: "ev3",
      pages: {
        Information: "info",
        Registration: "registration",
        Agenda: "agenda"
      }
    }
  }
}
</script>
