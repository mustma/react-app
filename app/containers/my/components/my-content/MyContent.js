import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import styles from './content.style';
const style = StyleSheet.create(styles);

export default class name extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: [
                    {name: '我的钱包',url:require('./img/qb.png')},
                    {name: '消息中心',url:require('./img/qb.png')},
                    {name: '实名认证',url:require('./img/qb.png')},
                    {name: '我的好友',url:require('./img/qb.png')},
                    {name: '分享下载',url:require('./img/qb.png')},
                    {name: '加盟卡行成员',url:require('./img/qb.png')},
                    {name: '帮助与反馈',url:require('./img/qb.png')},
                    {name: '更多设置',url:require('./img/qb.png'), stateBottom:'not_bottom'},
                ]
        }

    }

    render() {
        return (
            <View style={style.content_warp}>
                {
                    this.state.data.map((item,index)=>{
                        const url = item['url'];
                        return(
                            <View key={index} style={[style.list, style[item['stateBottom']]]}>
                                <Image style={{marginRight: 12,height: 24, width: 24}} source={ item.url } ></Image>
                                <Text style={{color: '#7d7d7d'}}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}