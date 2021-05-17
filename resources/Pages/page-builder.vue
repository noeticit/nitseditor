<template>
    <builder-layout>
        <div class="w-full">
            <div class="max-w-5xl mx-auto bg-white shadow">
                <div class="border-r-8 border-l-8 border-indigo-600 w-full px-14 py-8">
                    <div class="bg-gray-100 w-full p-6">
                        <div class="text-center text-base font-normal family-poppins pt-2 pb-8">Choose how many columns this row should have</div>
                        <div class="grid grid-cols-5 gap-6">
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="border border-gray-600 w-full h-12 rounded"></div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">1 Column</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-2 gap-2.5">
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">2 Columns</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-3 gap-2.5">
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">3 Column</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-4 gap-2.5">
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">4 Column</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="border border-gray-600 w-14 mx-auto h-12 rounded"></div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">Narrow one column</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-2 gap-12">
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">2 Columns on end</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-3 gap-2.5">
                                        <div class="border rounded border-gray-600 w-full h-12 col-span-1"></div>
                                        <div class="border rounded border-gray-600 w-full h-12 col-span-2"></div>

                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">1/3 2/3 split</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-3 gap-2.5">
                                        <div class="border rounded border-gray-600 w-full h-12 col-span-2"></div>
                                        <div class="border rounded border-gray-600 w-full h-12 col-span-1"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">2/3 1/3 split</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-2 gap-2.5">
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">Left Half</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-2 gap-2.5">
                                        <div></div>
                                        <div class="border rounded border-gray-600 w-full h-12"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">Right Half</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-4 gap-2.5">
                                        <div class="border rounded border-gray-600 w-full h-12 col-span-1"></div>
                                        <div class="col-span-3"></div>
                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">Left 1/4</div>
                            </div>
                            <div class="w-full rounded-md p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-lg">
                                <div class="border border-gray-600 w-full p-2.5 rounded">
                                    <div class="w-full grid grid-cols-4 gap-2.5">
                                        <div class="col-span-3"></div>
                                        <div class="border rounded border-gray-600 w-full h-12 col-span-1"></div>

                                    </div>
                                </div>
                                <div class="py-4 text-xs font-normal family-poppins text-gray-800 text-center">Right 1/4</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-28 flex w-full justify-center items-center">
                    <inertia-link href="/page-builder/add-section" class="bg-indigo-600 px-8 py-1.5 text-sm font-medium family-poppins text-white rounded focus:outline-none">Add Section</inertia-link>
                </div>
            </div>
        </div>
    </builder-layout>
</template>

<script>
import Button from "../components/Jetstream/Button";
import BuilderLayout from "../components/Layouts/builder-layout";
export default {
    name: "page-builder",
    components: {BuilderLayout, Button},
}
</script>

<style scoped>

</style>
