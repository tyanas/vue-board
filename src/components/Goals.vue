<template>
    <div class="goals">
        <h2>Цели</h2>
        <ul>
            <li v-for="item in items">{{ item.name }} {{ item.count }}</li>
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
</style>

