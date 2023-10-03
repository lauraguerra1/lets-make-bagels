const formatSentence = (words) => {
  return words.reduce((sentence, word, i) => {
    let phrase = word; 
    if(i) i !== words.length - 1 ? phrase = `, ${word}` : phrase = ` and ${word}`
    sentence += phrase;
    return sentence; 
  }, '')
}

const countMeasurements = (measurements, remainder) => {
  return measurements.reduce((allWords, word, i) => {
    let wordToUse = word.length ? word : 'tsp'    
    const num = word === 'cup' ? .25 : word === '' ? remainder : 1
    allWords[wordToUse] ? allWords[wordToUse] += num : allWords[wordToUse] = num 
    return allWords
  }, {})
}

const roundUp = num => {
  return num >.75 ? 1 : num > .5 ? .75 : num > .25 ? .5 : num > .25 ? .5 : num > 0 ? .25 : num 
}

const makePhrases = (words) => {
  return Object.keys(words).map(word => `${words[word]} ${word}`)
}

const getMeasurements = (teaspoons) => {
  const rules = {
    'cup': 12,
    'tbsp': 3, 
    'tsp': 1
  }
  let measurements = [];
  let remainingTeaspoons = teaspoons;
  while (remainingTeaspoons >= 1) {
    Object.keys(rules).forEach(rule => {
      while(remainingTeaspoons/rules[rule] >= 1) {
        measurements.push(rule)
        remainingTeaspoons -= rules[rule]
      }
    })
  }
  if(remainingTeaspoons && remainingTeaspoons <= 1) measurements.push('')
  return {counts: measurements, remainder: roundUp(remainingTeaspoons)}
}

const convertTeaspoons = (teaspoons) => {
  const measurements = getMeasurements(teaspoons)
  const measurementCount = countMeasurements(measurements.counts, measurements.remainder);
  const phrases = makePhrases(measurementCount);
  return formatSentence(phrases)
}