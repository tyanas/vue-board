<template>
    <div class="details">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'details1',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details {
    background-color: papayawhip;
}
</style>
