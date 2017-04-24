import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import currentItem from './modules/currentItem.js'
import taskList from './modules/taskList.js'
import goalList from './modules/goalList.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    currentItem,
    taskList,
    goalList
  }
})
