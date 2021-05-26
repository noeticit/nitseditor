<template>
    <admin-layout>
        <div class="w-full p-4">
            <div class="flex mt-2">
                <div class="w-full bg-gray-100 rounded-md p-3 flex z-40">
                    <div class="text-xs font-semibold my-auto z-40">Select a menu to edit :</div>
                    <select class="w-64 mx-2.5 text-xs font-medium text-blue-600 px-4 py-1.5 rounded border border-blue-600 focus:outline-none ">
                        <option selected>Select One</option>
                    </select>
                    <button class="bg-blue-600 rounded px-4 py-1.5 text-xs font-medium focus:outline-none text-white">Select</button>
                    <div class="text-xs font-semibold my-auto mx-2.5">or <span class="text-blue-600 underline ">Create a new menu.</span> Dont forget to save your changes</div>
                </div>
            </div>
            <div class="mt-8 grid grid-cols-4 gap-4">
                <div class="col-span-1">
                    <h4 class="text-base font-semibold text-gray-800 mb-3">Add menu items</h4>
                    <div class="bg-white rounded-md border ">
                        <div @click="openDropdown = ! openDropdown" class="bg-gray-50 rounded-t-md py-2.5 px-4 flex justify-between cursor-pointer">
                            <div class="text-sm font-semibold my-auto">Pages</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div v-if="openDropdown" class="py-2.5 px-3.5">
                            <div class="">
                                <input type="search" class="w-full rounded-md px-3 py-2 text-xs text-gray-600 placeholder-gray-500 font-medium border border-gray-200" placeholder="Search...">
                            </div>
                            <div class="mt-4">
                                <div v-for="(item, index) in Pages" class="flex py-1.5">
                                    <input type="checkbox" @click="dataSelection(item,$event)" class="h-4 w-4 rounded mr-2.5 my-auto">
                                    <div class="text-xs font-medium text-gray-700 my-auto">{{item.name}}</div>
                                </div>
                                <div class="border-t border-gray-200 my-3"></div>
                                <div class="flex justify-between">
                                    <div class="flex py-1.5">
                                        <input v-model="selectAll" type="checkbox" class="h-4 w-4 rounded mr-2.5 my-auto">
                                        <div class="text-xs font-medium text-gray-700 my-auto">Select All</div>
                                    </div>
                                    <div>
                                        <button @click="submit" class="text-gray-700 border border-gray-300 rounded-md px-2.5 py-1 text-xs font-medium focus:outline-none">Add to menu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-md border mt-0.5">
                        <div @click="openDropdown2 = ! openDropdown2" class="bg-gray-50 rounded-t-md py-2.5 px-4 flex justify-between cursor-pointer">
                            <div class="text-sm font-semibold my-auto">Custom Links</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div v-if="openDropdown2" class="py-4 px-3.5">
                            <div class="flex">
                                <div class="my-auto mr-0.5">
                                    <div class="text-xs font-medium text-gray-700 my-auto w-14">URL</div>
                                </div>
                                <input type="search" class="w-full rounded-md px-3 py-2 text-xs text-gray-600 placeholder-gray-800 font-medium border border-gray-200" placeholder="https://">
                            </div>
                            <div class="flex py-3">
                                <div class="my-auto mr-0.5">
                                    <div class="text-xs font-medium text-gray-700 my-auto w-14">Link Text</div>
                                </div>
                                <input type="search" class="w-full rounded-md px-3 py-2 text-xs text-gray-600 placeholder-gray-800 font-medium border border-gray-200">
                            </div>
                            <div class="mt-1 flex justify-end">
                                <button  class="text-gray-700 border border-gray-300 rounded-md px-2.5 py-1 text-xs font-medium focus:outline-none">Add to menu</button>
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
<!--                                <draggable v-model="menus" tag="transition-group" item-key="id">-->
<!--                                    <template #item="{element}">-->
<!--                                        <div> {{element.name}} </div>-->
<!--                                    </template>-->
<!--                                </draggable>-->

                                <draggable :list="users">
                                    <li v-for="user in users"
                                        :key="user.id" slot="items">
                                        <p>{{ user.name }}</p>
                                    </li>
                                </draggable>

<!--                                <draggable class="dragArea" tag="ul" :list="list" :group="{ name: 'g1' }">-->
<!--                                    <li v-for="el in list" :key="el.name">-->
<!--                                        <p>{{ el.name }}</p>-->
<!--                                        <nested-draggable :tasks="el.tasks" />-->
<!--                                    </li>-->
<!--                                </draggable>-->

<!--                                <div v-for="(item, index) in menus" class="bg-gray-100 rounded-md px-4 py-3 w-96 flex justify-between my-1.5">-->
<!--                                    <div class="text-xs font-semibold ">{{item.name}}</div>-->
<!--                                    <div class="flex my-auto">-->
<!--                                        <div class="text-xs font-normal text-gray-600 my-auto mr-1">{{item.section}}</div>-->
<!--                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />-->
<!--                                        </svg>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from "../layouts/admin-layout";
import Button from "../components/Jetstream/Button";
import Input from "../components/Jetstream/Input";
import draggable from 'vuedraggable'
import TailwindDraggable from "../components/tailwind-draggable";

export default {
    name: "nav-menus",
    components: {TailwindDraggable, AdminLayout, Input, Button, draggable},
    data(){
        return{
            users: [
                {
                    id: 1,
                    name: "Adrian Schubert",
                    avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
                },
                {
                    id: 2,
                    name: "Violet Gates",
                    avatar: "https://pickaface.net/gallery/avatar/freud51c8b3f65e7dc.png"
                },
                {
                    id: 3,
                    name: "Steve Jobs",
                    avatar: "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png"
                },
                {
                    id: 4,
                    name: "Yassine Smith",
                    avatar: "https://pickaface.net/gallery/avatar/unr_yassine_191124_2012_3gngr.png"
                },
                {
                    id: 5,
                    name: "Senior Saez",
                    avatar: "https://pickaface.net/gallery/avatar/elmedinilla541c03412955c.png"
                }
            ],
            Pages:[
                {id:1, name: 'Disclaimer Policy', section:'page'},
                {id:2, name: 'Terms and Conditions', section:'page'},
                {id:3, name: 'Delivery', section:'page'},
                {id:4, name: 'Refund and cancellation policy', section:'page'},
                {id:5, name: 'Wishlist page', section:'page'},
                {id:6, name: 'Sample Page', section:'page'},
                {id:7, name: 'About us', section:'page'},
                {id:8, name: 'Contact us', section:'page'},
                {id:9, name: 'Services', section:'page'},
                {id:10, name: 'Portfolio', section:'page'},
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
                {page_name:'Sample Page', section:'Custom Link'},
                {page_name:'Wishlist Page', section:'Page'},
            ],
            openDropdown:true,
            openDropdown2:true,
            temp:[],
            menus:[],
            selected:[],
        }
    },
    methods:{
        dataSelection(item, event) {
            if (event.target.checked) {
                this.temp.push(item);
                console.log(this.temp)
            }
            else{
                var index = _.findIndex(this.temp, (q) => {
                    return q === item
                })
                this.temp.splice(index,  1);
                console.log(this.temp)
            }
        },
        submit(){
            this.menus = this.temp
        }
    },
    computed: {
        selectAll: {
            get: function () {
                return this.Pages ? this.selected.length === this.Pages.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.Pages.forEach(function (i) {
                        selected.push(i);
                    });
                }
                this.selected = selected;
            }
        },

    }
}
</script>

<style scoped>

</style>
