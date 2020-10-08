<template>
    <div>
        <nits-header></nits-header>
        <div class="w-full h-auto" style="background: #e9eff5">

            <div class="w-full md:pt-6">
                <div class="md:px-12 md:pt-16 flex justify-between">
                    <div class=" flex">
                        <div class="bg-gray-100 shadow-lg rounded flex h-12 w-12 md:h-48 md:w-48 p-2 my-auto ">
                            <img class="h-auto w-24 m-auto" src="/project-assets/images/bx.png">
                        </div>
                        <div class="flex-col mt-1 mx-2">
                            <div class="flex">
                                <svg class="h-4 w-4 mx-3 my-auto text-gray-600 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.03 1.87L2.04.2C1.53.12 1.01.26.62.59.23.93 0 1.42 0 1.93V23c0 .55.45 1 1 1h3.25v-5.25c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75V24h4.25V3.6c0-.86-.62-1.59-1.47-1.73zM5.5 14.75H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm5 9H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM22.62 10.842L15.5 9.351V24h6.75c.965 0 1.75-.785 1.75-1.75v-9.698c0-.826-.563-1.529-1.38-1.71zM20.25 21h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5z"/></svg>
                                <div class="text-sm my-auto font-medium leading-6 uppercase text-gray-800 tracking-wide">Consultant</div>
                            </div>
                            <div class="text-4xl font-semibold text-gray-900 mx-3">Biltrax</div>
                        </div>
                    </div>
                    <div class="flex my-auto">
                        <button class="flex border mx-1 rounded border-indigo-500 text-indigo-500 uppercase tracking-wide px-3 py-2 font-medium text-sm focus:outline-none hover:bg-indigo-600 hover:text-white">
                            <svg class="w-4 h-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M20 11.32c0 2.584-2.144 4.68-4.787 4.68H3.617C1.619 16 0 14.416 0 12.463c0-1.951 1.619-3.535 3.617-3.535.146 0 .288.012.429.027a5.076 5.076 0 01-.057-.756C3.989 5.328 6.37 3 9.309 3c2.407 0 4.439 1.562 5.096 3.707a5 5 0 01.809-.066C17.856 6.641 20 8.734 20 11.32z"/></svg>
                            <span class="mx-3">connect to crm</span>
                        </button>
                        <button class="flex border bg-indigo-500 text-white  mx-1 rounded border-indigo-500 uppercase tracking-wide px-3 py-2 font-medium text-sm focus:outline-none hover:bg-indigo-600 hover:text-white">
                            <svg class="w-5 h-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"/></svg>
                            <span class="ml-2">save</span>
                        </button>
                        <button class="mx-1 rounded-full p-2 text-sm focus:outline-none hover:bg-indigo-600 hover:text-white">
                            <svg class="w-4 h-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm0-2.6A2.2 2.2 0 109.999.8a2.2 2.2 0 00.002 4.4zm0 9.6a2.2 2.2 0 100 4.402 2.2 2.2 0 000-4.402z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="w-full md:-mt-16">
                    <div class="flex justify-center">
                        <div class="list-reset flex">
                            <button class="py-3 px-6 mx-2 rounded-t-lg font-medium text-base text-gray-900 focus:outline-none cursor-pointer" v-on:click="toggleTabs(1)" v-bind:class="{' hover:bg-gray-100': openTab !== 1, 'text-indigo-600 bg-white hover:bg-white': openTab === 1}">
                                General
                            </button>
                            <button class="py-3 px-6 mx-2 rounded-t-lg font-medium text-base text-gray-900 focus:outline-none cursor-pointer" v-on:click="toggleTabs(2)" v-bind:class="{'hover:bg-gray-100': openTab !== 2, 'text-indigo-600 bg-white hover:bg-white': openTab === 2}">
                                Performance & Key Contacts
                            </button>
                            <button class="py-3 px-6 mx-2 rounded-t-lg font-medium text-base text-gray-900 focus:outline-none cursor-pointer" v-on:click="toggleTabs(3)" v-bind:class="{'hover:bg-gray-100': openTab !== 3, 'text-indigo-600 bg-white hover:bg-white': openTab === 3}">
                                Projects Activity
                            </button>
                            <button class="py-3 px-6 mx-2 rounded-t-lg font-medium text-base text-gray-900 focus:outline-none cursor-pointer" v-on:click="toggleTabs(4)" v-bind:class="{'hover:bg-gray-100': openTab !== 4, 'text-indigo-600 bg-white hover:bg-white': openTab === 4}">
                                Analytics
                            </button>
                            <button class="py-3 px-6 mx-2 rounded-t-lg font-medium text-base text-gray-900 focus:outline-none cursor-pointer" v-on:click="toggleTabs(5)" v-bind:class="{'hover:bg-gray-100': openTab !== 5, 'text-indigo-600 bg-white hover:bg-white': openTab === 5}">
                                Empanelments
                            </button>
                        </div>
                    </div>
                    <div class="w-full bg-white px-16 pb-8 h-auto">
                        <div class="grid md:gap-6 gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div class="flex-col mt-16 border-r">
                                <div class="flex">
                                    <svg class="h-6 w-6 mx-3 my-auto text-gray-800 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.03 1.87L2.04.2C1.53.12 1.01.26.62.59.23.93 0 1.42 0 1.93V23c0 .55.45 1 1 1h3.25v-5.25c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75V24h4.25V3.6c0-.86-.62-1.59-1.47-1.73zM5.5 14.75H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm5 9H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM22.62 10.842L15.5 9.351V24h6.75c.965 0 1.75-.785 1.75-1.75v-9.698c0-.826-.563-1.529-1.38-1.71zM20.25 21h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5z"/></svg>
                                    <div class="text-2xl mx-2 my-auto font-medium leading-6 text-gray-800 tracking-wide">About</div>
                                </div>
                                <div class="text-sm text-gray-800 px-3 mt-6 leading-6 font-medium">
                                    DesignTree Service Consultants Pvt Ltd is a Multi - Disciplinary Engineering Consultancy company founded in March, 2008 by dynamic and innovative professionals to bridge the gap between ever changing needs of construction industry and current consultancy services available.
                                </div>

                            </div>

                            <div class="flex-col mt-16 border-r">
                                <div class="flex">
                                    <svg viewBox="0 0 511.999 511.999" class="h-6 w-6 mx-3 my-auto text-gray-800 " fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M210.38 42h91.238c7.931 0 14.383-6.729 14.383-15V0H195.997v27c0 8.271 6.452 15 14.383 15z"/><path d="M436 0h-89.998v27c0 24.813-19.91 45-44.383 45H210.38c-24.474 0-44.384-20.187-44.384-45V0H76c-8.284 0-15 6.716-15 15v481.999c0 8.284 6.716 15 15 15h360c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15zM240.993 434H135.999c-8.284 0-15-6.716-15-15s6.716-15 15-15h104.994c8.284 0 15 6.716 15 15s-6.716 15-15 15zm135.004-60H135.999c-8.284 0-15-6.716-15-15s6.716-15 15-15h239.998c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60H135.999c-8.284 0-15-6.716-15-15s6.716-15 15-15h239.998c8.284 0 15 6.716 15 15s-6.716 15-15 15zm.005-60H135.998c-8.284 0-15-6.716-15-15s6.716-15 15-15H151v-16.89c0-8.284 6.716-15 15-15s15 6.716 15 15V224h29.999v-89.002c0-8.284 6.716-15 15-15s15 6.716 15 15V224H271v-31.78c0-8.284 6.716-15 15-15s15 6.716 15 15V224h30v-55.068c0-8.284 6.716-15 15-15s15 6.716 15 15V224h15.003c8.284 0 15 6.716 15 15s-6.716 15-15.001 15z"/></svg>
                                    <div class="text-2xl mx-2 my-auto font-medium leading-6 text-gray-800 tracking-wide">Summary</div>
                                </div>
                                <div class="mt-6 grid md:gap-6 gap-3 grid-cols-2">
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Project(s)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">256</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Project Role(s)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">36</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Construction Area <br>(Million SqFt)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">137.24</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Projects Cost (INR-Crore)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">31,524</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Industry Relationship(s)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">4738</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Professional(s)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">12</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Company Document(s)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">12</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Company Office(s)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">10</div>
                                    </div>
                                    <div class="flex-col">
                                        <div class="text-base font-medium leading-6 text-gray-700 ">Relation(s)</div>
                                        <div class="text-xl text-indigo-500 font-medium ">8</div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-col mt-16">
                                <div class="flex">
                                    <svg class="h-6 w-6 mx-3 my-auto text-gray-800 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.03 1.87L2.04.2C1.53.12 1.01.26.62.59.23.93 0 1.42 0 1.93V23c0 .55.45 1 1 1h3.25v-5.25c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75V24h4.25V3.6c0-.86-.62-1.59-1.47-1.73zM5.5 14.75H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H4a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm5 9H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3H9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM22.62 10.842L15.5 9.351V24h6.75c.965 0 1.75-.785 1.75-1.75v-9.698c0-.826-.563-1.529-1.38-1.71zM20.25 21h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zm0-3h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5z"/></svg>
                                    <div class="text-2xl mx-2 my-auto font-medium leading-6 text-gray-800 tracking-wide">Offices</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nits-footer></nits-footer>
    </div>
</template>

<script>
import NitsHeader from "../components/nits-header";
import NitsFooter from "../components/nits-footer";
export default {
    name: "company-profile",
    components: {NitsHeader,NitsFooter},
    data(){
        return{
            open:'',
            cartOpen: false,
            openModal: false,
            more: false,
            openTab: 1,

        }
    },
    methods:{
        toggleTabs: function(tabNumber){
            this.openTab = tabNumber
        },
    },
}
</script>

<style scoped>

</style>
