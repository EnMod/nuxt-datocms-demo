<template lang="pug">
  section(:id='section')
    h1 {{ title }}

    site-page-nav(:section='section' :pages="pages")

    .p-page-item.blurb: slot(name='blurb' v-if='$route.path == `/${section}`')

    nuxt-child(:section='section')
</template>
<script>
import sitePageNav from "~/components/sitePageNav.vue"
import mainPageTransition from "~/mixins/mainPageTransition"

export default {
  props: ["section", "pages", "title"],
  mixins: [mainPageTransition],
  components: {
    sitePageNav
  }
}
</script>
<style lang="stylus" scoped>
h1
  text-align: center
</style>
