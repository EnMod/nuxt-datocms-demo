import data from '~/static/data/index.json'

export const state = () => ({
  allData: data
})

export const mutations = {
  fill (state, pl) {
    state.allData = pl
  }
}