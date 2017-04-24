<template>
    <div class='app'>
        <tasks></tasks>
        <details1></details1>
        <goals></goals>
    </div>
</template>

<script>
import Details1 from './components/Details1.vue'
import Tasks from './components/Tasks.vue'
import Goals from './components/Goals.vue'

export default {
    name: 'app',
    components: {
        Tasks,
        Details1,
        Goals
    }
}
</script>

<style scoped>
.app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    background-color: lightgreen;
    margin: 0 auto;
    max-width: 1268px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
}
</style>
