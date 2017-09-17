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
        if (descripton.includes(branches[branch][j])) {
          persTrans[i].branch = branch;
          persTrans[i].firm = branches[branch][j];
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
        if (descripton.includes(branches[branch][j])) {
          othersTrans[i].branch = branch;
          othersTrans[i].firm = branches[branch][j];
          break;
        }
      }
    });
  }
};

const getSugestionForGreenFootprint = () => {
  for (let i = 0; i < persTrans.length; i += 1) {
    const trans = persTrans[i];
    try {
      personalEmissions[trans.branch][trans.firm] += 1;
    } catch (error) {
      console.log('error in emission retriving');
    }
  }

  let tempDiff = 0;
  let tempBranch = '';
  let toFirm = '';
  let fromFirm = '';
  let totalUse = 0;
  Object.keys(personalEmissions).forEach((branch) => {
    Object.keys(personalEmissions[branch]).forEach((firm) => {
      if (personalEmissions[branch][firm] > 0) {
        totalUse += branchEmissions[branch][firm];
        Object.keys(branchEmissions[branch]).forEach((compareFirm) => {
          if (branchEmissions[branch][firm] - branchEmissions[branch][compareFirm]
             > tempDiff) {
            tempDiff = branchEmissions[branch][firm] -
              branchEmissions[branch][compareFirm];
            tempBranch = branch;
            toFirm = compareFirm;
            fromFirm = firm;
          }
        });
      }
    });
  });
  return (
    {
      totalUse,
      savings: tempDiff,
      branch: tempBranch,
      from: fromFirm,
      to: toFirm,
    }
  );
};

export {
  mapPersonalTransactionToBranch,
  mapOthersTransactionToBranch,
  getSugestionForGreenFootprint,
};
