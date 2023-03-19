<template>
<div class="mt-4">
    <form @submit.prevent="onSubmit" class="flex justify-center">
 <input type="text" v-model="username" placeholder="enter a github username" class="border-2 px-2 py-1 rounded">
 <button type="submit" @click="onSubmit" class="ml-2 bg-red-600 px-4 py-2 rounded-md text-white hover:bg-slate-600 animate-pulse hover:animate-bounce hover:duration-700">Search</button>
 
 </form>
 <div class="flex justify-center mt-5">
 <table class="w-4/5 rounded-lg overflow-auto shadow-sm border-separate border-spacing-2 border border-slate-500">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
            <tr class="">
                <th class="py-3 text-sm font-semibold tracking-wide text-center border border-slate-600">ID</th>
                <th class="py-3 text-sm font-semibold tracking-wide text-center border border-slate-600">Name</th>
                <th class="py-3 text-sm font-semibold tracking-wide text-center border border-slate-600">URL</th>
                <th class="py-3 text-sm font-semibold tracking-wide text-center border border-slate-600">Language</th>
                <th class="py-3 text-sm font-semibold tracking-wide text-center border border-slate-600">Login</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            <tr v-for="repo in repos" :key="repo.id" class="bg-gray-300">
            <td class="p-3 text-sm w-32 border border-slate-700">{{ repo.id }}</td>
            <td class="p-3 text-sm text-left w-40 border border-slate-700"> <router-link    to="/repodetails" class="text-blue-700 hover:text-green-500 transition-all">{{ repo.name }} </router-link> </td>
            <td class="p-3 text-sm text-left border border-slate-700">{{ repo.html_url }}</td>
            <td class="p-3 text-sm w-32 border border-slate-700">{{ repo.language }}</td>
            <td class="p-3 text-sm w-32 border border-slate-700">{{ repo.owner.login }}</td>
            </tr>
        </tbody>
    </table>
</div>
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
                this.username = ''
            })
            if(this.username === '') {
                alert('Please enter a username')
            }
        }
    }
}
</script>

<style>

</style>