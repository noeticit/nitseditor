<template>
    <div class="w-full z-40 lg:fixed">
        <div class="flex md:py-3 py-2 md:justify-between" style="background: #183444">
            <div class="hidden md:flex">
                <img class="md:h-10 my-auto md:w-40 h-6 w-24 sm:mt-1 ml-3 md:ml-10" src="/nits-assets/images/Biltrax.png">
            </div>
            <div class="md:hidden rounded-full bg-white h-8 w-8 flex my-auto mx-3">
                <img class="h-4 w-4 m-auto" src="/project-assets/images/bx.png">
            </div>
            <div class="relative my-auto md:hidden max-w-full">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <input class="w-full text-xs border border-gray-500 rounded-md pl-10 pr-4 py-1 focus:bg-white focus:outline-none" type="text" placeholder="Search Company ..." style="background: #e9eff5">
            </div>
            <span class="md:w-1/4 w-full my-auto h-10 cursor-pointer border border-gray-300 md:text-sm rounded hidden md:flex" style="background: #e9eff5">
                <input type="search" name="search" placeholder="Search Company" class="flex-grow px-4 rounded text-sm focus:outline-none" style="background: #e9eff5">
                <!--                <i class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>-->
                <svg class="h-4 w-4 m-3 mr-5 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <div class="relative my-auto lg:flex hidden">
                <button @click="more = ! more" type="button" class="text-gray-100 hover:text-gray-400 flex items-center mx-5 space-x-1 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
                    <span class="my-auto">Advanced</span>
                    <svg :class="{'rotate-180': more, 'rotate-0': !more}" class="h-5 w-5 my-auto transition-transform duration-200 transform inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button @click="more = ! more" type="button" class="text-gray-100 hover:text-gray-400 flex items-center mx-5 space-x-1 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
                    <span class="my-auto">Solutions</span>
                    <svg :class="{'rotate-180': more, 'rotate-0': !more}" class="h-5 w-5 my-auto transition-transform duration-200 transform inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button @click="more = ! more" type="button" class="text-gray-100 hover:text-gray-400 flex items-center mx-5 space-x-1 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
                    <span class="my-auto">Products</span>
                    <svg :class="{'rotate-180': more, 'rotate-0': !more}" class="h-5 w-5 my-auto transition-transform duration-200 transform inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button @click="more = ! more" type="button" class="text-gray-100 hover:text-gray-400 flex items-center mx-5 space-x-1 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
                    <span class="my-auto">Resources</span>
                    <svg :class="{'rotate-180': more, 'rotate-0': !more}" class="h-5 w-5 my-auto transition-transform duration-200 transform inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button @click="more = ! more" type="button" class="text-gray-100 hover:text-gray-400 flex items-center mx-5 space-x-1 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
                    <span class="my-auto">Pricing</span>
                    <svg :class="{'rotate-180': more, 'rotate-0': !more}" class="h-5 w-5 my-auto transition-transform duration-200 transform inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div v-if="more" class="absolute left-0 z-40 transform -translate-x-1/2 mt-8 px-2 w-screen max-w-md sm:px-0">
                    <div class="rounded-lg shadow-lg">
                        <div class="rounded-lg shadow-xs overflow-hidden">
                            <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <div class="space-y-1">
                                        <p class="text-base leading-6 font-medium text-gray-900">
                                            Help Center
                                        </p>
                                        <p class="text-sm leading-5 text-gray-500">
                                            Get all of your questions answered in our forums or contact support.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div class="space-y-1">
                                        <p class="text-base leading-6 font-medium text-gray-900">
                                            Guides
                                        </p>
                                        <p class="text-sm leading-5 text-gray-500">
                                            Learn how to maximize our platform to get the most out of it.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div class="space-y-1">
                                        <p class="text-base leading-6 font-medium text-gray-900">
                                            Events
                                        </p>
                                        <p class="text-sm leading-5 text-gray-500">
                                            See what meet-ups and other events we might be planning near you.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <div class="space-y-1">
                                        <p class="text-base leading-6 font-medium text-gray-900">
                                            Security
                                        </p>
                                        <p class="text-sm leading-5 text-gray-500">
                                            Understand how we take your privacy seriously.
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="px-5 py-5 bg-gray-100 space-y-5 sm:px-8 sm:py-8">
                                <div class="space-y-4">
                                    <h3 class="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
                                        Recent Posts
                                    </h3>
                                    <ul class="space-y-4">
                                        <li class="text-base leading-6 truncate">
                                            <a href="#" class="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                                Boost your conversion rate
                                            </a>
                                        </li>
                                        <li class="text-base leading-6 truncate">
                                            <a href="#" class="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                                How to use search engine optimization to drive traffic to your site
                                            </a>
                                        </li>
                                        <li class="text-base leading-6 truncate">
                                            <a href="#" class="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                                Improve your customer experience
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-sm leading-5">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                        View all posts &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex w-auto my-auto">
                <div @click="openModal  = ! openModal" class="hidden lg:flex mr-8 my-auto cursor-pointer text-gray-100">
                    <svg class="h-4 w-4 my-auto" fill="currentColor" viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 000 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"/></svg>
                    <div class="text-base md:font-semibold font-medium ml-2 md:ml-4">Hello , Sign In</div>
                </div>
            </div>
            <svg @click="cartOpen = !cartOpen" class="h-8 w-8 cursor-pointer my-auto mx-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
            </svg>
        </div>
        <div class="relative md:hidden mt-3 max-w-full mx-3">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <input class="w-full border bg-gray-100 border-gray-500 rounded-md pl-10 pr-4 py-1 focus:border-teal-500 focus:bg-white focus:outline-none" type="text" placeholder="Search Products ...">
        </div>
        <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-x-3 scale-95 opacity-0" enter-to-class="translate-x-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-x-0 opacity-100" leave-to-class="-translate-x-3 opacity-0">
            <div v-if="cartOpen" class="fixed left-0 top-0 w-56 md:w-3/12 h-full transition duration-300 transform overflow-y-auto bg-white border-r-2 border-gray-300">
                <div class="flex items-center h-12 md:h-16 bg-teal-900 justify-between">
                    <div class="flex ml-4 cursor-pointer">
                        <svg class="h-5 w-5 my-auto text-white" fill="currentColor" viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 000 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"/></svg>
                        <div class="text-xl md:font-semibold font-medium text-white ml-2 md:ml-4">Hello , Sign In</div>
                    </div>
                    <button @click="cartOpen = !cartOpen" class="text-white focus:outline-none mr-2">
                        <svg class="h-5 w-5 md:h-8 md:w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div class="text-sm mb-2 md:mt-6 mt-3 md:pl-6 text-gray-500 font-medium text-left pl-3 antialiased tracking-wide font-sans md:text-base">SHOP BY CATEGORY</div>
                <div class="flex justify-between px-3 py-2 md:py-4 md:px-6 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Electronics
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Computers
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Smart Home
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Arts & Crafts
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Automotive
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Baby Care
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Beauty and Personal Care
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Women's Fashion
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Men's Fashion
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Girl's Fashion
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Boy's Fashion
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
                <div class="flex justify-between px-3 py-2 md:px-6 md:py-4 hover:bg-gray-200 cursor-pointer">
                    <div class="text-left text-sm font-medium antialiased tracking-wide text-gray-700 ">
                        Health and Household
                    </div>
                    <svg class="h-4 w-4 my-auto text-gray-500" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                        c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                    </svg>
                </div>
            </div>
        </transition>
        <div v-if="openModal" class="main-modal fixed w-full h-100 inset-0 z-50 flex justify-center items-center animated bg-opacity-25 bg-black fadeIn faster" >

        </div>
    </div>
</template>

<script>
export default {
    name: "nits-header",
    data(){
        return{
            open:'',
            cartOpen: false,
            openModal: false,
            more: false,

        }
    },
    methods:{
    }
}
</script>

<style scoped>

</style>
