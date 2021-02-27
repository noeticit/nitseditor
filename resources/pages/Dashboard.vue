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
    <div class="grid grid-cols-9 gap-4">
        <div class="col-span-6">
            <div class="grid grid-cols-3 gap-4">
                <div class="h-24 px-4 w-full rounded-2xl bg-white flex">
                    <div class="my-auto flex">
                        <div class="h-12 w-12 rounded-full flex bg-pink-500">
                            <svg class="h-7 w-7 m-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 339.033 339.033"><path d="M169.516 0C76.044 0 0 76.045 0 169.517c0 93.471 76.044 169.516 169.516 169.516s169.516-76.044 169.516-169.516S262.989 0 169.516 0zm-26.149 17.224c-13.76 11.78-26.933 26.445-37.516 42.056a204.917 204.917 0 00-12.856 21.737H42.93c23.203-33.091 59.032-56.705 100.437-63.793zm18.649 227.372h-59.371c-8.934-19.363-15.104-41.7-16.14-66.79h75.511v66.79zM33.628 96.017H86.09c-8.754 21.293-13.708 43.833-14.594 66.79h-56.34c1.034-24.09 7.6-46.77 18.472-66.79zm-18.404 81.79H71.49c.863 23.317 5.768 45.651 14.643 66.79H34.51a153.414 153.414 0 01-19.286-66.79zm28.826 81.789h49.157a205.148 205.148 0 0012.671 20.988c12.478 18.143 25.89 31.638 37.218 41.179-40.627-7.029-75.867-29.976-99.046-62.167zm117.966 57.991c-16.754-12.269-36.477-31.838-51.588-57.991h51.588v57.991zm0-154.78H86.505c.934-23.32 6.239-45.666 15.834-66.79h59.678v66.79zm0-81.79H109.99a197.713 197.713 0 018.276-13.32c15.442-22.78 32.369-37.697 43.75-46.15v59.47zm161.862 81.79h-56.341c-.886-22.957-5.84-45.497-14.594-66.79h52.461c10.872 20.02 17.44 42.7 18.474 66.79zm-27.774-81.79H246.04a205.087 205.087 0 00-12.856-21.737c-10.583-15.612-23.76-30.273-37.521-42.057 41.405 7.088 77.235 30.702 100.441 63.794zM177.016 21.546c11.381 8.453 28.308 23.37 43.75 46.15a197.713 197.713 0 018.276 13.32h-52.026v-59.47zm0 74.471h59.678c9.595 21.124 14.9 43.47 15.834 66.79h-75.512v-66.79zm0 81.79h75.512c-1.035 25.09-7.206 47.427-16.14 66.79h-59.372v-66.79zm0 81.789h51.588c-15.111 26.152-34.834 45.722-51.588 57.991v-57.991zm18.924 62.167c11.327-9.54 24.738-23.038 37.215-41.178a205.148 205.148 0 0012.671-20.988h49.157c-23.178 32.189-58.417 55.136-99.043 62.166zm108.583-77.167h-51.622c8.875-21.139 13.78-43.472 14.643-66.79h56.265a153.42 153.42 0 01-19.286 66.79z"/></svg>
                        </div>
                    </div>
                    <div class="my-auto ml-3">
                        <div class="text-sm font-medium family-montserrat text-gray-500">Balance</div>
                        <div class="text-2xl font-extrabold family-montserrat">$ 19.25</div>
                    </div>
                </div>
                <div class="h-24 px-4 w-full rounded-2xl bg-white flex">
                    <div class="my-auto flex">
                        <div class="h-12 w-12 rounded-full flex bg-blue-300">
                            <svg class="h-7 w-7 m-auto text-white" fill="currentColor" viewBox="0 0 533.886 533.886" xmlns="http://www.w3.org/2000/svg"><path d="M271.114 447.335a20.856 20.856 0 01-17.194-9.052l-37.844-55.129a9.446 9.446 0 01-.156-.233c-18.465-27.689-28.223-59.916-28.223-93.197V83.423c0-45.997 37.421-83.418 83.418-83.418s83.418 37.421 83.418 83.418v206.301c0 33.281-9.759 65.507-28.223 93.197l-.156.233-37.844 55.129a20.867 20.867 0 01-17.196 9.052zm-20.572-87.672l20.572 29.968 20.571-29.966c13.829-20.788 21.138-44.971 21.138-69.941V83.423c0-22.998-18.711-41.709-41.709-41.709s-41.709 18.711-41.709 41.709v206.301c0 24.97 7.309 49.151 21.137 69.939zm283.339 153.363c0-11.518-9.337-20.854-20.854-20.854H20.86c-11.518 0-20.855 9.337-20.855 20.854 0 11.518 9.337 20.855 20.855 20.855h492.167c11.517 0 20.854-9.338 20.854-20.855zM396.846 392.214a20.786 20.786 0 01-14.61-5.974c-8.219-8.069-8.34-21.273-.271-29.491l50.306-51.237c8.071-8.22 21.274-8.34 29.491-.27 8.219 8.069 8.34 21.273.271 29.491l-50.306 51.237a20.792 20.792 0 01-14.881 6.244zm35.1 69.362l85.964-20.712c11.197-2.698 18.088-13.962 15.39-25.159-2.699-11.197-13.963-18.091-25.159-15.39l-85.964 20.712c-11.197 2.698-18.088 13.962-15.39 25.159 2.302 9.556 10.842 15.975 20.257 15.975 1.617 0 3.261-.189 4.902-.585zm49.799-203.236c0 14.397 11.671 26.068 26.068 26.068s26.068-11.671 26.068-26.068-11.671-26.068-26.068-26.068-26.068 11.67-26.068 26.068zm-330.096 127.9c8.219-8.069 8.34-21.273.271-29.491l-50.306-51.237c-8.07-8.22-21.273-8.34-29.491-.27-8.219 8.069-8.34 21.273-.271 29.491l50.306 51.237a20.788 20.788 0 0014.882 6.244 20.79 20.79 0 0014.609-5.974zm-24.551 59.946c2.699-11.197-4.193-22.461-15.39-25.159l-85.964-20.712c-11.198-2.7-22.46 4.192-25.159 15.39-2.699 11.197 4.193 22.461 15.39 25.159l85.964 20.712c1.642.396 3.284.585 4.902.585 9.414 0 17.955-6.419 20.257-15.975zM26.074 232.272c-14.397 0-26.068 11.671-26.068 26.068s11.671 26.068 26.068 26.068 26.068-11.671 26.068-26.068c0-14.398-11.671-26.068-26.068-26.068z"/></svg>
                        </div>
                    </div>
                    <div class="my-auto ml-3">
                        <div class="text-sm font-medium family-montserrat text-gray-500">ACTIONS</div>
                        <div class="text-2xl font-extrabold family-montserrat">$ 19.25</div>
                        <div class="text-sm font-medium family-montserrat text-gray-500">Vendor Pay <span class="text-green-400">$0.00</span></div>
                    </div>
                </div>
                <div class="h-24 px-4 w-full rounded-2xl bg-white flex">
                    <div class="my-auto flex">
                        <div class="h-12 w-12 rounded-full flex bg-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.995 511.995" class="h-7 w-7 m-auto text-white" fill="currentColor"><path d="M346.999 511.995c-22.429.001-44.06-12.513-54.479-33.798l-30.156-56.463-17.107 32.654a19.956 19.956 0 01-1.489 2.411c-11.227 15.58-29.699 21.117-43.375 21.117l-.331-.001c-15.284-.101-30.503-6.659-41.752-17.995-11.683-11.772-18.116-27.399-18.116-44.005V156.961c0-23.619 13.308-44.471 34.729-54.419 21.218-9.854 45.475-6.722 63.469 8.149l131.747 98.111c8.859 6.597 10.692 19.127 4.096 27.986-6.598 8.859-19.127 10.692-27.986 4.095l-132.191-98.442a19.996 19.996 0 01-.959-.761c-9.047-7.64-18.61-4.12-21.328-2.859-2.716 1.261-11.576 6.296-11.576 18.14v258.955c0 12.887 10.609 21.938 20.132 22h.092c3.892 0 8.171-1.612 10.303-3.798l33.758-64.438a20 20 0 0117.636-10.719h.08a20 20 0 0117.642 10.578l48.151 90.155c.136.254.266.511.39.771 4.8 10.002 16.898 14.354 26.966 9.693a20.25 20.25 0 0010.652-11.658c1.801-5.041 1.57-10.458-.641-15.31l-48.596-86.476a19.998 19.998 0 0117.436-29.797h68.568c11.604-.593 16.237-9.731 17.387-12.539 1.18-2.879 4.385-12.958-3.896-21.741-7.577-8.037-7.205-20.694.831-28.272 8.037-7.578 20.695-7.204 28.272.832 16.41 17.405 20.936 42.059 11.809 64.342-9.076 22.16-29.471 36.477-53.225 37.364-.248.01-.497.014-.746.014h-34.819l32.196 57.293c.197.352.385.709.561 1.072 7.131 14.706 8.03 31.282 2.532 46.673-5.497 15.392-16.693 27.647-31.527 34.508a59.828 59.828 0 01-25.14 5.532zM162.808 78.542c9.686-5.311 13.231-17.468 7.92-27.153l-17-31c-5.311-9.685-17.466-13.23-27.152-7.919-9.686 5.311-13.231 17.468-7.92 27.153l17 31c3.638 6.634 10.486 10.387 17.554 10.387 3.25 0 6.548-.794 9.598-2.468zm-42.293 45.481c4.427-10.12-.188-21.913-10.307-26.34l-32-14c-10.12-4.428-21.912.188-26.34 10.307-4.427 10.12.188 21.913 10.307 26.34l32 14a19.922 19.922 0 008.006 1.682c7.705-.001 15.048-4.479 18.334-11.989zm124.651-64.692l11-33c3.493-10.479-2.17-21.806-12.649-25.298-10.475-3.495-21.806 2.17-25.298 12.649l-11 33c-3.493 10.479 2.17 21.806 12.649 25.298 2.098.7 4.23 1.032 6.327 1.032 8.373 0 16.178-5.301 18.971-13.681zm52.93 50.747l27-20c8.876-6.575 10.741-19.1 4.167-27.976-6.575-8.876-19.101-10.741-27.976-4.167l-27 20c-8.876 6.575-10.741 19.1-4.167 27.976 3.924 5.297 9.966 8.097 16.087 8.097 4.137 0 8.31-1.279 11.889-3.93zM79.62 222.576l30-12c10.256-4.102 15.244-15.742 11.142-25.997-4.103-10.257-15.744-15.245-25.997-11.142l-30 12c-10.256 4.102-15.244 15.742-11.142 25.997 3.128 7.82 10.638 12.578 18.575 12.578 2.473 0 4.986-.462 7.422-1.436z"/></svg>
                        </div>
                    </div>
                    <div class="my-auto ml-3">
                        <div class="text-sm font-medium family-montserrat text-gray-500">CLICKS</div>
                        <div class="text-2xl font-extrabold family-montserrat">$ 19.25</div>
                        <div class="text-sm font-medium family-montserrat text-gray-500">Vendor Pay <span class="text-green-400">$0.00</span></div>
                    </div>
                </div>
            </div>
            <div class="mt-4 w-full p-4 bg-white rounded-2xl">
                <div class="flex justify-between mt-2">
                    <div class="my-auto text-sm tracking-tight mr-2 font-semibold text-gray-900 family-montserrat">AFFILIATED OVERVIEW</div>
                    <div class="flex my-auto">
                        <div class="rounded-md bg-gray-100 p-1 flex">
                            <div class="my-auto">
                                <svg class="text-red-700 h-4 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M15 14H5l5-9 5 9z"/></svg>
                            </div>
                            <div class="flex-col my-auto ml-1">
                                <div class="text-xs font-medium text-gray-900 family-montserrat ">Weekly Earning</div>
                                <div class="text-xs font-medium text-red-500 family-montserrat ">$0.00</div>
                            </div>
                        </div>
                        <div class="rounded-md bg-gray-100 p-1 flex mx-2">
                            <div class="my-auto">
                                <svg class="text-red-700 h-4 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M15 14H5l5-9 5 9z"/></svg>
                            </div>
                            <div class="flex-col my-auto ml-1">
                                <div class="text-xs font-medium text-gray-900 family-montserrat ">Weekly Earning</div>
                                <div class="text-xs font-medium text-red-500 family-montserrat ">$0.00</div>
                            </div>
                        </div>
                        <div class="rounded-md bg-gray-100 p-1 flex">
                            <div class="my-auto">
                                <svg class="text-red-700 h-4 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M15 14H5l5-9 5 9z"/></svg>
                            </div>
                            <div class="flex-col my-auto ml-1">
                                <div class="text-xs font-medium text-gray-900 family-montserrat ">Weekly Earning</div>
                                <div class="text-xs font-medium text-red-500 family-montserrat ">$0.00</div>
                            </div>
                        </div>
                    </div>
                    <div class="my-auto">
                        <select class="focus:outline-none text-xs font-semibold text-black family-montserrat">
                            <option class="text-xs font-semibold text-black family-montserrat" selected>Aug 2020</option>
                        </select>
                    </div>
                </div>
                <div class="mt-7">
                    <img class="w-full h-64" src="https://datavizcatalogue.com/methods/images/top_images/line_graph.png">
                </div>
                <div class="py-3 flex justify-center">
                    <div class="text-xs font-medium text-gray-800 family-montserrat">Sale</div>
                    <div class="border-b-2 border-green-500 my-auto w-6 mx-2"></div>
                    <div class="text-xs font-medium text-gray-800 family-montserrat">Revenue</div>
                    <div class="border-b-2 border-green-500 my-auto w-6 mx-2"></div>
                    <div class="text-xs font-medium text-gray-800 family-montserrat">Sale</div>
                    <div class="border-b-2 border-green-500 my-auto w-6 mx-2"></div>
                    <div class="text-xs font-medium text-gray-800 family-montserrat">Revenue</div>
                    <div class="border-b-2 border-green-500 my-auto w-6 mx-2"></div>
                    <div class="text-xs font-medium text-gray-800 family-montserrat">Sale</div>
                    <div class="border-b-2 border-green-500 my-auto w-6 mx-2"></div>
                    <div class="text-xs font-medium text-gray-800 family-montserrat">Revenue</div>
                    <div class="border-b-2 border-green-500 my-auto w-6 mx-2"></div>
                </div>
            </div>
            <div class="mt-4 w-full bg-white rounded-2xl p-4">
                <div class="flex justify-between border-b border-gray-100 pb-4 pt-2">
                    <div class="my-auto text-black font-semibold family-montserrat text-base">Your affiliated ID : 2</div>
                    <div class="my-auto flex">
                        <input type="checkbox" checked class="h-4 w-4 my-auto">
                        <div class="my-auto text-sm font-medium family-montserrat ml-2">Show your ID</div>
                    </div>
                </div>
                <div class="py-3 ">
                    <div class="text-sm font-semibold text-green-400 family-montserrat">Your unique reseller link</div>
                    <div class="mt-3 flex justify-between rounded-md bg-gray-100 py-3 px-3">
                        <div class="text-gray-500 text-sm font-normal ">https://noeticitservices.com</div>
                        <div class="flex">
                            <svg class="text-green-400 h-4 w-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867"><path d="M341.333 85.333H51.2c-28.277 0-51.2 22.923-51.2 51.2v290.133c0 28.277 22.923 51.2 51.2 51.2h290.133c28.277 0 51.2-22.923 51.2-51.2V136.533c0-28.277-22.923-51.2-51.2-51.2zM358.4 426.667c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V136.533c0-9.426 7.641-17.067 17.067-17.067h290.133c9.426 0 17.067 7.641 17.067 17.067v290.134z"/><path d="M426.667 0h-307.2c-28.277 0-51.2 22.923-51.2 51.2 0 9.426 7.641 17.067 17.067 17.067S102.4 60.626 102.4 51.2s7.641-17.067 17.067-17.067h307.2c9.426 0 17.067 7.641 17.067 17.067v307.2c0 9.426-7.641 17.067-17.067 17.067s-17.067 7.641-17.067 17.067 7.641 17.067 17.067 17.067c28.277 0 51.2-22.923 51.2-51.2V51.2c0-28.277-22.923-51.2-51.2-51.2z"/></svg>
                            <svg class="text-black h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.12 24h-2.24a1.498 1.498 0 01-1.486-1.32l-.239-1.876a9.45 9.45 0 01-1.374-.569l-1.494 1.161a1.492 1.492 0 01-1.985-.126l-1.575-1.575a1.488 1.488 0 01-.122-1.979l1.161-1.495a9.232 9.232 0 01-.569-1.374l-1.88-.239A1.501 1.501 0 010 13.12v-2.24c0-.757.567-1.396 1.32-1.486l1.876-.239a9.45 9.45 0 01.569-1.374l-1.16-1.494a1.49 1.49 0 01.127-1.986l1.575-1.575a1.489 1.489 0 011.979-.122L7.78 3.766a9.416 9.416 0 011.375-.569l.239-1.88C9.484.567 10.123 0 10.88 0h2.24c.757 0 1.396.567 1.486 1.32l.239 1.876c.478.155.938.346 1.375.569l1.494-1.161a1.49 1.49 0 011.985.127l1.575 1.575c.537.521.591 1.374.122 1.979L20.235 7.78c.224.437.415.897.569 1.374l1.88.239A1.5 1.5 0 0124 10.88v2.24c0 .757-.567 1.396-1.32 1.486l-1.876.239a9.45 9.45 0 01-.569 1.374l1.161 1.494a1.49 1.49 0 01-.127 1.985l-1.575 1.575a1.487 1.487 0 01-1.979.122l-1.495-1.161a9.232 9.232 0 01-1.374.569l-.239 1.88A1.5 1.5 0 0113.12 24zm-5.39-4.86c.083 0 .168.021.244.063a8.393 8.393 0 001.774.736.5.5 0 01.358.417l.28 2.2c.03.251.247.444.494.444h2.24a.504.504 0 00.493-.439l.281-2.204a.5.5 0 01.358-.417 8.393 8.393 0 001.774-.736.499.499 0 01.55.042l1.75 1.36a.492.492 0 00.655-.034l1.585-1.585a.495.495 0 00.039-.66l-1.36-1.75a.5.5 0 01-.042-.55 8.393 8.393 0 00.736-1.774.5.5 0 01.417-.358l2.2-.28A.507.507 0 0023 13.12v-2.24a.504.504 0 00-.439-.493l-2.204-.281a.5.5 0 01-.417-.358 8.393 8.393 0 00-.736-1.774.497.497 0 01.042-.55l1.36-1.75a.49.49 0 00-.033-.654l-1.585-1.585a.492.492 0 00-.66-.039l-1.75 1.36a.5.5 0 01-.551.042 8.359 8.359 0 00-1.774-.736.5.5 0 01-.358-.417l-.28-2.2A.507.507 0 0013.12 1h-2.24a.504.504 0 00-.493.439l-.281 2.204a.502.502 0 01-.358.418 8.356 8.356 0 00-1.774.735.5.5 0 01-.551-.041l-1.75-1.36a.49.49 0 00-.654.033L3.434 5.014a.495.495 0 00-.039.66l1.36 1.75a.5.5 0 01.042.55 8.341 8.341 0 00-.736 1.774.5.5 0 01-.417.358l-2.2.28A.505.505 0 001 10.88v2.24c0 .247.193.464.439.493l2.204.281a.5.5 0 01.417.358c.18.626.428 1.223.736 1.774a.497.497 0 01-.042.55l-1.36 1.75a.49.49 0 00.033.654l1.585 1.585a.494.494 0 00.66.039l1.75-1.36a.515.515 0 01.308-.104z"/><path d="M12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-3">
            <div class="w-full bg-green-500 rounded-2xl h-24 p-3">
                <div class="text-center text-sm text-white font-medium family-montserrat">TOTAL SALES</div>
                <div class="grid grid-cols-2 my-3">
                    <div class="border-r w-full">
                        <div class="text-center family-montserrat text-xs font-medium text-gray-100">ADMIN STORE</div>
                        <div class="text-center family-montserrat text-base font-semibold text-white">$65.2154</div>
                    </div>
                    <div class="w-full">
                        <div class="text-center family-montserrat text-xs font-medium text-gray-100">SUBSCRIBER STORE</div>
                        <div class="text-center family-montserrat text-base font-semibold text-white">$65.2154</div>
                    </div>
                </div>
            </div>
            <div class="mt-4 w-full p-4 bg-white rounded-2xl">
                <div class="text-base font-semibold family-montserrat text-gray-800 py-2">Membership Plan</div>
                <div class="flex py-5 border-b justify-between">
                    <div class="flex my-auto">
                        <div class="img mr-3 my-auto rounded-full">
                            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1595273185163-347066c49ad3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
                        </div>
                        <div class="flex-col my-auto">
                            <div class="text-sm font-medium text-gray-500 family-montserrat"> Metehan</div>
                            <div class="text-xs font-medium text-gray-800 family-montserrat"> Plan: <span class="text-green-400">30 Days</span></div>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="text-right text-xs font-medium family-montserrat text-gray-600">30 October 2020</div>
                        <div class="text-center text-xs font-medium family-montserrat text-gray-600">to</div>
                        <div class="text-right text-xs font-medium family-montserrat text-gray-600">29 November 2020</div>
                    </div>
                </div>
                <div class="flex justify-between py-3 border-b">
                    <div class="text-gray-800 family-montserrat text-sm font-medium">Remain Days</div>
                    <div class="text-green-500 family-montserrat text-sm font-medium">15 Days</div>
                </div>
                <div class="flex justify-between py-3 border-b">
                    <div class="text-gray-800 family-montserrat text-sm font-medium">Plan Status</div>
                    <div class="text-green-500 flex family-montserrat text-sm font-medium">
                        <span class="my-auto">
                            <svg class="h-3 w-3 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.576 408.576"><path d="M204.288 0C91.648 0 0 91.648 0 204.288s91.648 204.288 204.288 204.288 204.288-91.648 204.288-204.288S316.928 0 204.288 0zm114.176 150.528l-130.56 129.536c-7.68 7.68-19.968 8.192-28.16.512L90.624 217.6c-8.192-7.68-8.704-20.48-1.536-28.672 7.68-8.192 20.48-8.704 28.672-1.024l54.784 50.176L289.28 121.344c8.192-8.192 20.992-8.192 29.184 0s8.192 20.992 0 29.184z"/></svg>
                        </span>
                        <span class="my-auto">Active</span>
                    </div>
                </div>
                <div class="flex justify-between py-3 border-b">
                    <div class="text-gray-800 family-montserrat text-sm font-medium">Active</div>
                    <div class="text-green-500 flex family-montserrat text-sm font-medium">
                        <span class="my-auto">
                            <svg class="h-3 w-3 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.576 408.576"><path d="M204.288 0C91.648 0 0 91.648 0 204.288s91.648 204.288 204.288 204.288 204.288-91.648 204.288-204.288S316.928 0 204.288 0zm114.176 150.528l-130.56 129.536c-7.68 7.68-19.968 8.192-28.16.512L90.624 217.6c-8.192-7.68-8.704-20.48-1.536-28.672 7.68-8.192 20.48-8.704 28.672-1.024l54.784 50.176L289.28 121.344c8.192-8.192 20.992-8.192 29.184 0s8.192 20.992 0 29.184z"/></svg>
                        </span>
                        <span class="my-auto">Active</span>
                    </div>
                </div>
                <div class="flex justify-center cursor-pointer py-3">
                    <div class="mr-1 my-auto">
                        <svg class="h-3 w-3 text-green-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
                    </div>
                    <div class="text-xs font-medium text-green-400 family-montserrat my-auto">Description</div>
                </div>
            </div>
            <div class="mt-4 w-full p-3 bg-white rounded-2xl">
                <div class="flex border-b border-gray-100 pb-4 pt-2">
                    <div class="bg-green-400 rounded-md p-2 mr-3">
                        <svg class="h-4 w-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.341 469.341"><path d="M448.004 236.639v-65.965c0-22.368-17.35-40.559-39.271-42.323l-61.26-107c-5.677-9.896-14.844-16.969-25.813-19.906-10.917-2.917-22.333-1.385-32.104 4.302L79.553 128.007H42.67c-23.531 0-42.667 19.135-42.667 42.667v256c0 23.531 19.135 42.667 42.667 42.667h362.667c23.531 0 42.667-19.135 42.667-42.667v-65.965c12.389-4.418 21.333-16.147 21.333-30.035v-64c0-13.888-8.944-25.617-21.333-30.035zm-64.06-108.632h-92.971l69.729-40.596 23.242 40.596zm-33.841-59.109l-101.529 59.109h-42.113l133.112-77.5 10.53 18.391zm-49.808-44.714c4.823-2.823 10.458-3.573 15.844-2.135 5.448 1.458 9.99 4.979 12.813 9.906l.022.039-164.91 96.013h-42.111L300.295 24.184zm126.375 402.49c0 11.76-9.573 21.333-21.333 21.333H42.67c-11.76 0-21.333-9.573-21.333-21.333v-256c0-11.76 9.573-21.333 21.333-21.333h362.667c11.76 0 21.333 9.573 21.333 21.333v64h-64c-35.292 0-64 28.708-64 64s28.708 64 64 64h64v64zm21.334-96c0 5.885-4.781 10.667-10.667 10.667H362.67c-23.531 0-42.667-19.135-42.667-42.667 0-23.531 19.135-42.667 42.667-42.667h74.667c5.885 0 10.667 4.781 10.667 10.667v64z"/><path d="M362.67 277.341c-11.76 0-21.333 9.573-21.333 21.333 0 11.76 9.573 21.333 21.333 21.333 11.76 0 21.333-9.573 21.333-21.333.001-11.76-9.572-21.333-21.333-21.333z"/></svg>
                    </div>
                    <div class="my-auto text-black font-bold family-montserrat text-sm">Wallet Statistic</div>
                </div>
                <div class="flex justify-between border-b border-gray-100 py-3">
                    <div class="text-xs font-semibold text-gray-800 family-montserrat">Lorem ipsum doler</div>
                    <div class="text-green-400 family-montserrat font-semibold text-sm">3 / $658,879.00</div>
                </div>
                <div class="flex justify-between border-b border-gray-100 py-3">
                    <div class="text-xs font-semibold text-gray-800 family-montserrat">Lorem ipsum doler</div>
                    <div class="text-green-400 family-montserrat font-semibold text-sm">3 / $658,879.00</div>
                </div>
                <div class="flex justify-between border-b border-gray-100 py-3">
                    <div class="text-xs font-semibold text-gray-800 family-montserrat">Lorem ipsum doler</div>
                    <div class="text-green-400 family-montserrat font-semibold text-sm">3 / $658,879.00</div>
                </div>
                <div class="flex justify-between border-b border-gray-100 py-3">
                    <div class="text-xs font-semibold text-gray-800 family-montserrat">Lorem ipsum doler</div>
                    <div class="text-green-400 family-montserrat font-semibold text-sm">3 / $658,879.00</div>
                </div>
                <div class="flex justify-between border-b border-gray-100 py-3">
                    <div class="text-xs font-semibold text-gray-800 family-montserrat">Lorem ipsum doler</div>
                    <div class="text-green-400 family-montserrat font-semibold text-sm">3 / $658,879.00</div>
                </div>
                <div class="py-3 flex justify-center">
                    <div class="text-sm font-medium text-gray-700 family-montserrat my-auto">- check all transactions</div>
                    <div class="ml-3 mr-1 my-auto cursor-pointer">
                        <svg class="h-3 w-3 text-green-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M15 10.001c0 .299-.305.514-.305.514l-8.561 5.303C5.51 16.227 5 15.924 5 15.149V4.852c0-.777.51-1.078 1.135-.67l8.561 5.305c-.001 0 .304.215.304.514z"/></svg>
                    </div>
                    <div class="text-sm font-semibold cursor-pointer text-green-400 family-montserrat my-auto">click here</div>

                </div>
            </div>
        </div>
    </div>
</admin-layout>
<!--    <div class="overflow-hidden">-->
<!--        <div class="rounded-md h-full w-full bg-gray-100">-->
<!--&lt;!&ndash;            header start&ndash;&gt;-->

<!--&lt;!&ndash;            header end&ndash;&gt;-->
<!--            <div class="max-w-screen-2xl mx-auto relative">-->
<!--                <div class="flex relative">-->
<!--                    &lt;!&ndash;            sidebar start&ndash;&gt;-->

<!--                    &lt;!&ndash;            sidebar end&ndash;&gt;-->
<!--&lt;!&ndash;                    slot start&ndash;&gt;-->
<!--                    <div class="w-4/5 relative ml-auto mt-20">-->

<!--                    </div>-->
<!--&lt;!&ndash;                    slot end&ndash;&gt;-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import Welcome from '@/Jetstream/Welcome'
    import NitsHBlue from "@/Base/Headers/NitsHBlue";
    import AdminLayout from "@/Layouts/admin-layout";
    import Input from "@/Jetstream/Input";

    export default {
        components: {
            Input,
            AdminLayout,
            NitsHBlue,
            AppLayout,
            Welcome,
        },
    }
</script>
