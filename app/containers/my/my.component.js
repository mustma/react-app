import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import MyHeader from './components/my-header/MyHeader';
import MyContent from './components/my-content/MyContent';

import MyStyle from './my.style';

const style = StyleSheet.create(MyStyle);
class My extends React.Component{
    constructor(){
        super();
    }

    static navigatorStyle = {
        navBarHidden: true,
    }

    render(){
        return (
            <View style={ style.myWrap }>
                <MyHeader/>
                <MyContent/>
            </View>
        );
    }
}

export default My;