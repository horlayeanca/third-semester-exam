<template>
  <div class="flex justify-center">
    <div class="flex justify-center bg-teal-200 mx-auto flex-wrap">
        <div v-for="repo in repos" :key="repo.id">
            <img src="https://avatars.githubusercontent.com/u/85955573?v=4" alt="avatar">
            <div>{{ repo.title }}</div>
            <div>{{ repo.name }}</div>
            <div>{{ forks_count }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RepoDetails',
    data() {
        return {
            avatar_url: '',
            repos: null,
            forks_count: null,
            title: null,
        }
    },
    mounted() {
        axios.get(`https://api.github.com/users/horlayeanca/repos`)
        .then(response => {
            this.repos = response.data
            this.avatar_url = response.data.avatar_url
            this.forks_count = response.data.forks_count
        })
   }

}
</script>

<style>

</style>