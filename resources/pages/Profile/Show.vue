<template>
<!--    <app-layout>-->
<!--        <template #header>-->
<!--            <h2 class="font-semibold text-xl text-gray-800 leading-tight">-->
<!--                Profile-->
<!--            </h2>-->
<!--        </template>-->

<!--        <div>-->
<!--            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">-->
<!--                <div v-if="$page.props.jetstream.canUpdateProfileInformation">-->
<!--                    <update-profile-information-form :user="$page.props.user" />-->

<!--                    <jet-section-border />-->
<!--                </div>-->

<!--                <div v-if="$page.props.jetstream.canUpdatePassword">-->
<!--                    <update-password-form class="mt-10 sm:mt-0" />-->

<!--                    <jet-section-border />-->
<!--                </div>-->

<!--                <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">-->
<!--                    <two-factor-authentication-form class="mt-10 sm:mt-0" />-->

<!--                    <jet-section-border />-->
<!--                </div>-->

<!--                <logout-other-browser-sessions-form :sessions="sessions" class="mt-10 sm:mt-0" />-->

<!--                <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">-->
<!--                    <jet-section-border />-->

<!--                    <delete-user-form class="mt-10 sm:mt-0" />-->
<!--                </template>-->
<!--            </div>-->
<!--        </div>-->
<!--    </app-layout>-->
    <admin-layout>
        <div class="grid grid-cols-9 gap-8 pb-5">
            <div class="col-span-3">
                <div class="rounded-md p-3 bg-white shadow-lg">
                    <div class="flex justify-end px-3 py-1 ">
                        <svg class="h-5 w-5 text-gray-600 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/></svg>
                    </div>
                    <div class="flex">
                        <div class="my-auto">
                            <div class="h-28 w-28 rounded-lg">
                                <img class="h-full w-full rounded-lg" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg">
                            </div>
                        </div>
                        <div class="flex-col ml-4 my-auto">
                            <div class="text-base font-semibold family-montserrat text-gray-900 py-1">Abuzaid Sayyad</div>
                            <div class="text-sm font-medium family-montserrat text-gray-500">Application Developer</div>
                            <div class="flex py-1">
                                <button class="text-xs font-medium text-white bg-blue-500 px-4 family-montserrat py-2 rounded-md">Chat</button>
                                <button class="text-xs font-medium text-white bg-green-400 px-4 family-montserrat py-2 mx-3 rounded-md">Follow</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between py-2 mt-5">
                        <div class="text-gray-900 family-montserrat text-xs font-semibold ">Email :</div>
                        <div class="text-gray-500 family-montserrat text-xs font-semibold ">superadmin@gmail.com</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-gray-900 family-montserrat text-xs font-semibold ">Phone :</div>
                        <div class="text-gray-500 family-montserrat text-xs font-semibold">44(91)3487569</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div class="text-gray-900 family-montserrat text-xs font-semibold ">Location :</div>
                        <div class="text-gray-500 family-montserrat text-xs font-semibold">Mumbai</div>
                    </div>
                </div>
            </div>
            <div class="col-span-6">
                <div class="rounded-md px-6 bg-white shadow-lg">
                    <div class="flex justify-between py-3 border-b border-gray-200">
                        <div class="flex-col my-auto">
                            <div class="text-sm family-montserrat font-semibold text-black">Personal Information</div>
                            <div class="text-xs family-montserrat font-medium text-gray-500">Update your personal information</div>
                        </div>
                        <div class="flex my-auto">
                            <button class="text-white font-medium text-sm family-montserrat bg-green-400 rounded-md px-5 py-3 focus:outline-none">Save Changes</button>
                            <button class="text-gray-800 font-medium text-sm family-montserrat bg-gray-200 rounded-md px-5 py-3 ml-2 focus:outline-none">Cancel</button>
                        </div>
                    </div>
                    <div class="py-5">
                        <div>
                            <div class="flex">
                                <div class="w-48"></div>
                                <div>
                                    <div class="text-base font-semibold family-montserrat">Profile Information</div>
                                    <div class="text-xs font-medium family-montserrat text-gray-600">Update your account's profile information and email address.</div>
                                </div>

                            </div>
                            <div class="flex-col w-full mt-10">
                                <div class="flex">
                                    <div class="text-xs mt-2 font-medium text-gray-800 family-montserrat w-48">Avatar</div>
                                    <div class="">
                                        <img class="h-32 w-32 rounded-lg" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg">
                                        <div class="text-xs font-normal py-1 text-gray-600 family-montserrat">Allowed file types: png,jpg,jpeg</div>
                                    </div>
                                </div>
                                <div class="flex py-2 mt-2">
                                    <div class="text-xs mt-2 font-medium text-gray-800 family-montserrat w-48">Name :</div>
                                    <div class="">
                                        <input placeholder="Abuzaid" type="text" class="text-black placeholder-black rounded-md font-semibold text-xs family-montserrat px-4 py-3 w-96 bg-gray-100 focus:outline-none focus:bg-gray-200">
                                    </div>
                                </div>
                                <div class="flex py-2">
                                    <div class="text-xs mt-2 font-medium text-gray-800 family-montserrat w-48">Email :</div>
                                    <div class="">
                                        <input placeholder="superadmin@gmail.com" type="email" class="text-black rounded-md font-semibold text-xs family-montserrat px-4 py-3 w-96 bg-gray-100 focus:outline-none placeholder-black focus:bg-gray-200">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-7 py-5">
                            <div class="flex">
                                <div class="w-48"></div>
                                <div>
                                    <div class="text-base font-semibold family-montserrat">Update Password</div>
                                    <div class="text-xs font-medium family-montserrat text-gray-600">Ensure your account is using a long, random password to stay secure.</div>
                                </div>
                            </div>
                            <div class="flex-col w-full mt-10">
                                <div class="flex py-2 mt-2">
                                    <div class="text-xs mt-2 font-medium text-gray-800 family-montserrat w-48">Current Password :</div>
                                    <div class="">
                                        <input type="text" class="text-black placeholder-black rounded-md font-semibold text-xs family-montserrat px-4 py-3 w-96 bg-gray-100 focus:outline-none focus:bg-gray-200">
                                    </div>
                                </div>
                                <div class="flex py-2">
                                    <div class="text-xs mt-2 font-medium text-gray-800 family-montserrat w-48">New Password :</div>
                                    <div class="">
                                        <input type="email" class="text-black rounded-md font-semibold text-xs family-montserrat px-4 py-3 w-96 bg-gray-100 focus:outline-none placeholder-black focus:bg-gray-200">
                                    </div>
                                </div>
                                <div class="flex py-2">
                                    <div class="text-xs mt-2 font-medium text-gray-800 family-montserrat w-48">Confirm New Password :</div>
                                    <div class="">
                                        <input type="email" class="text-black rounded-md font-semibold text-xs family-montserrat px-4 py-3 w-96 bg-gray-100 focus:outline-none placeholder-black focus:bg-gray-200">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-7 py-5">
                            <div class="flex">
                                <div class="w-48"></div>
                                <div>
                                    <div class="text-base font-semibold family-montserrat">Two Factor Authentication</div>
                                    <div class="text-xs font-medium family-montserrat text-gray-600">Add additional security to your account using two factor authentication.</div>
                                </div>
                            </div>
                            <div class="flex-col w-full mt-5">
                                <div class="flex py-2 mt-2">
                                    <div><div class="w-48"></div></div>
                                    <div class="">
                                        <div class="text-sm font-semibold text-gray-900 family-montserrat">You have not enabled two factor authentication.</div>
                                        <div class="text-xs font-medium text-gray-600 family-montserrat py-2">When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</div>
                                        <button class="bg-blue-600 text-white px-4 py-2 text-xs font-medium family-montserrat focus:outline-none rounded">Enable</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-7 py-5">
                            <div class="flex">
                                <div class="w-48"></div>
                                <div>
                                    <div class="text-base font-semibold family-montserrat">Browser Sessions</div>
                                    <div class="text-xs font-medium family-montserrat text-gray-600">Manage and log out your active sessions on other browsers and devices.</div>
                                </div>
                            </div>
                            <div class="flex-col w-full mt-3">
                                <div class="flex py-2 mt-2">
                                    <div><div class="w-48"></div></div>
                                    <div class="">
                                        <div class="text-xs font-medium text-gray-600 family-montserrat py-2">If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</div>
                                        <button class="bg-blue-600 text-white px-4 py-2 text-xs font-medium family-montserrat focus:outline-none rounded">Log out other browser session</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-7 py-5">
                            <div class="flex">
                                <div class="w-48"></div>
                                <div>
                                    <div class="text-base font-semibold family-montserrat">Delete Account</div>
                                    <div class="text-xs font-medium family-montserrat text-gray-600">Permanently delete your account.</div>
                                </div>
                            </div>
                            <div class="flex-col w-full mt-3">
                                <div class="flex py-2 mt-2">
                                    <div><div class="w-48"></div></div>
                                    <div class="">
                                        <div class="text-xs font-medium text-gray-600 family-montserrat py-2">Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</div>
                                        <button class="bg-red-600 text-white px-4 py-2 text-xs font-medium family-montserrat focus:outline-none rounded">Delete Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import DeleteUserForm from './DeleteUserForm'
    import JetSectionBorder from '@/Jetstream/SectionBorder'
    import LogoutOtherBrowserSessionsForm from './LogoutOtherBrowserSessionsForm'
    import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm'
    import UpdatePasswordForm from './UpdatePasswordForm'
    import UpdateProfileInformationForm from './UpdateProfileInformationForm'
    import AdminLayout from "@/Layouts/admin-layout";
    import Button from "@/Jetstream/Button";
    import Input from "@/Jetstream/Input";

    export default {
        props: ['sessions'],

        components: {
            Input,
            Button,
            AdminLayout,
            AppLayout,
            DeleteUserForm,
            JetSectionBorder,
            LogoutOtherBrowserSessionsForm,
            TwoFactorAuthenticationForm,
            UpdatePasswordForm,
            UpdateProfileInformationForm,
        },
    }
</script>
