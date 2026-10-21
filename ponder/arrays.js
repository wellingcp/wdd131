let courses = ["WDD131", "ITM220", "WDD231", "CSE212"]
//arrays start with index 0
console.log(courses[0]);
console.log(courses[4]); //undefined

let courseAndGPA = ["WDD131", 3.7, "ITM220", 4];

//javascript object
let coursesAndGPA = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignmets: [
            {
                assignmentName: "W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName: "WDD131",
        courseGPA: 4,
        professor: "Brother Warner"

    },
]
//Retrieve the course name for the second item in the array of objects and print to screen
console.log(coursesAndGPA[1].courseName)
console.log(coursesAndGPA[0].assignmets[0].assignmentName);





console.log(coursesAndGPA);
//access variables inside an object
console.log(courseAndGPA.courseName);

//looping through an array
for(let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA);
}

//looping through with a foreach loop
coursesAndGPA.forEach(item => {
    console.log(item.courseName);
    console.log(item.courseGPA);
});

let body = document.querySelector('body');

//build out HTML dynamically basded on array contents
coursesAndGPA.forEach(course => {
    let dynamicHTML = `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
    `;
    body.innerHTML += dynamicHTML;
});

// Convert letter grades to points
function convert(grade) {
    let points;

    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
            return;
    }

    return points;
}

console.log(convert('A'));
console.log(convert('B'));

// Words array
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// Students array
const students = [
    { last: 'Andrus', first: 'Aaron' },
    { last: 'Masa', first: 'Manny' },
    { last: 'Tanda', first: 'Tamanda' }
];

// Access object properties
console.log(students[0].first);

// Sort students by last name
students.sort((a, b) => a.last.localeCompare(b.last));

// Loop through students
students.forEach(student => {
    console.log(`${student.first} ${student.last}`);
});

// forEach()
words.forEach(word => console.log(word));

// map()
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);

// filter()
const longWords = words.filter(word => word.length > 5);
console.log(longWords);

// reduce()
const numbers = [125, 20, 5];
const result = numbers.reduce((total, num) => total - num);
console.log(result); // 100

// indexOf()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const index = fruits.indexOf("Apple");
console.log(index); // 2

// Template literals
const movie = {
    title: "Finding Nemo",
    genre: "Animation"
};

const stars = "5 stars";

const movieSummary = `
    <div class="movie-summary">
        <h2>${movie.title}</h2>
        <p>${movie.genre} - ${stars}</p>
    </div>
`;

body.innerHTML += movieSummary;