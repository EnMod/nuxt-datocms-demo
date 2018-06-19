<template lang="pug">
  .sessions.p-page-item.g-txt-cen
    template(v-if='sessionsReady')
      h2 Click on session titles for more information!
      // Loop over the timeSlots and pop in rows for each one
      // change the layout based on which type each slot is
      .row(v-for='timeSlot in slots')
        template(v-if='timeSlot.slottype.slottype == "Food"')
          .col.s2.time
            p {{ timeSlot.slottime }}
          .col.events
            p.title {{ timeSlot.title }}

        template(v-if='timeSlot.slottype.slottype == "Keynote"')
          .col.s2.time
            p {{ timeSlot.slottime }}
          .col.events
            // Loop over the keynotes, with an index added for later
            // only use the ones for this specific event,
            // numbering the speakers' `vex.js` cues according to the index provided
            p(v-for='(keynote, i) in keynotes' :key='i' v-if='keynote.hostEvent.abbreviation == "ev3" && timeSlot.title == keynote.title')
              a(@click='openVex(keynote.hostEvent.abbreviation + "Keynote" + i)') Keynote by {{ keynote.speaker.name }}
              br
              br
              |{{ keynote.title }}

        template(v-if='timeSlot.slottype.slottype == "Sessions"')
          .col.s2.time
            p {{ timeSlot.slottime }}
          .col.events
            p(v-html='$md.render(timeSlot.description)')

    template(v-else)
      h2 Sessions for 2018 coming soon!
</template>
<script>
import openVex from "~/mixins/openVexMethod"

export default {
  computed: {
    slots() {
      return this.$store.state.allData.allEv3Slots
    },
    keynotes() {
      return this.$store.state.allData.allKeynotes
    }
  },
  mixins: [openVex],
  data() {
    return {
      sessionsReady: true
    }
  }
}
</script>

