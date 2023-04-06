import {Employee} from "./ts";

class Manager {
   managers : Employee[] = [];
   constructor() {
   }
   display(){
       return this.managers
   }
   add(employee : Employee){
       this.managers.push(employee);
   }
   delete(index : number){
       this.managers.splice(index,1);
   }
}
let employee = new Employee("cao minh toan","nam","06/10/1997","shy0610@gmail.com","01234567");
let employee1 = new Employee("cao minh hieu","nam","04/10/1997","hieu0610@gmail.com","012345689");
let employee2 = new Employee("cao minh hieu sex","nu","24/10/1997","hieusex0610@gmail.com","012345989");
let manager = new Manager();
manager.add(employee)
manager.add(employee1)
manager.add(employee2)
console.log(manager.display())
manager.delete(0)
console.log(manager.display())







