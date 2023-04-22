<template>
    <div class="">
        <div class="flex justify-center mx-auto border-solid border-2 mt-6 bg-blue-600 w-3/6 flex-nowrap">
       <div>
        <p><img src="https://avatars.githubusercontent.com/u/85955573?v=4" alt="avatar" class="w-2/5 p-4 rounded-2xl"></p>
        <p>Name: {{ repo.name }}</p>
        </div>
        <div class="w-full">
            <p>Title: {{ repo.title }}</p>
            <p>Language: {{ repo.language }}</p>
            <p>URL: {{ repo.html_url }}</p>
            <p>Created at: {{ repo.created_at }}</p>
            <p>Forks count: {{ forks_count }}</p> 
            <p>Default branch: {{ default_branch }}</p>
        </div>
    </div>
    </div>
</template>

<script>


export default {
    name: 'Repository',
    components: { },
    data() {
        return {
            repos: null
        }
    },
   mounted() {
        axios.get(`https://api.github.com/users/${this.username}/repos`)
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