import axios from 'axios';

class HomeServices {
    constructor(){

    }
    init() {
        axios.post('/rpc.php', {
            method: 'home.init',
            version: '1.0',
            platform: 'ios',
            token: 'b30d05a11bc5a4a3ccf2bd05a11bc5a4a3cce3ef6380faef400ef0981',
            uuid: '0983722',
            sign: '55916b27e27b7253a07378103e7d4b43',
            session: '6lo2jblfecgpik2fijjb8roku5'
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}

export default new HomeServices();