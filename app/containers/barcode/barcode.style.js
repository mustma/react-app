import { Platform } from 'react-native';
export default {
    barcode:{
        flex:1,
        height: '100%'
    },
    header:{
        top: Platform.OS==='ios'?20:0,
        height: 44,
        width: '100%',
        position: 'absolute',
        zIndex: 10,
        justifyContent:'center',
        alignItems: 'center'
    },
    back:{
        width: 44,
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        left:0,
        top:0
    },
    backImg:{
        width: 9
    },
    hdtxt:{
        justifyContent:'center',
        alignItems:'center',
        fontSize: 18,
        color: '#fff',
        backgroundColor:'transparent'
    },
    wrap:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 5,
        flexDirection: 'column'
    },
    titleBox:{
        height: Platform.OS==='ios'?170:150,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    title:{
        fontSize: 11,
        color: '#fff',
        marginBottom: 12
    },
    box:{
        height: 285,
        flexDirection: 'row'
    },
    boxSlide:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    boxCenter:{
        width: 285,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxBj:{

    },
    camera:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 4
    },
    switch:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    simgBox:{
        width: 34,
        height: 34,
        borderRadius: 34,
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent:'flex-end',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10
    },
    simg:{
        width: 20,
        marginBottom: 5
    },
    stxt:{
        fontSize: 12,
        color: '#fff'
    },
    boxBj:{
        width: 20,
        height: 20,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#ff8400',
        position: 'absolute'
    },
    boxBj1:{
        top: 0,
        left: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0
    },
    boxBj2:{
        top: 0,
        right: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0
    },
    boxBj3:{
        bottom: 0,
        left: 0,
        borderTopWidth: 0,
        borderRightWidth: 0
    },
    boxBj4:{
        bottom: 0,
        right: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0
    },
    line:{
        position: 'absolute'
    }
}