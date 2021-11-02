  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);


// Using map()
const multByTwo = function (nums) {
  return nums * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map() - 
// above function is moved inside the parentheses. Notice it  doesn’t need to be named. The map() method expects  
// a function, so we can pass one in with no name or  anything - it can be totally anonymous.
const simplified = nums.map(function (nums) {return nums * 2});
console.log(simplified);


// above Simplified further with map() + arrow function
const arrow = nums.map(nums => nums * 2);
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);
