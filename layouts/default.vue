<template lang="pug">
  div
    global-nav(:isOffTop='gnIsOffTop')
    nuxt(transition='main')
</template>
<script>
import GlobalNav from "~/components/globalNav.vue"
export default {
  data() {
    return {
      gnIsOffTop: false
    }
  },
  components: {
    "global-nav": GlobalNav
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler)
  },
  methods: {
    scrollHandler() {
      const topNav = document.querySelector(".global-nav")

      // console.log(document.documentElement.scrollTop)
      // if there's a nav, do the thing
      if (topNav) {
        // console.log(document.documentElement.scrollTop)
        // if the topNav has scrolled, remove the topNav class
        if (document.documentElement.scrollTop > 0) {
          this.gnIsOffTop = true
        }

        // otherwise, remove it at 0
        if (
          document.documentElement.scrollTop == 0 &&
          window.innerWidth > 1000
        ) {
          this.gnIsOffTop = false
        }
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/css/style';
</style>
