<template>
  <div class="w-full bg-indigo-400 h-16">
    <div class="flex justify-between w-full max-w-8xl mx-auto h-full">
      <div class="flex w-full">
        <div class="h-full flex ">
          <img class="h-12 my-auto" src="../../public/images/nitslogo.png">
        </div>
        <div class="h-full flex">
          <div class="flex mt-auto ml-14">
            <div class="w-32 text-center my-auto ml-1 family-mont text-base font-medium cursor-pointer rounded-t-lg focus:outline-none py-3 " v-on:click="toggleTab(1)" v-bind:class="{'hover:bg-gray-200 hover:text-black text-white':openTab !==1,'bg-white text-black':openTab ===1}">Home</div>
            <div class="w-32 text-center my-auto ml-1 family-mont text-base font-medium cursor-pointer rounded-t-lg focus:outline-none py-3 " v-on:click="toggleTab(2)" v-bind:class="{'hover:bg-gray-200 hover:text-black text-white' :openTab !==2,'bg-white text-black':openTab ===2}">Reports</div>
            <div class="w-32 text-center my-auto ml-1 family-mont text-base font-medium cursor-pointer rounded-t-lg focus:outline-none py-3 " v-on:click="toggleTab(3)" v-bind:class="{'hover:bg-gray-200 hover:text-black text-white':openTab !==3,'bg-white text-black':openTab ===3}">Orders</div>
            <div class="w-32 text-center my-auto ml-1 family-mont text-base font-medium cursor-pointer rounded-t-lg focus:outline-none py-3 " v-on:click="toggleTab(4)" v-bind:class="{'hover:bg-gray-200 hover:text-black text-white':openTab !==4,'bg-white text-black':openTab ===4}">Help Center</div>
          </div>
        </div>
      </div>
      <div class="flex mr-5">
        <div class="flex h-12 w-12 hover:bg-gray-200 rounded-lg my-auto">
          <svg class="w-5 h-5 text-white cursor-pointer hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path fill-rule="evenodd" d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
        </div>
        <div class="flex h-12 w-12 hover:bg-gray-200 mx-1 rounded-lg  my-auto">
          <svg class="h-6 text-white hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" opacity="0.3"/>
              <path fill="currentColor" d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"/>
            </g>
          </svg>
        </div>
        <div class="flex h-12 w-12 hover:bg-gray-200 rounded-lg  my-auto">
          <svg class="m-auto text-white " fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z" fill-rule="nonzero" opacity="0.3"/>
              <path fill="currentColor" d="M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z" fill-rule="evenodd"/>
            </g>
          </svg>
        </div>
        <div class="flex h-12 w-12 hover:bg-gray-200 mx-1 rounded-lg  my-auto">
          <svg class="m-auto text-white hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill-rule="evenodd"/>
              <path fill="currentColor" d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill-rule="evenodd" opacity="0.3"/>
            </g>
          </svg>
        </div>
        <button class="flex p-2 hover:bg-indigo-100 rounded-lg my-auto">
          <div class="flex-col">
            <div class="text-white font-bold family-mont text-left text-sm">Juned</div>
            <div class="text-gray-300 font-medium family-mont text-sm">Desinger</div>
          </div>
          <div class="h-10 w-10 flex rounded-md bg-indigo-200 ml-3">
            <span class="m-auto text-base text-white font-bold family-mont">J</span>
          </div>
        </button>
      </div>
    </div>
    <div v-if="openTab ===1" v-bind:class="{'hidden':openTab !==1, 'block':openTab ===1}" class=" ">
      <div class="bg-white h-20 shadow-lg">
        <div class="max-w-7xl mx-auto flex justify-between h-full">
          <div class="flex my-auto">
            <button class="ml-28 rounded-lg py-2 px-5 bg-gray-200 text-base font-medium text-indigo-500 focus:outline-none">Dashboard</button>
            <div class="flex my-auto ml-3">
              <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Features</button>
              <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Crud</button>
              <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Apps</button>
              <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Pages</button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex max-w-7xl mx-auto grid grid-cols-3 gap-10 mt-10 h-full">
        <div class="shadow-lg rounded-lg my-auto">
          <img class="rounded-t-lg" src="../../public/images/dummy-1.jpg">
          <div class="family-mont text-xl p-4 text-gray-700 font-semibold">Lorma Da Soloa</div>
          <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
          <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
        </div>
        <div class="shadow-lg rounded-lg my-auto">
          <img class="rounded-t-lg" src="../../public/images/dummy-2.jpg">
          <div class="family-mont text-xl p-4 text-gray-700 font-semibold">Lorma Da Soloa</div>
          <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
          <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
        </div>
        <div class="shadow-lg rounded-lg my-auto">
          <img class="rounded-t-lg" src="../../public/images/dummy-3.jpg">
          <div class="family-mont text-xl p-4 text-gray-700 font-semibold">Lorma Da Soloa</div>
          <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
          <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
        </div>
      </div>
    </div>
    <div v-if="openTab ===2" v-bind:class="{'hidden':openTab !==2, 'block':openTab ===2}" class=" ">
      <div class="flex bg-white h-20 shadow-lg w-full ">
        <div class="flex justify-between max-w-7xl mx-auto w-full">
          <div class="my-auto">
            <button class="rounded-lg mx-10 py-2 px-5 bg-gray-200 text-base font-medium text-indigo-500 focus:outline-none">Orders</button>
            <button class="rounded-lg py-2 px-5 bg-pink-200 text-base font-medium text-indigo-500 focus:outline-none">Services</button>
          </div>
          <div class="my-auto">
            <button class="rounded-full py-2 px-7 bg-red-400 text-base font-medium text-indigo-500 focus:outline-none">Reports</button>
          </div>
        </div>
      </div>
      <div class="flex max-w-7xl mx-auto mt-10 h-full">
        <div class=" w-full shadow-lg rounded-lg my-auto mx-auto">
          <div class="py-3 my-auto bg-gray-300 family-mont font-semibold text-gray-700 text-lg rounded-t-lg text-center">Negore Famsoya</div>
          <div class="flex max-w-7xl mx-auto grid grid-cols-2 gap-10 mt-10 h-full mx">
            <div class="shadow-lg rounded-lg my-auto w-full">
              <img  class="rounded-t-lg mx-auto" src="../../public/images/dummy-1.jpg">
              <div class="family-mont text-xl p-4 text-gray-700 font-semibold mx-12">Lorma Da Soloa</div>
              <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4 ml-12">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
              <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4 ml-12">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
            </div>
            <div class="shadow-lg rounded-lg my-auto">
              <img class="rounded-t-lg mx-auto" src="../../public/images/dummy-2.jpg">
              <div class="family-mont text-xl p-4 text-gray-700 font-semibold mx-12">Lorma Da Soloa</div>
              <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4 ml-12">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
              <div class="family-mont text-base font-medium text-gray-400 pb-3 px-4 ml-12">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-latout-1",
  data(){
    return{
      openTab:1
    }
  },
  methods:{
    toggleTab:function (tabNumber ,assets){
      this.openTab=tabNumber
    },
  }
}
</script>

<style scoped>

</style>
