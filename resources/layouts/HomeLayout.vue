<template>
    <div class="w-full">
        <nitseditor-header></nitseditor-header>
        <slot></slot>
        <nitseditor-footer></nitseditor-footer>
    </div>
</template>

<script>

import NitseditorHeader from "./../components/menus/nitseditor-header";
import NitseditorFooter from "./../components/menus/nitseditor-footer";
export default {
    name: "HomeLayout",
    components: {NitseditorFooter, NitseditorHeader},
    data(){
        return{
            menus:[
                {id:1, name:'Navigate your next'},
                {id:1, name:'Services'},
                {id:1, name:'Portfolio'},
                {id:1, name:'About us'},
                {id:1, name:'Contact us'},
                {id:1, name:'Blog'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
