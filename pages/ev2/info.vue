<template lang="pug">
  .info.blurb.p-page-item
    .primaryinfo
      img(src='https://placekitten.com/300/150')
      h2 {{ ev2.title }}
      h3 {{ ev2.date }}
      h3 {{ ev2.time }}
      h3 {{ ev2.place }}
    .moreinfo
      p(v-html='$md.render(ev2.description)')
      hr
      .row
        .col.s2
          img(src='https://placekitten.com/150/200')
        .col
          h3 Keynote Address by {{ keynote.speaker.name }}
          p(v-html='$md.render(keynote.description)')
          a(@click='openVex("ev2Speaker")') For more information about {{ keynote.speaker.name }}, click here.

</template>
<script>
import openVex from "~/mixins/openVexMethod"

export default {
  computed: {
    ev2() {
      return this.$store.state.allData.allEventModels[1]
    },
    keynote() {
      return this.$store.state.allData.allKeynotes[3]
    }
  },
  mixins: [openVex],
  transition: "page"
}
</script>
<style lang="stylus" scoped>
.primaryinfo
  text-align: center
</style>
