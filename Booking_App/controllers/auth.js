const getView = require('../helpers/getView');

class Auth{
    static async login(request, response){
        return getView(response, "auth/login.html");
    }

    static async signup(request, response){
        return getView(response, "auth/signup.html");
    }
}

module.exports = Auth;