<template>
    <div>
        <!--
         <div v-for="job in this.$store.state.jobs">
            {{ job.title }} 
        </div> 
        -->
        <p v-for="job in fetchedJobs">
            <a :href="job.url">{{job.title }}</a>
            <small>{{job.time_ago}}.{{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'fetchedJobs'
        ]),
    },
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>