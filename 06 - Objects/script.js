// Objects = key : value pairs in {}
function smash(words) {
  if (words.length === 0) {
    return ''
  }
  if (words.length === 1) {
    return words[0]
  }
  let sentence = words[0]
  for (let i = 1; i < words.length; i++) {
    sentence += ' ' + words[i]
  }
  return sentence
}

words = ['hello', 'world', 'this', 'is', 'great']
console.log(smash(words))
