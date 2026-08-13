// const tinderUser = new Object()  //singleton
const tinderUser = {};

tinderUser.name = "mudit";
tinderUser.email = "mudu@gmail.com";
tinderUser.age = 23;
tinderUser.loggedin = true;

// console.log(tinderUser)

const school = {
    name: "APEX School",
    class: {
        tenth: {
            section: {
                classname: "apex-10th",
                classsection: "A",
                classTeacher: "Komal Garg",
            },
        },
    },
};

// console.log(school.class.tenth.section.classTeacher)

// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "c", 4: "d" }
// const obj3 = { 5: "e", 6: "f" }
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const target = { a: 1, b: 2 };
const source = { b: 7, c: 9 };
const final = Object.assign(source, target);
// console.log(final)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name')) //is it present or not

//values comes from DB
const users = [
    {
        id: 1,
        username: "x",
    },
    {
        id: 2,
        username: "y",
    },
    {
        id: 3,
        username: "z",
    },
];

// console.log(users[0].username)

const course = {
    coursename: "js in hindi",
    courseprice: "999",
    courseinstructor: "Hitesh",
};

// console.log(course.courseinstructor)
const { courseinstructor: instructor } = course;
// console.log(courseinstructor)
console.log(instructor);

// {
//     "name": "hitesh",
//     "course": "js in hindi"
//     "price": "999",
// }

[ 
    {},
    {},
    {}
]
