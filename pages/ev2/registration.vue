<template lang="pug">
  .registration.p-page-item
    .row
      .col.s2
        img(src='https://placekitten.com/100/100')
      .col
        h3
          |Registration (
          span.g-emph Open!
          |)
        p(v-html="$md.render(info)")

</template>
<script>
export default {
  computed: {
    info() {
      return this.$store.state.allData.allEventModels[0].registration
    }
  }
}
</script>
