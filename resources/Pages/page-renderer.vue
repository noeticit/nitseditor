<template>
<!--    <layout ></layout>-->
    <home-layout>

    </home-layout>
</template>

<script>
import HomeLayout from "../components/Layouts/HomeLayout";
export default {
    name: "page-renderer",
    components: {HomeLayout},
    props: {
        layout: {
            type: String,
            default: 'home-layout'
        },
    }
}
</script>

<style scoped>

</style>
