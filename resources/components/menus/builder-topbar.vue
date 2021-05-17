<template>
    <div class="w-full">
        <div class="w-full fixed top-0 bg-white h-12 border-b">
            <div class="h-full flex justify-between items-center pl-16 pr-4">
                <div class="h-full flex items-center px-2">
                    <div class="text-xs font-medium family-poppins text-indigo-600">Landing Page</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    <div class="text-xs font-medium family-poppins">New Landing Page</div>
                </div>
                <div class="h-9 w-9 rounded-md bg-gray-100 flex cursor-pointer">
                    <span class="font-semibold text-sm family-poppins m-auto">A</span>
                </div>
            </div>
        </div>
        <div class="w-full fixed top-0 bg-white h-10 mt-12 border-b">
            <div class="w-full h-full flex justify-between items-center pl-16 pr-4">
                <div class="h-full flex items-center px-2">
                    <div class="h-8 w-8 rounded-md bg-gray-50 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div class="text-xs px-10 font-medium family-poppins">Landing Page</div>
                </div>
                <div class="h-full flex items-center">
                    <div class="flex mx-2">
                        <button class="px-3 py-1.5 text-xs font-medium family-poppins text-white bg-blue-600 rounded-l-md">Desktop</button>
                        <button class="px-3 py-1.5 text-xs font-medium family-poppins bg-gray-100 rounded-r-md">Mobile</button>
                    </div>
                    <button class="p-2 flex rounded-md bg-gray-100">
                        <svg class="h-2.5 w-2.5 m-auto text-gray-900" fill="currentColor" viewBox="0 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path d="M256 .004c-62.676 0-123.605 23.082-171.094 62.27L27.31 4.675a16.008 16.008 0 00-17.43-3.457A15.994 15.994 0 000 16.004v138.664c0 8.832 7.168 16 16 16h138.668a15.999 15.999 0 0014.785-9.875 15.98 15.98 0 00-3.48-17.43l-50.75-50.773C154.668 61.164 204.586 42.668 256 42.668c117.633 0 213.336 95.703 213.336 213.336 0 117.629-95.703 213.332-213.336 213.332-56.938 0-110.504-22.207-150.805-62.527-8.34-8.344-21.824-8.344-30.164 0-8.344 8.34-8.344 21.824 0 30.164 48.364 48.382 112.64 75.03 180.969 75.03 141.164 0 256-114.839 256-256 0-141.163-114.836-256-256-256zm0 0"/></svg>
                    </button>
                    <button class="p-2 flex rounded-md bg-gray-100 mx-2">
                        <svg class="h-2.5 w-2.5 m-auto text-gray-900" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.121 1.215c-5.973-2.453-12.863-1.11-17.43 3.476l-57.597 57.602C379.605 23.082 318.676 0 256 0 114.836 0 0 114.836 0 256s114.836 256 256 256c68.332 0 132.61-26.645 180.969-75.031 8.344-8.34 8.344-21.82 0-30.164-8.34-8.34-21.82-8.34-30.164 0-40.297 40.32-93.868 62.527-150.805 62.527-117.633 0-213.332-95.7-213.332-213.332S138.368 42.668 256 42.668c51.414 0 101.332 18.496 140.777 49.918l-50.75 50.773c-4.586 4.586-5.93 11.457-3.476 17.43a15.993 15.993 0 0014.781 9.879H496c8.832 0 16-7.168 16-16V16a15.996 15.996 0 00-9.879-14.785zm0 0"/></svg>
                    </button>
                    <button class="px-3 py-1.5 text-xs font-medium family-poppins bg-gray-100 rounded-md">Save Snapshots</button>
                    <button class="p-1.5 flex rounded-md bg-gray-100 mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 m-auto text-gray-900"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <button class="px-3 py-1.5 text-xs font-medium family-poppins bg-gray-800 text-white rounded-md">Publish</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "builder-topbar"
}
</script>

<style scoped>

</style>
