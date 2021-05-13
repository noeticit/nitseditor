<template>
    <admin-layout>
        <div class="w-full p-4">
            <div class="w-full bg-white rounded-md p-3 flex">
                <div class="text-xs font-semibold my-auto">Select a menu to edit :</div>
                <select class="w-64 mx-2.5 text-xs font-medium text-blue-600 px-4 py-1.5 rounded border border-blue-600 focus:outline-none ">
                    <option selected>Select One</option>
                </select>
                <button class="bg-blue-600 rounded px-4 py-1.5 text-xs font-medium focus:outline-none text-white">Select</button>
                <div class="text-xs font-semibold my-auto mx-2.5">or <span class="text-blue-600 underline ">Create a new menu.</span> Dont forget to save your changes</div>
            </div>
            <div class="mt-8 grid grid-cols-4 gap-4">
                <div class="col-span-1">
                    <h4 class="text-base font-semibold text-gray-800 mb-3">Add menu items</h4>
                    <div class="bg-white rounded-md border ">
                        <div class="bg-gray-50 rounded-t-md py-2.5 px-4 flex justify-between cursor-pointer">
                            <div class="text-sm font-semibold my-auto">Pages</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div class="py-2.5 px-3.5">
                            <div class="">
                                <input type="search" class="w-full rounded-md px-3 py-2 text-xs text-gray-600 placeholder-gray-500 font-medium border border-gray-200" placeholder="Search...">
                            </div>
                            <div class="mt-4">
                                <div v-for="(item, index) in Pages" class="flex py-1.5">
                                    <input type="checkbox" class="h-4 w-4 rounded mr-2.5 my-auto">
                                    <div class="text-xs font-medium text-gray-700 my-auto">{{item.name}}</div>
                                </div>
                                <div class="border-t border-gray-200 my-3"></div>
                                <div class="flex justify-between">
                                    <div class="flex py-1.5">
                                        <input type="checkbox" class="h-4 w-4 rounded mr-2.5 my-auto">
                                        <div class="text-xs font-medium text-gray-700 my-auto">Select All</div>
                                    </div>
                                    <div>
                                        <button class="text-gray-700 border border-gray-300 rounded-md px-2.5 py-1 text-xs font-medium focus:outline-none">Add to menu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-md border mt-0.5">
                        <div class="bg-gray-50 rounded-t-md py-2.5 px-4 flex justify-between cursor-pointer">
                            <div class="text-sm font-semibold my-auto">Custom Links</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div class="py-2.5 px-3.5">
                            <div class="">
                                <input type="search" class="w-full rounded-md px-3 py-2 text-xs text-gray-600 placeholder-gray-500 font-medium border border-gray-200" placeholder="Search...">
                            </div>
                            <div class="mt-4">
                                <div v-for="(item, index) in Pages" class="flex py-1.5">
                                    <input type="checkbox" class="h-4 w-4 rounded mr-2.5 my-auto">
                                    <div class="text-xs font-medium text-gray-700 my-auto">{{item.name}}</div>
                                </div>
                                <div class="border-t border-gray-200 my-3"></div>
                                <div class="flex justify-between">
                                    <div class="flex py-1.5">
                                        <input type="checkbox" class="h-4 w-4 rounded mr-2.5 my-auto">
                                        <div class="text-xs font-medium text-gray-700 my-auto">Select All</div>
                                    </div>
                                    <div>
                                        <button class="text-gray-700 border border-gray-300 rounded-md px-2.5 py-1 text-xs font-medium focus:outline-none">Add to menu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <h4 class="text-base font-semibold text-gray-800 mb-3">Menu Structure</h4>
                    <div class="bg-white rounded-md border">
                        <div class="bg-gray-50 rounded-t-md py-2.5 px-4 flex justify-between cursor-pointer">
                            <div class="flex">
                                <div class="text-xs font-semibold my-auto mr-2.5 my-auto">Menu Name</div>
                                <input type="search" class="w-64 rounded-md px-3 py-1.5 text-xs text-gray-600 placeholder-gray-800 font-medium border border-gray-200" placeholder="Footer menu 1">
                            </div>
                            <div >
                                <button class="bg-blue-600 px-4 py-1.5 text-white rounded focus:outline-none text-xs font-semibold">Save menu</button>
                            </div>
                        </div>
                        <div class="py-2.5 px-3.5">
                            <div class="text-xs font-medium text-gray-800 py-2">Drag the items into the order you prefer. Click the arrow on the right of the item to reveal additional configuration options.</div>
                            <div class="mt-3">
                                <div v-for="(item, index) in Data" class="bg-gray-100 rounded-md px-4 py-3 w-96 flex justify-between my-1.5">
                                    <div class="text-xs font-semibold ">{{item.page_name}}</div>
                                    <div class="flex my-auto">
                                        <div class="text-xs font-normal text-gray-600 my-auto mr-1">{{item.section}}</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from "../components/Layouts/admin-layout";
import Button from "../components/Jetstream/Button";
import Input from "../components/Jetstream/Input";

export default {
    name: "nav-menus",
    components: {Input, Button, AdminLayout},
    data(){
        return{
            Pages:[
                {name: 'Disclaimer Policy'},
                {name: 'Terms and Conditions'},
                {name: 'Delivery'},
                {name: 'Refund and cancellation policy'},
                {name: 'Wishlist page'},
                {name: 'Sample Page'},
                {name: 'About us'},
                {name: 'Contact us'},
                {name: 'Services'},
                {name: 'Portfolio'},
            ],
            Data:[
                {page_name:'Terms and Condition', section:'Page'},
                {page_name:'Privacy Policy', section:'Custom Link'},
                {page_name:'Disclaimer Policy', section:'Page'},
                {page_name:'Wishlist Page', section:'Page'},
                {page_name:'About us', section:'Page'},
                {page_name:'Sample Page', section:'Custom Link'},
                {page_name:'Services', section:'Page'},
                {page_name:'Portfolio', section:'Page'},
                {page_name:'Services', section:'Custom Link'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
