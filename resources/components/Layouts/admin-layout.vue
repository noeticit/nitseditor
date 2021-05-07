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
        <div class="h-16 bg-linear-blue w-full absolute top-0">
            <div class="w-full h-full background-pic"></div>
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
.bg-linear-blue{
    background: -webkit-gradient(linear,left top,right top,from(#273c92),to(#293e92));
}
.max-w-8xl{
    max-width: 90rem;
}
.background-pic{
    background: url(https://themesbrand.com/qovex/layouts/assets/images/bg-effect.png) center;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: .06;
}

.h-screen-24{
    height: calc(100vh - 65px);
}
.to-rose-500{
    --tw-gradient-to: #f43f5e;
}
</style>
