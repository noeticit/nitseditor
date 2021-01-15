import auth from "NitsModels/_auth";
import VueSession from 'NitsModels/_session';
import axios from 'axios'

let session = new VueSession(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);

export default class authentication extends auth {

    //Login
    login(user) {
        return new Promise((resolve, reject) => {

            const postData = {
                email: user.email,
                password: user.password,
            };

            axios.post('/authenticate', postData).then(response => {
                if (response.status === 204) {
                    resolve({
                        redirect: ''
                    });
                }
            }).catch((error) => {
                return reject(error);
            });
        });
    }

}
