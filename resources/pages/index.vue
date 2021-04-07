<template>
<!--    <nits-layout>-->
<!--        <div slot="header">-->
<!--            <div slot="right-logo">-->
<!--                <div slot="menu"></div>-->
<!--                <div slot="mega-menu"></div>-->
<!--            </div>-->
<!--            <div slot="left-logo"></div>-->
<!--            <div slot="center-logo"></div>-->
<!--        </div>-->
<!--        <div slot="page-content"></div>-->
<!--        <div slot="footer"></div>-->
<!--    </nits-layout>-->
    <general-layout>
<!--        <template #topbar>-->

<!--        </template>-->
        <template #header>
            <h1>Here might be a page title</h1>
            <demo-header :menu="menu" logo="http://nitseditor.com/images/icons/nit-logo.png"></demo-header>
        </template>

        <img class="w-full h-screen" src="http://html.modernwebtemplates.com/colorway/images/slide01.jpg">

        <template #footer>
            <div class="h-96 bg-gray-200 flex"   >
                <p class="m-auto">Lorem ipsum doler site amet de</p>
            </div>
        </template>
    </general-layout>
</template>

<script>
    import NitsLayout from '@/Base/nit-layout/layout'
    import GeneralLayout from "@/Layouts/GeneralLayout/general-layout";
    import DemoHeader from "@/Base/new-headers/demo-header";

    export default {
        name: "index",
        components: {DemoHeader, GeneralLayout, NitsLayout},
        props: {

        },
        data(){
            return{
                menu:[
                    {id:1, name:'Home', url:'/dashboard', open: false},
                    {id:2, name:'Portfolio', url:'/portfolio', open: false},
                    {id:2, name:'About us', url:'/portfolio', open: false},
                    {id:2, name:'Pages', url:'/portfolio', open: false},
                    {id:3, name:'Blog', url:'/blog', open: false,
                        sub_menu:[
                            {id:1, name:'Blog 1'},
                            {id:2, name:'Blog 2'},
                            {id:3, name:'Blog 3'},
                        ]
                    },
                    {id:4, name:'Contact',url:'/contact', open: false},
                ],
            }
        }
    }
</script>

<style scoped>

</style>
