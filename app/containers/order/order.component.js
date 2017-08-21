import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    StyleSheet
} from 'react-native';

import OrderHeader from './components/order-header/OrderHeader';
import ScrollBox from './components/scrollview/ScrollBox';

import OrderStyle from './order.style';

const style = StyleSheet.create(OrderStyle);


class Order extends React.Component {
    constructor() {
        super();
    }

    static navigatorStyle = {
        navBarBackgroundColor: '#fff',
        navBarHidden: true,
    };

    render() {
        return (
            <View style={style.wrap}>
                <View style={style.statusBar}>

                </View>
                <OrderHeader/>

                <ScrollBox/>
            </View>
        );
    }
}

export default Order;