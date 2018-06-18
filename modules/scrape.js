// need to import some modules because the native stuff doesn't work...
const fs = require("fs-extra")
const fetch = require("cross-fetch")

// also let's get our dotenv in there
const dotenv = require("dotenv").config()

module.exports = function scraper() {
  // eventually writes the data to file
  // takes a file path and data to write
  const writeData = (path, data) => {
    return new Promise((resolve, reject) => {
      try {
        fs.ensureFileSync(path)
        fs.writeJson(path, data, resolve(`${path} Write Successful`))
      } catch (e) {
        console.error(`${path} Write Failed. ${e}`)
        reject(`${path} Write Failed. ${e}`)
      }
    })
  }
  const fetchDato = () => {
    const token = process.env.datoRO

    fetch("https://graphql.datocms.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      // this query just grabs the whole data
      body: JSON.stringify({
        query: `
            {
              allEv1Slots {
                slottime
                slottype {
                  slottype
                }
                description
                sessions {
                  title
                  presenters
                  from
                  description
                  track {
                    slug
                  }
                  relevantId
                }
                sideTalkNumber
                sideTalks {
                  title
                  presenters
                  from
                  description
                }
              }
              allEv2Slots {
                slottime
                slottype {
                  slottype
                }
                description
                sessions {
                  title
                  presenters
                  from
                  description
                  track {
                    stub
                  }
                  relevantId
                }
              }
              allEv3Slots {
                slottime
                title
                slottype {
                  slottype
                }
                description
              }
              allEv1Tracks {
                title
                description
                slug
              }
              allEv2Tracks {
                title
                description
                stub
              }
              allEventModels {
                image {
                  url
                }
                title
                heading
                date
                time
                place
                description
                registration
                abbreviation
              }
              allKeynotes {
                title
                description
                speaker {
                  image {
                    url
                  }
                  name
                  credentials
                  excerpt
                  fullBio
                  stub
                }
                hostEvent {abbreviation}
              }
              allSpeakers {
                image {
                  url
                }
                name
                credentials
                excerpt
                fullBio
                stub
              }
            }
          `
      })
    })
      .then(res => res.json())
      .then(res => {
        // then, writes the data to a local file
        writeData("static/data/index.json", res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // Add hook for build, to write this data before the app even happens
  this.nuxt.hook("build:before", builder => {
    // Clean data directory
    fs.emptyDir("static/data")

    // then fetch and write the data
    fetchDato()
  })
}
