export class AuthService {
    isAuth: boolean = false;

    singIn() {
        return new Promise(
           (resolve: any, reject: any) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    },2000
                )
            }
        )
    }

    singOut(){
        this.isAuth = false;
    }
}