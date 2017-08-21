import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';
import * as Animatable from 'react-native-animatable';

import BarcodeStyle from './barcode.style';

const style = StyleSheet.create(BarcodeStyle);

const TopToBottom = {
    from: {
        top: 0,
    },
    to: {
        top: 270,
    },
};

class MoveImage extends React.Component {
    render() {
        return (
            <Animatable.Image easing="linear" animation={TopToBottom} iterationCount="infinite" duration={2000}
                              direction="alternate"
                              source={require('./img/line.png')} style={[style.line, {}]}></Animatable.Image>
        );
    }
}
Animatable.createAnimatableComponent(MoveImage);

class Barcode extends React.Component {
    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: true
    };

    constructor(props) {
        super(props);
        this.state = {
            switchBtn: false,
            swImg: [require('./img/s-on.png'), require('./img/s-off.png')]
        };

    }

    changeLight() {
        this.setState({
            switchBtn: this.state.switchBtn ? false : true
        });
    }

    backPage() {
        this.props.navigator.pop({
            animated: true,
            animationType: 'slide-horizontal'
        });
    }

    codeRead(data) {
        if (data.data) {
            this.backPage();
        }
        alert(data.data);
    }

    render() {
        const img = this.state.switchBtn ? this.state.swImg[0] : this.state.swImg[1];
        return (
            <View style={style.barcode}>
                <View style={style.header}>
                    <TouchableHighlight style={style.back} onPress={() => {
                        this.backPage()
                    }}>
                        <Image style={style.backImg} source={require('./img/hdtxt.png')}/>
                    </TouchableHighlight>
                    <Text style={style.hdtxt}>扫一扫</Text>
                </View>
                <View style={style.wrap}>
                    <View style={style.titleBox}>
                        <Text style={style.title}>对准二维码/条形码到框内即可扫描</Text>
                    </View>
                    <View style={style.box}>
                        <View style={style.boxSlide}></View>
                        <View style={style.boxCenter}>
                            <View style={[style.boxBj, style.boxBj1]}/>
                            <View style={[style.boxBj, style.boxBj2]}/>
                            <View style={[style.boxBj, style.boxBj3]}/>
                            <View style={[style.boxBj, style.boxBj4]}/>
                            <MoveImage />
                        </View>
                        <View style={style.boxSlide}></View>
                    </View>
                    <View style={style.switch}>
                        <TouchableHighlight style={style.simgBox} onPress={() => {
                            this.changeLight()
                        }}>
                            <Image source={img} style={style.simg}/>
                        </TouchableHighlight>
                        <Text style={style.stxt}>手电筒</Text>
                    </View>
                </View>
                <Camera
                    style={style.camera}
                    onBarCodeRead={(data, bounds) => {
                        this.codeRead(data, bounds)
                    }}
                    torchMode={this.state.switchBtn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
                />
            </View>
        );
    }


}
export default Barcode;