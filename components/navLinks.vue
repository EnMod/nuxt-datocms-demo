<template lang="pug">
  div(:id="ids" :class="classes" @click='resetGlobalNav(ids)')
    nuxt-link.nav-item(v-for='(slug, page) in pages' :key='slug' :to='base + "/" + slug' active-class='is-active' :exact='isExact') {{ page }}
</template>
<script>
export default {
  props: ["ids", "classes", "pages", "base"],
  methods: {
    resetGlobalNav(source) {
      if (source == "res-nav" || source == "ev-nav") {
        const linksToReset = Array.from(
          document.querySelectorAll(".global-nav .is-active")
        )

        linksToReset.forEach(link => {
          link.classList.remove("is-active")
        })
        document.getElementById("page-menu-icon").classList.remove("is-active")
        document.getElementById("page-nav").classList.remove("is-active")
      }
    }
  },
  // are the nav links the ones in the global nav?
  // if so, they should not be exact active, so return false
  // otherwise return true to make sure navs elsewhere are exact
  computed: {
    isExact() {
      return this.ids == "res-nav" || this.ids == "ev-nav" ? false : true
    }
  }
}
</script>
