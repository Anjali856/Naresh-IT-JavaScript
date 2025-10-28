const students = [
  { name: "Aman", marks: [80, 75, 90] },
  { name: "Ravi", marks: [60, 65, 70] },
  { name: "Priya", marks: [90, 95, 92] }
];

function calculateAverage(students) {
  return students.map(student => {
    const total = student.marks.reduce((sum, mark) => sum + mark, 0);
    const average = (total / student.marks.length).toFixed(2); // 2 decimal places
    return { name: student.name, average: parseFloat(average) };
  });
}
e:
console.log(calculateAverage(students));
