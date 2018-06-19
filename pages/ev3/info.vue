<template lang="pug">
  .info.p-page-item
    .primaryinfo
      img(src='https://placekitten.com/300/150')
      h2 {{ ev3.title }}
      h3 {{ ev3.date }}
      h3 {{ ev3.time }}
      h3 {{ ev3.place }}
    .moreinfo
      p(v-html='$md.render(ev3.description)')
      hr
      template(v-for='keynote in keynotes')
        .row(v-if='keynote.hostEvent.abbreviation == "ev3"')
          .col.s2
            img(src='https://placekitten.com/150/200')
          .col
            h3 Keynote Address: {{ keynote.title }} by {{ keynote.speaker.name }}
            p(v-html='$md.render(keynote.description)')
            a(@click='openVex(`${keynote.speaker.stub}`)') For more information about {{ keynote.speaker.name }}, click here.

</template>
<script>
import openVex from "~/mixins/openVexMethod"

export default {
  computed: {
    ev3() {
      return this.$store.state.allData.allEventModels[2]
    },
    keynotes() {
      return this.$store.state.allData.allKeynotes
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
