<template>
    <div class="h-screen w-full relative mt-0 mb-0 mx-auto px-0 sm:px-0 lg:px-0 py-0 bg-cover bg-center" :style="{backgroundImage: 'url(\'https://images.unsplash.com/photo-1560780552-ba54683cb263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D\')', margin: '0', padding: '0', height: '100vh', marginBottom: '45px' }">
      <div class="h-full w-full flex justify-center items-center">
        <div class="sm:text-center lg:text-left px-8 text-black">
          <br/>
          <br/>
          <h1 class="text-6xl tracking-tight font-extrabold sm:text-5xl md:text-7xl">
            <span class="block xl:inline">This is made for Showcasing Vue Router Demo</span>
          </h1>
          <p class="mt-3 text-lg sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae nam beatae aliquid odit pariatur?
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <router-link
                to="/login"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-[royalblue] hover:bg-[rgb(56,90,194)] md:py-4 md:text-xl md:px-10"
              >
                Get started
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>

</script>