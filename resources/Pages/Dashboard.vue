<template>
<!--    <app-layout>-->
<!--        <template #header>-->
<!--            <h2 class="font-semibold text-xl text-gray-800 leading-tight">-->
<!--                Dashboard-->
<!--            </h2>-->
<!--        </template>-->

<!--        <div class="py-12">-->
<!--            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">-->
<!--                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">-->
<!--                    <welcome />-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </app-layout>-->
    <admin-layout>
        <div class="p-4">
            <div class="grid grid-cols-5 gap-4 mb-4">
                <div v-for="item in 5" :key="item" class="h-24 rounded-md bg-white shadow-lg p-4 flex">
                    <!--          <h3 class="text-lg font-semibold family-nunito">Lorem ipsum </h3>-->
                    <div>
                        <div class="h-16 w-16 rounded-full bg-indigo-500 p-2 flex mr-4">
                            <div class="h-full w-full bg-white rounded-full flex">
                                <div class="text-base font-bold family-nunito m-auto">3/4</div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm font-semibold family-nunito my-auto">Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="grid grid-cols-10 gap-4">
                <div class="col-span-7">
                    <div class="bg-white rounded-md p-3">
                        <div class="flex">
                            <div class="relative flex flex-col">
                                <img class="rounded-t-md shadow-lg" height="80" width="132" src="https://manage.wix.com/site-thumbnail/721f22e4-84bc-41a1-a892-c1e8ece4a83d?preset=site-details-horizontal">
                                <div class="h-4 bg-gray-800 flex rounded-b-md -mt-4 w-full z-20">
                                    <span class="m-auto font-medium text-white family-nunito text-vs">Not published</span>
                                </div>
                            </div>
                            <div class="ml-4 pb-2 border-b w-full flex justify-between">
                                <div >
                                    <div class="text-base font-bold family-nunito text-gray-900">MySite</div>
                                    <div class="text-xs font-normal mt-2 family-nunito text-gray-500">https://abuzaidsayyad86nitseditor.com</div>
                                    <div class="text-xs font-medium family-nunito text-indigo-600 mt-1">Connect your own domain</div>
                                </div>
                                <div>
                                    <button class="px-5 py-1 text-xs font-medium text-white bg-blue-600 rounded-full family-nunito focus:outline-none">Site Actions</button>
                                </div>
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="grid grid-cols-4 gap-5 ">
                                <div class="border-r">
                                    <div class="text-xs font-semibold text-gray-900 family-nunito">Site Role: Owner</div>
                                    <div class="text-xs font-semibold text-blue-600 mt-1 family-nunito">Invite People</div>
                                </div>
                                <div class="border-r">
                                    <div class="text-xs font-semibold text-gray-900 family-nunito">Site Role: Owner</div>
                                    <div class="text-xs font-semibold text-blue-600 mt-1 family-nunito">Invite People</div>
                                </div>
                                <div class="border-r">
                                    <div class="text-xs font-semibold text-gray-900 family-nunito">Site Role: Owner</div>
                                    <div class="text-xs font-semibold text-blue-600 mt-1 family-nunito">Invite People</div>
                                </div>
                                <div class="">
                                    <div class="text-xs font-semibold text-gray-900 family-nunito">Site Role: Owner</div>
                                    <div class="text-xs font-semibold text-blue-600 mt-1 family-nunito">Invite People</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-md p-4 mt-4">
                        <div class="flex">
                            <div class="pb-2.5 border-b w-full flex justify-between">
                                <div class="text-base font-bold family-nunito text-gray-900">Let's Set Up Your Site</div>
                                <div class="flex">
                                    <div class="text-xz font-semibold family-nunito mr-2 text-gray-500 my-auto">7 steps left</div>
                                    <div class="w-32 rounded-full h-1 bg-gray-100 my-auto">
                                        <div class="h-1 rounded-full bg-linear-blue w-6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="grid grid-cols-10 gap-5">
                                <div class="col-span-4">
                                    <div class="flex">
                                        <div class="h-12 w-12 rounded-full bg-gray-200 p-1 mr-5">
                                            <div class="rounded-full bg-white h-full w-full flex">
                                                <div class="text-xs font-bold family-nunito m-auto">0/4</div>
                                            </div>
                                        </div>
                                        <div class="flex-col">
                                            <div class="text-xs font-bold family-nunito">Get Booked Online</div>
                                            <div class="text-xz font-normal py-0.5 family-nunito">Add your services and start<br>taking bookings.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6">
                                    <div class="py-1.5 w-full">
                                        <div class="w-full h-9 rounded-md bg-indigo-50 border border-indigo-200 flex items-center justify-between px-2">
                                            <div class="flex">
                                                <svg class="h-4 w-4 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"/></svg>
                                                <div class="text-xz font-semibold family-nunito">Create your first service <span class="text-gray-500">(5 min.)</span></div>
                                            </div>
                                            <div class="flex">
                                                <div class="text-xz text-indigo-600 font-semibold cursor-pointer mr-3 family-nunito my-auto">Skip</div>
                                                <button class="text-xz text-white font-semibold cursor-pointer px-4 py-1 rounded-full bg-indigo-600 family-nunito focus:outline-none">Create Services</button>
                                            </div>
                                        </div>
                                        <div class="w-full h-9 rounded-md bg-white border border-indigo-200 flex items-center justify-between px-2 mt-1.5">
                                            <div class="flex">
                                                <svg class="h-4 w-4 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"/></svg>
                                                <div class="text-xz font-semibold family-nunito">Set your work hours <span class="text-gray-500">(5 min.)</span></div>
                                            </div>
                                            <div class="flex">
                                                <div class="text-xz text-indigo-600 font-semibold cursor-pointer mr-3 family-nunito my-auto">Skip</div>
                                                <button class="text-xz hover:text-white text-indigo-600 font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-indigo-600 family-nunito focus:outline-none border border-indigo-600">Set Work Hours</button>
                                            </div>
                                        </div>
                                        <div class="w-full h-9 rounded-md bg-white border border-indigo-200 flex items-center justify-between px-2 mt-1.5">
                                            <div class="flex">
                                                <svg class="h-4 w-4 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"/></svg>
                                                <div class="text-xz font-semibold family-nunito">Check your email address<span class="text-gray-500">(5 min.)</span></div>
                                            </div>
                                            <div class="flex">
                                                <div class="text-xz text-indigo-600 font-semibold cursor-pointer mr-3 family-nunito my-auto">Skip</div>
                                                <button class="text-xz hover:text-white text-indigo-600 bg-white font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-indigo-600 family-nunito focus:outline-none border border-indigo-600">Confirm Email</button>
                                            </div>
                                        </div>
                                        <div class="w-full h-9 rounded-md bg-white border border-indigo-200 flex items-center justify-between px-2 mt-1.5">
                                            <div class="flex">
                                                <svg class="h-4 w-4 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"/></svg>
                                                <div class="text-xz font-semibold family-nunito">Set up payment method<span class="text-gray-500">(5 min.)</span></div>
                                            </div>
                                            <div class="flex">
                                                <div class="text-xz text-indigo-600 font-semibold cursor-pointer mr-3 family-nunito my-auto">Skip</div>
                                                <button class="text-xz hover:text-white text-indigo-600 bg-white font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-indigo-600 family-nunito focus:outline-none border border-indigo-600">Get Paid</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-t border-gray-100 my-3"></div>
                            <div class="grid grid-cols-10 gap-5">
                                <div class="col-span-4">
                                    <div class="flex">
                                        <div class="h-12 w-12 rounded-full bg-gray-200 p-1 mr-5">
                                            <div class="rounded-full bg-white h-full w-full flex">
                                                <div class="text-xs font-bold family-nunito m-auto">0/3</div>
                                            </div>
                                        </div>
                                        <div class="flex-col">
                                            <div class="text-xs font-bold family-nunito">Get Your Site Online</div>
                                            <div class="text-xz font-normal py-0.5 family-nunito">Published and get your website<br>found online.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6">
                                    <div class="py-1.5 w-full">
                                        <div class="w-full h-9 rounded-md bg-indigo-50 border border-indigo-200 flex items-center justify-between px-2">
                                            <div class="flex">
                                                <svg class="h-4 w-4 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"/></svg>
                                                <div class="text-xz font-semibold family-nunito">Publish your site <span class="text-gray-500">(1 min.)</span></div>
                                            </div>
                                            <div class="flex">
                                                <div class="text-xz text-indigo-600 font-semibold cursor-pointer mr-3 family-nunito my-auto">Skip</div>
                                                <button class="text-xz text-white font-semibold cursor-pointer px-4 py-1 rounded-full bg-indigo-600 family-nunito focus:outline-none">Publish Site</button>
                                            </div>
                                        </div>
                                        <div class="w-full h-9 rounded-md bg-white border border-indigo-200 flex items-center justify-between px-2 mt-1.5">
                                            <div class="flex">
                                                <svg class="h-4 w-4 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"/></svg>
                                                <div class="text-xz font-semibold family-nunito">Connect a Domain <span class="text-gray-500">(2 min.)</span></div>
                                            </div>
                                            <div class="flex">
                                                <div class="text-xz text-indigo-600 font-semibold cursor-pointer mr-3 family-nunito my-auto">Skip</div>
                                                <button class="text-xz hover:text-white text-indigo-600 font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-indigo-600 family-nunito focus:outline-none border border-indigo-600">Get a Domain</button>
                                            </div>
                                        </div>
                                        <div class="w-full h-9 rounded-md bg-white border border-indigo-200 flex items-center justify-between px-2 mt-1.5">
                                            <div class="flex">
                                                <svg class="h-4 w-4 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"/></svg>
                                                <div class="text-xz font-semibold family-nunito">Get found on google<span class="text-gray-500">(8 min.)</span></div>
                                            </div>
                                            <div class="flex">
                                                <div class="text-xz text-indigo-600 font-semibold cursor-pointer mr-3 family-nunito my-auto">Skip</div>
                                                <button class="text-xz hover:text-white text-indigo-600 bg-white font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-indigo-600 family-nunito focus:outline-none border border-indigo-600">Get Started</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 bg-gray-50 rounded-md p-4">
                    <div class="p-3 bg-white rounded-md p-4">
                        <div class="text-base font-extrabold family-nunito">We're here for you</div>
                        <div class="text-xs font-medium text-gray-600 mt-1 family-nunito">Get the help you need every step of the way.</div>
                        <div class="relative w-full text-gray-600 my-3">
                            <input class="rounded-full pl-10 pr-3 py-1.5 text-xs w-full text-gray-600 placeholder-gray-500" type="search" name="search" placeholder="Search articles, find answers">
                            <button type="submit" class="absolute left-0 top-2.5 ml-4">
                                <svg class="text-gray-600 h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
                            </button>
                        </div>
                        <div class="flex text-indigo-600">
                            <svg class="mr-1 my-auto" viewBox="0 0 18 18" fill="currentColor" width="18" height="18"><path d="M9,16 C5.13400675,16 2,12.8659932 2,9 C2,5.13400675 5.13400675,2 9,2 C12.8659932,2 16,5.13400675 16,9 C16,12.8659932 12.8659932,16 9,16 Z M9,15 C12.3137085,15 15,12.3137085 15,9 C15,5.6862915 12.3137085,3 9,3 C5.6862915,3 3,5.6862915 3,9 C3,12.3137085 5.6862915,15 9,15 Z M8,8 L7,8 C7,6.71336167 7.7225361,6 9,6 C10.2774639,6 11,6.71336167 11,8 C11,8.81151672 10.4865137,9.53417606 9.72017626,9.80117097 L9.33549636,9.93519493 C9.13460664,10.0051857 9,10.1946255 9,10.4073586 L9,11 L8,11 L8,10.4073586 C8,9.76915924 8.40381993,9.20083978 9.00648908,8.99086754 L9.39116897,8.85684359 C9.755727,8.72983017 10,8.38605047 10,8 C10,7.26303743 9.7225361,7 9,7 C8.2774639,7 8,7.26303743 8,8 Z M8,12 L9,12 L9,13 L8,13 L8,12 Z"></path></svg>
                            <div class="text-xs font-bold my-auto family-nunito">Visit help center</div>
                        </div>
                        <div class="flex text-indigo-600 mt-2">
                            <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18" class="mr-1 my-auto"><path d="M7.5,3 C8.88071187,3 10,4.11928813 10,5.5 C10,6.22421339 9.69205803,6.87650309 9.19997081,7.33307237 C10.0358096,7.67397272 10.745981,8.25909389 11.2419752,8.99977951 L9.94928288,8.99979571 C9.43063228,8.49164319 8.75453296,8.1435831 8.00094991,8.03558044 L8.00070296,6.91439849 C8.58293192,6.70828193 9,6.1528467 9,5.5 C9,4.67157288 8.32842712,4 7.5,4 C6.67157288,4 6,4.67157288 6,5.5 C6,6.15321869 6.41754351,6.70891488 7.00029246,6.91475048 L7.00004975,8.03543731 C5.30387842,8.27803074 4,9.73674681 4,11.5 L4,12 L8,12 L8,10 C8,9.44771525 8.44771525,9 9,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L6,15 L6,14 L8,14 L8,13 L4,13 C3.44771525,13 3,12.5522847 3,12 L3,11.5 C3,9.61637814 4.15731269,8.00306114 5.79966516,7.33232191 C5.30794197,6.87650309 5,6.22421339 5,5.5 C5,4.11928813 6.11928813,3 7.5,3 Z M14,10 L9,10 L9,14 L14,14 L14,10 Z"></path></svg>
                            <div class="text-xs font-bold my-auto family-nunito">Hire a professional</div>
                        </div>
                    </div>
                    <div class="p-3 bg-white rounded-md p-4 mt-4">
                        <div class="flex justify-between">
                            <div class="text-base font-extrabold family-nunito">Analytics</div>
                            <div class="text-xs font-semibold text-indigo-600 family-nunito">Customize</div>
                        </div>
                        <div class="text-xz font-medium text-indigo-600 family-nunito cursor-pointer">Last 30 days</div>
                        <div class="grid grid-cols-6 py-2.5 border-b mt-2">
                            <div class="col-span-4 ">
                                <div>
                                    <div class="text-xz font-medium family-nunito">Site Session</div>
                                    <div class="text-sm font-bold my-1.5 family-nunito">0</div>
                                    <div class="text-xz font-medium family-nunito">Today 0 . Yesterday 0 </div>
                                </div>
                            </div>
                            <div class="col-span-2 flex">
                                <div class="h-0.5 w-full rounded-full bg-green-500 m-auto"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-6 py-2.5 border-b">
                            <div class="col-span-4 ">
                                <div>
                                    <div class="text-xz font-medium family-nunito">Booking</div>
                                    <div class="text-sm font-bold my-1.5 family-nunito">0</div>
                                    <div class="text-xz font-medium family-nunito">Today 0 . Yesterday 0 </div>
                                </div>
                            </div>
                            <div class="col-span-2 flex">
                                <div class="h-0.5 w-full rounded-full bg-red-500 m-auto"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-6 py-2.5 border-b">
                            <div class="col-span-4 ">
                                <div>
                                    <div class="text-xz font-medium family-nunito">Total Sales</div>
                                    <div class="text-sm font-bold my-1.5 family-nunito">N/A</div>
                                    <div class="text-xz font-medium family-nunito">To make sales online </div>
                                    <div class="text-xz font-medium family-nunito">Upgrade to business premium </div>
                                </div>
                            </div>
                            <div class="col-span-2 flex">
                                <div class="h-0.5 w-full rounded-full bg-blue-500 m-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>

</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import Welcome from '@/Jetstream/Welcome'
    import AdminLayout from "../components/Layouts/admin-layout";

    export default {
        components: {
            AdminLayout,
            AppLayout,
            Welcome,
        },
    }
</script>
<style scoped>
.bg-linear-blue{
    background: -webkit-gradient(linear,left top,right top,from(#273c92),to(#293e92));
}
.text-vs{
    font-size: 10px;
}
.text-xz{
    font-size: 11px;
}
</style>
