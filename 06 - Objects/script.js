// Objects = key : value pairs in {}

const student = {
  studentName: 'Joe',
  passing: true,
  testScores: [82, 75, 98],
  testAverage: function () {
    let total = 0
    for (const score of this.testScores) {
      total += score
    }
    return total / this.testScores.length
  }
}

console.log(student.testScores[1], student.testAverage())
console.log(Object.keys(student), Object.values(student))

for (let key in student) {
  console.log(key, student[key])
}

const joe = Object.create(student)
console.log(joe)

const { studentName, passing } = student
console.log(studentName, passing)
