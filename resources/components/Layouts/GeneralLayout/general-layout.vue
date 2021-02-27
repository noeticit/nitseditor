<template>
<!--    <div class="w-full ">-->
<!--&lt;!&ndash;        header start&ndash;&gt;-->

<!--        <div class="h-16 w-full px-10 shadow-lg flex justify-between bg-white">-->
<!--            <div class="bg-gray-200 my-auto rounded-lg h-8 w-20"></div>-->
<!--            <div class="my-auto flex">-->
<!--                <div class="bg-gray-200 rounded-lg h-8 w-16 mx-4"></div>-->
<!--                <div class="bg-gray-200 rounded-lg h-8 w-16 mx-4"></div>-->
<!--                <div class="bg-gray-200 rounded-lg h-8 w-16 mx-4"></div>-->
<!--                <div class="bg-gray-200 rounded-lg h-8 w-16 mx-4"></div>-->
<!--            </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;            header end&ndash;&gt;-->

<!--        &lt;!&ndash;            page content start&ndash;&gt;-->

<!--        <div class="grid grid-cols-2 gap-6 p-10">-->
<!--            <div class="bg-red-400 h-96 rounded-3xl"></div>-->
<!--            <div class="bg-red-400 h-96 rounded-3xl"></div>-->
<!--        </div>-->
<!--        &lt;!&ndash;            page content end&ndash;&gt;-->

<!--&lt;!&ndash;        footer start&ndash;&gt;-->
<!--        <div class="w-full bg-gray-100 px-10">-->
<!--            <div class="grid grid-cols-4 py-10 gap-10">-->
<!--                <div v-for="loop in 4" :key="loop">-->
<!--                    <div v-for="item in 4" :key="item" class="my-5 bg-gray-400 h-5 rounded w-20"></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--&lt;!&ndash;        footer end&ndash;&gt;-->
<!--    </div>-->
    <div class="w-full">
        <div>
            <slot name="topbar"></slot>
        </div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
name: "general-layout"
}
</script>

<style scoped>

</style>
