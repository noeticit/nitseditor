<template>
    <div id="app" class="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
<!--        <ul class="w-full max-w-md">-->
<!--            <li v-for="user in users"-->
<!--                :key="user.id"-->
<!--                class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move">-->
<!--                {{user.name}}-->
<!--            </li>-->
<!--        </ul>-->

        <draggable :list="users">
            <li v-for="user in users"
                :key="user.id">
                <!-- Card code here-->
            </li>
        </draggable>

    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: "tailwind-draggable",
    components: {draggable},
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "Adrian Schubert",
                    avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
                },
                {
                    id: 2,
                    name: "Violet Gates",
                    avatar: "https://pickaface.net/gallery/avatar/freud51c8b3f65e7dc.png"
                },
                {
                    id: 3,
                    name: "Steve Jobs",
                    avatar: "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png"
                },
                {
                    id: 4,
                    name: "Yassine Smith",
                    avatar: "https://pickaface.net/gallery/avatar/unr_yassine_191124_2012_3gngr.png"
                },
                {
                    id: 5,
                    name: "Senior Saez",
                    avatar: "https://pickaface.net/gallery/avatar/elmedinilla541c03412955c.png"
                }
            ]
        }
    }

}
</script>

<style scoped>

</style>
