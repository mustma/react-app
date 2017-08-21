import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';


import OrderNav from '../order-nav/OrderNav';
import OrderAll from '../order-all/OrderAll';

import styles from './scroll.style';
const style = StyleSheet.create(styles)

export default class ScrollBox extends React.Component {

    render() {
        return (
            <View style={style.wrap}>
                <ScrollView>
                    <OrderNav/>
                    {/*多个视图*/}
                    <OrderAll/>
                </ScrollView>
            </View>
        );
    }
}