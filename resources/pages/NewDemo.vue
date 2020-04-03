<template>
    <div class="flex flex-row ">
    <div class="fixed bg-gray-700  w-screen p-5 justify-center shadow rounded text-white text-center font-serif text-lg text-4xl" >Welcome to Tailwind CSS</div>
    <!--        <div class="bg-gray-700 text-white rounded p-2 text-center justify-center font-serif text-lg">Login Form</div>-->
    <div class="sm:w-2/5 w-full bg-grey-light bg-cover bg-center text-black mt-24">
        <img src="/nits-assets/images/website.png" alt="website image">
    </div>
    <div class="sm:w-3/5 w-full bg-white mt-24">
        <div class="p-8">
        <form>
            <label class="text-xs text-grey">Username</label>
            <input  class="bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text" placeholder="Enter Your Name">
            <label  class="text-xs text-grey">Password</label>
            <input  class="bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="password"
                    placeholder="Enter Your Password">
            <button class="flex shadow border-blue-600 border-2 rounded-full  px-4 py-2 text-blue hover:bg-blue-600 hover:text-white justify-around">
                <svg class="inline-block h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M15.989 19.129C16 17 13.803 15.74 11.672 14.822c-2.123-.914-2.801-1.684-2.801-3.334 0-.989.648-.667.932-2.481.12-.752.692-.012.802-1.729 0-.684-.313-.854-.313-.854s.159-1.013.221-1.793c.064-.817-.398-2.56-2.301-3.095-.332-.341-.557-.882.467-1.424-2.24-.104-2.761 1.068-3.954 1.93-1.015.756-1.289 1.953-1.24 2.59.065.78.223 1.793.223 1.793s-.314.17-.314.854c.11 1.718.684.977.803 1.729.284 1.814.933 1.492.933 2.481 0 1.65-.212 2.21-2.336 3.124C.663 15.53 0 17 .011 19.129.014 19.766 0 20 0 20h16s-.014-.234-.011-.871zM17 10V7h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/>
                </svg>
                <span class="ml-2">Log In</span>
            </button>
        </form>
        <div class="text-center mt-4">
            <router-link tag="li" to="/newdemo"><a href="#" class="no-underline text-indigo font-bold hover:text-indigo-lighter">Forgote Password ?</a></router-link>
        </div>
    </div>
    </div>
</div>
</template>


<script>
    export default {
        name: "NewDemo"
    }
</script>

<style scoped>

</style>
