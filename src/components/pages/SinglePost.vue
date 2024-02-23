<template>

  <div
    class="flex bg-white shadow-lg rounded-lg mx-8 md:mx-33 my-56 max-w-md md:max-w-4xl"
    v-if="post"
  >
    <div class="flex items-start px-4 py-6">
      <div class="">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900 -mt-1">
            Post ID : {{ post.id }}
          </h2>
        </div>
        <p class="text-gray-700"><strong>Title : </strong>{{ post.title }}</p>
        <p class="mt-3 text-gray-700 text-sm">
          <strong>Body : </strong>{{ post.body }}
        </p>
        <br />
        <div><router-link :to="{name : 'posts'}"><div class="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Go Back</div></router-link></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref(null);

const getPost = async () => {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${route.params.id}`
  );
  post.value = await response.json();
};
watchEffect(getPost)
</script>
