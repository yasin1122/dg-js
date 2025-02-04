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

let { studentName, passing, testScores } = student
testScores = [...testScores, 100]
const [score1, score2, score3, score4] = testScores
console.log(studentName, passing, score1, score2, score3, score4)

// Deconstructing and Spread Operator

const scores = [82, 75, [55, 60]]
const [first, second, [third, fourth]] = scores

console.log(first, second, third, fourth)
