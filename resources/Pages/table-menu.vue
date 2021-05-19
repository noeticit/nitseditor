<template>
    <admin-layout>
        <div class="w-full mt-24">
            <div class="w-full bg-gray-100 pt-4">
                <div class="w-full overflow-hidden mx-4">
                    <div class="bg-white rounded shadow-md p-8">
                        <div class="flex items-center">
                            <div class="text-sm font-medium text-gray-700 family-poppins">Pages</div>
                            <button class="font-medium py-1 px-2 ml-4 family-poppins text-xs border-indigo-400 hover:bg-indigo-400 hover:text-white text-indigo-400 bg-white focus:outline-none border rounded-lg">Add New</button>
                        </div>
                        <div class="mt-6 flex justify-between items-center">
                            <div class="flex items-center">
                                <div class="family-poppins text-xs text-gray-500">All</div>
                                <div class="family-poppins text-xs text-gray-500 border rounded p-1 ml-2">10</div>
                                <div class="family-poppins text-xs text-indigo-400 ml-3">Published</div>
                                <div class="family-poppins text-xs text-gray-500 border border-indigo-400 rounded p-1 ml-1.5">09</div>
                                <div class="family-poppins text-xs text-blue-600 ml-3">Draft</div>
                                <div class="family-poppins text-xs text-gray-500 border border-blue-600 rounded p-1 ml-1.5">01</div>
                            </div>
                            <div class="flex items-center">
                                <button class="family-poppins text-xs bg-indigo-400 hover:bg-indigo-600 focus:outline-none text-white py-1.5 px-2 rounded-l-lg font-normal">Search</button>
                                <input class="family-poppins text-xs rounded-r-lg px-4 py-1.5 border focus:outline-none">
                            </div>
                        </div>
                        <div class="mt-6 flex justify-between items-center">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <select class="family-poppins text-xs rounded-lg px-8 py-1.5 border focus:outline-none">
                                        <option>Bulk Action</option>
                                        <option>Bulk Action</option>
                                    </select>
                                    <button class="family-poppins ml-2 text-xs bg-indigo-400 hover:bg-indigo-600 focus:outline-none text-white py-1.5 px-2 rounded-lg font-normal">Apply</button>
                                </div>
                                <div class="flex items-center ml-5">
                                    <select class="family-poppins text-xs rounded-lg px-8 py-1.5 border focus:outline-none">
                                        <option>All dates</option>
                                        <option>November, 20</option>
                                    </select>
                                    <button class="family-poppins ml-2 text-xs bg-indigo-400 hover:bg-indigo-600 focus:outline-none text-white py-1.5 px-2 rounded-lg font-normal">Filters</button>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="family-poppins text-xs font-medium p-1 rounded-md border text-gray-600">10 items</div>
                            </div>
                        </div>
                        <table class="mt-6 w-full">
                            <thead class="">
                            <tr  class="border-b py-3">
                                <th v-for="(item, index) in TableHData" :class="'text-sm family-poppins py-3 font-medium text-left ' +item.color ">{{item.title}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in TableDData" class="border-b">
                                <td v-for="(element, index) in item.TableData" :class="'text-xs text-gray-700 family-poppins py-3 font-normal ' +item.color">{{element.field}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="flex justify-between items-center mt-6">
                            <div class="family-poppins text-sm font-normal text-gray-500">Showing 1 to 10 of 57 entries</div>
                            <div class="flex items-center">
                                <button class="family-poppins text-sm text-gray-700 px-2 py-1 focus:outline-none rounded-l-lg border font-medium">Previous</button>
                                <button class="family-poppins text-sm px-2.5 py-1 focus:outline-none bg-indigo-500 text-white border-t border-b font-medium">1</button>
                                <button class="family-poppins text-sm px-2.5 py-1 text-gray-700 focus:outline-none text-indigo-500 border-l border-t border-b font-medium">2</button>
                                <button class="family-poppins text-sm px-2.5 py-1 text-gray-700 focus:outline-none text-indigo-500 border-l border-t border-b font-medium">3</button>
                                <button class="family-poppins text-sm px-2.5 py-1 text-gray-700 focus:outline-none text-indigo-500 border-l border-t border-b font-medium">4</button>
                                <button class="family-poppins text-sm px-2.5 py-1 text-gray-700 focus:outline-none text-indigo-500 border-l border-t border-b font-medium">5</button>
                                <button class="family-poppins text-sm px-2.5 py-1 text-gray-700 focus:outline-none text-indigo-500 border-l border-t border-b font-medium">6</button>
                                <button class="family-poppins text-sm text-indigo-500 px-2 py-1 focus:outline-none rounded-r-lg border font-medium">Next</button>
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
export default {
    name: "table-menu",
    components: {Button, AdminLayout},
    data(){
        return{
            TableHData:[
                {id:'', title:'Sr No'},
                {id:'', title:'Title', color:'text-indigo-400' },
                {id:'', title:'Author'},
                {id:'', title:'Comment'},
                {id:'', title:'Date', color:'text-indigo-400' },
            ],
            TableDData:[
                {id:'1',TableData:[
                        {field:'01'},
                        {field:'About Us', color:'text-indigo-400'},
                        {field:'admin'},
                        {field:'-'},
                        {field:'Published 01/05/2011', color:'text-indigo-400'},
                    ]},
                {id:'1',TableData:[
                        {field:'02'},
                        {field:'Blog', color:'text-indigo-400'},
                        {field:'admin'},
                        {field:'-'},
                        {field:'Published 12/10/2018', color:'text-indigo-400'},
                    ]},
                {id:'1',TableData:[
                        {field:'03'},
                        {field:'Cart', color:'text-indigo-400'},
                        {field:'admin'},
                        {field:'-'},
                        {field:'Published 27/01/2016', color:'text-indigo-400'},
                    ]},
                {id:'1',TableData:[
                        {field:'04'},
                        {field:'Checkout', color:'text-indigo-400'},
                        {field:'admin'},
                        {field:'-'},
                        {field:'Published 03/07/2018', color:'text-indigo-400'},
                    ]},
                {id:'1',TableData:[
                        {field:'05'},
                        {field:'Contact Us', color:'text-indigo-400'},
                        {field:'admin'},
                        {field:'-'},
                        {field:'Published 01/05/2011', color:'text-indigo-400'},
                    ]},
                {id:'1',TableData:[
                        {field:'02'},
                        {field:'Delivery', color:'text-indigo-400'},
                        {field:'admin'},
                        {field:'-'},
                        {field:'Published 12/10/2018', color:'text-indigo-400'},
                    ]},
            ]
        }
    }
}
</script>

<style scoped>

</style>
