const MAX_COUNT = 20;

/**
 * Mocking client-server processing
 */

export default {
    getTasks (cb) {
        let items = require('./tasks.json');

        items = items.map(item => {
            item.selected = false
            if (!item.status) {
                item.status = ''
            }

            return item
        }).sort((a, b) => {
            return a.status.localeCompare(b.status)
        })

        setTimeout(() => cb(items), 1000)
    },
    getGoals (cb) {
        let items = require('./goals.json');

        items = items.map(item => {
            item.relativeCount = item.count * 100 / MAX_COUNT
            item.shiftCount = -100 + item.relativeCount

            return item
        })
        setTimeout(() => cb(items), 10000)
    },
}
