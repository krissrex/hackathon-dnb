import cheerio from 'cheerio';
import request from 'request';
import Globals from './globals';

const faqURLS = [
  'https://www.dnb.lt/en/top-frequently-asked-questions',
  'https://www.dnb.lt/en/private/frequently-asked-questions-2#which-dnb-services-can-i-use-at-the-internet-bank',
  'https://www.dnb.lt/en/business/frequently-asked-questions-faq-1',
  'https://www.dnb.lt/en/business/frequently-asked-questions',
  'https://www.dnb.lt/en/private/frequently-asked-questions-4',
];
const separators = [' ', '\n', '\t'];
let counter = 0;

function cleanUpStrings() {
  for (let j = 0; j < Globals.faqList.length; j += 1) {
    const answer = Globals.faqList[j].answer.split(new RegExp(separators.join('|'), 'g'));
    Globals.faqList[j].answer = answer.join(' ');
  }
}

function getFAQ() {
  for (let j = 0; j < faqURLS.length; j += 1) {
    request(faqURLS[j], (error, response, html) => {
      if (!error) {
        const $ = cheerio.load(html);
        const content = $('.l-content');
        for (let i = 0; i < content.children().length; i += 1) {
          counter += 1;
          const t = content.children().get(i);
          const a = $(t).find('div', '.accordion_title').get(0);
          const b = $(t).find('div', '.accordion__content-wrap').get(1);
          const question = $(a).text();
          const answer = $(b).text().trim();
          Globals.faqList.push({ id: counter, question, answer });
        }
      }
    });
  }
  cleanUpStrings();
}

export { getFAQ };
