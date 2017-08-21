import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import StarStyle from './star.style';

const style = StyleSheet.create(StarStyle);

class Star extends React.Component{
    static propTypes = {
        num:React.PropTypes.number
    };
    static defaultProps = {
        num: 0
    };
    constructor(props){
        super(props);
    }

    render(){
        const { num } = this.props;
        return (
            <View style={style.star}>
                {
                    [1,2,3,4,5].map((i)=>{
                        if(num>=i){
                            return (
                                <Image key={i} style={style.img} source={require('./img/star-active.png')}/>
                            );
                        }else {
                            if(num>0){
                                return (
                                    <Image key={i} style={style.img} source={require('./img/star.png')}/>
                                );
                            }
                        }
                    })
                }
                {num==0?<Text style={style.txt}>暂无评分</Text>:<Text style={style.txt}>{num}.0分</Text>}
            </View>
        );
    }
}

export default Star;