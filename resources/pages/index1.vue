<template>
<!--    <div class="block">-->
<!--        <div v-if="canLogin" class="absolute mt-4 right-0 px-10">-->
<!--            <inertia-link v-if="$page.props.user" href="/dashboard" class="text-sm text-gray-700 underline">-->
<!--                Dashboard-->
<!--            </inertia-link>-->

<!--            <template v-else>-->
<!--                <inertia-link href="/login" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose p-2 text-gray-600">Login</inertia-link>-->
<!--                <inertia-link v-if="canRegister" href="/register" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose p-2 text-gray-600">Register</inertia-link>-->
<!--            </template>-->
<!--        </div>-->

<!--        <div class="block flex h-screen">-->
<!--            <div class="m-auto">-->
<!--                <div class="font-serif subpixel-antialiased font-medium text-6xl text-gray-800 tracking-wider leading-4 items-center text-center">-->
<!--                    Nits Editor-->
<!--                </div>-->
<!--                <div class="text-gray-400 mt-6 items-center text-center">-->
<!--                    <a href="https://nitseditor.com/docs" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose text-gray-600 p-4">Docs</a>-->
<!--                    <a href="https://github.com/noeticit/nitseditor" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose text-gray-600 p-4">GitHub</a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div>-->
<!--    <black-sidemenu-layout></black-sidemenu-layout>-->
    <nits-layout>
        <nits-header slot="header">

        </nits-header>
    </nits-layout>

<!--        <demo-header-->
<!--            logo="http://nitseditor.com/images/icons/nit-logo.png"-->
<!--            :menu="menu"-->
<!--            background_color="bg-red-600"-->
<!--            text_color="text-white"-->
<!--            responsive_background_color="bg-blue-600"-->
<!--            responsive_text_color="text-gray-100"-->
<!--        ></demo-header>-->
<!--&lt;!&ndash;        <center-logo-header&ndash;&gt;-->
<!--&lt;!&ndash;            background_color="orange"&ndash;&gt;-->
<!--&lt;!&ndash;            text_color="white"&ndash;&gt;-->
<!--&lt;!&ndash;            :menu="menu"&ndash;&gt;-->
<!--&lt;!&ndash;            :svg_icon="svg_icon"&ndash;&gt;-->
<!--&lt;!&ndash;            logo="https://cdn.shopify.com/s/files/1/0466/9253/2373/t/2/assets/logo.png?v=8505991049215987300"&ndash;&gt;-->
<!--&lt;!&ndash;        ></center-logo-header>&ndash;&gt;-->
<!--&lt;!&ndash;        <humburger-header></humburger-header>&ndash;&gt;-->
<!--&lt;!&ndash;        <nits-header-left-side-push-content :menus="menu"></nits-header-left-side-push-content>&ndash;&gt;-->
<!--&lt;!&ndash;        <nits-h-left-side-onclick :menu="menu" logo="http://nitseditor.com/images/icons/nit-logo.png"></nits-h-left-side-onclick>&ndash;&gt;-->
<!--&lt;!&ndash;        <nits-menu-centered-logo&ndash;&gt;-->
<!--&lt;!&ndash;        label1="Home"&ndash;&gt;-->
<!--&lt;!&ndash;        label2="About us"&ndash;&gt;-->
<!--&lt;!&ndash;        label3="Contact us"&ndash;&gt;-->
<!--&lt;!&ndash;        label4="Blog"&ndash;&gt;-->

<!--&lt;!&ndash;        ></nits-menu-centered-logo>&ndash;&gt;-->
<!--&lt;!&ndash;        <nits-h-alternate-logo :menu="menu"></nits-h-alternate-logo>&ndash;&gt;-->
<!--        <nits-h-and-sub-h-->
<!--            location="Location"-->
<!--            call="Call"-->
<!--            contact="Contact"-->
<!--            day_time="Monday 09:00pm"-->
<!--            email="Email"-->
<!--            open="Open"-->
<!--            faqs="FAQ"-->
<!--            number="3658745"-->
<!--            email_id="email@gmail.com"-->


<!--                          :menus="menu" logo="http://nitseditor.com/images/icons/nit-logo.png"></nits-h-and-sub-h>-->
<!--    </div>-->
</template>

<script>
    import NitsHAlternateLogo from "@/Base/Headers/NitsHAlternateLogo";
    import DarkResponsiveHeader from "@/Base/new-headers/dark-responsive-header";
    import DifferentHeader from "@/Base/new-headers/different-header";
    import DemoHeader from "@/Base/new-headers/demo-header";
    import CenterLogoHeader from "@/Base/new-headers/centered-logo-header";
    import HumburgerHeader from "@/Base/new-headers/hamburger-header";
    import NitsHeaderLeftSidePushContent from "@/Base/Headers/NitsHRightSidePush";
    import NitsHLeftSideOnclick from "@/Base/Headers/NitsHLeftSideOnclick";
    import NitsMenuCenteredLogo from "@/Base/Headers/NitsMenuCenteredLogo";
    import NitsHAndSubH from "@/Base/Headers/NitsHAndSubH";
    import BlackSidemenuLayout from "@/Base/new-layouts/black-sidemenu-layout";
    import IconLayout from "@/Base/new-layouts/icon-layout";
    export default {
        name: "index",
        components: {
            IconLayout,
            NitsHAndSubH,
            NitsMenuCenteredLogo,
            NitsHLeftSideOnclick,
            NitsHeaderLeftSidePushContent,
            HumburgerHeader,
            CenterLogoHeader, DemoHeader, DifferentHeader, DarkResponsiveHeader, NitsHAlternateLogo,BlackSidemenuLayout},
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
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
                    // {id:5, name:'About us',url:'/about-us', open: false},
                    // {id:6, name:'Pages',url:'/about-us', open: false,
                    //     sub_menu:[
                    //         {id:1, name:'Page 1'},
                    //         {id:2, name:'Page 2'},
                    //         {id:3, name:'Page 3'},
                    //     ]
                    // },
                ],
                svg_icon:[
                    {id:1, path:'M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 01-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0'},
                    {id:2, path:'M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0014.422-10.879l60-210a15.003 15.003 0 00-2.445-13.152A15.006 15.006 0 00497 60H130.367l-10.722-48.254A15.003 15.003 0 00105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zm0 0M150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0M362 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0'},
                    {id:3, path:'M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
