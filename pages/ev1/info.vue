<template lang="pug">
  .info.p-page-item
    .blurb
      .row
        .col.p33
          img(src='https://placekitten.com/300/150')
        .col
          h2 {{ ev1.title }}
          h3 {{ ev1.date }}
          h3 {{ ev1.time }}
          h3 {{ ev1.place }}
    .moreinfo
      p(v-html='$md.render(ev1.description)')
      hr
      .row
        .col.s2
          img(src='https://placekitten.com/150/200')
        .col
          h3 Keynote Address by {{ keynote.speaker.name }}
          p(v-html='$md.render(keynote.description)')
          a(@click='openVex("ev1Speaker")') For more information about {{ keynote.speaker.name }}, click here.

</template>
<script>
import openVex from "~/mixins/openVexMethod"

export default {
  computed: {
    ev1() {
      return this.$store.state.allData.allEventModels[0]
    },
    keynote() {
      return this.$store.state.allData.allKeynotes[0]
    }
  },
  mixins: [openVex],
  transition: "page"
}
</script>
<style lang="stylus" scoped>
.blurb .row
  text-align: center
</style>
