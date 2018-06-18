<template lang="pug">
  #route1child1.p-page-item
    h2 Route 1, Child 1
    .row
      .col
        img(src='https://placekitten.com/400/400')

      //- Open **one** with radios, **multiple** with checkboxes

      .col: .accordion
        .acc-item(v-for="(sectionStr, sectionNum) in sectionInfo")
          input(:id='`tab-{{sectionStr}}`' type='checkbox' name='tabs')
          label(:for='`tab-{{sectionStr}}`') Link Category {{sectionNum}}
          .acc-text
            p(v-for="linkNum in 4"): a(target='_blank' rel='noreferrer noopener' href="/") Link {{linkNum}}

</template>
<script>
export default {
  data() {
    return {
      sectionInfo: {
        "1":"one",
        "2":"two",
        "3":"three",
        "4":"four"
      }
    }
  }
}
</script>
