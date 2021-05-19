<template>
    <admin-layout>
        <div class="p-8">
            <div class="grid grid-cols-12 gap-5 pb-16 border-b border-gray-300">
                <div class="col-span-5">
                    <div class="flex mt-12">
                        <img class="h-14 w-14 rounded-md mr-7" src="https://static.wixstatic.com/media/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.webp">
                        <div>
                            <div class="flex-col">
                                <div class="text-2xl font-bold family-poppins text-gray-900">{{data.name}}</div>
                                <div class="text-xs mt-1 font-medium family-poppins text-gray-500">By {{data.author.name}}</div>
                            </div>
                            <div class="text-base font-semibold text-gray-700 mt-6">{{data.brief}}</div>
                            <div class="flex py-6 -ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 my-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <div class="text-sm font-bold my-auto ml-1">4.5<span class="text-gray-600 font-medium">(500)</span></div>
                            </div>
                            <button @click="downloadPlugin(data)" class="rounded-full px-10 py-2 mt-2 text-sm font-semibold text-white bg-linear-blue focus:outline-none">Add to site</button>
                            <div class="text-xs ml-14 my-4 font-medium text-gray-600">Free</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-7">
                    <div class="flex justify-between h-full">
                        <div class="h-full w-12 flex">
                            <div class="h-8 my-auto w-8 flex rounded-full hover:bg-gray-200 flex cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                        </div>
                        <div class="w-full bg-linear-blue">
                            <img class="w-full" src="https://static.wixstatic.com/media/18d23d_00d79cd90e04450eac2ad381a44f4310~mv2.jpg/v1/fill/w_756,h_581,al_c,q_85,usm_0.66_1.00_0.01/18d23d_00d79cd90e04450eac2ad381a44f4310~mv2.webp">
                        </div>
                        <div class="h-full w-12 flex">
                            <div class="h-8 my-auto w-8 ml-auto flex rounded-full hover:bg-gray-200 flex cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex">
                        <div class="py-3 mx-auto flex cursor-pointer">
                            <div class="h-1.5 rounded-md w-4 bg-gray-400"></div>
                            <div class="h-1.5 w-4 mx-2 bg-gray-200"></div>
                            <div class="h-1.5 w-4 bg-gray-200"></div>
                            <div class="h-h-1.5 w-4 ml-2 bg-gray-200"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-6 border-b">
                <div class="text-2xl font-bold family-poppins text-gray-900 pb-6">Pricing Plans Overview</div>
                <div class="grid grid-cols-3 gap-5">
                    <div class="col-span-2">
                        <div v-for="(item, index) in FlexData" class="flex py-1">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" class="my-auto"><path d="M9.75 15.25L7 12.5 6 13.499 9.75 17.25 18 8.999 17 8z"></path></svg>
                            <div class="text-sm text-gray-700 ml-4 my-auto">{{item.name}}</div>
                        </div>
                        <div class="text-sm text-gray-700 py-5 my-auto">{{data.description}}</div>
                        <div class="text-sm text-indigo-600 font-semibold mt-4">Read More</div>
                    </div>
                    <div class="col-span-1">
                        <div class="p-5 rounded-lg border border-gray-300">
                            <div class="text-base font-bold ">Availability:</div>
                            <div class="text-base font-medium text-gray-700 py-1">This app is available worldwide.</div>
                            <div class="text-base font-bold mt-4">Availability:</div>
                            <div class="text-base font-medium text-gray-700 py-1">Arabic, Bulgarian, Chinese, Czech, Danish, Dutch, English, Finnish, French, German, Greek, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Malay, Norwegian, Polish, Portuguese, Romanian, Russian, Spanish, Swedish, Tagalog, Thai, Turkish, Ukrainian</div>
                            <div class="text-base font-bold mt-4">Featured in:</div>
                            <div class="flex py-1">
                                <button class="focus:outline-none bg-indigo-300 text-white rounded-full px-1 py-0.5 text-xs ">Made by Nitseditor</button>
                                <button class="focus:outline-none bg-indigo-300 text-white rounded-full px-1 py-0.5 text-xs ml-2">Nitseditor business solution</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-8 grid grid-cols-5 gap-4">
                <div class="col-span-2 h-full flex">
                    <div class="my-auto">
                        <div class="flex -ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div class="text-2xl font-bold my-auto ml-1">3.5 Average Rating</div>
                        </div>
                        <div class="text-xz font-bold text-gray-500 py-1">(BASED ON 377 REVIEWS)</div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="flex">
                        <div class="flex">
                            <svg v-for="item in 5" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="w-full h-1 rounded-full bg-gray-200 ml-5 my-auto">
                            <div class="w-14 bg-yellow-400 h-1 rounded-full"></div>
                        </div>
                        <div class="ml-2 text-vs font-bold my-auto">40</div>
                    </div>
                    <div class="flex">
                        <div class="flex">
                            <svg v-for="item in 4" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-gray-300 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="w-full h-1 rounded-full bg-gray-200 ml-5 my-auto">
                            <div class="w-12 bg-yellow-400 h-1 rounded-full"></div>
                        </div>
                        <div class="ml-2 text-vs font-bold my-auto">41</div>
                    </div>
                    <div class="flex">
                        <div class="flex">
                            <svg v-for="item in 3" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-gray-300 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-gray-300 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="w-full h-1 rounded-full bg-gray-200 ml-5 my-auto">
                            <div class="w-24 bg-yellow-400 h-1 rounded-full"></div>
                        </div>
                        <div class="ml-2 text-vs font-bold my-auto">72</div>
                    </div>
                    <div class="flex">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg v-for="item in 3" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-gray-300 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="w-full h-1 rounded-full bg-gray-200 ml-5 my-auto">
                            <div class="w-28 bg-yellow-400 h-1 rounded-full"></div>
                        </div>
                        <div class="ml-2 text-vs font-bold my-auto">84</div>
                    </div>
                    <div class="flex">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg v-for="item in 4" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 my-auto text-gray-300 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="w-full h-1 rounded-full bg-gray-200 ml-5 my-auto">
                            <div class="w-40 bg-yellow-400 h-1 rounded-full"></div>
                        </div>
                        <div class="ml-2 text-vs font-bold my-auto">140</div>
                    </div>
                </div>
            </div>
            <div class="border border-gray-300 rounded-3xl p-8">
                <div class="flex justify-between">
                    <div class="flex">
                        <div class="text-sm font-semibold text-gray-700 my-auto">
                            Sort 377 Reviews by
                        </div>
                        <div class="flex ml-2 cursor-pointer">
                            <div class="text-sm font-semibold text-gray-700 my-auto">Most Recent</div>
                            <svg class="h-5 w-5 my-auto text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-03d0e67f=""><path fill-rule="evenodd" d="M13.418 7.859a.695.695 0 01.978 0 .68.68 0 010 .969l-3.908 3.83a.697.697 0 01-.979 0l-3.908-3.83a.68.68 0 010-.969.695.695 0 01.978 0L10 11l3.418-3.141z"></path></svg>
                        </div>
                    </div>
                    <div class="text-sm font-semibold text-gray-700 my-auto">
                        Tried this app? <span class="text-indigo-600">Write a review</span>
                    </div>
                </div>
                <div class="py-8 border-b flex">
                    <div>
                        <div class="bg-red-300 rounded-full h-12 w-12 flex mr-5">
                            <span class="text-sm m-auto font-extrabold text-gray-800">AS</span>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="text-sm font-semibold family-mont text-gray-800">Colormecutie / <span class="font-normal">Apr 16, 2021</span></div>
                        <div class="flex py-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg v-for="item in 4" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto text-gray-300 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="text-base font-bold ">I hate it.</div>
                        <div class="text-sm font-semibold text-gray-700 py-1.5 w-1/2">
                            There is very little control on the back end of this app. My customers are frustrated and now are not signing up for my subscription. I DO NOT WANT MY CUSTOMERS TO HAVE...
                        </div>
                        <div class="text-sm font-semibold text-indigo-600 cursor-pointer">Read more</div>
                    </div>
                </div>
                <div class="py-8 border-b flex">
                    <div>
                        <div class="bg-indigo-300 rounded-full h-12 w-12 flex mr-5">
                            <span class="text-sm m-auto font-extrabold text-gray-800">FA</span>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="text-sm font-semibold family-mont text-gray-800">Nitseditor-trainer / <span class="font-normal">Apr 15, 2021</span></div>
                        <div class="flex py-1.5">
                            <svg v-for="item in 5" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="text-base font-bold ">Stretch To Full Width For Pricing Plans Add -Ons</div>
                        <div class="text-sm font-semibold text-gray-700 py-1.5 w-1/2">
                            It will be great to have the ability to "Stretch To Full Width For Pricing Plans Add -Ons" - Thanks
                        </div>
                    </div>
                </div>
                <div class="py-8 flex">
                    <div>
                        <div class="bg-green-300 rounded-full h-12 w-12 flex mr-5">
                            <span class="text-sm m-auto font-extrabold text-gray-800">RS</span>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="text-sm font-semibold family-mont text-gray-800">Zahra720 / <span class="font-normal">Apr 10, 2021 </span></div>
                        <div class="flex py-1.5">
                            <svg v-for="item in 4" :key="item" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto text-yellow-400 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto text-gray-300 mx-px" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="text-base font-bold ">Its madness</div>
                        <div class="text-sm font-semibold text-gray-700 py-1.5 w-1/2">
                            Whilst I find this useful, its deeply annoying that we cannot select some plans to be shown in different pages, please can you reconsider this! I have had USE another system...
                        </div>
                        <div class="text-sm font-semibold text-indigo-600 cursor-pointer">Read more</div>
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
    name: "nitseditor-app-markets-detail",
    components: {Button, AdminLayout},
    props:['data'],
    data(){
        return{
            FlexData:[
                {id:1, name:'Sell subscriptions, packages and memberships'},
                {id:1, name:'Offer custom pricing plans and recurring payments'},
                {id:1, name:'Build customer loyalty with free trials and punch cards'},
                {id:1, name:'Connect to your preferred payment provider'},
            ],
            gridData2:[
                {id:1, image:'https://static.wixstatic.com/media/b2be68_ff3afbec14d34cccaa2752590ec022de~mv2.jpg', sub_image:'https://static.wixstatic.com/media/4d5934_334f2a86ee104333b1e7fd9b331f5ff4~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/4d5934_334f2a86ee104333b1e7fd9b331f5ff4~mv2.webp', title:'Smile: Points & Rewards', desc:'Boost sales & retention with points & rewards', cost:'Premium Site Required'},
                {id:1, image:'https://static.wixstatic.com/media/311930_773c3c31476344cd891b29c961ee7b4c~mv2.jpg', sub_image:'https://static.wixstatic.com/media/311930_727032f25c2a4a8fbe0c95334f37024c~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/311930_727032f25c2a4a8fbe0c95334f37024c~mv2.webp', title:'Smart Popups & Forms', desc:'Create beautiful pop ups, forms, and widgets', cost:'Premium Site Required'},
                {id:1, image:'https://static.wixstatic.com/media/ead2e7_d4910f26a6ba4ad68f83c39c6049557e~mv2.jpg', sub_image:'https://static.wixstatic.com/media/ead2e7_ef9720a99b3444e8970042928c085bdf~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/ead2e7_ef9720a99b3444e8970042928c085bdf~mv2.webp', title:'Printful', desc:'Design & sell print-on-demand products', cost:'Premium Site Required'},
                {id:1, image:'https://static.wixstatic.com/media/d44ad1_649b459f2bf14319926f0ac1a17e76ae~mv2.jpg', sub_image:'https://static.wixstatic.com/media/d44ad1_fddf719dc94349ccaa5abd506ebb0778~mv2.jpg/v1/fill/w_53,h_53,al_c,q_80,usm_0.66_1.00_0.01/d44ad1_fddf719dc94349ccaa5abd506ebb0778~mv2.webp', title:'Visitor Analytics', desc:'Advanced Visitor Stats, Analytics & Feedback', cost:'Premium Site Required'},
            ],
            gridData3:[
                {id:1, image:'https://static.wixstatic.com/media/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.webp', title:'Pricing Plans', subtitle:'By Nitseditor', desc:'Subscriptions, memberships & pricing plans', rating:'2.4', total_rating:'(377)', cost:'Free'},
                {id:1, image:'https://static.wixstatic.com/media/ffb211_aafe29b263b04adc9e54cf3779edd14a~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/ffb211_aafe29b263b04adc9e54cf3779edd14a~mv2.webp', title:'Comments', subtitle:'By CodeMagic LTD', desc:'Comments, Review and testimonial for Nitseditor', rating:'4.4', total_rating:'(1377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1087ff_14dbeee423d542e48755dbb96e54d78e~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/1087ff_14dbeee423d542e48755dbb96e54d78e~mv2.webp', title:'Facebook Like Popup', subtitle:'By Nitseditor', desc:'An awesome Facebook Like Popup for your site', rating:'3.4',total_rating:'(400)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1984e9_c570b4013c964b148b75f9c9aa5105a1~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/1984e9_c570b4013c964b148b75f9c9aa5105a1~mv2.webp', title:'Magic Form Builder', subtitle:'By Nitseditor', desc:'Add secure forms to your site + Free Template', rating:'5.4', total_rating:'(377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1849bd_e0bcef1e7d7b411581c499d02eca75d6~mv2.jpg/v1/fill/w_68,h_68,al_c,q_80,usm_0.66_1.00_0.01/1849bd_e0bcef1e7d7b411581c499d02eca75d6~mv2.webp', title:'Instagram Pro', subtitle:'By Nitseditor', desc:'Showcase your Instagram feed like a pro', rating:'4.0', total_rating:'(377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/454bab_853eea4ca3ae4af4bc5a4cf726260ff5~mv2.jpg/v1/fill/w_68,h_68,al_c,q_80,usm_0.66_1.00_0.01/454bab_853eea4ca3ae4af4bc5a4cf726260ff5~mv2.webp', title:'Nitseditor Blog', subtitle:'By Nitseditor', desc:'Share your expertise and grow your traffic', rating:'2.4', total_rating:'(377)', cost:'Free Plan Available'},
            ],
        }
    },
    created() {
        console.log(this.data);
    },
    methods:{
        downloadPlugin(item){
            axios.post('/api/download-plugin',
                {
                    user_name : item.author.name,
                    plugin_name : item.name
                }
            ).then(response => {
                if (response.status === 200) {

                }
            })
        },
    }
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
