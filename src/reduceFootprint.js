import Globals from './globals';

const persTrans = Globals.personalTransactions;
const othersTrans = Globals.othersTransactions;
const branches = Globals.branchMaps;
const branchEmissions = Globals.branchEmissions;
const personalEmissions = Globals.personalEmissions;


const mapPersonalTransactionToBranch = () => {
  for (let i = 0; i < persTrans.length; i += 1) {
    const descripton = persTrans[i].descripton;
    Object.keys(branches).forEach((branch) => {
      for (let j = 0; j < branch.length; j += 1) {
        if (descripton.includes(branch[i])) {
          persTrans[i].branch = branch;
          persTrans[i].firm = branch[i];
          break;
        }
      }
    });
  }
};

const mapOthersTransactionToBranch = () => {
  for (let i = 0; i < othersTrans.length; i += 1) {
    const descripton = othersTrans[i].descripton;
    Object.keys(branches).forEach((branch) => {
      for (let j = 0; j < branch.length; j += 1) {
        if (descripton.includes(branch[i])) {
          othersTrans[i].branch = branch;
          othersTrans[i].firm = branch[i];
          break;
        }
      }
    });
  }
};

const getSugestionForGreenFootprint = () => {
  for (let i = 0; i < persTrans.length; i += 1) {
    const trans = persTrans[i].descripton;
    try {
      //personalEmissions.$(trans.branch).$(trans.branch) = branchEmissions.$(trans.branch).$(trans.branch);
    }
    catch (error) {
      console.log("error in emission retriving");
    }
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

export { mapPersonalTransactionToBranch, mapOthersTransactionToBranch, getSugestionForGreenFootprint };
