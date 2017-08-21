import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native';

import styles from './orderAll.style';
const style = StyleSheet.create(styles)

export default class OrderAll extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    title: {
                        ld: '1',
                        wlgs: '曹操物流公司',
                        status: 'a'
                    },
                    area: {
                        from: '北京',
                        to: '上海',
                        time: '900',
                        tyoesOf: ['服装','100件','10公斤', '10方', '📦']
                    }
                },
                {
                    title: {
                        ld: '2',
                        wlgs: '曹操物流公司',
                        status: 'b'
                    },
                    area: {
                        from: '北京',
                        to: '上海',
                        time: '900',
                        tyoesOf: ['服装', '100件','10公斤', '10方', '📦']
                    }
                }
            ]
        }
    }

    hadleClck() {
        alert('2342')
    }

    render() {
        return (
            <View style={style.wrap}>
                {
                    this.state.data.map((item, index)=>{
                        return(
                            <View style={style.orderBox} key={index}>

                                {/*title*/}
                                <View style={style.title}>
                                    <View>
                                        <Image source={require('../../img/ld.png')} />
                                    </View>
                                    <Text style={style.wlgs}>{item.title.wlgs}</Text>
                                    <Text style={style.status}>
                                        {(item.title.status=='a')?'待付款':''}
                                        {(item.title.status=='b')?'已取消':''}
                                        {(item.title.status=='c')?'已完成':''}
                                    </Text>
                                </View>

                                {/*center*/}
                                <View style={ style.centerWrap }>
                                    <View style={ style.fromTo }>
                                        <View style={style.fromToText}>
                                            <Text style={ style.fromActive } >{ item.area.from }</Text>
                                            <Text style={ style.fromText1 }>太阳系</Text>
                                        </View>
                                        <View style={ style.timeBox }>
                                            <Text style={ style.timeText }>{item.area.time}小时</Text>
                                            <Image source={require('../../img/jt.png')} />
                                        </View>
                                        <View  style={style.fromToText2}>
                                            <Text style={ style.fromActive }>{ item.area.to }</Text>
                                            <Text style={ style.fromText1 }>银河系</Text>
                                        </View>
                                    </View>

                                    <View style={ style.howMatch }>
                                        {
                                            item.area.tyoesOf.map((item,index)=>{
                                                return(
                                                    <Text style={ style.fromText } key={index}>{item}</Text>
                                                )
                                            })
                                        }
                                    </View>
                                </View>

                                {/*底部*/}
                                <View style={style.monery}>
                                    <Text style={style.moneryText}>实付款¥<Text style={style.moneryNum}>450</Text>.00</Text>
                                </View>

                                <View style={style.buttomBox}>
                                    <Text style={[style.buttonActiove,style.button1]}>重新下单</Text>
                                    <Text style={[style.buttonActiove,style.button2]}>评价详情</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}