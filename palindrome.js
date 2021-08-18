String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function blank(){
  return !!(this.match(/\s/mg) || this.length === 0);
} 

Array.prototype.last = function last() {
  return this.pop();
} 

function Phrase(content){
  this.content = content;
  this.processor = function processor(str){
    return str.toLowerCase();
  }
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  
  this.palindrome = function palindrome(){
     return this.processedContent() === (this.processedContent()).reverse();
  }
  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}

let greeting = new Phrase("Racecar");

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  this.processedContent = function processedContent() {
    return this.processor(this.translation);

  }
}


TranslatedPhrase.prototype = new Phrase();

 let frase = new TranslatedPhrase("recognize", "reconocer");

 