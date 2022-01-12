//const person:{
//    name:string;
//    age:number;
//}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'abcd',
    age: 30,
    hobbies: ['sports', 'cooking']
    //role:[2,'ADMIN'] this is tuple
    //role:Role.ADMIN
};
var favrouiteActivities; //we can use any[] for mixed data type
favrouiteActivities = ['dancing'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var input;
input = 100; // valid
input = 'Hi'; // valid
var p = {
    id: 'ID3241',
    age: 21
};
// p = 3; // Type '3' is not assignable to type 'IUnionType'
p = {
    companyId: 'cid993'
};
