import * as types from '../mutation-types.js'

const state = {
    itemId: null
}

// getters
const getters = {
  itemId: state => state.itemId
}

// actions
const actions = {
}

// mutations
const mutations = {
    [types.SHOW_DETAILS] (state, { id }) {
        state.itemId = id
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
