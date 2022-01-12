//const person:{
//    name:string;
//    age:number;
//}
enum Role{'ADMIN',READ_ONLY=100,'AUTHOR'};
const person={
    name:'abcd',
    age:30,
    hobbies:['sports','cooking']
    //role:[2,'ADMIN'] this is tuple
    //role:Role.ADMIN

};
let favrouiteActivities:string[];//we can use any[] for mixed data type
favrouiteActivities=['dancing'];

console.log(person.name);
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

type alphanumeric = string | number;   //aliases type
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid

//union data type

interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type IUnionType = IStudent | IWorker;

let p: IUnionType = {
    id: 'ID3241',
    age: 21
};

// p = 3; // Type '3' is not assignable to type 'IUnionType'

p = {
    companyId: 'cid993'
};