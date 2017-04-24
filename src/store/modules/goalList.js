import * as types from '../mutation-types.js'
import api from '../../api/index.js'

// initial state
const state = {
    all: []
}

// getters
const getters = {
    allGoals: state => state.all
}

// actions
const actions = {
    getAllGoals ({ commit }) {
        api.getGoals(items => {
            commit(types.RECEIVE_GOALS, { items })
        })
    }
}

// mutations
const mutations = {
    [types.RECEIVE_GOALS] (state, { items }) {
        state.all = items
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
