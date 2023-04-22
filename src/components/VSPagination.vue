<template>
  
  <div>
    
    <div class="m-2 py-1 flex justify-center">
        <button class="p-1 border-2" @click="pageNumber = pageNumber - 1">&lt;-</button>
        <span v-for="(item, index) in new Array(10)" :key="index" class="border-2 p-1">
        <button @click="pageNumber = index + 1">{{ index + 1 }}</button>
        </span>
        <button class="p-1 border-2" @click="pageNumber = pageNumber + 1">-&gt;</button>
    </div>
    <slot name="pageNumber" :pageNumber="pageNumber"></slot>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
        return {
        pageNumber: 1
    }
    },
}
</script>
<style>
span {
    margin: 2px;
}
button {
    margin: 2px;
    padding: 8px;
    border-radius: 5px;
}

</style>