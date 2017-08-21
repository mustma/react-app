import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Star from '../../../../components/star/star.component';

import styles from './myheader.style';
const style = StyleSheet.create(styles);

export default class MyHeader extends React.Component {

    render() {
        return (
            <View style={style.my_header_warp}>
                <View style={ style.user_box }>
                    <View style={ style.my_header_avatar_box }>
                        <Image style={style.my_header_avatar}
                               source={{uri: 'https://wix.github.io/react-native-navigation/_images/logo.png'}} />
                        <Text style={style.my_header_name}>车神</Text>
                    </View>

                    <View style={style.tel}>
                        <Text style={[style.name, style.tel_active,]}>藤原-拓海</Text>
                        <Text style={[style.tel_active,]}>158893483 秋名山</Text>
                        <Text style={[style.tel_active,]}>24234244</Text>
                        {/*<Star num='4'/>*/}
                    </View>
                </View>
            </View>
        );
    }
}