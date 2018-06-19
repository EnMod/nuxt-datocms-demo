// import md from "@nuxtjs/markdownit"
import vex from "vex-js"

export default {
  props: ["section"],
  methods: {
    openVex(subject, event = this.section, allData = this.$store.state.allData) {
      // declare some vars for vex
      vex.defaultOptions.className = "vex-theme-default"
      const vexClass = "content vex-styling"

      // select timeslots for the given event
      // first convert the event to Uppercase
      const evUpper = event.charAt(0).toUpperCase() + event.slice(1)
      // then select the data with it
      const evData = allData[`all${evUpper}Slots`]

      // skeleton for info to use later
      let infoToFill = {
        type: subject,
        id: "",
        info: ""
      }
      // if (event == 'ev3') {
      //   console.log('lol nope')
      //   return true
      // }
      evData.some(slot => {
        // if that slot is a session time slot...
        if (slot.slottype.slottype == "Sessions") {
          // ...and its sidetalks rel matches the clicked,
          // set the info according to the sidetalk info
          if (slot.sideTalks && `side${slot.sideTalkNumber}` == subject) {
            infoToFill.type = "sidetalk"
            infoToFill.id = subject
            infoToFill.info = {
              sideTalks: slot.sideTalks,
              sideTalkNumber: slot.sideTalkNumber
            }
            return true
          } else {
              // ...loop over each of the sessions if there are any
              if(slot.sessions) {
                slot.sessions.some(session => {
                // if a session's rel is the same as the one of the clicked link,
                  if (session.relevantId == subject) {

                    // set the info to fill
                    // then end the some()
                    infoToFill.type = "session"
                    infoToFill.id = subject
                    infoToFill.info = session
                    return true
                  }
                })
              }
          }
        }
      })
      // if the subject was for something not in a specific time slot, handle here
      if (["poster", "ev2-poster"].indexOf(subject) >= 0) {
        infoToFill.type = "poster"
        infoToFill.id = subject
        infoToFill.info = confData[7].sessions
      } else if (subject == "ev3Speaker1") {
        infoToFill.type = "speaker"
        infoToFill.id = subject
        infoToFill.info = allData.allKeynotes[1].speaker
      } else if (subject == "ev3Speaker2") {
        infoToFill.type = "speaker"
        infoToFill.id = subject
        infoToFill.info = allData.allKeynotes[2].speaker
      } else if (subject == "ev3Keynote1") {
        infoToFill.type = "keynote"
        infoToFill.id = subject
        infoToFill.info = allData.allKeynotes[1]
      } else if (subject == "ev3Keynote2") {
        infoToFill.type = "keynote"
        infoToFill.id = subject
        infoToFill.info = allData.allKeynotes[2]
      } else if (subject == "ev1Keynote") {
        infoToFill.type = "keynote"
        infoToFill.id = subject
        infoToFill.info = allData.allKeynotes[1]
      } else if (subject == "ev2Keynote") {
        infoToFill.type = "keynote"
        infoToFill.id = subject
        infoToFill.info = allData.allKeynotes[3]
      }
      // switch-case to fire a vex based on the type of filled information
      switch (infoToFill.type) {
        case "speaker":
          console.log(infoToFill)
          return vex.open({
            unsafeContent: `
              <div id="${infoToFill.id}">
              <h1>${infoToFill.info.name}</h1>
              <h2>${infoToFill.info.credentials}</h2>
              <br>
              <p>${this.$md.render(infoToFill.info.fullBio)}</p>
              </div>`,
            contentClassName: `${vexClass}`
          })
        case "keynote":
          return vex.open({
            unsafeContent: `
              <div id="${infoToFill.id}">
              <h1>${infoToFill.info.title}</h1>
              <h2>${infoToFill.info.speaker.name}</h2>
              <br>
              <p>${infoToFill.info.description}</p>
              </div>`,
            contentClassName: `${vexClass}`
          })
        case "session":
          return vex.open({
            unsafeContent: `
              <div id="${infoToFill.id}">
              <h1>${infoToFill.info.title}</h1>
              <h2>${infoToFill.info.presenters}</h2>
              <h3>${infoToFill.info.from}</h3>
              <br>
              <p>${infoToFill.info.description}</p>
              </div>`,
            contentClassName: `${vexClass} ${infoToFill.info.track.slug}`
          })
        case "sidetalk":
          const talks = infoToFill.info.sideTalks
          const num = infoToFill.info.sideTalkNumber
          let talksText = ``
          talks.forEach(talk => {
            talksText += `
              <h1>${talk.title}</h1>
              <h2>${talk.presenters}</h2>
              <h3>${talk.from}</h3>
              <br>
              <p>${talk.description}</p>
              <br>
            `
          })
          return vex.open({
            unsafeContent: `
              <div id="${infoToFill.id}">
                <h1 style='text-align:center;text-decoration:underline;'>Side Talk ${num}</h1>
                ${talksText}
              </div>
            `,
            contentClassName: `${vexClass} ${infoToFill.id}`
          })
        case "poster":
          let posterText = ``
          infoToFill.info.forEach(poster => {
            posterText += `
              <h1>${poster.title}</h1>
              <h2>${poster.presenters}</h2>
              <h3>${poster.from}</h3>
              <br>
              <p>${poster.description}</p>
              <br>
            `
          })
          return vex.open({
            unsafeContent: `
              <div id="${infoToFill.id}">
              <h1 style='text-align:center;text-decoration:underline;'>Poster Sessions</h1>
                ${posterText}
                <br>
              </div>
            `,
            contentClassName: `${vexClass} ${infoToFill.id}`
          })
        case "ev2-keynote":
          // optionally set learning objectives for event 2 sessions
          const objectives = infoToFill.info.objectives
            ? infoToFill.info.objectives
            : ""
          return vex.open({
            unsafeContent: `
              <div id="${infoToFill.id}">
              <h1>${infoToFill.info.title}</h1>
              <h2>${infoToFill.info.presenters}</h2>
              <h3>${infoToFill.info.from}</h3>
              <br>
              <p>${infoToFill.info.description}</p>
                ${objectives}
              </div>`,
            contentClassName: `${vexClass}`
          })
        default:
          break
      }
    }
  }
}
