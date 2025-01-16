// Objects = key : value pairs in {}

const student = {
  name: 'Joe',
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
