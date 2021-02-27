<template>
    <div class="relative">
        <div class="w-full bg-white shadow-lg fixed top-0 h-20 ">
            <div class="max-w-screen-2xl px-6 mx-auto h-full flex justify-between">
                <div class="border-r pr-6 flex">
                    <img class="my-auto h-12 w-auto" src="http://nitseditor.com/images/icons/nit-logo.png">
                </div>
                <div class="flex">
                    <div class="my-auto flex z-50 px-10">
                        <svg @click="openMenus  =! openMenus" :class="openMenus ? 'hidden' : 'block'" class="h-5 w-5 my-auto cursor-pointer" fill="currentColor" viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg"><path d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/></svg>
                    </div>
                    <div class="flex">
                        <svg class="h-5 w-5 my-auto cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005"><path d="M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"/></svg>
                        <svg class="h-5 w-5 my-auto ml-4 cursor-pointer" fill="currentColor" viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0014.422-10.879l60-210a15.003 15.003 0 00-2.445-13.152A15.006 15.006 0 00497 60H130.367l-10.722-48.254A15.003 15.003 0 00105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zm0 0M150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0M362 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="openMenus" class="w-full absolute z-20 top-0 h-screen bg-white bg-opacity-75 flex">
            <div class="w-64 bg-white h-96 m-auto overflow-y-auto">
                <div class="text-base font-medium border-b py-2 cursor-pointer family-montserrat">Home</div>
                <div class="text-base font-medium py-2 border-b cursor-pointer family-montserrat">Navigate your next</div>
                <div class="flex justify-between py-2 border-b cursor-pointer">
                    <div class="text-base my-auto font-medium family-montserrat">Portfolio</div>
                    <svg class="text-gray-600 h-4 w-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/></svg>
                </div>
                <div class="text-base font-medium py-2 border-b cursor-pointer family-montserrat">About us</div>
                <div class="text-base font-medium py-2 border-b cursor-pointer family-montserrat">Contact us</div>
                <div class="flex justify-between py-2 cursor-pointer">
                    <div class="text-base my-auto font-medium family-montserrat">Blog</div>
                    <svg class="text-gray-600 h-4 w-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/></svg>
                </div>
            </div>
            <div class="absolute top-5 right-28">
                <svg @click="openMenus  =! openMenus" :class="openMenus ? 'block' : 'hidden'" class="h-10 z-50 w-10 flex my-auto cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "overlay-header",
    data(){
        return{
            openMenus:false
        }
    }
}
</script>

<style scoped>

</style>
