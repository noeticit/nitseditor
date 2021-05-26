<template>
    <admin-layout>
        <div class="p-8">
            <div class="flex justify-between">
                <div class="my-auto">
                    <div class="text-2xl font-bold family-poppins text-gray-900">Choose Professional Solutions<br> to Power Your Nitseditor Website</div>
                    <div class="relative w-full text-indigo-500 my-5">
                        <input class="rounded-full pl-10 pr-3 py-2 text-xs w-full text-indigo-500 placeholder-indigo-500 border border-indigo-500 bg-gray-100" type="search" name="search" placeholder="Search apps....">
                        <button type="submit" class="absolute left-0 top-2.5 ml-4">
                            <svg class="text-indigo-500 h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <img src="https://static.parastorage.com/services/marketplace-component/1.3001.0/assets/images/home-illustrations/title-illustration-new.svg">
                </div>
            </div>

<!--            <div class="py-5">-->
<!--                <div class="text-xl pb-4 font-bold family-poppins text-gray-900">Recommended for you</div>-->
<!--                <div class="grid grid-cols-4 gap-6">-->
<!--                    <a href="/nits-admin/app-market/nitseditor-app-markets-detail" v-for="(item, index) in gridData" class="bg-white rounded-lg p-5">-->
<!--                        <img class="h-12 w-12 rounded-md" :src="item.image">-->
<!--                        <div class="py-3">-->
<!--                            <h2 class="text-base font-bold text-gray-800 ">{{item.title}}</h2>-->
<!--                            <h3 class="text-xz font-normal text-gray-500">{{item.subtitle}}</h3>-->
<!--                        </div>-->
<!--                        <div class="text-xs font-semibold text-gray-700 mt-2">{{item.desc}}</div>-->
<!--                        <div class="flex py-1">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--                            </svg>-->
<!--                            <div class="text-xs font-bold my-auto ml-1">{{ item.rating}}<span class="text-gray-600 font-medium ">{{ item.total_rating }}</span></div>-->
<!--                        </div>-->
<!--                        <div class="mt-5 text-xz text-gray-700 font-medium">{{item.cost}}</div>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="py-5 mt-6">-->
<!--                <div class="text-xl pb-4 font-bold family-poppins text-gray-900">Trending Now</div>-->
<!--                <div class="grid grid-cols-4 gap-6">-->
<!--                    <a href="/nits-admin/app-market/nitseditor-app-markets-detail" v-for="(item, index) in gridData2" class="bg-white rounded-lg">-->
<!--                        <img class="h-auto w-full rounded-t-lg" :src="item.image">-->
<!--                        <img class="h-8 w-8 ml-5 -mt-4 rounded-lg border-2 border-white" :src="item.sub_image">-->

<!--                        <div class="p-5">-->
<!--                            <div class="">-->
<!--                                <h2 class="text-base font-bold text-gray-800 -mt-2">{{item.title}}</h2>-->
<!--                            </div>-->
<!--                            <div class="text-xs font-semibold text-gray-700 mt-2">{{item.desc}}</div>-->
<!--                            <div class="flex py-1 mt-5">-->
<!--                                <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18"><path d="M4.5,4 C4.77614237,4 5,4.22385763 5,4.5 L5,5 C5,5.82842712 5.67157288,6.5 6.5,6.5 C7.32842712,6.5 8,5.82842712 8,5 L8,4.5 C8,4.22385763 8.22385763,4 8.5,4 L9.5,4 C9.77614237,4 10,4.22385763 10,4.5 L10,5 C10,5.82842712 10.6715729,6.5 11.5,6.5 C12.3284271,6.5 13,5.82842712 13,5 L13,4.5 C13,4.22385763 13.2238576,4 13.5,4 L14.5,4 C14.7761424,4 15,4.22385763 15,4.5 C15,4.51580129 14.6471304,7.34913462 13.9413911,13 L4.05860889,13 C3.35286963,7.34913462 3,4.51580129 3,4.5 C3,4.22385763 3.22385763,4 3.5,4 L4.5,4 Z M4.18440224,5.94408903 L4.94139111,12 L13.0586089,12 L13.8155978,5.94408903 C13.4430984,6.85679414 12.5466636,7.5 11.5,7.5 C10.1192881,7.5 9,6.38071187 9,5 C9,6.38071187 7.88071187,7.5 6.5,7.5 C5.45333643,7.5 4.55690164,6.85679414 4.18440224,5.94408903 Z M4,14 L14,14 L14,15 L4,15 L4,14 Z"></path></svg>-->
<!--                                <div class="text-xz font-medium text-gray-700 my-auto ml-1">{{ item.cost}}</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="py-5 mt-6">-->
<!--                <div class="text-xl pb-4 font-bold family-poppins text-gray-900">Nitseditor Business Solutions</div>-->
<!--                <div class="grid grid-cols-4 gap-6">-->
<!--                    <a href="/nits-admin/app-market/nitseditor-app-markets-detail" v-for="(item, index) in gridData3" class="bg-white rounded-lg p-5 cursor-pointer">-->
<!--                        <img class="h-12 w-12 rounded-md" :src="item.image">-->
<!--                        <div class="py-3">-->
<!--                            <h2 class="text-base font-bold text-gray-800 ">{{item.title}}</h2>-->
<!--                            <h3 class="text-xz font-normal text-gray-500">{{item.subtitle}}</h3>-->
<!--                        </div>-->
<!--                        <div class="text-xs font-semibold text-gray-700 mt-2">{{item.desc}}</div>-->
<!--                        <div class="flex py-1">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--                            </svg>-->
<!--                            <div class="text-xs font-bold my-auto ml-1">{{ item.rating}}<span class="text-gray-600 font-medium ">{{ item.total_rating }}</span></div>-->
<!--                        </div>-->
<!--                        <div class="mt-5 text-xz text-gray-700 font-medium">{{item.cost}}</div>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->

            <div class="py-5 mt-6">
                <div class="text-xl pb-4 font-bold family-poppins text-gray-900">Recommended for you</div>
                <div class="grid grid-cols-4 gap-6">
                    <div v-for="(item, index) in tableData.recommended_plugins" class="bg-white rounded-lg p-5">
                        <img class="h-12 w-12 rounded-md" :src="item.image">
                        <div class="py-3">
                            <a href="#" @click="redirect(item.slug)" class="text-base font-bold text-gray-800 ">{{item.name}}</a>
                            <h3 class="text-xz font-normal text-gray-500">By {{item.author}}</h3>
                        </div>
                        <div class="text-xs font-semibold text-gray-700 mt-2">{{item.brief}}</div>
                        <div class="flex py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div class="text-xs font-bold my-auto ml-1"> 4.0 <span class="text-gray-600 font-medium "> (500) </span></div>
                        </div>
                        <div class="mt-5 text-xz text-gray-700 font-medium">Free</div>
                    </div>
                </div>
            </div>

            <div class="py-5 mt-6">
                <div class="text-xl pb-4 font-bold family-poppins text-gray-900">Trending Now</div>
                <div class="grid grid-cols-4 gap-6">
                    <div v-for="(item, index) in tableData.trending_plugins" class="bg-white rounded-lg p-5">
                        <img class="h-12 w-12 rounded-md" :src="item.image">
                        <div class="py-3">
                            <a href="#" @click="redirect(item.slug)" class="text-base font-bold text-gray-800 ">{{item.name}}</a>
                            <h3 class="text-xz font-normal text-gray-500">By {{item.author}}</h3>
                        </div>
                        <div class="text-xs font-semibold text-gray-700 mt-2">{{item.brief}}</div>
                        <div class="flex py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div class="text-xs font-bold my-auto ml-1"> 4.0 <span class="text-gray-600 font-medium "> (500) </span></div>
                        </div>
                        <div class="mt-5 text-xz text-gray-700 font-medium">Free</div>
                    </div>
                </div>
            </div>

            <div class="py-5 mt-6">
                <div class="text-xl pb-4 font-bold family-poppins text-gray-900">Nitseditor Business Solutions</div>
                <div class="grid grid-cols-4 gap-6">
                    <div v-for="(item, index) in tableData.business_solutions_plugins" class="bg-white rounded-lg p-5">
                        <img class="h-12 w-12 rounded-md" :src="item.image">
                        <div class="py-3">
                            <a href="#" @click="redirect(item.slug)" class="text-base font-bold text-gray-800 ">{{item.name}}</a>
                            <h3 class="text-xz font-normal text-gray-500">By {{item.author}}</h3>
                        </div>
                        <div class="text-xs font-semibold text-gray-700 mt-2">{{item.brief}}</div>
                        <div class="flex py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div class="text-xs font-bold my-auto ml-1"> 4.0 <span class="text-gray-600 font-medium "> (500) </span></div>
                        </div>
                        <div class="mt-5 text-xz text-gray-700 font-medium">Free</div>
                    </div>
                </div>
            </div>

        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from "../layouts/admin-layout";
export default {
    name: "app-market",
    components: {AdminLayout},
    data(){
        return{
            gridData:[
                {id:1, image:'https://static.wixstatic.com/media/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.webp', title:'Pricing Plans', subtitle:'By Nitseditor', desc:'Subscriptions, memberships & pricing plans', rating:'2.4', total_rating:'(377)', cost:'Free'},
                {id:1, image:'https://static.wixstatic.com/media/ffb211_aafe29b263b04adc9e54cf3779edd14a~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/ffb211_aafe29b263b04adc9e54cf3779edd14a~mv2.webp', title:'Comments', subtitle:'By CodeMagic LTD', desc:'Comments, Review and testimonial for Nitseditor', rating:'4.4', total_rating:'(1377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1087ff_14dbeee423d542e48755dbb96e54d78e~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/1087ff_14dbeee423d542e48755dbb96e54d78e~mv2.webp', title:'Facebook Like Popup', subtitle:'By Nitseditor', desc:'An awesome Facebook Like Popup for your site', rating:'3.4',total_rating:'(400)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1984e9_c570b4013c964b148b75f9c9aa5105a1~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/1984e9_c570b4013c964b148b75f9c9aa5105a1~mv2.webp', title:'Magic Form Builder', subtitle:'By Nitseditor', desc:'Add secure forms to your site + Free Template', rating:'5.4', total_rating:'(377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1849bd_e0bcef1e7d7b411581c499d02eca75d6~mv2.jpg/v1/fill/w_68,h_68,al_c,q_80,usm_0.66_1.00_0.01/1849bd_e0bcef1e7d7b411581c499d02eca75d6~mv2.webp', title:'Instagram Pro', subtitle:'By Nitseditor', desc:'Showcase your Instagram feed like a pro', rating:'4.0', total_rating:'(377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/454bab_853eea4ca3ae4af4bc5a4cf726260ff5~mv2.jpg/v1/fill/w_68,h_68,al_c,q_80,usm_0.66_1.00_0.01/454bab_853eea4ca3ae4af4bc5a4cf726260ff5~mv2.webp', title:'Nitseditor Blog', subtitle:'By Nitseditor', desc:'Share your expertise and grow your traffic', rating:'2.4', total_rating:'(377)', cost:'Free Plan Available'},
            ],
            gridData2:[
                {id:1, image:'https://static.wixstatic.com/media/b2be68_ff3afbec14d34cccaa2752590ec022de~mv2.jpg', sub_image:'https://static.wixstatic.com/media/4d5934_334f2a86ee104333b1e7fd9b331f5ff4~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/4d5934_334f2a86ee104333b1e7fd9b331f5ff4~mv2.webp', title:'Smile: Points & Rewards', desc:'Boost sales & retention with points & rewards', cost:'Premium Site Required'},
                {id:1, image:'https://static.wixstatic.com/media/311930_773c3c31476344cd891b29c961ee7b4c~mv2.jpg', sub_image:'https://static.wixstatic.com/media/311930_727032f25c2a4a8fbe0c95334f37024c~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/311930_727032f25c2a4a8fbe0c95334f37024c~mv2.webp', title:'Smart Popups & Forms', desc:'Create beautiful pop ups, forms, and widgets', cost:'Premium Site Required'},
                {id:1, image:'https://static.wixstatic.com/media/ead2e7_d4910f26a6ba4ad68f83c39c6049557e~mv2.jpg', sub_image:'https://static.wixstatic.com/media/ead2e7_ef9720a99b3444e8970042928c085bdf~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/ead2e7_ef9720a99b3444e8970042928c085bdf~mv2.webp', title:'Printful', desc:'Design & sell print-on-demand products', cost:'Premium Site Required'},
                {id:1, image:'https://static.wixstatic.com/media/d44ad1_649b459f2bf14319926f0ac1a17e76ae~mv2.jpg', sub_image:'https://static.wixstatic.com/media/d44ad1_fddf719dc94349ccaa5abd506ebb0778~mv2.jpg/v1/fill/w_53,h_53,al_c,q_80,usm_0.66_1.00_0.01/d44ad1_fddf719dc94349ccaa5abd506ebb0778~mv2.webp', title:'Visitor Analytics', desc:'Advanced Visitor Stats, Analytics & Feedback', cost:'Premium Site Required'},
            ],
            gridData3:[
                {id:1, image:'https://static.wixstatic.com/media/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/18d23d_589925a0d27343a5958cad77ed1669d8~mv2.webp', title:'Pricing Plans', subtitle:'By Nitseditor', desc:'Subscriptions, memberships & pricing plans', rating:'2.4', total_rating:'(377)', cost:'Free'},
                {id:1, image:'https://static.wixstatic.com/media/ffb211_aafe29b263b04adc9e54cf3779edd14a~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/ffb211_aafe29b263b04adc9e54cf3779edd14a~mv2.webp', title:'Comments', subtitle:'By CodeMagic LTD', desc:'Comments, Review and testimonial for Nitseditor', rating:'4.4', total_rating:'(1377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1087ff_14dbeee423d542e48755dbb96e54d78e~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/1087ff_14dbeee423d542e48755dbb96e54d78e~mv2.webp', title:'Facebook Like Popup', subtitle:'By Nitseditor', desc:'An awesome Facebook Like Popup for your site', rating:'3.4',total_rating:'(400)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1984e9_c570b4013c964b148b75f9c9aa5105a1~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01/1984e9_c570b4013c964b148b75f9c9aa5105a1~mv2.webp', title:'Magic Form Builder', subtitle:'By Nitseditor', desc:'Add secure forms to your site + Free Template', rating:'5.4', total_rating:'(377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/1849bd_e0bcef1e7d7b411581c499d02eca75d6~mv2.jpg/v1/fill/w_68,h_68,al_c,q_80,usm_0.66_1.00_0.01/1849bd_e0bcef1e7d7b411581c499d02eca75d6~mv2.webp', title:'Instagram Pro', subtitle:'By Nitseditor', desc:'Showcase your Instagram feed like a pro', rating:'4.0', total_rating:'(377)', cost:'Free Plan Available'},
                {id:1, image:'https://static.wixstatic.com/media/454bab_853eea4ca3ae4af4bc5a4cf726260ff5~mv2.jpg/v1/fill/w_68,h_68,al_c,q_80,usm_0.66_1.00_0.01/454bab_853eea4ca3ae4af4bc5a4cf726260ff5~mv2.webp', title:'Nitseditor Blog', subtitle:'By Nitseditor', desc:'Share your expertise and grow your traffic', rating:'2.4', total_rating:'(377)', cost:'Free Plan Available'},
            ],
            tableData:{},
            base_url: process.env.MIX_NITSEDITOR_DEVELOPER_URL
        }
    },
    methods:{
        redirect(slug){
            this.$inertia.get('/nits-admin/app-market/'+slug);
        },
        fetchData(){
            //Axios All
            this.searchLoading = true
            const recommendedRequest = axios.post('http://nitseditor-documentation.local/api/recommended-for-you',{})
            const trendingRequest = axios.post('http://nitseditor-documentation.local/api/trending-plugins',{})
            const businessRequest = axios.post('http://nitseditor-documentation.local/api/business-solutions',{})
            axios.all([
                recommendedRequest,
                trendingRequest,
                businessRequest
            ], {})
                .then(
                    axios.spread((...responses) => {
                        this.tableData = {
                            recommended_plugins: responses[0].data.data,
                            trending_plugins: responses[1].data.data,
                            business_solutions_plugins: responses[2].data.data,
                        }
                    })
                )
                .catch(errors => {
                    // react on errors.
                    console.error(errors);
                });
        },
    },
    created() {
        this.fetchData();
    }
}
</script>

<style scoped>
.bg-linear-blue{
    background: -webkit-gradient(linear,left top,right top,from(#273c92),to(#293e92));
}
.text-vs{
    font-size: 10px;
}
.text-xz{
    font-size: 11px;
}
</style>
