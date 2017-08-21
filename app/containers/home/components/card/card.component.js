import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import CardStyle from './card.style';
import Start from '../../../../components/star/star.component';

const style = StyleSheet.create(CardStyle);

class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { num,end } = this.props;
        return (
            <View style={[style.card,end&&style.cardFist]}>
                <View style={style.title}>
                    <View style={style.name}>
                        <Text style={style.nameTxt1}>德邦物流有限公司</Text>
                        <View style={style.nameTxt2}>
                            <Text style={style.ntxt}>（共浏览2次）</Text>
                        </View>
                    </View>
                    <Text style={style.time}>2017/04/12 16:21</Text>
                </View>
                <View style={style.star}>
                    <View style={style.label}>
                        <Image style={style.img} source={require('./img/label.png')}/>
                        <Text style={style.starTxt}>推荐</Text>
                    </View>
                    <Start num={num}/>
                </View>
                <View style={style.routeAndPrice}>
                    <View style={style.route}>
                        <Text style={style.cityTxt}>上海</Text>
                        <View style={style.dir}>
                            <Text style={style.hour}>48小时</Text>
                            <Image style={style.dirImg} source={require('./img/dirimg.png')}/>
                            <Text style={style.deg}>交易次数：956票</Text>
                        </View>
                        <Text style={style.cityTxt}>天津</Text>
                    </View>
                    <View style={style.price}>
                        <View style={style.priceBox}>
                            <View style={[style.priceTxtBox, style.delet]}>
                                <Text style={[style.priceTxt, style.priceTxtDelet]}>0.8元/kg</Text>
                                <View style={style.line}/>
                            </View>
                            <View style={[style.priceTxtBox, style.delet]}>
                                <Text style={[style.priceTxt, style.priceTxtDelet]}>0.8元/kg</Text>
                                <View style={style.line}/>
                            </View>
                        </View>
                        <View style={style.priceBox}>
                            <View style={style.priceTxtBox}>
                                <Text style={style.priceTxt}>0.8元/kg</Text>
                            </View>
                            <View style={style.priceTxtBox}>
                                <Text style={style.priceTxt}>0.8元/kg</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Card;