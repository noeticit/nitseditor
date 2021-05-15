<template>
    <admin-layout>
        <div class="p-4 h-screen">
            <div class="flex justify-between items-center mt-10 px-2">
                <div class="text-white text-sm font-semibold z-40 uppercase">Manage Location</div>
                <div class="text-gray-200 text-xs font-normal z-40">Manage theme location</div>
            </div>
            <div class="">
                <div class="text-sm font-medium text-gray-700 mt-10">Lorem ipsum dolor site amet de costa. ipsum dolor site amet de costa.</div>
            </div>
            <div class="grid grid-cols-5 mt-6">
                <div class="col-span-3">
                    <div class="bg-white rounded-md p-2">
                        <div class="grid grid-cols-2 py-2.5 px-4 border-b border-gray-200">
                            <div class="text-sm font-semibold text-gray-900">Theme Location</div>
                            <div class="text-sm font-semibold text-gray-900">Assigned Menu</div>
                        </div>
                        <div class="grid grid-cols-2 py-2.5 px-4">
                            <div class="text-xs font-medium text-gray-900">Mobile Menu</div>
                            <div class="flex">
                                <select class="border border-gray-200 w-40 rounded text-xs font-medium focus:outline-none py-1.5">
                                    <option selected>Primary</option>
                                </select>
                                <div class="text-xs font-medium text-blue-600 my-auto mx-2.5">Edit</div>
                                <div class="border-r border-gray-200 mx-1"></div>
                                <div class="text-xs font-medium text-blue-600 my-auto mx-2.5">Use new menu</div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 py-2.5 px-4">
                            <div class="text-xs font-medium text-gray-900">Primary</div>
                            <div class="flex">
                                <select class="border border-gray-200 w-40 rounded text-xs font-medium focus:outline-none py-1.5">
                                    <option selected>Primary</option>
                                </select>
                                <div class="text-xs font-medium text-blue-600 my-auto mx-2.5">Edit</div>
                                <div class="border-r border-gray-200 mx-1"></div>
                                <div class="text-xs font-medium text-blue-600 my-auto mx-2.5">Use new menu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from "../components/Layouts/admin-layout";
export default {
    name: "manage-location",
    components: {AdminLayout}
}
</script>

<style scoped>

</style>
