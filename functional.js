let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota", "San Andres"];

const urilify = (str) => {
  return str.toLowerCase().split(/\s+/).join("-");
}

const imperativeUrls = (elements) => {
  let urls = [];
  elements.forEach(element => {
   urls.push(urilify(element));
  })
  return urls;
}

// console.log(imperativeUrls(states));

const functionalUrls = (elements) => {
  return elements.map(element => urilify(element));
}

// console.log(functionalUrls(states));


const urilifyForm = (elements) => {
  return elements.map(element => `https://example.com/${urilify(element)}`)
}

// console.log(urilifyForm(states));

const imperativeSingles = (elements) => {
  let singles = [];
 elements.forEach(element => {
   if (element.split(/\s+/).length === 1){
    singles.push(element);
   };
 })
 return singles

}

// console.log(imperativeSingles(states));

const functionalSingles = (elements) => {
  return elements.filter(element => element.split(/\s+/).length === 1);
}

// console.log(functionalSingles(states));

const functionalDoubles = (elements) => {
  return elements.filter(element => element.split(/\s+/).length === 2);
}

// console.log(functionalDoubles(states));

const includesDakota = (elements) => {
  return elements.filter(element => element.split(/\s+/).includes("Dakota"));
}

// console.log(includesDakota(states));

const imperativeSum = (elements) => {
  let total = 0;
  elements.forEach(element =>{
    total += element;
  })
  return total;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(imperativeSum(numbers));

const functionalSum = (elements) => {
  return elements.reduce((total, n) => { return total += n })
}

// console.log(functionalSum(numbers));

const imperativeLengths = (elements) => {
  let lengths = {};
  elements.forEach(element => {
    lengths[element] = element.length;
  })
  return lengths;
}

// console.log(imperativeLengths(states));

const functionalLengths = (elements) => {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths; }, {})
}

console.log(functionalLengths(states));

const imperativeMultiplication = (elements) => {
  let total = 1;
  elements.forEach(n => {
    total *= n;
  })
  return total;
}
// console.log(imperativeMultiplication(numbers));

const functionalMultiplication = (elements) => {
  return elements.reduce((total, n) => { return total*= n; })
}

// console.log(functionalMultiplication(numbers));