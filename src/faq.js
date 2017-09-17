import { findBestMatch } from 'string-similarity';
import Globals from './globals';
// Takes a string
const faqList = Globals.faqList;
// const separators = [' ', '\\+', '-', '\\(', '\\)', '\\*', '/', ':', '\\?'];

/*
const getAnswer = (relations) => {
  let maxValue = -1;
  let id = -1;
  for (let i = 0; i < relations.length; i += 1) {
    if (relations[i].corealation > maxValue) {
      maxValue = relations[i].corealation;
      id = relations[i].id;
    }
  }
  let answer = 'sorry, but i cant answer that for you';
  for (let i = 0; i < faqList.length; i += 1) {
    if (id === faqList[i].id) {
      answer = faqList[i].answer;
    }
  }
  return (answer);
};
*/
const askFAQ = (inputString) => {
  const matchStrings = faqList.map(a => a.question);
  if (matchStrings.length === 0) {
    return 'Sorry, this is to early for me to answer questions. Let me have my coffee first!';
  }
  const ratings = findBestMatch(inputString, matchStrings).ratings;
  ratings.sort((a, b) =>
    a.rating - b.rating,
  );
  const match = ratings[ratings.length - 1];
  const result = faqList.find(x => x.question === match.target).answer;

  /*
  const tokens = inputString.split(new RegExp(separators.join('|'), 'g'));

  const relations = faqList.map((object) => {
    let counter = 0;
    for (let i = 0; i < tokens.length; i += 1) {
      const questionWords = object.question.split(new RegExp(separators.join('|'), 'g'));
      for (let j = 0; j < questionWords.length; j += 1) {
        if (questionWords[j] === tokens[i]) {
          counter += 1;
        }
      }
    }
    return { id: object.id, corealation: counter };
  });
*/

  return result;
};


const faq = (ctx) => {
  const query = ('undefined' === typeof ctx.query.string) ? '' : ctx.query.string;
  ctx.body = askFAQ(query);
};


export { askFAQ, faq };

