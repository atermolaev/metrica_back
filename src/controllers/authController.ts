export default class AuthController {
    constructor() {

    }

    public static getAdminData() {
        return {
            user: 'admin',
            pass: 'admin',
        }
    }
}