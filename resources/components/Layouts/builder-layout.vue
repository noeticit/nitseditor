<template>
    <div class="w-full">
        <builder-sidebar></builder-sidebar>
        <builder-topbar></builder-topbar>
        <div class="bg-gray-100 py-24 w-full">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BuilderSidebar from "../menus/builder-sidebar";
import BuilderTopbar from "../menus/builder-topbar";
export default {
    name: "builder-layout",
    components: {BuilderTopbar, BuilderSidebar}
}
</script>

<style scoped>

</style>
