<template>
    <div>
        <div class="bg-gray-800 md:h-20 sm:h-16 h-12 shadow-lg fixed z-10 w-full">
            <div class="flex justify-between max-w-7xl md:mx-auto mx-3 h-full">
                <div class="my-auto">
                    <img class="md:h-16 sm:h-8 h-6" src="http://nitseditor.com/images/icons/nit-logo.png">
                </div>
                <div class="hidden md:flex my-auto">
                  <div class="text-white hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-base font-bold">Home</div>
                  <div class="text-white hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-base font-bold">Portfolio</div>
                  <div class="text-white hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-base font-bold">Blog</div>
                  <div class="text-white hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-base font-bold">About Us</div>
                  <div class="text-white hover:text-indigo-700 cursor-pointer mx-5 family-mont lg:text-base font-bold">Contact</div>
                </div>
                <div class="md:hidden my-auto">
                  <svg @click="menubarr = true" class="h-10 w-10 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/></svg>
                </div>
            </div>
            <div class="absolute top-0 right-0 h-screen md:hidden bg-gray-700 w-72 sm:w-96" v-if="menubarr">
              <svg @click="menubarr = false" class="h-4 w-4 my-10 mx-10 text-white" fill="currentColor" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
              <div class="mt-10 ml-5">
                <div class="flex justify-between border-b">
                  <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Home</div>
                  <svg class="h-5 w-5 mt-3 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
                </div>
                <div class="flex justify-between border-b">
                  <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Portfolio</div>
                  <svg class="h-5 w-5 mt-3 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
                </div>
                <div class="flex justify-between border-b">
                  <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Blog</div>
                  <svg class="h-5 w-5 mt-3 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
                </div>
                <div class="flex justify-between border-b">
                  <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">About Us</div>
                  <svg class="h-5 w-5 mt-3 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
                </div>
                <div class="flex justify-between">
                  <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Contact</div>
                  <svg class="h-5 w-5 mt-3 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "dark-responsive-header",
  data(){
    return{
      menubarr:false
    }
  }
}
</script>

<style scoped>

</style>
