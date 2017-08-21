import { observable } from 'mobx';
import { Platform } from 'react-native';

class HomeState {
    @observable container = {
        opacity: 0.5,
        bgColor:{
            backgroundColor:'rgba(255,132,0,0)'
        }
    };

    changeOpacity(e){
        //console.log(e.nativeEvent.contentOffset.y)
        const y = e.nativeEvent.contentOffset.y;
        this.container.opacity = Math.abs(y)/(240-(Platform.OS==='ios'?65:45))||0;
        this.container.bgColor = {
            backgroundColor:'rgba(255,132,0,'+this.container.opacity+')'
        };
    }
}

export default new HomeState();