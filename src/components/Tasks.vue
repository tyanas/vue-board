<template>
    <div class="tasks">
        <h2>Задачи</h2>
        <ul>
            <li v-for="item in items" class="item" @click="showDetails(item)">
                {{ item.status }} {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'tasks',
    computed: mapGetters({
        items: 'allTasks'
    }),
    created: function () {
       this.$store.dispatch('getAllTasks')
    },
    methods: mapActions([
        'showDetails'
    ])
}
</script>

<style scoped>
.tasks {
    background-color: mistyrose;
}

.item {
    padding: 4px 8px;
}

.item:hover {
    background-color: yellow;
    cursor: pointer;
}
</style>
