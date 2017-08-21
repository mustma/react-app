import React from 'react';
import { observer } from 'mobx-react/native';
import orderState from '../../order.state';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

import styles from './orderNav.style';
const style = StyleSheet.create(styles)

@observer
export default class OrderNav extends React.Component {
    constructor(props){
        super(props)

        this.state= {
            navStep: ['全部', '待承运', '承运中', '待评价'],
            cssIndex: 0,
        }
    }

     handleClick(index){
         orderState.setStepIndex(index);
    }

    render() {
        return (
            <View style={style.nav}>
                {
                    this.state.navStep.map((item,index)=>{
                        return (
                            <TouchableOpacity onPress={this.handleClick.bind(this,index)}  key={index}  style={[ style.step]}>
                                <View style={[ ((orderState.container.setpIndex==index? style.stepActive:'')) ]}><Text style={style.text}>{item}</Text></View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }
}