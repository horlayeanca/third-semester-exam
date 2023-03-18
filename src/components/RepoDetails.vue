<template>
  <div class="flex justify-center">
    <div>
        <div v-for="repo in repos" :key="repo.id">
            <img src="https://avatars.githubusercontent.com/u/85955573?v=4" alt="avatar">
            <div>{{ repo.created_at }}</div>

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
            
        }
    },
    mounted() {
        axios.get(`https://api.github.com/users/horlayeanca/repos`)
        .then(response => {
            this.repos = response.data
            this.avatar_url = response.data.avatar_url
        })
   }

}
</script>

<style>

</style>