import Globals from './globals';

const persTrans = Globals.personalTransactions;
const othersTrans = Globals.othersTransactions;
const branches = Globals.branchMaps;
const branchEmissions = Globals.branchEmissions;
const personalEmissions = Globals.personalEmissions;


const mapPersonalTransactionToBranch = () => {
  for (let i = 0; i < persTrans.length; i += 1) {
    const description = persTrans[i].description;
    Object.keys(branches).forEach((branch) => {
      for (let j = 0; j < branch.length; j += 1) {
        if (description && description.includes(branches[branch][j])) {
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
    const description = othersTrans[i].description;
    Object.keys(branches).forEach((branch) => {
      for (let j = 0; j < branch.length; j += 1) {
        if (description && description.includes(branches[branch][j])) {
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
      //console.log('error in emission retriving');
    }
  }
  const temporaries = [
    { Diff: 0, Branch: '', fromFirm: '', toFirm: '', fromEnergyLevel: '', toEnergyLevel: '' },
    { Diff: 0, Branch: '', fromFirm: '', toFirm: '', fromEnergyLevel: '', toEnergyLevel: '' },
    { Diff: 0, Branch: '', fromFirm: '', toFirm: '', fromEnergyLevel: '', toEnergyLevel: '' }];
  let lowest = 0;
  let totalUse = 0;
  Object.keys(personalEmissions).forEach((branch) => {
    Object.keys(personalEmissions[branch]).forEach((firm) => {
      if (personalEmissions[branch][firm] > 0 && branch !== 'div') {
        totalUse += branchEmissions[branch][firm];
        Object.keys(branchEmissions[branch]).forEach((compareFirm) => {
          if (branchEmissions[branch][firm] - branchEmissions[branch][compareFirm]
             > lowest) {
            temporaries[0].Diff = branchEmissions[branch][firm] -
              branchEmissions[branch][compareFirm];
            temporaries[0].Branch = branch;
            temporaries[0].toFirm = compareFirm;
            temporaries[0].fromFirm = firm;
            temporaries[0].toEnergyLevel = branchEmissions[branch][compareFirm];
            temporaries[0].fromEnergyLevel = branchEmissions[branch][firm];
            temporaries.sort((a, b) =>
              a.Diff - b.Diff,
            );
            lowest = temporaries[0].Diff;
          }
        });
      }
    });
  });
  let totalSavings = 0;
  for (let j = 0; j < temporaries.length; j += 1) {
    totalSavings += temporaries[j].Diff;
  }
  return (
    {
      totalUse,
      totalSavings,
      data: temporaries,
    }
  );
};

export {
  mapPersonalTransactionToBranch,
  mapOthersTransactionToBranch,
  getSugestionForGreenFootprint,
};
