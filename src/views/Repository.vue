<template>
    <div class="">
        <div class="flex justify-center mx-auto border-solid border-2 mt-6 bg-blue-600 w-3/6 flex-nowrap">
       <div>
        <p><img src="https://avatars.githubusercontent.com/u/85955573?v=4" alt="avatar" class="w-2/5 p-4 rounded-lg"></p>
        <p>Name:</p>
        </div>
        <div>
            <p>Title:</p>
            <p>Language:</p>
            <p>URL:</p>
            <p>Created at:</p>
            <p>Updated at:</p>
            <p>Forks count:</p> 
            <p>Default branch:</p>

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