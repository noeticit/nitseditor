<template>
    <div class="fixed top-0 z-20 w-full">
        <div class="max-w-screen-2xl mx-auto border-b border-gray-100 ">
            <div class="h-16 bg-white flex justify-between">
                <div class="my-auto flex">
                    <div class="w-72"></div>
                    <div class="bg-green-400 p-1 rounded-full mr-3">
                        <svg class="h-4 w-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M19.315 10h-2.372v-.205c-.108-4.434-3.724-7.996-8.169-7.996C4.259 1.799.6 5.471.6 10s3.659 8.199 8.174 8.199a8.13 8.13 0 005.033-1.738l-1.406-1.504a6.099 6.099 0 01-3.627 1.193c-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945V10h-2.672l3.494 3.894L19.315 10z"/></svg>
                    </div>
                    <div class="text-base font-medium family-montserrat ">Welcome! <span class="font-semibold">Abuzaid</span></div>
                </div>
                <div class="my-auto flex">
                    <div class="flex px-3">
                        <div class="h-4 w-4 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 my-auto"></div>
                        <div class="mx-2 text-sm my-auto font-medium family-montserrat my-auto">$ US Dollar</div>
                        <svg class="h-4 w-4 text-gray-600 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/></svg>
                    </div>
                    <div class="flex px-3 border-l py-2 border-r">
                        <img class="rounded-full h-5 w-5 my-auto" src="https://cdn10.bigcommerce.com/s-hhbbk/products/2299/images/44212/UK-USA-Friendship-flag__34065.1580491077.1280.1280.png?c=2">
                        <div class="mx-2 text-sm my-auto font-medium family-montserrat my-auto">United State</div>
                        <svg class="h-4 w-4 text-gray-600 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/></svg>
                    </div>
                    <div class="flex px-3">
                        <div class="hover:bg-gray-100 my-auto p-2 mr-4 text-gray-500 hover:text-blue-600 rounded-full">
                            <svg class="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c-37.554 0-68.11 30.556-68.11 68.11v20.55h35.229V68.11c0-18.131 14.755-32.881 32.881-32.881 18.131 0 32.887 14.749 32.887 32.881v20.55h35.229V68.11C324.116 30.556 293.555 0 256 0zM304.147 429.205c0 26.228-21.337 47.565-47.56 47.565h-1.174c-26.222 0-47.56-21.337-47.56-47.565h-35.229c0 45.657 37.138 82.795 82.789 82.795h1.174c45.651 0 82.789-37.138 82.789-82.795h-35.229z"/><path d="M483.952 422.623l-50.043-77.851v-99.928c0-99.071-79.812-179.67-177.908-179.67-98.102 0-177.908 80.599-177.908 179.67v99.928L28.05 422.617a17.616 17.616 0 0014.814 27.144h426.275a17.607 17.607 0 0015.454-9.171 17.596 17.596 0 00-.641-17.967zm-408.825-8.091l35.394-55.063a17.609 17.609 0 002.801-9.524V244.844c0-79.642 64.006-144.44 142.679-144.44 78.679 0 142.679 64.799 142.679 144.44v105.101c0 3.376.969 6.682 2.795 9.524l35.394 55.063H75.127z"/></svg>
                        </div>
                        <div  class="my-auto relative">
                            <img @click="openBox =! openBox" class="rounded-full cursor-pointer h-8 w-8" src="https://images.unsplash.com/photo-1595273185163-347066c49ad3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
                            <div v-if="openBox" class="absolute top-12 right-0 ">
                                <div class="relative w-48 rounded-md bg-white shadow-2xl border p-4">
                                    <div class="absolute top-0 right-7 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                                    <inertia-link href="/user/profile" class="flex border-b border-gray-200 pt-1 pb-3">
                                        <div class="h-2 w-2 my-auto rounded-full bg-green-500 mr-2"></div>
                                        <div class="text-xs my-auto font-semibold text-gray-800 family-montserrat">My Profile</div>
                                    </inertia-link>
                                    <div class="flex border-b border-gray-200 py-3">
                                        <div class="h-2 w-2 my-auto rounded-full bg-green-500 mr-2"></div>
                                        <div class="text-xs my-auto font-semibold text-gray-800 family-montserrat">Change Password</div>
                                    </div>
                                    <inertia-link href="/login" class="flex  py-3">
                                        <div class="h-2 w-2 my-auto rounded-full bg-green-500 mr-2"></div>
                                        <div class="text-xs my-auto font-semibold text-gray-800 family-montserrat">Logout</div>
                                    </inertia-link>
                                    <div class="border-t border-gray-100 pt-3">
                                        <button @click="openBox =false" class="text-xs family-montserrat font-normal text-gray-600 bg-gray-100 rounded-md focus:outline-none px-3 py-1">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/Jetstream/Button";
export default {
    name: "TopBar",
    components: {Button},
    data(){
        return{
            openBox:false
        }
    }
}
</script>

<style scoped>

</style>
