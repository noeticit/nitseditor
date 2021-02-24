<template>
      <div class="bg-white opacity-75 md:h-20 sm:16 h-14 shadow-lg z-10 fixed w-full">
          <div class="flex justify-between max-w-7xl md:mx-auto mx-3 h-full">
              <div class="flex my-auto">
                  <img class="md:h-16 sm:h-10 h-8" src="http://nitseditor.com/images/icons/nit-logo.png">
              </div>
              <div class="hidden md:flex my-auto">
                  <div class="text-gray-800 hover:text-blue-900 font-bold text-base cursor-pointer mx-5">Home</div>
                  <div class="text-gray-800 hover:text-blue-900 font-bold text-base cursor-pointer mx-5">Portfolio</div>
                  <div class="text-gray-800 hover:text-blue-900 font-bold text-base cursor-pointer mx-5">Blog</div>
                  <div class="text-gray-800 hover:text-blue-900 font-bold text-base cursor-pointer mx-5">About Us</div>
                  <div class="text-gray-800 hover:text-blue-900 font-bold text-base cursor-pointer mx-5">Contact</div>
              </div>
              <div class="md:hidden my-auto">
                <svg @click="mbar = true" class="h-10 w-10 z-30 text-white" fill="currentColor" viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0M303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0M303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/></svg>
              </div>
          </div>
          <div class="">

          </div>
      </div>
</template>

<script>
export default {
  name: "transparent-header",
  data(){
    return{
      mbar:false
    }
  }
}
</script>

<style scoped>

</style>
