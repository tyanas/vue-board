<template>
    <div class="tasks">
        <h2 class="header">Задачи</h2>
        <ul class="list">
            <li v-for="item in items" class="item"
                v-bind:class="{ selected: item.selected }"
                @click="showDetails(item)">
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
    display: flex;
    flex-direction: column;
}

.header {
    margin: 0;
    padding: 8px 16px;
    background-color: wheat;
}

.list {
    margin: 0;
    flex: 1 0 0%;
    overflow: scroll;
}

.item {
    padding: 8px 20px;
}

.selected {
    background-color: lightyellow;
}
.item:hover {
    background-color: yellow;
    cursor: pointer;
}
</style>
