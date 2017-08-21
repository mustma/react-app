import {Navigation} from 'react-native-navigation';

import Home from './containers/home/home.component';            //首页
import Order from './containers/order/order.component';         //订单
import Nearby from './containers/nearby/nearby.component';      //附近
import My from './containers/my/my.component';                  //我的
import Barcode from './containers/barcode/barcode.component';   //扫码

export default function () {
    Navigation.registerComponent('home', () => Home);
    Navigation.registerComponent('order', () => Order);
    Navigation.registerComponent('nearby', () => Nearby);
    Navigation.registerComponent('my', () => My);
    Navigation.registerComponent('barcode', () => Barcode);
}