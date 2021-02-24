<template>
    <div class="h-20 w-full bg-black ">
        <div class="flex justify-between max-w-7xl mx-auto h-full">
            <div class="flex my-auto">
                <div class="text-white text-4xl font-bold">CHARITY<span class=" text-yellow-400 ml-1">.</span></div>
            </div>
            <div class="flex my-auto">
                <div class="flex my-auto">
                    <div class="text-yellow-400 hover:text-blue-900 font-medium text-base cursor-pointer mx-5">Home</div>
                    <div class="text-white hover:text-blue-900 font-bold text-base cursor-pointer mx-5">News</div>
                    <div class="text-white hover:text-blue-900 font-bold text-base cursor-pointer mx-5">Causes</div>
                    <div class="text-white hover:text-blue-900 font-bold text-base cursor-pointer mx-5">About Us</div>
                    <div @mouseover="drop = true" @mouseleave="drop = false" @keydown.enter="drop = !drop" class="flex relative mx-auto">
                        <div class="text-white hover:text-yellow-400 font-bold text-base cursor-pointer mx-5">Pages</div>
                        <svg class="h-4 w-3 hover:text-yellow-400 cursor-pointer text-white mt-1.5 -ml-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.437 407.437"><path fill-rule="evenodd" d="M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z"/></svg>
                        <div v-show="drop" class="w-36 shadow-lg rounded-t-lg h-auto bg-yellow-400 absolute top-12 left-0">
                            <div class="mx-3">
                                <div class="flex justify-between border-b">
                                    <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Work On</div>
                                </div>
                                <div class="flex justify-between border-b">
                                    <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Galary </div>
                                </div>
                                <div class="flex justify-between border-b">
                                    <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Case Study</div>
                                </div>
                                <div class="flex justify-between border-b">
                                    <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">About Us</div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="text-white hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">Contact</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="px-5 ml-8 py-2 bg-yellow-400 hover:text-yellow-400 hover:bg-white text-white font-medium focus:outline-none text-base">Donate</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
name: "different-header",
    data(){
        return{
            drop:false
        }
    }
}
</script>

<style scoped>

</style>
