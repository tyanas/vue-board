<template>
    <div class="tasks">
        <h2 class="header">Задачи</h2>
        <transition name="fade">
        <ul v-if="items.length" class="list">
            <li v-for="item in items" class="item"
                v-bind:class="{ selected: item.selected }">
                <span class="status">{{ item.status }}</span>
                <router-link class="link" :to="{ name: 'task', params: { id: item.id } }">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
        </transition>
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
    background-color: peachpuff;
    display: flex;
    flex-direction: column;
    position: relative;
}
.tasks:after {
    content: '';
    height: 32px;
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-shadow: inset 0 -32px 32px -12px peachpuff;
}

.header {
    margin: 0;
    padding: 8px 16px;
    background-color: tomato;
    position: relative;
}
.header:after {
    content: '';
    height: 32px;
    display: block;
    position: absolute;
    bottom: -32px;
    left: 0;
    width: 100%;
    box-shadow: inset 0px 32px 29px -14px peachpuff;
}

.list {
    margin: 0;
    padding: 16px 0;
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

.selected {
    background-color: papayawhip;
}

.link {
    flex: 1 0 0%;
    padding: 8px 10px 8px 10px;
}
.link:hover {
    background-color: yellow;
    cursor: pointer;
    color: midnightblue;
}
.link:active {
    color: maroon;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
