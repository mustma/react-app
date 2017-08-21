import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {MapView, Marker, Polyline} from 'react-native-amap3d';

import NearbyStyle from './nearby.style';

const style = StyleSheet.create(NearbyStyle);
class Nearby extends React.Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarTextColorScheme: 'light'
    };

    constructor() {
        super();
    }

    render() {
        return (
            <View style={style.nearby}>
                <View style={style.header}>
                    <Text style={style.hdtxt}>我的车辆</Text>
                </View>
                <MapView style={style.map}>
                    <Marker
                        draggable
                        title='这是一个可拖拽的标记'
                        onDragEnd={({nativeEvent}) =>
                            console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
                        coordinate={{
                            latitude: 39.91095,
                            longitude: 116.37296,
                        }}/>
                </MapView>
            </View>
        );
    }
}

export default Nearby;