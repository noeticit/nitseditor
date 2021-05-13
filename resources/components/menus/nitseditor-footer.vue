<template>
    <div class="w-full bg-gray-100 px-32 py-16 ">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 px-16">
            <div v-for="(item, index) in footer" class="w-full">
                <div class="text-sm font-bold family-poppins tracking-wide text-gray-900 uppercase mb-8">{{item.heading}}</div>
                <div v-for="(ele, index) in item.submenu" class="text-sm font-medium family-poppins text-gray-600 my-4">{{ele.subheading}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "nitseditor-footer",
    data(){
        return{
            footer:[
                {heading:'COMPANY',submenu:[{subheading:'About us'},{subheading:'Contact us'},{subheading:'Career'},]},
                {heading:'SUBSIDIARIES',submenu:[{subheading:'Adkompass'},{subheading:'Edu-NITS'},{subheading:'Task Management'},]},
                {heading:'INFORMATION',submenu:[{subheading:'Terms and Condition'},{subheading:'Privacy Policy'},]},
                {heading:'COMPANY',submenu:[{subheading:'About us'},{subheading:'Contact us'},{subheading:'Career'},]},
                {heading:'CONNECT WITH US',submenu:[{subheading:'Facebook'},{subheading:'Twitter'},{subheading:'LinkedIn'},{subheading:'Instagram'},]}
            ]
        }
    }
}
</script>

<style scoped>

</style>
