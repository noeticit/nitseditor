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

    <div class="bg-green-400 p-1 w-full h-screen">
        <div class="rounded-md h-full w-full bg-white">
<!--            header start-->
            <div class="fixed top-0 z-20 w-full">
                <div class="max-w-screen-2xl mx-auto border-b border-gray-100 ">
                    <div class="h-16 max-w-7xl mt-1 mx-auto rounded-t-lg bg-white flex justify-between">
                        <div class="my-auto flex">
                            <div class="w-56"></div>
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
                                <inertia-link href="/user/profile" class="my-auto">
                                    <img class="rounded-full h-8 w-8" src="https://images.unsplash.com/photo-1595273185163-347066c49ad3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
                                </inertia-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!--            header end-->
            <div class="max-w-screen-2xl mx-auto relative">
                <div class="flex relative">
                    <!--            sidebar start-->
                    <div class="md:w-64 bg-white z-30 fixed h-screen py-3 px-4 shadow-2xl rounded-t-lg">
                        <img class="h-10 mx-auto" src="http://nitseditor.com/images/icons/nit-logo.png">
                        <div class="flex-col mt-10 w-full">
                            <div class="text-base px-4 pb-3 border-b border-gray-100 font-semibold family-montserrat">Dashboard</div>
                        </div>
                        <div class="py-3 border-b border-gray-100 bg-green-400 rounded-xl px-4 flex text-white">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"/>
                                        <path d="M22,15 L22,19 C22,20.1045695 21.1045695,21 20,21 L8,21 C5.790861,21 4,19.209139 4,17 C4,14.790861 5.790861,13 8,13 L20,13 C21.1045695,13 22,13.8954305 22,15 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M15.5421357,5.69999981 L18.3705628,8.52842693 C19.1516114,9.30947552 19.1516114,10.5758055 18.3705628,11.3568541 L9.88528147,19.8421354 C8.3231843,21.4042326 5.79052439,21.4042326 4.22842722,19.8421354 C2.66633005,18.2800383 2.66633005,15.7473784 4.22842722,14.1852812 L12.7137086,5.69999981 C13.4947572,4.91895123 14.7610871,4.91895123 15.5421357,5.69999981 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M5,3 L9,3 C10.1045695,3 11,3.8954305 11,5 L11,17 C11,19.209139 9.209139,21 7,21 C4.790861,21 3,19.209139 3,17 L3,5 C3,3.8954305 3.8954305,3 5,3 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-semibold family-montserrat">Home</div>
                        </div>
                        <div class="py-3 border-b border-gray-100 rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <rect fill="currentColor" opacity="0.3" x="5" y="8" width="2" height="8" rx="1"/>
                                        <path d="M6,21 C7.1045695,21 8,20.1045695 8,19 C8,17.8954305 7.1045695,17 6,17 C4.8954305,17 4,17.8954305 4,19 C4,20.1045695 4.8954305,21 6,21 Z M6,23 C3.790861,23 2,21.209139 2,19 C2,16.790861 3.790861,15 6,15 C8.209139,15 10,16.790861 10,19 C10,21.209139 8.209139,23 6,23 Z" fill="currentColor" fill-rule="nonzero"/>
                                        <rect fill="currentColor" opacity="0.3" x="17" y="8" width="2" height="8" rx="1"/>
                                        <path d="M18,21 C19.1045695,21 20,20.1045695 20,19 C20,17.8954305 19.1045695,17 18,17 C16.8954305,17 16,17.8954305 16,19 C16,20.1045695 16.8954305,21 18,21 Z M18,23 C15.790861,23 14,21.209139 14,19 C14,16.790861 15.790861,15 18,15 C20.209139,15 22,16.790861 22,19 C22,21.209139 20.209139,23 18,23 Z" fill="currentColor" fill-rule="nonzero"/>
                                        <path d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z" fill="currentColor" fill-rule="nonzero"/>
                                        <path d="M18,7 C19.1045695,7 20,6.1045695 20,5 C20,3.8954305 19.1045695,3 18,3 C16.8954305,3 16,3.8954305 16,5 C16,6.1045695 16.8954305,7 18,7 Z M18,9 C15.790861,9 14,7.209139 14,5 C14,2.790861 15.790861,1 18,1 C20.209139,1 22,2.790861 22,5 C22,7.209139 20.209139,9 18,9 Z" fill="currentColor" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium text-gray-900 family-montserrat">My</div>
                        </div>
                        <div class="py-3 border-b border-gray-100  rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="currentColor"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium family-montserrat text-gray-900">My Wallet</div>
                        </div>
                        <div class="py-3 border-b border-gray-100 rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z" fill="currentColor" fill-rule="nonzero" opacity="0.3"/>
                                        <path d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="currentColor"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium family-montserrat text-gray-900">My Orders</div>
                        </div>
                        <div class="py-3 border-b border-gray-100 rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <rect fill="currentColor" x="3" y="2" width="15" height="5" rx="1"/>
                                        <rect fill="currentColor" x="9" y="12" width="4" height="10" rx="1"/>
                                        <path d="M12,12 L10,12 L10,11 C10,9.8954305 10.8954305,9 12,9 L19,9 L19,5.5 L18,5.5 L18,3.5 L19,3.5 C20.1045695,3.5 21,4.3954305 21,5.5 L21,9 C21,10.1045695 20.1045695,11 19,11 L12,11 L12,12 Z" fill="currentColor" fill-rule="nonzero" opacity="0.3"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium family-montserrat text-gray-900">My Logs</div>
                        </div>
                        <div class="py-3 border-b border-gray-100 rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"/>
                                        <path d="M22,15 L22,19 C22,20.1045695 21.1045695,21 20,21 L8,21 C5.790861,21 4,19.209139 4,17 C4,14.790861 5.790861,13 8,13 L20,13 C21.1045695,13 22,13.8954305 22,15 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M15.5421357,5.69999981 L18.3705628,8.52842693 C19.1516114,9.30947552 19.1516114,10.5758055 18.3705628,11.3568541 L9.88528147,19.8421354 C8.3231843,21.4042326 5.79052439,21.4042326 4.22842722,19.8421354 C2.66633005,18.2800383 2.66633005,15.7473784 4.22842722,14.1852812 L12.7137086,5.69999981 C13.4947572,4.91895123 14.7610871,4.91895123 15.5421357,5.69999981 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M5,3 L9,3 C10.1045695,3 11,3.8954305 11,5 L11,17 C11,19.209139 9.209139,21 7,21 C4.790861,21 3,19.209139 3,17 L3,5 C3,3.8954305 3.8954305,3 5,3 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium text-gray-900 family-montserrat">My Links</div>
                        </div>
                        <div class="py-3 border-b border-gray-100  rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M15.9956071,6 L9,6 C7.34314575,6 6,7.34314575 6,9 L6,15.9956071 C4.70185442,15.9316381 4,15.1706419 4,13.8181818 L4,6.18181818 C4,4.76751186 4.76751186,4 6.18181818,4 L13.8181818,4 C15.1706419,4 15.9316381,4.70185442 15.9956071,6 Z" fill="currentColor" fill-rule="nonzero" opacity="0.3"/>
                                        <path d="M10.1818182,8 L17.8181818,8 C19.2324881,8 20,8.76751186 20,10.1818182 L20,17.8181818 C20,19.2324881 19.2324881,20 17.8181818,20 L10.1818182,20 C8.76751186,20 8,19.2324881 8,17.8181818 L8,10.1818182 C8,8.76751186 8.76751186,8 10.1818182,8 Z" fill="currentColor"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium family-montserrat text-gray-900">My Wallet</div>
                        </div>
                        <div class="py-3 border-b border-gray-100 rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"/>
                                        <path d="M22,15 L22,19 C22,20.1045695 21.1045695,21 20,21 L8,21 C5.790861,21 4,19.209139 4,17 C4,14.790861 5.790861,13 8,13 L20,13 C21.1045695,13 22,13.8954305 22,15 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M15.5421357,5.69999981 L18.3705628,8.52842693 C19.1516114,9.30947552 19.1516114,10.5758055 18.3705628,11.3568541 L9.88528147,19.8421354 C8.3231843,21.4042326 5.79052439,21.4042326 4.22842722,19.8421354 C2.66633005,18.2800383 2.66633005,15.7473784 4.22842722,14.1852812 L12.7137086,5.69999981 C13.4947572,4.91895123 14.7610871,4.91895123 15.5421357,5.69999981 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M5,3 L9,3 C10.1045695,3 11,3.8954305 11,5 L11,17 C11,19.209139 9.209139,21 7,21 C4.790861,21 3,19.209139 3,17 L3,5 C3,3.8954305 3.8954305,3 5,3 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z" fill="currentColor"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium family-montserrat text-gray-900">My Orders</div>
                        </div>
                        <div class="py-3 border-b border-gray-100 rounded-xl px-4 flex text-green-500">
                            <div class="my-auto">
                                <svg class="h-5 w-5 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M3.73851648,19 L8.5,19 C8.77614237,19 9,18.7761424 9,18.5 L9,6.5962912 C9,6.32014883 8.77614237,6.0962912 8.5,6.0962912 C8.29554771,6.0962912 8.11169333,6.22076667 8.03576165,6.41059586 L3.27427814,18.3143047 C3.17172143,18.5706964 3.29642938,18.8616816 3.55282114,18.9642383 C3.61188128,18.9878624 3.67490677,19 3.73851648,19 Z" fill="currentColor" opacity="0.3"/>
                                        <path d="M15.7385165,19 L20.5,19 C20.7761424,19 21,18.7761424 21,18.5 L21,6.5962912 C21,6.32014883 20.7761424,6.0962912 20.5,6.0962912 C20.2955477,6.0962912 20.1116933,6.22076667 20.0357617,6.41059586 L15.2742781,18.3143047 C15.1717214,18.5706964 15.2964294,18.8616816 15.5528211,18.9642383 C15.6118813,18.9878624 15.6749068,19 15.7385165,19 Z" fill="currentColor" transform="translate(18.000000, 12.500000) scale(-1, 1) translate(-18.000000, -12.500000) "/>
                                        <rect fill="currentColor" opacity="0.3" x="11" y="2" width="2" height="20" rx="1"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="my-auto ml-4 text-sm font-medium family-montserrat text-gray-900">My Logs</div>
                        </div>
                    </div>
                    <!--            sidebar end-->
<!--                    slot start-->
                    <div class="w-4/5 relative ml-auto mt-20">

                    </div>
<!--                    slot end-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import Welcome from '@/Jetstream/Welcome'
    import NitsHBlue from "@/Base/Headers/NitsHBlue";

    export default {
        components: {
            NitsHBlue,
            AppLayout,
            Welcome,
        },
    }
</script>
