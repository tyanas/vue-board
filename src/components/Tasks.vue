<template>
    <div class="tasks">
        <h2>Задачи</h2>
        <ul>
            <li v-for="item in items">{{ item.status }} {{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'tasks',
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
            this.items = require('./tasks.json');
        }
    }
}
</script>

<style scoped>
.tasks {
    background-color: mistyrose;
}
</style>
