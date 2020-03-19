import authorization from "NitsModels/_auth";

export class authentication extends authorization {

    login(user) {
        console.log(user);
        return new Promise((resolve, reject) => {
                const redirect = {
                    redirect: '/nits-admin/dashboard'
                };
            return resolve(redirect);
        })
    }
}
