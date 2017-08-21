import {Platform} from 'react-native';
export default {
    nearby: {
        width: '100%',
        height: '100%'
    },
    header: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        height: Platform.OS === 'ios' ? 64 : 44,
        width: '100%',
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,.5)'
    },
    hdtxt:{
        fontSize: 18,
        color: '#fff',
        backgroundColor:'transparent'
    },
    map:{
        width: '100%',
        height: '100%'
    }
}