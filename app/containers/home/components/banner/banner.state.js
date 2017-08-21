import { observable } from 'mobx';

class BannerState {
    @observable container = {
        dotted: 0
    };

    changeDotted(index){
        this.container.dotted = index;
    }
}

export default new BannerState();