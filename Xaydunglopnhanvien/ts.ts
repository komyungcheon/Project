class Staff {
     public name : string ;
    public email : string ;
    public age : number ;
    constructor(name : string,
                email :string,
                age : number) {
        this.name =  name;
        this.email = email;
        this.age = age;
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getAge(){
        return this.age
    }
    setName(name : string ):void {
        this.name = name;
    }
    setEmail(email :string): void{
        this.email = email;
    }
    setAge(age : number):void{
        this.age = age;
    }
}
let staff = new Staff('Staff 1','shy06101997@gmail.com',20);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff 2');
let currentNameStaff = staff.getName();
console.log(currentNameStaff);
