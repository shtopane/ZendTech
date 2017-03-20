'use strict';
import requester from '../../helpers/requester.js';

export default {
    register: function(userInfo) {
        return requester.post('/register', userInfo).then(resp => {
            let user = resp.user;
            return user;
        });
    },
    login: function(userInfo) {
        return requester.post('/login', userInfo);
    },
    logout: function() {
        return requester.post('/logout');
    }
}