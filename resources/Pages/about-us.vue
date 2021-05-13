<template>
    <admin-layout>
        <div class="w-full mt-24">
            <div class="w-full bg-gray-100 pt-4">
                <div class="w-full overflow-hidden mx-4">
                    <div class="bg-white rounded shadow-md p-8">
                        <div class="flex justify-between items-center">
                            <div class="text-sm font-medium text-gray-700 hover:text-blue-400 cursor-pointer family-poppins">Editing Codes</div>
                            <div class="text-sm font-medium text-gray-700 hover:text-blue-400 cursor-pointer family-poppins">Exit Code Editor</div>
                        </div>
                        <div class="mx-12 p-4 border mt-5">
                            <div class="border-b">
                                <div class="family-poppins text-gray-500 font-medium text-lg py-2">About Us</div>
                            </div>
                            <div class="mx-4">
                                <div class="mt-1.5 family-poppins text-sm font-medium text-gray-500">command git.net</div>
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
    name: "about-us",
    components: {AdminLayout}
}
</script>

<style scoped>

</style>
