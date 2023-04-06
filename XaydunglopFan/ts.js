var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = Speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }
    Fan.prototype.getStatus = function (fan) {
        if (this.on)
            return console.log("".concat(Fan, " is on"));
        else {
            return console.log("".concat(Fan, " is off"));
        }
    };
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
    Fan.prototype.setSpeed = function (speedF) {
        this.speed = speedF;
    };
    Fan.prototype.setOn = function (OnF) {
        this.on = OnF;
    };
    Fan.prototype.setRadius = function (RadiusF) {
        this.radius = RadiusF;
    };
    Fan.prototype.setColor = function (ColorF) {
        this.color = ColorF;
    };
    return Fan;
}());
var fan1 = new Fan;
var fan2 = new Fan;
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
