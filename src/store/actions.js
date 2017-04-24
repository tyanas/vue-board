import * as types from './mutation-types.js'

export const showDetails = ({ commit }, item) => {
    commit(types.SHOW_DETAILS, { id: item.id })
}
