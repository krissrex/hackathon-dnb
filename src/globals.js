class Globals {
  constructor() {
    this.faqList = [];
    this.personalTransactions = [
      {
        transactionID:6817379073,
        transactionType: 4,
        timeStamp: '2017-01-01, 07:29',
        amount: '-828.98',
        descripton: '* 1812 18.06 Nok 828,976985466041 Vipps by DNB Kurs:1.0000',
        branch: '',
        firm: '',
      },
      {
        transactionID:6824063631,
        transactionType:5,
        timeStamp:'2017-01-06, 14:56',
        amount:'-888.52',
        descripton:'Varekjøp Ruter Jernbanetorget Oslo Dato 06.01 kl. 14.56',
        branch: '',
        firm: '',
      },
      {
        'transactionID':6980843253,
        'transactionType':4,
        'timeStamp':'2017-01-02, 22:54','amount':'-1533.83','descripton':'VISA 3486042 Nok 1533,83 Lekmer.no',
        branch: '',
        firm: '',
      },
      {
        'transactionID':6803298832,'transactionType':5,'timeStamp':'2017-01-02, 14:47','amount':'-1950.09','descripton':'Varekjøp NSB Jernbanetorget Oslo Dato 02.01 kl. 14.47',
        branch: '',
        firm: '',
      },
      {
        'transactionID':6803298832,'transactionType':5,'timeStamp':'2017-01-02, 14:47','amount':'-1950.09','descripton':'Varekjøp NSB Jernbanetorget Oslo Dato 02.01 kl. 14.47',
        branch: '',
        firm: '',
      },
      {
        'transactionID':6803298832,'transactionType':5,'timeStamp':'2017-01-02, 14:47','amount':'-1950.09','descripton':'Varekjøp NSB Jernbanetorget Oslo Dato 02.01 kl. 14.47',
        branch: '',
        firm: '',
      },
    ];
    this.othersTransactions = [
      {
        'transactionID':6817379073,
        'transactionType': 4,
        'timeStamp': '2017-01-01, 07:29',
        'amount': '-828.98',
        'descripton':'* 1812 18.06 Nok 828,976985466041 Vipps by DNB Kurs:1.0000',
        branch: '',
        firm: '',
      },
      {
        'transactionID':6824063631,
        'transactionType':5,
        'timeStamp':'2017-01-06, 14:56',
        'amount':'-888.52',
        'descripton':'Varekjøp Ruter Jernbanetorget Oslo Dato 06.01 kl. 14.56',
        branch: '',
        firm: '',
      },
      {
        'transactionID':6980843253,
        'transactionType':4,
        'timeStamp':'2017-01-02, 22:54','amount':'-1533.83','descripton':'VISA 3486042 Nok 1533,83 Lekmer.no',
        branch: '',
        firm: '',
      },
      {
        'transactionID':6803298832,'transactionType':5,'timeStamp':'2017-01-02, 14:47','amount':'-1950.09','descripton':'Varekjøp NSB Jernbanetorget Oslo Dato 02.01 kl. 14.47',
        branch: '',
        firm: '',
      },
    ];
    this.branchMaps = {
      foodStore: ['Rema1000', 'Coop', 'Kiwi', 'Joker'],
      fastFood: ['McDonalds', 'BurgerKing'],
      transportation: ['Ruter', 'NSB'],
      electronics: ['Elkjøp', 'Lefdal', 'Power'],
      restaurants: ['TGIFriday', 'BambusSushi', 'KulturHuset', 'EspressoHouse', 'joeandthejuice'],
      div: ['Kicks', 'Ikea', 'Vipps', 'Lekmer.no'],
    };
    this.branchEmissions = {
      foodStore: {
        Rema1000: 100,
        Coop: 200,
        Kiwi: 50,
        Joker: 80,
      },
      fastFood: {
        McDonalds: 800,
        BurgerKing: 600,
      },
      transportation: {
        Ruter: 1200,
        NSB: 1500,
      },
      electronics: {
        Elkjøp: 750,
        Lefdal: 600,
        Power: 900,
      },
      restaurants: {
        TGIFriday: 500,
        BambusSushi: 600,
        KulturHuset: 350,
        EspressoHouse: 200,
        joeandthejuice: 150,
      },
      div: {
        Kicks: 400,
        Ikea: 1000,
        Vipps: 30,
      },
    };
    this.personalEmissions = {
      foodStore: {
        Rema1000: 0,
        Coop: 0,
        Kiwi: 0,
        Joker: 0,
      },
      fastFood: {
        McDonalds: 0,
        BurgerKing: 0,
      },
      transportation: {
        Ruter: 0,
        NSB: 0,
      },
      electronics: {
        Elkjøp: 0,
        Lefdal: 0,
        Power: 0,
      },
      restaurants: {
        TGIFriday: 0,
        BambusSushi: 0,
        KulturHuset: 0,
        EspressoHouse: 0,
        joeandthejuice: 0,
      },
      div: {
        Kicks: 0,
        Ikea: 0,
        Vipps: 0,
      },
    };
  }
}

export default (new Globals);
