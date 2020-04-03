<template>
    <div class="flex flex-row ">
        <div class="fixed w-screen p-5 justify-center shadow rounded text-black text-center font-serif text-lg text-4xl" >Registrations</div>
        <!--        <div class="bg-gray-700 text-white rounded p-2 text-center justify-center font-serif text-lg">Login Form</div>-->
        <div class="sm:w-2/5 w-full bg-grey-light bg-cover bg-center text-black mt-24">
            <img src="/nits-assets/images/login_screen.png" alt="website image">
        </div>
        <div class="sm:w-3/5 w-full bg-white mt-24">
            <div class="p-8">
                <form>
                    <label class="text-xs text-grey">First Name</label>
                    <input  class="bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text" >
                    <label  class="text-xs text-grey">Last Name</label>
                    <input  class="bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text">
                    <label  class="text-xs text-grey">Email</label>
                    <input  class="bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text">
                    <label class="text-xs text-grey">Password</label>
                    <input  class="bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="password" >
                    <label  class="text-xs text-grey">Confirm Password</label>
                    <input  class=" border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="password">
<!--                    <button class="flex shadow border-blue-600 border-2 rounded-full  px-4 py-2 text-blue hover:bg-blue-600 hover:text-white justify-around">-->
<!--                        Register-->
<!--                    </button>-->
                    <button class="flex items-center shadow bg-teal-500 px-4 py-2 text-white hover:bg-teal-light">
                        Register
                    </button>
                    <div class="text-center mt-4">
                        <p class="text-sm text-grey-dark">Already have an account?  <router-link tag="li" to="/newdemo"><a href="#" class="no-underline text-indigo font-bold hover:text-indigo-lighter">Sign in</a></router-link></p>
                    </div>

                </form>
            </div>
        </div>
        <div class="mr-64 mt-5">
            <div class="relative">
                <button @click="isOpen = ! isOpen" class="flex items-center shadow bg-teal-500 px-4 py-2 text-white  block h-10 w-18 border-2 border-black overflow-hidden ">
                    Register
                </button>
<!--                flex items-center shadow bg-teal-500 px-4 py-2 text-white hover:bg-teal-light-->
                <div v-if="isOpen" class=" absolute right-0 w-48 bg-black rounded-lg mt-2">
                    <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="/nits-admin/dashboard">Registration Page</a>
                    <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="" >Login Page</a>
                    <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="">Demo Page</a>
                    <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="">Create Page</a>
                    <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="">Home Page</a>

                </div>
            </div>
<!--            <button class="flex items-center shadow bg-teal-500 px-4 py-2 text-white hover:bg-teal-light">-->
<!--                Register-->
<!--            </button>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegistrationPage",
        data(){
            return{
                isOpen: false,
            }
        },
        methods:{
            // isOpen(){
            //
            // }
        }

    }
</script>

<style scoped>

</style>
