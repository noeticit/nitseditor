<template>
    <div class="overflow-hidden">
        <top-bar></top-bar>
        <div class="w-full max-w-8xl relative mx-auto">
            <div class="lg:flex relatives">
                <sidebar></sidebar>
                <div class="w-full md:w-5/6 ml-auto overflow-auto bg-gray-100 pt-16">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import TopBar from "../menus/top-bar";
import Sidebar from "../menus/sidebar";
export default {
    name: "admin-layout",
    components: {Sidebar, TopBar}
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
</style>
