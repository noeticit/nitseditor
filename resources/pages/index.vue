<template>
    <nits-layout>
        <div slot="header">
            <div slot="right-logo">
                <div slot="menu"></div>
                <div slot="mega-menu"></div>
            </div>
            <div slot="left-logo"></div>
            <div slot="center-logo"></div>
        </div>
        <div slot="page-content"></div>
        <div slot="footer"></div>
    </nits-layout>
</template>

<script>
    import NitsLayout from '@/Base/nit-layout/layout'
    export default {
        name: "index",
        components: {NitsLayout},
        props: {

        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
