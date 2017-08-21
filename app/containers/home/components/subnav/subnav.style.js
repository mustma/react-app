const colorAry = ['#16d3c9','#ff8400','#f55c58'];

export default {
    subnav:{
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    li:{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgbox:{
        width:40,
        height:40,
        marginBottom: 5,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgBg0:{
        backgroundColor: colorAry[0]
    },
    imgBg1:{
        backgroundColor: colorAry[1]
    },
    imgBg2:{
        backgroundColor: colorAry[2]
    },
    img:{
        width: 27
    },
    txt:{
        fontSize: 12
    },
    txt0:{
        color: colorAry[0]
    },
    txt1:{
        color: colorAry[1]
    },
    txt2:{
        color: colorAry[2]
    }
}