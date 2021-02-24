<template>
    <div class="w-full">
        <div class="md:h-20 sm:h-16 h-12 shadow-lg fixed z-10 w-full" :class="background_color">
            <div class="flex justify-between max-w-7xl md:mx-auto mx-3 h-full">
                <a href="/" class="my-auto">
                    <img class="md:h-16 sm:h-8 h-6" :src="logo">
                </a>
                <div class="hidden md:flex my-auto">
                    <a @mouseover="item.open = true" @mouseleave="item.open = false" @keydown.enter="item.open = !item.open" v-for="(item,index) in menu" :href="item.url" :class="text_color" class="hover:text-indigo-700 flex relative cursor-pointer mx-5 family-mont lg:text-base font-bold my-auto">
                        <span>{{item.name}}</span>
                        <svg v-if="item.sub_menu && item.sub_menu.length" class="h-4 w-3 mt-1.5 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.437 407.437"><path fill-rule="evenodd" d="M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z"/></svg>
                        <div v-if="item.sub_menu && item.sub_menu.length" v-show="item.open" :class="background_color" class="w-36 shadow-lg rounded-lg h-auto absolute top-12 left-0">
                            <div class="mx-3">
                                <div v-for="(ele,ind) in item.sub_menu" class="flex justify-between" :class="ind+1 < item.sub_menu.length ? 'border-b' : ''">
                                    <a href="#" :class="text_color" class="hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">{{ele.name}}</a>
                                </div>
                            </div>
                        </div>
                    </a>
                    <button :class="button_decoration" v-if="redirect_btn" class="px-5 ml-8 py-2 my-auto font-medium focus:outline-none text-base">{{redirect_btn_name}}</button>
                </div>
                <div class="md:hidden my-auto">
                    <svg @click="menubarr = true" class="h-10 w-10" :class="text_color" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/></svg>
                </div>
            </div>
            <div class="absolute top-0 right-0 h-screen text-black md:hidden w-72 sm:w-96" :class="responsive_background_color" v-if="menubarr">
                <svg @click="menubarr = false" class="h-4 w-4 my-10 mx-10" fill="currentColor" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
                <div class="mt-10 ml-5">
                    <a :href="item.url" v-for="(item, index) in menu"  :class="index+1 < menu.length ? 'flex justify-between border-b ' + responsive_text_color : 'flex justify-between ' + responsive_text_color">
                        <div class="cursor-pointer my-3 family-mont text-sm font-medium">{{item.name}}</div>
                        <svg class="h-5 w-5 mt-3 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "demo-header",
    data(){
        return{
            menubarr:false,
        }
    },
    props:{
        logo: String,
        menu: Array,
        background_color: {
            type: String,
            default : 'bg-gray-800'
        },
        text_color: {
            type: String,
            default : 'text-white'
        },
        redirect_btn: {
            type: Boolean,
            default: false
        },
        redirect_btn_name: {
            type: String,
            default: 'Login'
        },
        button_decoration: {
            type: String,
            default: 'bg-gray-600 text-white'
        },
        responsive_text_color: {
            type: String,
            default: 'text-gray-800'
        },
        responsive_background_color: {
            type: String,
            default: 'bg-white'
        },

    }
}
</script>

<style scoped>

</style>
