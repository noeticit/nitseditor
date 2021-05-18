<template>
    <div>
<!--        <app-market></app-market>-->
        <component
            is="app-market"
        ></component>
<!--        <layout></layout>-->
<!--        {{foo}}-->
<!--        <Suspense>-->
<!--            <template #default>-->
<!--&lt;!&ndash;                <keep-alive>&ndash;&gt;-->
<!--                    <component-->
<!--                        is="app-market"-->
<!--                    ></component>-->
<!--&lt;!&ndash;                </keep-alive>&ndash;&gt;-->
<!--            </template>-->
<!--            <template #fallback>-->
<!--                <div>Loading...</div>-->
<!--            </template>-->
<!--        </Suspense>-->

    </div>
</template>

<script>

export default {
    name: "page-renderer",
    components: {},
    props: {
        layout: {
            type: String,
            default: 'admin-layout'
        },
    },
    data(){
        return{

        }
    },
    computed: {
        foo() {
            return this.$inertia.page.props.page
        }
    }
}
</script>

<style scoped>

</style>
