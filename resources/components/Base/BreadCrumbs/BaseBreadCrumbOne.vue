<template>
    <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                {{ name }}
            </h2>
            <div class="mt-1 flex flex-row flex-wrap">
                <div v-for="item in breadcrumbs" class="flex items-center antialiased font-medium text-sm leading-5 text-gray-500 mr-2">
                    <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M9 5l5 4a1 1 0 010 2l-5 4H8v-1l3-4-3-4V5h1z"/>
                    </svg>
                    {{ item }}
                </div>
            </div>
        </div>
<!--        <div class="mt-5 flex lg:mt-0 lg:ml-4">-->
<!--            <span class="hidden sm:block shadow-sm rounded-md">-->
<!--              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">-->
<!--                <svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>-->
<!--                </svg>-->
<!--                Edit-->
<!--              </button>-->
<!--            </span>-->

<!--            <span class="hidden sm:block ml-3 shadow-sm rounded-md">-->
<!--              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">-->
<!--                <svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                  <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/>-->
<!--                </svg>-->
<!--                View-->
<!--              </button>-->
<!--            </span>-->

<!--            <span class="sm:ml-3 shadow-sm rounded-md">-->
<!--              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">-->
<!--                <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">-->
<!--                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>-->
<!--                </svg>-->
<!--                Publish-->
<!--              </button>-->
<!--            </span>-->

<!--            <span x-data="{ open: false }" class="ml-3 relative shadow-sm rounded-md sm:hidden">-->
<!--              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out">-->
<!--                More-->
<!--                <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>-->
<!--                </svg>-->
<!--              </button>-->

<!--              <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg">-->
<!--                <div class="py-1 rounded-md bg-white shadow-xs">-->
<!--                  <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Edit</a>-->
<!--                  <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">View</a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </span>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "BaseBreadCrumbOne",
        props: {
            name: {
                type: String,
                required: true
            },
            breadcrumbs: Array
        }
    }
</script>

<style scoped>

</style>