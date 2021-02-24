<template>
    <div>
      <div class="w-full bg-white shadow-lg h-20 z-20 fixed relative">
        <div class="max-w-7xl mx-auto h-full flex justify-between">
          <div class="my-auto">
            <img class="md:h-14 h-8 w-auto" src="http://nitseditor.com/images/icons/nit-logo.png">
          </div>
          <div class="hidden md:flex my-auto">
            <div class="text-green-400 hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-lg font-semibold">Home</div>
            <div class="text-green-400 hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-lg font-semibold">Portfolio</div>
            <div class="text-green-400 hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-lg font-semibold">Blog</div>
            <div class="text-green-400 hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-lg font-semibold">About Us</div>
            <div class="text-green-400 hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-lg font-semibold">Contact</div>
            <svg @click="search = true" class=" w-6 h-6 text-green-700 hover:text-indigo-600 mx-5 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path fill-rule="evenodd" d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
          </div>
          <div class="md:hidden my-auto">
            <svg @click="openMenus = true" class="h-6 w-6 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-64 absolute top-0 z-30 right-0 bg-blue-400 h-screen" v-if="openMenus">
        <svg @click="openMenus = false" class="h-10 w-10 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"/></svg>
        <div class="bg-blue-400 p-10">
          <div class="">Home</div>
          <div class="text-white">csd</div>
          <div class="text-white">sdsd</div>
          <div class="text-white">sdsd</div>
          <div class="text-white">sds</div>
        </div>
      </div>
      <div class="w-full h-20 bg-white shadow-lg z-40 absolute top-0 left-0" v-if="search">
        <div class="relative w-full">
          <input class="w-full h-full bg-white text-gray-700 pl-10 focus:outline-none pt-5 text-2xl placeholder-gray-800 font-semibold"placeholder="Search Here">
          <div class="absolute top-5 right-5 h-10 w-10 my-auto">
            <svg @click="search = false" class="w-4 h-4 mt-3 hover:text-red-500" fill="currentColor" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: "fixed-header",
  data(){
    return{
      openMenus:false,
      search:false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
.family-mont{
  font-family: 'Montserrat', sans-serif;
}
</style>
