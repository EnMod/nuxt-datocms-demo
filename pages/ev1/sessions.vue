<template lang="pug">
  .sessions.p-page-item.g-txt-cen
    template(v-if='sessionsReady')
      h2 Click on session titles for more information!
      .row.tracks
        .col(v-for='track in tracks' :class="track.slug")
          strong {{ track.title }}
          hr
          p {{ track.description }}

      // Loop over the timeSlots and pop in rows for each one
      // change the layout based on which type each slot is
      .row(v-for='timeSlot in slots')
        template(v-if='timeSlot.slottype.slottype == "Food"')
          .col.s2.time
            p {{ timeSlot.slottime }}
          .col.events
            p.title {{ timeSlot.description }}

        template(v-if='timeSlot.slottype.slottype == "Keynote"')
          .col.s2.time
            p {{ timeSlot.slottime }}
          .col.events
            p(v-for='keynote in keynotes' v-if='keynote.hostEvent.abbreviation == "ev1"')
              a(@click='openVex(keynote.hostEvent.abbreviation + "Keynote")') Keynote by {{ keynote.speaker.name }}
              br
              br
              |{{ keynote.title }}
              br
              br
              |Auditorium

        template(v-if='timeSlot.slottype.slottype == "Sessions"')
          .col.s2.time
            p {{ timeSlot.slottime }}
          .col
            .row
              .col(v-for='session in timeSlot.sessions' :class='session.track.slug')
                a(@click='openVex(session.relevantId)') {{ session.title }}
                p {{ session.presenters }}

              .col.sidetalks
                a(@click='openVex(`tech${timeSlot.sideTalkNumber}`)') Side Talk {{ timeSlot.sideTalkNumber }}:
                template(v-for='sideTalk in timeSlot.sideTalks')
                  p
                    strong {{ sideTalk.title }}
                    br
                    |{{ sideTalk.presenters }}
                  br

      .row
        .col.s2.time
          p 3:30 - 4:45
        .col.events
          a(@click='openVex("poster")') Beverage/Networking Reception (Click to see poster sessions)

    template(v-else)
      h2 Sessions for 2018 coming soon!
</template>
<script>
import openVex from "~/mixins/openVexMethod"

export default {
  computed: {
    tracks() {
      return this.$store.state.allData.allEv1Tracks
    },
    slots() {
      return this.$store.state.allData.allEv1Slots
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

