<template>
  <div>
    <nav class="flex justify-end bg-green-400">
    <router-link to="/" class="hover:scale-110 duration-700 hover:text-blue-600 hover:duration-700">Home</router-link> 
    <router-link to="/about" class="ml-4 hover:scale-110 duration-700 hover:text-blue-600 hover:duration-700">About</router-link>
  </nav>
  <router-view/> 
  </div>
  

</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style>


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: crimson;
}
</style>
