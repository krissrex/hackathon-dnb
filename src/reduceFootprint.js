import Globals from './globals';

const persTrans = Globals.personalTransactions;
const othersTrans = Globals.othersTransactions;
const brances = Globals.branchMaps;


const createMapping = () => {
  for (let i = 0; i < persTrans.length; i += 1) {
    const descripton = persTrans[i].descripton;
    Object.keys(branches).forEach(function(branch) {
      for (let j = 0; j < branch.length; j += 1) {
        if (descripton.includes(branch[i])){
          persTrans[i].branch = branch;
          break;
        }
      }
};

const getSugestionForGreenFootprint = () => {
  for (let i = 0; i < persTrans.length; i += 1) {
    const a = persTrans[i].descripton;

  }
  return (
    {
      totaltForbruk: 800000,
      totaltSpart: 200000,
      savings: [
        {
          from: 'coop',
          to: 'rema1000',
          totalSaved: 100000,
        },
        {
          from: 'Lefdal',
          to: 'Power',
          totalSaved: 60000,
        },
        {
          from: 'BurgerKing',
          to: 'McDonalds',
          totalSaved: 40000,
        },
      ],
      data: [
        {
          companyFrom: {
            name: 'coop',
            amount: 700000,
            users: 500,
            frequency: 0.7,
          },
          companyTo: {
            name: 'rema1000',
            amount: 100000,
            users: 500,
            frequency: 0.7,
          },
          diff: 1000,
        },
        {
          companyFrom: {
            name: 'coop',
            amount: 700000,
            users: 500,
            frequency: 0.7,
          },
          companyTo: {
            name: 'rema1000',
            amount: 100000,
            users: 500,
            frequency: 0.7,
          },
          diff: 1000,
        },
        {
          companyFrom: {
            name: 'coop',
            amount: 700000,
            users: 500,
            frequency: 0.7,
          },
          companyTo: {
            name: 'rema1000',
            amount: 100000,
            users: 500,
            frequency: 0.7,
          },
          diff: 1000,
        },
      ],
    }
  );
};

export { getSugestionForGreenFootprint };
