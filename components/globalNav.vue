<template lang="pug">
  nav.nav.global-nav(:class='{ "off-top": isOffTop }')
    .nav-brand
      nuxt-link.nav-item(to='/') Nuxt/DatoCMS Demo Site
      #global-menu-icon.nav-burger.burger(@click='openMenu("global")').hide-desk
        span
        span
        span
    #global-nav.nav-menu
      //- Push nav items to the end
      .nav-end
        .nav-item.sep.has-dropdown.is-hoverable
          a.nav-link.nav-drop-link#res-menu-icon(@click='openMenu("res")') Pages
          //- this is what gets opened on clicking the .nav-drop-link
          navLinks(:ids='"res-nav"' :classes='"nav-dropdown hide-touch"' :pages='pages' :base='""')
        .nav-item.sep.has-dropdown.is-hoverable
          a.nav-link.nav-drop-link#ev-menu-icon(@click='openMenu("ev")') Events
          navLinks(:ids='"ev-nav"' :classes='"nav-dropdown hide-touch"' :pages='evs' :base='""')
            //- nuxt-link.nav-item(href='cal' onClick="ga('send', 'event', 'page tabs', 'Link clicked', '/cal-page')") IOESS Event Calendar
            //- nuxt-link.nav-item.afi-global(href='afi' onClick="ga('send', 'event', 'page tabs', 'Link clicked', '/afi-page')") Adjunct Faculty Institute
</template>
<script>
import navLinks from "~/components/navLinks.vue"
import openMenuMethod from "~/mixins/openMenuMethod"

export default {
  mixins: [openMenuMethod],
  components: { navLinks },
  props: ["isOffTop"],
  data() {
    return {
      pages: {
        Home: "",
        "Route 1": "route1",
        "Route 2": "route2",
        "Route 3": "route3"
      },
      evs: {
        "Event 1": "ev1",
        "Event 2": "ev2",
        "Event 3": "ev3"
      }
    }
  }
}
</script>
