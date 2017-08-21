import {Platform} from 'react-native';

export default {
    header: {
        width: '100%',
        position: 'absolute',
        paddingTop: Platform.OS == 'ios' ? 20 : 0,
        left: 0,
        zIndex: 99,
        height: Platform.OS == 'ios' ? 64 : 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        backgroundColor: 'transparent',
        color: '#fff'
    },
    headerli: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLi1Txt: {
        fontSize: 14
    },
    headerLi1Img: {
        width: 10,
        marginLeft: 5,
        marginRight: 7.5
    },
    headerli1: {
        width: 68
    },
    headerli2: {
        flex: 1,
        height: 30,
        backgroundColor: '#f7f7f740',
        borderRadius: 4,
        justifyContent: null
    },
    headerli2Img1: {
        width: 13,
        marginLeft: 10,
        marginRight: 7
    },
    headerli2Img2: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerli2Img2I: {
        width: 20
    },
    headerli3: {
        width: 56,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerli3Img: {
        width: 20,
        marginBottom: 4
    },
    headerli3Txt: {
        fontSize: 10
    }
}