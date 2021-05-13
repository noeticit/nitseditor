<template>
    <div class="w-full">
        <div class="h-20 w-full flex justify-between items-center px-16 shadow-md">
            <div class="">
                <img class="h-14 w-auto" src="https://noeticitservices.s3.amazonaws.com/project-assets/images/noetic_logo.png">
            </div>
            <div class="flex">
                <a href="#" v-for="(item, index) in menus" class="text-base font-normal family-poppins mx-6 hover:text-blue-600">{{item.name}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "nitseditor-header",
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
