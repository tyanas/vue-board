import * as types from '../mutation-types.js'
import api from '../../api/index.js'

// initial state
const state = {
    all: []
}

// getters
const getters = {
    allTasks: state => state.all
}

// actions
const actions = {
    getAllTasks ({ commit }) {
        api.getTasks(items => {
            commit(types.RECEIVE_TASKS, { items })
        })
    }
}

// mutations

const mutations = {
    [types.RECEIVE_TASKS] (state, { items }) {
        state.all = items
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
