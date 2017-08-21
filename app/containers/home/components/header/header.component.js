import React from 'react';
import { observer } from 'mobx-react/native';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import HeaderStyle from './header.style';

const style = StyleSheet.create(HeaderStyle);

@observer
class Header extends React.Component {
    constructor(props){
        super(props);
    }
    linkPage(page){
        this.props.navigator.push({
            screen: page,
            animationType: 'slide-horizontal'
        });
    }
    render(){
        return (
            <View style={[style.header,this.props.bgColor]}>
                <View style={[style.headerli,style.headerli1]}>
                    <Text style={[style.headerText,style.headerLi1Txt]}>上海</Text>
                    <Image style={style.headerLi1Img} source={require('./img/jt.png')}/>
                </View>
                <View style={[style.headerli,style.headerli2]}>
                    <Image style={style.headerli2Img1} source={require('./img/icon-seach.png')}/>
                    <Text style={[style.headerText]}>运单号/订单号</Text>
                    <TouchableHighlight style={style.headerli2Img2} onPress={()=>{this.linkPage('barcode')}}>
                        <Image style={style.headerli2Img2I} resizeMode="contain" source={require('./img/icon-qrcode.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={[style.headerli,style.headerli3]}>
                    <Image style={style.headerli3Img} source={require('./img/icon-hz.png')}/>
                    <Text style={[style.headerText,style.headerli3Txt]}>货主</Text>
                </View>
            </View>
        );
    }
};

export default Header;