<template>
    <nits-layout-one v-if="type === 'nits-one'"></nits-layout-one>
    <nits-layout-two v-else-if="type === 'nits-two'">
        <div slot="topbar">
            <div class="bg-white h-20 fixed top-0 border-b border-gray-100 w-full">
                <div class="max-w-screen-2xl mx-auto flex justify-between w-full h-full">
                    <div class="flex my-auto">
                        <button class="ml-28 rounded-lg py-2 px-5 bg-gray-200 text-base font-medium text-indigo-500 focus:outline-none">Dashboard</button>
                        <div class="flex my-auto ml-3">
                            <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Features</button>
                            <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Crud</button>
                            <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Apps</button>
                            <button class=" rounded-lg py-2 px-5 hover:bg-gray-200 bg-white text-base font-medium hover:text-indigo-500 text-gray-500 focus:outline-none">Pages</button>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex h-12 w-12 hover:bg-gray-200 rounded-lg my-auto">
                            <svg class="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path fill-rule="evenodd" d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
                        </div>
                        <div class="flex h-12 w-12 hover:bg-gray-200 mx-1 rounded-lg  my-auto">
                            <svg class="h-6 w-6 text-gray-600 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"/>
                                    <path fill="currentColor" d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" opacity="0.3"/>
                                    <path fill="currentColor" d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"/>
                                </g>
                            </svg>
                        </div>
                        <div class="flex h-12 w-12 hover:bg-gray-200 rounded-lg  my-auto">
                            <svg class="m-auto text-gray-600 hover:text-blue-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"/>
                                    <rect fill="currentColor" x="4" y="4" width="7" height="7" rx="1.5"/>
                                    <path fill="currentColor" d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" opacity="0.3"/>
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
                                <div class="text-gray-700 font-bold family-mont text-left text-sm">Shane</div>
                                <div class="text-gray-500 font-medium family-mont text-sm">Desinger</div>
                            </div>
                            <div class="h-10 w-10 flex rounded-md bg-gray-200 ml-3">
                                <span class="m-auto text-base font-bold family-mont">S</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nits-layout-two>
</template>

<script>
    import NitsLayoutOne from './one';
    import NitsLayoutTwo from './two';
    export default {
        name: "nits-layout",
        components:{NitsLayoutOne, NitsLayoutTwo},
        props: {
            type: {
                type: String,
                default: 'nits-one'
            }
        }
    }
</script>

<style scoped>

</style>
