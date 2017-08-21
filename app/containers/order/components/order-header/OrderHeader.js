import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import styles from './header.style';
const style = StyleSheet.create(styles);

export default class OrederHeader extends React.Component {

    render() {
        return (
            <View style={style.header}>
                <Text style={style.headerText}>我的订单</Text>
            </View>
        );
    }
}