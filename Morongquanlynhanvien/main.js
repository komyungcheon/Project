"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_1 = require("./ts");
var Manager = /** @class */ (function () {
    function Manager() {
        this.managers = [];
    }
    Manager.prototype.display = function () {
        return this.managers;
    };
    Manager.prototype.add = function (employee) {
        this.managers.push(employee);
    };
    Manager.prototype.delete = function (index) {
        this.managers.splice(index, 1);
    };
    return Manager;
}());
var employee = new ts_1.Employee("cao minh toan", "nam", "06/10/1997", "shy0610@gmail.com", "01234567");
var employee1 = new ts_1.Employee("cao minh hieu", "nam", "04/10/1997", "hieu0610@gmail.com", "012345689");
var employee2 = new ts_1.Employee("cao minh hieu sex", "nu", "24/10/1997", "hieusex0610@gmail.com", "012345989");
var manager = new Manager();
manager.add(employee);
manager.add(employee1);
manager.add(employee2);
console.log(manager.display());
manager.delete(0);
console.log(manager.display());
