import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

import './config/axios';

registerScreens();

const tabs = [
    {
        label:'首页',
        screen: 'home',
        icon: require('./asset/tabBar/home.png')
    },
    {
        label:'订单',
        screen: 'order',
        icon: require('./asset/tabBar/order.png')
    },
    {
        label:'附近',
        screen: 'nearby',
        icon: require('./asset/tabBar/nearby.png')
    },
    {
        label:'我的',
        screen: 'my',
        icon: require('./asset/tabBar/my.png')
    }
];

Navigation.startTabBasedApp({
    tabs,
    tabsStyle: {
        tabBarBackgroundColor: '#fff',
        tabBarButtonColor: '#666',
        tabBarSelectedButtonColor: '#ff8400',
        statusBarColor: '#fff'

    },
    appStyle: {
        screenBackgroundColor: '#f5f5f5',
        tabBarBackgroundColor: '#fff',
        tabBarButtonColor: '#666',
        tabBarSelectedButtonColor: '#ff8400',
        tabBarTranslucent: true,
        forceTitlesDisplay: true
    }
});