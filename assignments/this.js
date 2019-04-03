/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding 



* 2. Implicit Binding



* 3. New Binding



* 4. Explicit Binding



* 
* write out a code example of each explanation above
*/

// Principle 1

let poohSays = 'helllooooooo';

function saySomething(text) {
    "use strict";
    console.log(this);
    return text;
}
saySomething(`${poohSays} hello`);

// code example for Window Binding

// Principle 2

const somethingFunny = {
    word1: "Forrest Gump",
    word2: " 1Forrest1 ",
    insult: "You should be a comedian god damn!",
    says: function () {
        return `What is ${this.word1}'s password? ${this.word2}`;
    },
    laughter: function() {
      return `Haha you're so funny man ${this.insult}`;
    }
}

console.log(somethingFunny.says());

// code example for Implicit Binding

// Principle 3
const useLater = somethingFunny.laughter.bind(somethingFunny);
console.log(useLater());

// code example for New Binding

// Principle 4

const person = {
  "feelsBadMan":"https://www.reddit.com/r/GTAorRussia/comments/b8eerj/me_when_i_try_to_play_like_a_good_citizen_for/"
}

function introduction(words1,words2,words3){
  return `${words1} ${words2}, ${words3} ${this.feelsBadMan}`;
}

const words = ["Me when Lambda switches from","HTML/CSS to Javascript","Here's a visual example:"];

console.log(introduction.call(person,...words))

// code example for Explicit Binding