<template>
    <div :class="{'shadow bg-linear-blue transition transform translate-y-0 duration-700 ease-in': scrollPosition > 80 }" class="w-full z-50 bg-transparent fixed top-0 h-16 flex shadow-lg">
        <div class="w-full max-w-screen-2xl my-auto">
            <div class="flex justify-between items-center">
                <div class="h-full flex">
                    <div class="py-2 px-8">
                        <img class="h-10 w-auto" src="/project-assets/images/nitslogo.png" alt="logo">
                    </div>
                    <div class="flex my-auto mx-5 ml-14 cursor-pointer">
                        <div class="text-xs font-semibold family-poppins text-gray-100"><span class="text-xs font-light text-white family-poppins">My Sites</span> : MySite</div>
                        <svg class="h-4 w-4 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M13.418 7.859a.695.695 0 01.978 0 .68.68 0 010 .969l-3.908 3.83a.697.697 0 01-.979 0l-3.908-3.83a.68.68 0 010-.969.695.695 0 01.978 0L10 11l3.418-3.141z"/></svg>
                    </div>
                    <div class="flex my-auto cursor-pointer">
                        <div class="text-xs font-semibold family-poppins text-gray-100">Explore</div>
                        <svg class="h-4 w-4 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M13.418 7.859a.695.695 0 01.978 0 .68.68 0 010 .969l-3.908 3.83a.697.697 0 01-.979 0l-3.908-3.83a.68.68 0 010-.969.695.695 0 01.978 0L10 11l3.418-3.141z"/></svg>
                    </div>
                    <div class="flex my-auto mx-5 cursor-pointer">
                        <div class="text-xs font-semibold family-poppins text-gray-100">Help</div>
                        <svg class="h-4 w-4 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M13.418 7.859a.695.695 0 01.978 0 .68.68 0 010 .969l-3.908 3.83a.697.697 0 01-.979 0l-3.908-3.83a.68.68 0 010-.969.695.695 0 01.978 0L10 11l3.418-3.141z"/></svg>
                    </div>
                    <div class="my-auto cursor-pointer">
                        <div class="text-xs font-semibold family-poppins text-gray-100">Hire a professional</div>
                    </div>
                </div>
                <div class="my-auto px-5 flex">
                    <div class="my-auto mr-5">
                        <div class="relative w-full text-gray-600">
                            <svg class="text-gray-300 absolute top-2.5 left-3 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                            <input class="pl-8 pr-3 py-2 text-sm font-medium text text-white bg-blue-500 rounded-md bg-opacity-50 placeholder-gray-300 border-none" style="background-color: rgba(243,243,249,.07);" type="search" name="search" placeholder="Search">
                        </div>
                    </div>
                    <div class="my-auto h-10 w-10 rounded-md flex hover:bg-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div>
                    <div class="my-auto h-10 w-10 rounded-md flex hover:bg-indigo-700 mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="text-white h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>
                    <div class="my-auto h-10 w-10 rounded-md flex hover:bg-indigo-700 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                    </div>
                    <div class="flex my-auto">
                        <img class="rounded-full h-8 w-8 align-middle border-2 border-indigo-300" src="https://themesbrand.com/qovex/layouts/assets/images/users/avatar-2.jpg">
                        <div class="text-sm font-medium family-poppins text-white my-auto mx-2">Super Admin</div>
                        <svg class="h-5 w-5 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M13.418 7.859a.695.695 0 01.978 0 .68.68 0 010 .969l-3.908 3.83a.697.697 0 01-.979 0l-3.908-3.83a.68.68 0 010-.969.695.695 0 01.978 0L10 11l3.418-3.141z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "top-bar",
    data(){
        return{
            openMenu:'',
            scrollPosition: null
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
}
</script>

<style scoped>
.bg-linear-blue{
    background: -webkit-gradient(linear,left top,right top,from(#273c92),to(#293e92));
}
.form-control {
    background-color: rgba(243,243,249,.07);
    color: #fff;
    border: none;
    height: 38px;
    padding-left: 40px;
    padding-right: 20px;
    /*background-color: #f3f3f9;*/
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 7px;
}
</style>
