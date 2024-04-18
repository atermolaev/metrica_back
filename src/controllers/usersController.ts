import AuthController from "./authController";

export default class UsersControler {
    private username: string;
    private password: string;;

    private checkUser: string;
    private checkPass: string;

    constructor(user: string, pass: string) {
        const adminData = AuthController.getAdminData();

        this.username = adminData.user;
        this.password = adminData.pass;
        this.checkUser = user;
        this.checkPass = pass;
    }

    public checkAuth() {
        if (this.checkUser === this.username && this.checkPass === this.password) {
            return true;
        } else {
            return false;
        }
    }
}