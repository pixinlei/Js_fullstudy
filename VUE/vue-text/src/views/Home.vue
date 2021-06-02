<template>
    <div class="page">
        <div>{{myCount}}</div>
        <button @click="add">add</button>
        <button @click="reduce">reduce</button>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'
    export default {
        // store,
        data() {
            return {
                num: 1
            }
        },
        methods: {
          ...mapMutations(['add', 'reduce']),
        },
        computed: {
            ...mapState(['count']),
            ...mapGetters(['myCount'])
        }
    }
</script>

<style>

</style>