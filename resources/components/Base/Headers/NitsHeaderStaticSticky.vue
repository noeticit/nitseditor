<template>
    <div class="">

                <div class="flex fixed top-0 w-full justify-between items-center shadow-lg py-4 bg-white">
                    <div class="float-left border-r pr-3 ">
                        <img class="h-16 w-56 mt-0 mr-5" src="/nits-assets/images/nits-editor-logo.png">
                    </div>
                    <nits-menus
                            :menus="menus">
                    </nits-menus>
                    <div class="border-l ">
                        <svg class="w-5 h-5 mt-0 cursor-pointer text-gray-800 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                           <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                        </svg>
                    </div>
                </div>

<!--                <div @click="search = ! search" class="border-l ">-->
<!--                    <svg class="w-5 h-5 mt-10 cursor-pointer text-gray-800 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                        <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>-->
<!--                    </svg>-->
<!--                </div>-->
<!--            </div>-->

<!--        </nav>-->

<!--        <div class="absolute flex top-0 w-full " v-if="search">-->
<!--            <input class="w-full h-24 ml-2 border border-gray-300 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-gray-700 leading-normal" type="text" placeholder="TYPE HERE..">-->

<!--            <svg @click="search = ! search" class="h-5 w-5 mt-8 ml-4 text-black " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>-->
<!--            </svg>-->
<!--        </div>-->

<!--        <div class="absolute bottom-0 px-56 mb-16 ml-64 ">-->
<!--            <h3 class=" font-black text-5xl text-white ">{{heading}}</h3>-->
<!--        </div>-->
        <div class="h-11/12 w-screen">
            <img src="/project-assets/images/work-from-home-getty.jpg" class="w-screen h-full" alt=" image">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsStaticStickyHeader",
        data(){
            return{
                // isVisibleHeader1: false,
                // isVisibleHeader2: false,
                search: false,
            }
        },

        props: {

            // heading:{
            //     type: String,
            //     required: true
            // },
            menus: Array
        },

    }
</script>

<style scoped>

</style>