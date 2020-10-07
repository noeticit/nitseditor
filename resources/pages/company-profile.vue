<template>
    <div>
        <div class="w-full h-screen" style="background: #e9eff5">
            <nits-header></nits-header>
        </div>
        <nits-footer></nits-footer>
    </div>
</template>

<script>
import NitsHeader from "../components/nits-header";
import NitsFooter from "../components/nits-footer";
export default {
    name: "company-profile",
    components: {NitsHeader,NitsFooter},
    data(){
        return{
            open:'',
            cartOpen: false,
            openModal: false,
            more: false,

        }
    },
    methods:{
    }
}
</script>

<style scoped>

</style>
