<template>
    <div class="app">
        <tasks class="app-tasks"></tasks>
        <main class="main">
            <details1 class="app-details"></details1>
            <goals class="app-goals"></goals>
        </main>
    </div>
</template>

<script>
import Details1 from './Details1.vue'
import Tasks from './Tasks.vue'
import Goals from './Goals.vue'

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

    background-color: lightgreen;
    margin: 0 auto;
    max-width: 1268px;
    display: flex;
    align-items: stretch;
    padding: 10px 20px;
    height: calc(100vh - 20px);
}

.app-tasks {
    box-sizing: border-box;
    flex: 2 0 0%;
}

.main {
    margin-left: 10px;
    flex: 3 0 0%;
    display: flex;
    flex-direction: column
}
.app-details {
    flex: 1 0 0%;
}

.app-goals {
    flex: 1 0 0%;
}
</style>
