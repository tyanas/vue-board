<template>
    <div class="tasks">
        <h2 class="header">Задачи</h2>
        <ul class="list">
            <li v-for="item in items" class="item"
                v-bind:class="{ selected: item.selected }">
                <span class="status">{{ item.status }}</span>
                <router-link class="link" :to="{ name: 'task', params: { id: item.id } }">
                    {{ item.title }}
                </router-link>
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
    }
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
    display: flex;
    padding: 0 20px 0 10px;
}

.status {
    min-width: 20px;
    align-self: center;
    text-align: center;
}

.link {
    flex: 1 0 0%;
    padding: 8px 10px 8px 10px;
}

.selected {
    background-color: lightyellow;
}
.link:hover {
    background-color: yellow;
    cursor: pointer;
}
</style>
