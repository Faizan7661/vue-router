<template>
   <div class="flex">
    <div class="w-2/3">

        <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" v-if="posts.length>0" >
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    TITLE
                </th>
                <th scope="col" class="px-6 py-3">
                    Body
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ post.id }}
                </td>
                <td class="px-6 py-4">
                    {{ post.title }}
                </td>
                <td class="px-6 py-4">
                    {{post.body}}
                </td> 
                <td class="px-6 py-4">
                   <router-link :to="{name : 'SinglePost', params : {id : post.id}}"><div class="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">View Post</div></router-link>
                </td>
    
            </tr>
        </tbody>
    </table>
</div>
    </div>
    <div class="w-1/3 px-8" >
        <router-view></router-view>
    </div>
</div>



</template>

<script setup>
import { onMounted, ref } from 'vue';

const posts = ref([])

onMounted(()=>{
    
    fetchPosts();

})

const fetchPosts =async()=>{
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    posts.value = await response.json()
}
</script>