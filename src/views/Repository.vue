<template>
    <div class="repositories">
       <p>please enter a github username above</p>
       <p>{{ newUsername }}
    <github-user-data :data="githubData[newUsername]"></github-user-data>
    </p>
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
    </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Repository',
    components: { },
    data() {
        return {
            repos: null
        }
    },
   mounted() {
        axios.get('https://api.github.com/users/' + this.newUsername + '/repos')
            .then(response => {
                this.repos = response.data
            })
    },
    props: {
        newUsername: String,
        githubData: Object
    }

}
</script>

<style>

</style>