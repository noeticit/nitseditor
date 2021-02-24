<template>
  <div class="w-full bg-cover h-screen" style="background-image: url(http://html.modernwebtemplates.com/colorway/images/slide01.jpg)">
   <div class="max-w-7xl mx-auto pt-10 flex">
     <div class="flex justify-between w-full">
       <img class="" src="http://html.modernwebtemplates.com/colorway/images/logo-light.png">
       <div class="relative">
         <svg @click="head = true" class="cursor-pointer h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/></svg>
       </div>
     </div>
   </div>
    <div :class="head ? 'translate-y-0 ease-in' : 'translate-y-full ease-out'" class="fixed top-0 w-full h-screen py-4 transition duration-500 transform z-50">
      <div class=" h-28 w-full fixed top-0 bg-white shadow-lg">
          <div class="flex justify-center max-w-7xl mx-auto h-full">
              <div class="flex justify-between w-full">
                  <img class="my-auto" src="http://html.modernwebtemplates.com/colorway/images/logo.png">
                  <div class="flex ">
                      <div class="family-mont cursor-pointer text-gray-800 text-sm border-b-2 border-red-500 ml-5 font-semibold my-auto">HOME</div>
                      <div class="family-mont cursor-pointer text-gray-800 text-sm hover:border-b-2 border-blue-500 ml-20 font-semibold my-auto">PAGES</div>
                      <div class="family-mont cursor-pointer text-gray-800 text-sm ml-20 font-semibold my-auto">DESIGN</div>
                      <div class="family-mont cursor-pointer text-gray-800 text-sm ml-20 font-semibold my-auto">SERVICES</div>
                      <div class="family-mont cursor-pointer text-gray-800 text-sm ml-20 font-semibold my-auto">SHOP</div>
                      <div class="family-mont cursor-pointer text-gray-800 text-sm ml-20 font-semibold my-auto">BLOG</div>
                      <div class="family-mont cursor-pointer text-gray-800 text-sm ml-20 font-semibold my-auto">CONTACT</div>
                  </div>
                  <div @click="head = false" class="flex my-auto cursor-pointer">
                      <div class="family-mont text-xl font-extrabold cursor-pointer" style="color: #FF4073">close</div>
                      <svg class="h-3 w-3 my-auto font-bold ml-3 hover:text-red-500 cursor-pointer" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
                  </div>
              </div>
          </div>
      </div>
      <div class="mt-10" style="background-color: #453074">
        <div class="flex grid grid-cols-3 max-w-7xl mx-auto w-full">
          <div class="py-36 w-full">
            <div class="family-mont text-green-300 text-sm font-semibold text-center">call us 24 / 7</div>
            <div class="family-mont mt-2 text-white text-3xl font-medium text-center">02562 34762</div>
            <img class="h-16 mt-4 mx-auto" src="http://html.modernwebtemplates.com/colorway/images/clr-phone-call-3.png">
          </div>
          <div class="py-36 w-full">
            <div class="family-mont text-green-300 text-sm font-semibold text-center">WRITE US</div>
            <div class="family-mont mt-2 text-white text-3xl font-medium text-center">info@noeticitservice</div>
            <img class="h-16 mt-4 mx-auto" src="http://html.modernwebtemplates.com/colorway/images/clr-mail-5.png">
          </div>
          <div class="py-36 w-full">
            <div class="family-mont text-green-300 text-sm font-semibold text-center">7 DAYS A WEEk</div>
            <div class="family-mont mt-2 text-white text-3xl font-medium text-center">9:00AM - 8:00PM</div>
            <img class="h-16 mt-4 mx-auto" src="http://html.modernwebtemplates.com/colorway/images/clr-clock-5.png">
          </div>
        </div>
      </div>
      <div class="h-72" style="background-color: #FF4073">
        <div class="flex justify-center pt-44">
          <svg class="h-10 w-10 " viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0" fill="#4a7aff"/><path d="M267.234 511.738C403.406 505.86 512 393.618 512 256c0-.996-.027-1.988-.04-2.984L334.263 75.312l-190 198.594 105.566 105.567-48.676 66.183zm0 0" fill="#0053bf"/><path d="M334.262 75.313v57.968s-66.555-9.66-66.555 33.278v42.937h60.113l-7.511 65.48h-52.602v170.68h-66.555v-170.68l-56.894-1.074v-64.406h55.82v-49.379s-3.683-73.457 68.703-86.949c30.059-5.605 65.48 2.145 65.48 2.145zm0 0" fill="#fff"/><path d="M334.262 133.281V75.312s-35.422-7.75-65.48-2.144a101.494 101.494 0 00-13.137 3.348v369.14h12.062v-170.68h52.598l7.515-65.48h-60.113V166.56c0-42.937 66.555-33.278 66.555-33.278zm0 0" fill="#dce1eb"/></svg>
          <svg class="h-10 w-10 mx-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.319 291.319"><path d="M145.659 0c80.45 0 145.66 65.219 145.66 145.66 0 80.45-65.21 145.659-145.66 145.659S0 226.109 0 145.66C0 65.219 65.21 0 145.659 0z" fill="#26a6d1"/><path d="M236.724 98.129c-6.363 2.749-13.21 4.597-20.392 5.435 7.338-4.27 12.964-11.016 15.613-19.072a71.965 71.965 0 01-22.55 8.366c-6.473-6.691-15.695-10.87-25.909-10.87-19.591 0-35.486 15.413-35.486 34.439 0 2.704.31 5.335.919 7.857-29.496-1.438-55.66-15.158-73.157-35.996a33.46 33.46 0 00-4.807 17.315c0 11.944 6.263 22.504 15.786 28.668-5.826-.182-11.289-1.721-16.086-4.315v.437c0 16.696 12.235 30.616 28.476 33.784a36.707 36.707 0 01-9.35 1.211c-2.285 0-4.506-.209-6.673-.619 4.515 13.692 17.625 23.651 33.165 23.925-12.153 9.249-27.457 14.748-44.089 14.748-2.868 0-5.69-.164-8.476-.482 15.722 9.777 34.367 15.485 54.422 15.485 65.292 0 100.997-52.51 100.997-98.029l-.1-4.461a70.838 70.838 0 0017.697-17.826z" fill="#fff"/></svg>
          <svg class="h-10 w-10" viewBox="0 -77 512.002 512" xmlns="http://www.w3.org/2000/svg"><path d="M501.453 56.094c-5.902-21.934-23.195-39.223-45.125-45.13C416.262 0 255.996 0 255.996 0S95.734 0 55.668 10.547C34.16 16.449 16.445 34.164 10.543 56.094 0 96.156 0 179.242 0 179.242s0 83.504 10.543 123.149c5.906 21.93 23.195 39.222 45.129 45.129C96.156 358.484 256 358.484 256 358.484s160.262 0 200.328-10.546c21.934-5.903 39.223-23.196 45.129-45.125C512 262.745 512 179.663 512 179.663s.422-83.508-10.547-123.57zm0 0" fill="red"/><path d="M204.969 256l133.27-76.758-133.27-76.758zm0 0" fill="#fff"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "humburger-header",
  data(){
  return{
    head:false
  }
  }
}
</script>

<style scoped>

</style>
