<template>
<!--    <div>-->
<!--        <div class="flex justify-center items-center">-->
<!--            <div class="relative">-->

<!--                <img src="/nits-assets/images/website.png" alt="website image">-->
<!--                <div class="title">Created Stunnig website</div>-->

<!--                <div>-->
<!--                    <router-link tag="li" to="/registrationpage">-->
<!--                        <a href="#" class="absolute bottom-0 m-64 mr-48 m-2 p-3 bg-teal-500 text-white rounded shadow text-center"> Create Account</a>-->
<!--                    </router-link>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->
<!--    <button class="inline-block max-w-xs w-48 px-4 py-2 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">Hello World</button>-->

<!--<base-hover-flat-button></base-hover-flat-button>-->
<!--    <base-hover-outline></base-hover-outline>-->
<!--    <base-secondary-button></base-secondary-button>-->
<!--    <base-solid-button></base-solid-button>-->
<!--    <base-outline-button></base-outline-button>-->
    <base-horizontal-button></base-horizontal-button>
</template>

<script>
    export default {
        name: "image",
        data(){
            return{

            }
        },
        methods:{
            isOpen(){

            }
        }
    }
</script>

<style scoped>
    .title{
        @apply absolute top-0 m-48 right-0 mr-64 pr-32 font-sans text-2xl text-teal-500 antialiased font-medium;
    }

</style>
