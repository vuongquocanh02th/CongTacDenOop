class ElectricLamp{
    constructor(status){
        this.status = false; //Den dang tat
    }
    turnOn(){
        this.status = true;
        console.log('Den da duoc bat');
    }
    turnOff(){
        this.status = false;
        console.log('Den da duoc tat');
    }
}

class SwitchButton{
    constructor(lamp){
        this.lamp = lamp; //ket noi voi bong den
        this.status = false; //Cong tac mac dinh la tat
    }
    connectToLamp(ElectricLamp){
        this.lamp = ElectricLamp;
    }
    switchOn(){
        this.lamp.turnOn();
        return this.status = true;
    }
    switchOff(){
        this.lamp.turnOff();
        return this.status = false;
    }

}
let lamp = new ElectricLamp(false);
let switchCtr = new SwitchButton(lamp, false);

//Bat tat cong tac 10 lan
for(let i = 0; i < 10; i++) {
    console.log(switchCtr.switchOn());
    console.log(switchCtr.switchOff());
}