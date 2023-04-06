enum Speed {
    SLOW = 1,
    MEDIUM,
    FAST
}
class Fan {
    private speed : Speed;
    private on : boolean;
    private radius : number;
    private color : string;

    constructor() {
        this.speed = Speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }
    getStatus(fan){
        if (this.on)
            return console.log(`${Fan} is on`)
        else {
            return console.log(`${Fan} is off`)
        }
    }
    // getSpeed(){
    //     return this.speed
    // }
    // getOn(){
    //     return this.on
    // }
    // getRadius(){
    //     return this.radius
    // }
    // getColor(){
    //     return this.color
    // }
    setSpeed(speedF){
        this.speed = speedF;
    }
    setOn(OnF){
        this.on = OnF;
    }
    setRadius(RadiusF){
        this.radius = RadiusF;
    }
    setColor(ColorF){
        this.color = ColorF;
    }
}
let fan1 = new Fan;
let fan2 = new Fan;
fan1.setSpeed(Speed.FAST);
fan1.setRadius(10);
fan1.setColor('red');
console.log(fan1);
fan1.getStatus('fan1');
fan2.setSpeed(Speed.MEDIUM);
fan2.setRadius(5);
fan2.setColor('blue');
fan2.setOn(false);
console.log(fan2);
fan2.getStatus('fan2');

