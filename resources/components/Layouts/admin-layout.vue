<template>
    <div class="overflow-hidden">
        <div class="h-full w-full bg-gray-100">
            <top-bar></top-bar>
            <div class="w-full md:max-w-screen-2xl mx-auto relative">
                <div class="lg:flex relatives">
                    <side-bar></side-bar>
                    <div class="flex w-full">
                        <div>
                            <div class="w-72"></div>
                        </div>
                        <div class="w-full mt-20 pt-3 pr-8">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from "@/Menus/TopBar";
import SideBar from "@/Menus/SideBar";
export default {
    name: "admin-layout",
    components: {SideBar, TopBar}
}
</script>

<style scoped>

</style>
