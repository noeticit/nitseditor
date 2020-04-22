import auth from "NitsModels/_auth";
import {encrypt} from "NitsModels/_encrypt";
import {getHeader} from "NitsModels/_config";
import VueSession from 'NitsModels/_session';

let session = new VueSession(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);

export default class authentication extends auth {

    //Login
    login(user) {
        return new Promise((resolve, reject) => {

            const authUser = {}

            const postData = {
                grant_type: 'password',
                username: user.email,
                password: user.password,
                client_id: process.env.MIX_CLIENT_ID,
                client_secret: process.env.MIX_CLIENT_SECRET,
                scope: ''
            };
            axios.post('/oauth/token', postData).then(response => {
                if (response.status === 200) {
                    console.log('check');
                    authUser.access_token = encrypt(response.data.access_token);
                    authUser.refesh_token = encrypt(response.data.refresh_token);
                    session.set('auth_user', authUser);

                    axios.get('/nits-system-api/user', {headers: getHeader()}).then(res => {
                        if(res.status === 200)
                        {
                            authUser.first_name = encrypt(res.data.data.first_name)
                            authUser.last_name = res.data.data.last_name ? encrypt(res.data.data.last_name) : null;
                            authUser.email = encrypt(res.data.data.email)
                            authUser.role_id = res.data.data.role ?  encrypt(res.data.data.role) : null;

                            //Storing into local storage.
                            session.set('auth_user', authUser);

                            const redirect = {
                                redirect: '/dashboard'
                            };

                            resolve(redirect);
                        }
                    }).catch((err) => {
                        return reject(err);
                    });
                }
            }).catch((error) => {
                return reject(error);
            });
        });
    }

}
