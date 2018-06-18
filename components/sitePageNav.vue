<template lang="pug">
  nav.nav.page-nav
    .nav-brand
      .nav-item.hide-desk
        p Select a Tab:
      #page-menu-icon.nav-burger.burger.hide-desk(@click='openMenu("page")')
        span
        span
        span
    navLinks(:ids='"page-nav"' :classes='"nav-menu hide-touch"' :pages='pages' :base='"/" + section')

</template>
<script>
import navLinks from '~/components/navLinks.vue'
import openMenuMethod from '~/mixins/openMenuMethod'

export default {
  mixins:[openMenuMethod],
  props: ["section", "pages"],
  components: { navLinks }
}
</script>
