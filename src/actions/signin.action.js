import axios from 'axios';
const signinSuccess = () => {
    return {
        type: "SIGNIN_SUCCESS",
        payload: true
    }
}

export default {
    signinSuccess
}