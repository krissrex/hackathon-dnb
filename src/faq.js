import Globals from './globals';

// Takes a string
const faqList = Globals.faqList;
const separators = [' ', '\\+', '-', '\\(', '\\)', '\\*', '/', ':', '\\?'];

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

const askFAQ = (inputString) => {
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
  return getAnswer(relations);
};


const faq = (ctx) => {
  ctx.body = askFAQ(ctx.query.string);
};


export { askFAQ, faq };

