<template>
    <div class=" w-full">
        <img src="/nits-assets/images/home-banner-bg.png">
        <div class=" w-screen p-5 justify-center shadow rounded text-black text-center font-serif text-lg text-4xl">JOB APPLICATION FORM</div> <hr>
        <div class="absolute w-full h-full bg-orange-400">
            <div>
                <h2 >Personal Details :</h2>
                <table class="w-full absolute bg-orange-400 ">
                        <tr>
                            <td class="block mb-6 pb-1">First Name</td>
                            <td><input type="text" class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                            <td class=" block mb-6 pb-1">Middle Name</td>
                            <td><input type="text" class="bg-white rounded border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                            <td class=" block mb-6 pb-1">Last Name</td>
                            <td><input type="text" class="bg-white rounded border-b m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                        </tr>+++++
                        <tr>
                            <td class="mb-6 block">Father Name</td>
                            <td><input type="text" class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                            <td class="mb-6 block">Mother Name</td>
                            <td><input type="type" class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                        </tr>
                        <tr>
                            <td class="mb-6 block">Current Address</td>
                            <td><textarea rows="4" class="w-full rounded mb-6"></textarea></td>
                            <td class="mb-6 block">Permanent Address</td>
                            <td><textarea rows="4" class="w-full rounded mb-6"></textarea></td>
                        </tr>
                        <tr>
                            <td class="mb-6 block">Mobile Number</td>
                            <td><input type="text" class="bg-white  rounded m-auto block  w-full mb-6  pb-1"></td>
                            <td class="mb-6 block">Home Phone</td>
                            <td><input type="type" class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                            <td class="mb-6 block">Office Phone</td>
                            <td><input type="text" class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                        </tr>
                        <tr>
                            <td class="mb-6 block">Date Of Birth</td>
                            <td><input type="date" class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                            <td class="mb-6 block">Place Of Birth</td>
                            <td><input type="type" class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1"></td>
                        </tr>
                        <tr>
                            <td class="mb-6 block">Select Gender</td>
                            <td><input class="mb-6" type="radio" name="Gender" value="male">Male</td>
                            <td><input class="mb-6 " type="radio" name="Gender" value="female">Female</td>
                        </tr>
                        <tr>
                            <td class="mb-6 block">Highest Qualification</td>
                            <td><input type="text" name="" class="bg-white  rounded m-auto block w-full mb-6 pb-1"></td>
                            <td>Passing Year</td>
                            <td><input type="month" name="" class="bg-white  rounded m-auto block  w-full mb-6 "></td>
                        </tr>
                        <tr>
                            <td class="mb-6 block">Language Known</td>
                            <td><input class="mb-6 " type="checkbox" name="Language" value="english">English</td>
                            <td><input class="mb-6 " type="checkbox" name="Language" value="marathi">Marathi</td>
                            <td><input class="mb-6 " type="checkbox" name="Language" value="hindi">Hindi</td>
                            <td><input class="mb-6 " type="checkbox" name="Language" value="urdu">Urdu</td>
                        </tr>
                        <tr>
                            <td class="mb-6 block">Your Hobbies</td>
                            <td><input class="mb-6" type="checkbox" name="Hobbies" value="cricket">Cricket</td>
                            <td><input class="mb-6" type="checkbox" name="Hobbies" value="football">Football</td>
                            <td><input class="mb-6" type="checkbox" name="Hobbies" value="kabaddi">Kabaddi</td>
                            <td><input class="mb-6" type="checkbox" name="Hobbies" value="hockie">Hockie</td>
                        </tr>
                        <tr>
                            <td class="mb-6">About Your Self</td>
                            <td class="mb-6"> <textarea  class="w-full rounded mb-6" rows="4"> </textarea></td>
                        </tr>
                        <tr>
                            <td class="mb-6 ">Nationality</td>
                            <td class="bg-white mb-6 w-full rounded shadow block m-auto"><select>
                                <option value="indian">Indian</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="UK">UK</option>
                                <option value="american">American</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td class=" block mb-6 pb-1 ">Aadhar Number</td>
                            <td><input class="bg-white mb-6 rounded shadow p-1 w-full m-auto" type="number" name=""></td>
                            <td class="mb-6 block ">Pan Number</td>
                            <td><input class="w-full m-auto rounded mb-6 p-1 shadow " type="number" name=""></td>
                        </tr>

                    <h2>Educational Details</h2>

                    <tr>
                    <td>Sr No</td>
                    <td>Qualification</td>
                    <td>University / Institute</td>
                    <td>Year of passing</td>
                    <td>Marks</td>
                    </tr>
                    <tr>
                        <td class="mb-6 block">1</td>
                        <td><input class="bg-white rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="year"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="year"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="year"></td>
                        <td><input class="bg-white  rounded m-auto block border-grey w-full mb-6 text-grey-darker pb-1" type="text"></td>
                    </tr>

                    <h2>Work Experience :</h2>
                    <tr>
                        <td>Sr No</td>
                        <td>Company Name</td>
                        <td>Company Address</td>
                        <td>Work / Role</td>
                        <td>Duration</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="year"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="month"></td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="text"></td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="month"></td>
                    </tr>

                    <h2>Other Details</h2>

                    <tr>
                        <td class="mb-6 block">Job Type</td>
                        <td><input class="mb-6" type="radio" name="Type" value="permanent">Permanent </td>
                        <td><input class="mb-6 " type="radio" name="Type" value="temperory">Temperory</td>
                        <td><input class="mb-6 " type="radio" name="Type" value="contract">Contract</td>
                    </tr>
                    <tr>
                        <td>Date of Joining</td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1" type="Date"></td>
                        <td>Time Of Joining</td>
                        <td><input class="bg-white  rounded m-auto block  w-full mb-6 pb-1"  type="time"></td>
                    </tr>
                    <tr>
                        <td class="mb-6 block">Preffered Location</td>
                        <td><input class="mb-6" type="radio" name="Type" value="mumbai">Mumbai </td>
                        <td><input class="mb-6 " type="radio" name="Type" value="pune">Pune</td>
                        <td><input class="mb-6 " type="radio" name="Type" value="banglore">Banglore</td>
                        <td><input class="mb-6 " type="radio" name="Type" value="hyderabad">Hyderabad</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td colspan="3">Im here confirming that all the above mentioned details are correct as pr</td>
                    </tr>
                </table>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "JobApplicationForm"
    }
</script>

<style scoped>
    /*input[type=text]{*/
    /*    @apply mb-6 rounded shadow*/
    /*}*/
    /*td{*/
    /*    @apply mb-6 pb-1*/
    /*}*/
    h2{
        @apply p-5  text-black  font-serif text-lg text-2xl underline;
    }


</style>
