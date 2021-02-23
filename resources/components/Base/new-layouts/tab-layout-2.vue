<template>
  <div class="w-full h-screen bg-gray-100">
    <div class="flex w-full md:h-24 h-10 sm:h-16 fixed bg-gray-100 relative">
      <div class="flex justify-between max-w-7xl lg:mx-auto mx-3 w-full h-full">
        <div class="flex h-full">
          <img class="lg:h-14 h-8 md:h-10 my-auto" src="../../public/images/nit-logo.png">
        </div>
        <div class="hidden md:flex my-auto">
          <div class="relative">
            <svg class="w-4 h-4 text-gray-400 absolute top-3 left-3 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path fill-rule="evenodd" d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
            <input type="text" class="px-10 h-10 text-sm font-medium family-mont bg-gray-200 rounded-lg focus:outline-none focus:bg-white" placeholder="Search">
          </div>
          <div class="flex h-10 w-10 bg-gray-200 ml-3 rounded-lg cursor-pointer my-auto">
            <svg class="h-6 text-gray-600 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" opacity="0.3"/>
                <path fill="currentColor" d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"/>
              </g>
            </svg>
          </div>
          <div class="flex h-10 w-10 bg-gray-200 ml-3 rounded-lg cursor-pointer  my-auto">
            <svg class="m-auto text-gray-600 hover:text-blue-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z" fill-rule="nonzero" opacity="0.3"/>
                <path fill="currentColor" d="M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z" fill-rule="evenodd"/>
              </g>
            </svg>
          </div>
          <div class="flex h-10 w-10 bg-gray-200 ml-3 rounded-lg cursor-pointer  my-auto">
            <svg class="m-auto text-gray-600 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill-rule="evenodd"/>
                <path fill="currentColor" d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill-rule="evenodd" opacity="0.3"/>
              </g>
            </svg>
          </div>
          <div class="flex h-10 w-10 bg-gray-200 ml-3 rounded-lg cursor-pointer  my-auto">
            <svg class="m-auto text-gray-600 hover:text-blue-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24"/>
                <path fill="currentColor" d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill-rule="nonzero" opacity="0.3"/>
                <path fill="currentColor" d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill-rule="nonzero"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="md:hidden my-auto">
        <svg @click="menu = true" class="h-6 w-6 text-gray-800 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/></svg>
      </div>
    </div>
    <div class="md:hidden flex absolute top-10 sm:top-16 right-0 z-20 w-full sm:w-96 bg-gray-200 shadow-lg rounded-b-lg p-5" v-if="menu">
      <div class="">
        <svg @click="menu = false" class="h-2 w-2 -mt-2 text-gray-800" fill="currentColor" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
      </div>
      <div class="my-auto">
        <div class=" flex-col relative mt-5 ">
          <svg class="w-3 h-3 text-gray-400 absolute top-3 left-3 cursor-pointer my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path fill-rule="evenodd" d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
          <input type="text" class="sm:px-10 px-8 h-8 text-sm font-medium family-mont bg-gray-300 rounded-lg focus:outline-none focus:bg-white" placeholder="Search">
        </div>
        <div class="flex h-10 w-10 bg-gray-300 mt-4 rounded-lg cursor-pointer  my-auto">
          <svg class="h-6 text-gray-600 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" opacity="0.3"/>
              <path fill="currentColor" d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"/>
            </g>
          </svg>
        </div>
        <div class="flex h-10 w-10 bg-gray-300 mt-2 rounded-lg cursor-pointer  my-auto">
          <svg class="m-auto text-gray-600 hover:text-blue-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z" fill-rule="nonzero" opacity="0.3"/>
              <path fill="currentColor" d="M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z" fill-rule="evenodd"/>
            </g>
          </svg>
        </div>
        <div class="flex h-10 w-10 bg-gray-300 mt-2 rounded-lg cursor-pointer  my-auto">
          <svg class="m-auto text-gray-600 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill-rule="evenodd"/>
              <path fill="currentColor" d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill-rule="evenodd" opacity="0.3"/>
            </g>
          </svg>
        </div>
        <div class="flex h-10 w-10 bg-gray-300 mt-2 rounded-lg cursor-pointer  my-auto">
          <svg class="m-auto text-gray-600 hover:text-blue-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24"/>
              <path fill="currentColor" d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill-rule="nonzero" opacity="0.3"/>
              <path fill="currentColor" d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill-rule="nonzero"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex max-w-7xl lg:mx-auto mx-3 grid grid-cols-5 w-full h-24">
      <div class="rounded-tl-lg h-full flex" v-on:click="toggleTab(1)" v-bind:class="{'bg-gray-200 text-black font-medium':openTab !==1,'bg-white text-blue-600 font-semibold':openTab ===1}">
        <div class="m-auto cursor-pointer">
          <div class="family-mont font-semibold text-base text-center" >HOME</div>
          <div class="family-mont font-medium text-xs text-center">Dashboard & Reports</div>
        </div>
      </div>
      <div class="flex h-full border-white border-l border-r" v-on:click="toggleTab(2)" v-bind:class="{'bg-gray-200 text-black font-medium':openTab !==2,'bg-white text-blue-600 font-semibold':openTab ===2}">
        <div class="m-auto cursor-pointer" >
          <div class="family-mont text-base text-center">ACCOUNTIG</div>
          <div class="family-mont text-xs  text-center">Corporate Finance & Audits</div>
        </div>
      </div>
      <div class="flex h-full" v-on:click="toggleTab(3)" v-bind:class="{'bg-gray-200 text-black font-medium':openTab !==3,'bg-white text-blue-600 font-semibold':openTab ===3}">
        <div class="m-auto cursor-pointer">
          <div class="family-mont  text-base  text-center">REPORTS</div>
          <div class="family-mont  text-xs  text-center">Tools & Metrics</div>
        </div>
      </div>
      <div class="flex h-full border-white border-l border-r" v-on:click="toggleTab(4)" v-bind:class="{'bg-gray-200 text-black font-medium':openTab !==4,'bg-white text-blue-600 font-semibold':openTab ===4}">
        <div class="m-auto cursor-pointer">
          <div class="family-mont  text-base  text-center">ORDERS</div>
          <div class="family-mont  text-xs  text-center">Order management</div>
        </div>
      </div>
      <div class="rounded-tr-lg flex h-full" v-on:click="toggleTab(5)" v-bind:class="{'bg-gray-200 text-black font-medium':openTab !==5,'bg-white text-blue-600 font-semibold':openTab ===5}">
        <div class="m-auto cursor-pointer">
          <div class="family-mont font-semibold text-base text-gray-600 text-center">CUSTOMERS</div>
          <div class="family-mont font-medium text-xs text-gray-400 text-center">CRM & Support</div>
        </div>
      </div>
    </div>
    <div v-if="openTab ===1" v-bind:class="{'hidden':openTab !==1, 'block':openTab ===1}" class="">
       <div class="flex justify-between max-w-7xl mx-auto h-16 w-full bg-white">
      <div class="flex my-auto ml-8">
        <button class="family-mont py-2 px-3 text-sm bg-gray-100 text-gray-600 focus:outline-none rounded-md font-semibold">Dashboard</button>
        <button class="family-mont py-2 px-3 ml-5 text-sm hover:bg-gray-100 hover:text-indigo-400 text-gray-600 focus:outline-none rounded-md font-semibold">Features</button>
        <button class="family-mont py-2 px-3 ml-5 text-sm hover:bg-gray-100 hover:text-indigo-400 text-gray-600 focus:outline-none rounded-md font-semibold">CRUD</button>
        <button class="family-mont py-2 px-3 ml-5 text-sm hover:bg-gray-100 hover:text-indigo-400 text-gray-600 focus:outline-none rounded-md font-semibold">Apps</button>
        <button class="family-mont py-2 px-3 ml-5 text-sm hover:bg-gray-100 hover:text-indigo-400 text-gray-600 focus:outline-none rounded-md font-semibold">Pages</button>
      </div>
    </div>
    </div>
    <div v-if="openTab ===2" v-bind:class="{'hidden':openTab !==2, 'block':openTab ===2}" class="">
       <div class="flex justify-between max-w-7xl mx-auto h-16 w-full bg-white">
      <div class="flex justify-between my-auto ml-5">
         <button class="family-mont py-2 px-3 text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 focus:outline-none rounded-md font-semibold">Latest Orders</button>
         <button class="family-mont py-2 px-3 ml-5 text-sm bg-gray-100 hover:bg-gray-200 hover:text-indigo-400 text-gray-600 focus:outline-none rounded-md font-semibold">Customer Service</button>
       </div>
        <button class="family-mont py-2 px-3 mr-5 text-sm hover:bg-gray-100 hover:text-indigo-400 bg-black text-white focus:outline-none rounded-md font-semibold my-auto">Generate Reports</button>
    </div>
    </div>
    <div v-if="openTab ===3" v-bind:class="{'hidden':openTab !==3, 'block':openTab ===3}" class="">
       <div class="flex justify-between max-w-7xl mx-auto h-16 w-full bg-white">
      <div class="flex justify-between my-auto ml-5">
         <button class="family-mont py-2 px-3 text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 focus:outline-none rounded-md font-semibold">Latest Orders</button>
       </div>
        <button class="family-mont py-2 px-3 mr-5 text-sm hover:bg-gray-100 hover:text-indigo-400 bg-black text-white focus:outline-none rounded-md font-semibold my-auto">Generate Reports</button>
    </div>
    </div>
    <div v-if="openTab ===4" v-bind:class="{'hidden':openTab !==4, 'block':openTab ===4}" class="">
       <div class="flex justify-between max-w-7xl mx-auto h-16 w-full bg-white">
      <div class="flex justify-between my-auto ml-5">
         <button class="family-mont py-2 px-3 text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 focus:outline-none rounded-md font-semibold">Latest Orders</button>
         <button class="family-mont py-2 px-3 ml-5 text-sm bg-gray-100 hover:bg-gray-200 hover:text-indigo-400 text-gray-600 focus:outline-none rounded-md font-semibold">Customer Service</button>
       </div>
    </div>
    </div>
    <div v-if="openTab ===5" v-bind:class="{'hidden':openTab !==5, 'block':openTab ===5}" class="">
       <div class="flex justify-between max-w-7xl mx-auto h-16 w-full bg-white">
      <div class="flex justify-between my-auto ml-5">
         <button class="family-mont py-2 px-3 text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 focus:outline-none rounded-md font-semibold">Dashboaed</button>
       </div>
    </div>
    </div>
    <div class="flex max-w-7xl mx-auto bg-white border-t border-gray-300 w-full p-5 ">
      <div class="flex grid grid-cols-3 gap-5 my-8">
        <div class=" border border-gray-300 rounded-lg p-6">
          <div class="family-mont py-5 text-gray-500 text-base font-semibold">Meeting Schedule</div>
          <div class="family-mont text-indigo-600 text-xs font-normal">3:30PM - 4:20PM</div>
          <div class="family-mont py-5 text-gray-600 text-base font-semibold">Craft a headline that is informative
            and will capture readers</div>
        </div>
        <div class=" border border-gray-300 rounded-lg p-6">
          <div class="family-mont py-5 text-gray-500 text-base font-semibold">Meeting Schedule</div>
          <div class="family-mont text-indigo-600 text-xs font-normal">3:30PM - 4:20PM</div>
          <div class="family-mont py-5 text-gray-600 text-base font-semibold">Craft a headline that is informative
            and will capture readers</div>
        </div>
        <div class=" border border-gray-300 rounded-lg p-6">
          <div class="family-mont py-5 text-gray-500 text-base font-semibold">Meeting Schedule</div>
          <div class="family-mont text-indigo-600 text-xs font-normal">3:30PM - 4:20PM</div>
          <div class="family-mont py-5 text-gray-600 text-base font-semibold">Craft a headline that is informative
            and will capture readers</div>
        </div>
      </div>
    </div>
    <div class="flex max-w-7xl mx-auto bg-white border-t border-gray-300 w-full p-5 ">
      <div class="flex grid grid-cols-3 gap-5 my-8">
        <div class=" border border-gray-300 rounded-lg p-6">
          <div class="family-mont py-5 text-gray-500 text-base font-semibold">Meeting Schedule</div>
          <div class="family-mont text-indigo-600 text-xs font-normal">3:30PM - 4:20PM</div>
          <div class="family-mont py-5 text-gray-600 text-base font-semibold">Craft a headline that is informative
            and will capture readers</div>
        </div>
        <div class=" border border-gray-300 rounded-lg p-6">
          <div class="family-mont py-5 text-gray-500 text-base font-semibold">Meeting Schedule</div>
          <div class="family-mont text-indigo-600 text-xs font-normal">3:30PM - 4:20PM</div>
          <div class="family-mont py-5 text-gray-600 text-base font-semibold">Craft a headline that is informative
            and will capture readers</div>
        </div>
        <div class=" border border-gray-300 rounded-lg p-6">
          <div class="family-mont py-5 text-gray-500 text-base font-semibold">Meeting Schedule</div>
          <div class="family-mont text-indigo-600 text-xs font-normal">3:30PM - 4:20PM</div>
          <div class="family-mont py-5 text-gray-600 text-base font-semibold">Craft a headline that is informative
            and will capture readers</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../pages/component/button";
export default {
  data(){
    return{
      openTab:1,
      menu:false
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
