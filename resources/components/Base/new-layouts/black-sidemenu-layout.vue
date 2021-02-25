<template>
  <div class="w-full bg-gray-200 h-screen">
    <div class="flex justify-between w-full h-16 bg-white fixed pl-64 border-b">
      <div class="flex my-auto pl-5">
        <button class="family-mont py-2 px-3 text-sm bg-gray-100 text-indigo-400 focus:outline-none rounded-md font-medium">Pages</button>
        <button class="family-mont py-2 px-3 mx-5 text-sm hover:bg-gray-100 hover:text-indigo-400 text-gray-500 focus:outline-none rounded-md font-medium">Features</button>
        <button class="family-mont py-2 px-3 text-sm hover:bg-gray-100 hover:text-indigo-400 text-gray-500 focus:outline-none rounded-md font-medium">Apps</button>
      </div>
      <div class="flex mr-5">
        <div class="flex h-12 w-12 hover:bg-gray-200 rounded-lg my-auto">
          <svg class="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path fill-rule="evenodd" d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
        </div>
        <div class="flex h-12 w-12 hover:bg-gray-200 mx-1 rounded-lg  my-auto">
          <svg class="h-6 text-gray-600 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" opacity="0.3"/>
              <path fill="currentColor" d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"/>
            </g>
          </svg>
        </div>
        <div class="flex h-12 w-12 hover:bg-gray-200 rounded-lg  my-auto">
          <svg class="m-auto text-gray-600 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z" fill-rule="nonzero" opacity="0.3"/>
              <path fill="currentColor" d="M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z" fill-rule="evenodd"/>
            </g>
          </svg>
        </div>
        <div class="flex h-12 w-12 hover:bg-gray-200 mx-1 rounded-lg  my-auto">
          <svg class="m-auto text-gray-800 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill-rule="evenodd"/>
              <path fill="currentColor" d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill-rule="evenodd" opacity="0.3"/>
            </g>
          </svg>
        </div>
        <button class="flex p-2 hover:bg-gray-100 rounded-lg my-auto">
          <div class="flex-col">
            <div class="text-gray-700 font-bold family-mont text-left text-sm">Juned</div>
            <div class="text-gray-500 font-medium family-mont text-sm">Desinger</div>
          </div>
          <div class="h-10 w-10 flex rounded-md bg-gray-200 ml-3">
            <span class="m-auto text-base font-bold family-mont">J</span>
          </div>
        </button>
      </div>
    </div>
    <div class="flex">
      <div class="w-64 fixed h-screen bg-gray-900">
        <div class="flex justify-between w-full family-mont text-white bg-black h-16">
          <img class="my-auto mx-3 h-8" src="http://nitseditor.com/images/icons/nit-logo.png">
          <svg class="text-white my-auto mx-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24"/>
              <path fill="currentColor" d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill-rule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) "/>
              <path fill="currentColor" d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill-rule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) "/>
            </g>
          </svg>
        </div>
        <div class="flex justify-between px-3 h-10 mt-4 hover:bg-black">
         <div class="flex">
           <svg class="text-white my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <rect x="0" y="0" width="24" height="24"/>
               <path fill="currentColor"  d="M5.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M14.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,17.5 C13,16.6715729 13.6715729,16 14.5,16 Z" fill-rule="evenodd"/>
               <path fill="currentColor"  d="M5.5,10 L9.5,10 C10.3284271,10 11,10.6715729 11,11.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,12.5 C20,13.3284271 19.3284271,14 18.5,14 L14.5,14 C13.6715729,14 13,13.3284271 13,12.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z" fill-rule="evenodd" opacity="0.3"/>
             </g>
           </svg>
           <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-normal ml-4">General</div>
         </div>
          <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
        </div>
        <div class="flex h-10 px-3 mt-1 hover:bg-black">
          <svg class="text-white my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <path fill="currentColor" d="M14.8520384,9 L15.7780576,12 L8.22196243,12 L9.14797495,9 L14.8520384,9 Z M13.9260192,6 L10.0739875,6 L10.7050601,3.95551581 C10.8804029,3.38745846 11.4054966,3 12,3 C12.5945036,3 13.1195978,3.38745798 13.2949418,3.95551522 L13.9260192,6 Z M16.7040768,15 L17.9387691,19 L6.06126654,19 L7.2959499,15 L16.7040768,15 Z" fill-rule="evenodd"/>
              <rect fill="#000000" opacity="0.3" x="3" y="20" width="18" height="2" rx="1"/>
            </g>
          </svg>
          <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-normal ml-4">Buidler</div>
        </div>
        <div class="font-medium text-xs text-gray-600 mt-5 ml-4"> CRUD</div>
        <div class="flex justify-between px-3 h-10 mt-4 hover:bg-black">
          <div class="flex">
            <svg class="text-white my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill-rule="evenodd" opacity="0.3"/>
                <path fill="currentColor" d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill-rule="evenodd"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Forms</div>
          </div>
          <div class="flex">

            <svg class="w-4 h-4 my-auto ml-20 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="text-white my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M10,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,7 C22,7.55228475 21.5522847,8 21,8 L10,8 C9.44771525,8 9,7.55228475 9,7 L9,5 C9,4.44771525 9.44771525,4 10,4 Z M10,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,13 C22,13.5522847 21.5522847,14 21,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L21,16 C21.5522847,16 22,16.4477153 22,17 L22,19 C22,19.5522847 21.5522847,20 21,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z" fill-rule="evenodd"/>
                <rect fill="currentColor" opacity="0.3" x="2" y="4" width="5" height="16" rx="1" fill-rule="evenodd"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">KTDatatable</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <rect fill="currentColor" opacity="0.3" x="4" y="5" width="16" height="6" rx="1.5" fill-rule="evenodd"/>
                <rect fill="currentColor" x="4" y="13" width="16" height="6" rx="1.5" fill-rule="evenodd"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Datatables.net</div>
          </div>
          <svg class="w-4 h-4 my-auto  cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex ">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M22,17 L22,21 C22,22.1045695 21.1045695,23 20,23 L4,23 C2.8954305,23 2,22.1045695 2,21 L2,17 L6.27924078,17 L6.82339262,18.6324555 C7.09562072,19.4491398 7.8598984,20 8.72075922,20 L15.381966,20 C16.1395101,20 16.8320364,19.5719952 17.1708204,18.8944272 L18.118034,17 L22,17 Z" fill-rule="evenodd"/>
                <path fill="currentColor" d="M2.5625,15 L5.92654389,9.01947752 C6.2807805,8.38972356 6.94714834,8 7.66969497,8 L16.330305,8 C17.0528517,8 17.7192195,8.38972356 18.0734561,9.01947752 L21.4375,15 L18.118034,15 C17.3604899,15 16.6679636,15.4280048 16.3291796,16.1055728 L15.381966,18 L8.72075922,18 L8.17660738,16.3675445 C7.90437928,15.5508602 7.1401016,15 6.27924078,15 L2.5625,15 Z" fill-rule="evenodd" opacity="0.3"/>
                <path fill="currentColor" d="M11.1288761,0.733697713 L11.1288761,2.69017121 L9.12120481,2.69017121 C8.84506244,2.69017121 8.62120481,2.91402884 8.62120481,3.19017121 L8.62120481,4.21346991 C8.62120481,4.48961229 8.84506244,4.71346991 9.12120481,4.71346991 L11.1288761,4.71346991 L11.1288761,6.66994341 C11.1288761,6.94608579 11.3527337,7.16994341 11.6288761,7.16994341 C11.7471877,7.16994341 11.8616664,7.12798964 11.951961,7.05154023 L15.4576222,4.08341738 C15.6683723,3.90498251 15.6945689,3.58948575 15.5161341,3.37873564 C15.4982803,3.35764848 15.4787093,3.33807751 15.4576222,3.32022374 L11.951961,0.352100892 C11.7412109,0.173666017 11.4257142,0.199862688 11.2472793,0.410612793 C11.1708299,0.500907473 11.1288761,0.615386087 11.1288761,0.733697713 Z" fill-rule="nonzero" transform="translate(11.959697, 3.661508) rotate(-90.000000) translate(-11.959697, -3.661508) "/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Upload</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto ml-20 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>

        </div>
        <div class="font-medium text-xs text-gray-600 mt-5 ml-4">FEATURES</div>
        <div class="flex justify-between px-3 h-10 mt-4 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill-rule="evenodd"/>
                <path fill="currentColor" d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill-rule="evenodd" opacity="0.3"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Bootstrap</div>
          </div>
          <div class="flex">

            <svg class="w-4 h-4 my-auto ml-20 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M3.5,21 L20.5,21 C21.3284271,21 22,20.3284271 22,19.5 L22,8.5 C22,7.67157288 21.3284271,7 20.5,7 L10,7 L7.43933983,4.43933983 C7.15803526,4.15803526 6.77650439,4 6.37867966,4 L3.5,4 C2.67157288,4 2,4.67157288 2,5.5 L2,19.5 C2,20.3284271 2.67157288,21 3.5,21 Z" fill-rule="evenodd" opacity="0.3"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Custom</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M5.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M14.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,17.5 C13,16.6715729 13.6715729,16 14.5,16 Z" fill-rule="evenodd"/>
                <path fill="currentColor" d="M5.5,10 L9.5,10 C10.3284271,10 11,10.6715729 11,11.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,12.5 C20,13.3284271 19.3284271,14 18.5,14 L14.5,14 C13.6715729,14 13,13.3284271 13,12.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z" fill-rule="evenodd" opacity="0.3"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Cards</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z" fill-rule="nonzero"/>
                <circle fill="currentColor" opacity="0.3" cx="12" cy="10" r="6" fill-rule="evenodd"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Widgets</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path fill="currentColor" d="M9,15 L7.5,15 C6.67157288,15 6,15.6715729 6,16.5 C6,17.3284271 6.67157288,18 7.5,18 C8.32842712,18 9,17.3284271 9,16.5 L9,15 Z M9,15 L9,9 L15,9 L15,15 L9,15 Z M15,16.5 C15,17.3284271 15.6715729,18 16.5,18 C17.3284271,18 18,17.3284271 18,16.5 C18,15.6715729 17.3284271,15 16.5,15 L15,15 L15,16.5 Z M16.5,9 C17.3284271,9 18,8.32842712 18,7.5 C18,6.67157288 17.3284271,6 16.5,6 C15.6715729,6 15,6.67157288 15,7.5 L15,9 L16.5,9 Z M9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 L9,9 L9,7.5 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M13,11 L13,7.5 C13,5.56700338 14.5670034,4 16.5,4 C18.4329966,4 20,5.56700338 20,7.5 C20,9.43299662 18.4329966,11 16.5,11 L13,11 Z M16.5,13 C18.4329966,13 20,14.5670034 20,16.5 C20,18.4329966 18.4329966,20 16.5,20 C14.5670034,20 13,18.4329966 13,16.5 L13,13 L16.5,13 Z M11,16.5 C11,18.4329966 9.43299662,20 7.5,20 C5.56700338,20 4,18.4329966 4,16.5 C4,14.5670034 5.56700338,13 7.5,13 L11,13 L11,16.5 Z M7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.43299662,4 11,5.56700338 11,7.5 L11,11 L7.5,11 Z" fill-rule="nonzero"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Icons</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24"/>
                <path fill="currentColor" d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z" fill-rule="evenodd" opacity="0.3"/>
                <path fill="currentColor" d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z" fill-rule="evenodd"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Icons</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
        <div class="flex justify-between px-3 h-10 mt-1 hover:bg-black">
          <div class="flex">
            <svg class="my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" fill-rule="evenodd">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <rect fill="currentColor" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5" fill-rule="evenodd"/>
                <rect fill="currentColor" x="8" y="9" width="3" height="11" rx="1.5" fill-rule="evenodd"/>
                <rect fill="currentColor" x="18" y="11" width="3" height="9" rx="1.5" fill-rule="evenodd"/>
                <rect fill="currentColor" x="3" y="13" width="3" height="7" rx="1.5" fill-rule="evenodd"/>
              </g>
            </svg>
            <div class="my-auto hover:text-white cursor-pointer family-mont text-gray-300 text-sm font-medium ml-4">Charts</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "simple-layout-1"
}
</script>

<style scoped>

</style>
