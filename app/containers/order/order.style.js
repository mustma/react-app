import {Platform} from 'react-native';
export default {

    wrap: {
        flex: 1,
        flexDirection: 'column'
    },

    statusBar: {
        height: Platform.OS==='ios'?20:0,
    }
}