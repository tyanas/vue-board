/**
 * Mocking client-server processing
 */

export default {
    getTasks (cb) {
        const items = require('./tasks.json');
        setTimeout(() => cb(items), 100)
    },
    getGoals (cb) {
        const items = require('./goals.json');
        setTimeout(() => cb(items), 100)
    },
}
