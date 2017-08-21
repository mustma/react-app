import { observable } from 'mobx';

class OrderState {
    @observable container = {
        setpIndex:0,// 计算选中对index值
    };

    setStepIndex(num) {
        this.container.setpIndex = num;
    }

}

export default new OrderState();