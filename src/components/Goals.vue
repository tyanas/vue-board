<template>
    <div class="goals">
        <h2 class="header">Цели</h2>
        <ul class="list">
            <li class="item" v-for="item in items">
                <div class="name">{{ item.name }}</div>
                <div class="progress">
                    <div class="progress_in" :style="{ left: item.shiftCount +'%' }"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'goals',
    computed: mapGetters({
        items: 'allGoals'
    }),
    created: function () {
        this.$store.dispatch('getAllGoals')
    }
}
</script>

<style scoped>
.goals {
    background-color: lightcyan;
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

.name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.progress {
    display: inline-block;
    background-color: #c2c2c2;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .3);
    overflow: hidden;
    position: relative;
    top: -9px;
}

.progress_in {
    display: block;
    position: absolute;
    width: 100%;
    height: 6px;
    background-color: green;
}
</style>

