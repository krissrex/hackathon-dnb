
// Takes a string
const faq = [
  {
    id: 1,
    corealation: 0,
    question: 'Which DNB services can I use at the internet bank?',
    answer: 'By using the internet bank, you will be able to:​ Manage the account and view other information​; Perform transfers; view the current transactions and conclude new ones; submit applications and file requests; log in to other systems',
  },
  {
    id: 2,
    corealation: 0,
    question: 'What is a login code and where can I get it?',
    answer: 'A login code is an alphanumerical code assigned by DNB and used to recognize an internet bank user.  You can find the login code in the Annex to the Internet bank agreement (at the top of the Table, next to the name, last name, personal identity code).',
  },
  {
    id: 3,
    corealation: 0,
    question: 'What is a PIN code and where can I find it?',
    answer: 'When you signed the Internet bank agreement you received a plastic PIN code card with numbered codes. You will need the PIN code card every time you log in to the internet bank. The system will request you to enter a specific code from the card. That is one more method to ensure the security of your funds.',
  },
];
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
  for (let i = 0; i < faq.length; i += 1) {
    if (id === faq[i].id) {
      answer = faq[i].answer;
    }
  }
  return (answer);
};

const askFAQ = (inputString) => {
  const tokens = inputString.split(new RegExp(separators.join('|'), 'g'));

  const relations = faq.map((object) => {
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

export {askFAQ};

