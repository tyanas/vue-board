<template>
    <div class="goals">
        <h2>Цели</h2>
        <ul>
            <li v-for="item in items">{{ item.name }} {{ item.count }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'goals',
    data: function() {
        return {
            items: null
        };
    },

    created: function () {
        this.fetchData()
    },

    methods: {
        fetchData: function () {
            this.items = require('./goals.json');
        }
    }
}
</script>

<style scoped>
.goals {
    background-color: lightcyan;
}
</style>

