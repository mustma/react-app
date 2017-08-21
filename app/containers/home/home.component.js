import React from 'react';
import { observer } from 'mobx-react/native';
import Orientation from 'react-native-orientation';

import HomeServices from './home.services';

import {
    View,
    StatusBar,
    ScrollView,
    StyleSheet
} from 'react-native';

import HomeStyle from './home.style';
import HomeState from './home.state';

import Banner from './components/banner/banner.component';
import Header from './components/header/header.component';
import Subnav from './components/subnav/subnav.component';
import Title from './components/title/title.component';
import Card from './components/card/card.component';

const style = StyleSheet.create(HomeStyle);

@observer
class Home extends React.Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarTextColorScheme: 'light'
    };

    componentDidMount(){
        HomeServices.init();
        /*屏幕锁定为竖屏*/
        Orientation.lockToPortrait();
        //Orientation.lockToLandscape();
    }

    constructor(props) {
        super(props);
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    onNavigatorEvent(event){
        //console.log(event.id==='willAppear')
    }

    render() {
        //const color = 'rgba(255,132,0,'+HomeState.container.opacity+')';
        return (
            <View style={style.home}>
                <Header bgColor={HomeState.container.bgColor} {...this.props}/>
                <ScrollView
                    style={style.homeScroll}
                    showsVerticalScrollIndicator={false}
                    onScroll={(e)=>{HomeState.changeOpacity(e)}}
                    scrollEventThrottle={16}
                    ioscanCancelContentTouches={false}
                >
                    <Banner />
                    <Subnav />
                    <Title text="最近交易"/>
                    <Card num={3} end={true}/>
                    <Title text="最近浏览"/>
                    <Card end={true}/>
                    <Title text="为您推荐"/>
                    {
                        [1,2,3,4,5].map((i)=>{
                            return (
                                <Card key={i} num={i} />
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

export default Home;