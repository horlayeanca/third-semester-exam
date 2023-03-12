<template>
<div>
    <form @submit.prevent="onSubmit">
 <input type="text" v-model="username" placeholder="enter a github username here..">
 <button type="submit" @click="onSubmit">Search</button>
 <p>{{ username }}</p>
 </form>
 <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL</th>
                <th>Language</th>
                <th>Login</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="repo in repos" :key="repo.id">
            <td>{{ repo.id }}</td>
            <td>{{ repo.name }}</td>
            <td>{{ repo.html_url }}</td>
            <td>{{ repo.language }}</td>
            <td>{{ repo.owner.login }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            username: '',
            repos: null
        }
    },
  
    methods: {
        onSubmit() {
            axios.get(`https://api.github.com/users/${this.username}/repos`)
            .then(response => {
                this.repos = response.data
            })
        }
    }
}
</script>

<style>

</style>