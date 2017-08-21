import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import SubnavStyle from './subnav.style';

const style = StyleSheet.create(SubnavStyle);

class Subnav extends React.Component{
    render(){
        return (
            <View style={style.subnav}>
                <View style={style.li}>
                    <View style={[style.imgbox,style.imgBg0]}><Image style={style.img} source={require('./img/icon-ld.png')} /></View>
                    <Text style={[style.txt,style.txt0]}>零担发货</Text>
                </View>
                <View style={style.li}>
                    <View style={[style.imgbox,style.imgBg1]}><Image style={style.img} source={require('./img/icon-gp.png')} /></View>
                    <Text style={[style.txt,style.txt1]}>共同配送</Text>
                </View>
                <View style={style.li}>
                    <View style={[style.imgbox,style.imgBg2]}><Image style={style.img} source={require('./img/icon-sc.png')} /></View>
                    <Text style={[style.txt,style.txt2]}>我的熟车</Text>
                </View>
            </View>
        );
    }
}

export default Subnav;