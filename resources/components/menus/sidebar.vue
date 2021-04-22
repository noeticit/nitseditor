<template>
    <div class="fixed z-30 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-56 xl:w-56 lg:block hidden">
        <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
            <div class="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white"></div>
            <nav class="px-1 pt-6 overflow-y-auto mt-16 font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-8 lg:pb-14 sticky h-screen-24">
                <div class="px-3 pb-6 border-b">
                    <div class="text-sm font-semibold text-gray-600">Set up your site</div>
                    <div class="w-full rounded-full h-1 bg-gray-100 my-1">
                        <div class="h-1 rounded-full bg-linear-blue w-6"></div>
                    </div>
                    <div class="text-xs font-medium text-gray-900 mt-0.5">7 steps left</div>
                </div>
                <ul>
                    <li class="mt-6">
                        <h5 class="px-3 mb-3 lg:mb-4 uppercase tracking-wide font-semibold family-mont text-xs text-gray-400">Menus</h5>
                    </li>
                    <li>
                        <a href="/documentation" class="flex items-center px-3 hover:text-gray-800 transition-colors duration-200 font-semibold mb-4 family-mont text-gray-500">
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/nitseditor-components" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 font-semibold mb-4 family-mont text-gray-500">
                            <div class="mr-3 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            Customer management
                        </a>
                    </li>
                    <div class="border-b w-full my-4"></div>
                    <li>
                        <a href="/playground" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 font-semibold mb-4 family-mont text-gray-500">
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="/news" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 font-semibold mb-4 family-mont text-gray-500">
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            Content Manager
                        </a>
                    </li>
                    <li>
                        <a href="/resources" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 font-semibold mb-4 family-mont text-gray-500">
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </div>
                            Apps
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "sidebar"
}
</script>

<style scoped>
.max-w-8xl{
    max-width: 90rem;
}

.h-screen-24{
    height: calc(100vh - 65px);
}
.to-rose-500{
    --tw-gradient-to: #f43f5e;
}
.bg-linear-blue{
    background: -webkit-gradient(linear,left top,right top,from(#273c92),to(#293e92));
}
.text-vs{
    font-size: 10px;
}
</style>
