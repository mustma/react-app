import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import TitleStyle from './title.style';

const style = StyleSheet.create(TitleStyle);

class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { text } = this.props;
        return (
            <View style={style.title}>
                <View style={style.line} />
                <View style={style.txtBox}>
                    <View style={style.yd}/>
                    <Text style={style.txt}>{text}</Text>
                    <View style={style.yd}/>
                </View>
            </View>
        );
    }
}

export default Title;