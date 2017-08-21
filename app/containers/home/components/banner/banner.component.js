import React from 'react';
import {observer} from 'mobx-react/native';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import BannerStyle from './banner.style';
import BannerState from './banner.state';

const style = StyleSheet.create(BannerStyle);

const sliderWidth = Dimensions.get('window').width;

@observer
class Banner extends React.Component {
    _carousel() {

    }

    render() {
        return (
            <View style={style.banner}>
                <Carousel
                    ref={(carousel) => {
                        this._carousel = carousel;
                    }}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                    autoplay={true}
                    inactiveSlideScale={1}
                    onSnapToItem={(index) => {
                        BannerState.changeDotted(index);
                    }}
                >
                    {[1, 2, 3].map((i) => {
                        return (
                            <Image key={i} style={[style.banner, {width: sliderWidth}]}
                                   source={require('./img/banner-img1.png')} resizeMode="cover"/>
                        );
                    })}
                </Carousel>
                <View style={style.dottedBox}>
                    {[1, 2, 3].map((i, index) => {
                        return (
                            <View key={i}
                                  style={[style.dotted, (BannerState.container.dotted == index && style.dottedActive)]}></View>
                        )
                    })}
                </View>
            </View>
        );
    }
}
;

export default Banner;


