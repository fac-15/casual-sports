const getAllData = require("../getAllData");
const dbBuild = require("../../db/db_build.js");

const events = [
  {
    genders: 3,
    id: 1,
    location: "london",
    name: "fun at the park",
    open: true,
    sport: "Football",
    users_id: 1
  },
  {
    genders: 4,
    id: 2,
    location: "Kizhinga",
    name: "Zontrax",
    open: false,
    sport: "football",
    users_id: 72
  },
  {
    genders: 4,
    id: 3,
    location: "Trzcinica",
    name: "Cardguard",
    open: true,
    sport: "football",
    users_id: 93
  },
  {
    genders: 4,
    id: 4,
    location: "Gandapura",
    name: "Span",
    open: true,
    sport: "football",
    users_id: 88
  },
  {
    genders: 1,
    id: 5,
    location: "Gangkou",
    name: "Wrapsafe",
    open: true,
    sport: "rugby",
    users_id: 76
  },
  {
    genders: 2,
    id: 6,
    location: "Niort",
    name: "Overhold",
    open: false,
    sport: "water polo",
    users_id: 95
  },
  {
    genders: 3,
    id: 7,
    location: "Guangshun",
    name: "Namfix",
    open: false,
    sport: "rugby",
    users_id: 44
  },
  {
    genders: 2,
    id: 8,
    location: "Dagar",
    name: "Stim",
    open: false,
    sport: "football",
    users_id: 35
  },
  {
    genders: 4,
    id: 9,
    location: "Chechen-Aul",
    name: "Vagram",
    open: true,
    sport: "rugby",
    users_id: 3
  },
  {
    genders: 3,
    id: 10,
    location: "Aygestan",
    name: "Bitchip",
    open: false,
    sport: "rugby",
    users_id: 58
  },
  {
    genders: 3,
    id: 11,
    location: "Spasskoye-Lutovinovo",
    name: "Biodex",
    open: false,
    sport: "football",
    users_id: 56
  },
  {
    genders: 3,
    id: 12,
    location: "Rujewa",
    name: "Keylex",
    open: true,
    sport: "rugby",
    users_id: 82
  },
  {
    genders: 2,
    id: 13,
    location: "Andilamena",
    name: "Matsoft",
    open: true,
    sport: "rugby",
    users_id: 43
  },
  {
    genders: 1,
    id: 14,
    location: "Pecoro",
    name: "Rantk",
    open: true,
    sport: "rugby",
    users_id: 38
  },
  {
    genders: 1,
    id: 15,
    location: "Lewoluo",
    name: "Tin",
    open: true,
    sport: "rugby",
    users_id: 17
  },
  {
    genders: 4,
    id: 16,
    location: "Piancheng",
    name: "Zaam-Dox",
    open: true,
    sport: "football",
    users_id: 24
  },
  {
    genders: 1,
    id: 17,
    location: "Krasica",
    name: "Otcom",
    open: false,
    sport: "water polo",
    users_id: 97
  },
  {
    genders: 2,
    id: 18,
    location: "Zhaobei",
    name: "Lotlux",
    open: true,
    sport: "water polo",
    users_id: 10
  },
  {
    genders: 1,
    id: 19,
    location: "Teminabuan",
    name: "Gembucket",
    open: true,
    sport: "football",
    users_id: 54
  },
  {
    genders: 1,
    id: 20,
    location: "Guarapuava",
    name: "Hatity",
    open: true,
    sport: "football",
    users_id: 90
  },
  {
    genders: 1,
    id: 21,
    location: "Xinbu",
    name: "Bamity",
    open: false,
    sport: "rugby",
    users_id: 32
  },
  {
    genders: 2,
    id: 22,
    location: "Dushu",
    name: "Fixflex",
    open: false,
    sport: "football",
    users_id: 82
  },
  {
    genders: 4,
    id: 23,
    location: "Woloara",
    name: "Subin",
    open: true,
    sport: "football",
    users_id: 56
  },
  {
    genders: 2,
    id: 24,
    location: "Nikol’sk",
    name: "Pannier",
    open: false,
    sport: "rugby",
    users_id: 11
  },
  {
    genders: 4,
    id: 25,
    location: "Bom Jesus dos Perdões",
    name: "Fix San",
    open: true,
    sport: "rugby",
    users_id: 65
  },
  {
    genders: 4,
    id: 26,
    location: "Baoshan",
    name: "Alphazap",
    open: false,
    sport: "football",
    users_id: 71
  },
  {
    genders: 1,
    id: 27,
    location: "Yaguachi Nuevo",
    name: "Opela",
    open: false,
    sport: "football",
    users_id: 84
  },
  {
    genders: 1,
    id: 28,
    location: "Baihe",
    name: "Regrant",
    open: true,
    sport: "football",
    users_id: 5
  },
  {
    genders: 4,
    id: 29,
    location: "Lékoni",
    name: "Lotlux",
    open: false,
    sport: "football",
    users_id: 87
  },
  {
    genders: 3,
    id: 30,
    location: "Årjäng",
    name: "Tempsoft",
    open: true,
    sport: "rugby",
    users_id: 79
  },
  {
    genders: 3,
    id: 31,
    location: "Souq Larb’a al Gharb",
    name: "Tempsoft",
    open: false,
    sport: "rugby",
    users_id: 84
  }
];

const teams = [
  {
    ages: 1,
    genders: 3,
    id: 1,
    location: "london",
    name: "fac",
    size: 1,
    skill: 3,
    solo: true,
    sport: "football",
    user_id: 1
  },
  {
    ages: 2,
    genders: 1,
    id: 2,
    location: "Darvi",
    name: "Otcom",
    size: 3,
    skill: 1,
    solo: false,
    sport: "cricket",
    user_id: 3
  },
  {
    ages: 4,
    genders: 3,
    id: 3,
    location: "Qiaosi",
    name: "Sub-Ex",
    size: 8,
    skill: 3,
    solo: true,
    sport: "chess",
    user_id: 7
  },
  {
    ages: 3,
    genders: 2,
    id: 4,
    location: "Ballybofey",
    name: "Opela",
    size: 18,
    skill: 2,
    solo: false,
    sport: "football",
    user_id: 5
  },
  {
    ages: 4,
    genders: 1,
    id: 5,
    location: "Nanjie",
    name: "Quo Lux",
    size: 12,
    skill: 3,
    solo: true,
    sport: "volleyball",
    user_id: 2
  },
  {
    ages: 3,
    genders: 2,
    id: 6,
    location: "Cibitung",
    name: "Fintone",
    size: 3,
    skill: 2,
    solo: false,
    sport: "volleyball",
    user_id: 3
  },
  {
    ages: 2,
    genders: 4,
    id: 7,
    location: "Tomislavgrad",
    name: "Ventosanzap",
    size: 5,
    skill: 1,
    solo: true,
    sport: "volleyball",
    user_id: 8
  },
  {
    ages: 4,
    genders: 1,
    id: 8,
    location: "Songying",
    name: "Flowdesk",
    size: 11,
    skill: 3,
    solo: false,
    sport: "football",
    user_id: 8
  },
  {
    ages: 3,
    genders: 1,
    id: 9,
    location: "Kisasa",
    name: "Biodex",
    size: 3,
    skill: 2,
    solo: true,
    sport: "checkers",
    user_id: 6
  },
  {
    ages: 4,
    genders: 2,
    id: 10,
    location: "Non Sila",
    name: "Zamit",
    size: 17,
    skill: 2,
    solo: false,
    sport: "water polo",
    user_id: 7
  },
  {
    ages: 3,
    genders: 2,
    id: 11,
    location: "Shemursha",
    name: "Home Ing",
    size: 6,
    skill: 3,
    solo: false,
    sport: "water polo",
    user_id: 9
  },
  {
    ages: 4,
    genders: 2,
    id: 12,
    location: "Shouchun",
    name: "Bigtax",
    size: 22,
    skill: 3,
    solo: false,
    sport: "water polo",
    user_id: 1
  },
  {
    ages: 2,
    genders: 1,
    id: 13,
    location: "Pābna",
    name: "Duobam",
    size: 22,
    skill: 1,
    solo: true,
    sport: "water polo",
    user_id: 2
  },
  {
    ages: 2,
    genders: 1,
    id: 14,
    location: "Xingang",
    name: "Rank",
    size: 2,
    skill: 1,
    solo: true,
    sport: "checkers",
    user_id: 7
  },
  {
    ages: 2,
    genders: 3,
    id: 15,
    location: "Kralice na Hané",
    name: "Vagram",
    size: 5,
    skill: 1,
    solo: false,
    sport: "rugby",
    user_id: 6
  },
  {
    ages: 1,
    genders: 1,
    id: 16,
    location: "Jiupu",
    name: "Rank",
    size: 3,
    skill: 2,
    solo: true,
    sport: "rugby",
    user_id: 10
  },
  {
    ages: 4,
    genders: 4,
    id: 17,
    location: "Guacarí",
    name: "Bytecard",
    size: 13,
    skill: 3,
    solo: true,
    sport: "rugby",
    user_id: 6
  },
  {
    ages: 1,
    genders: 4,
    id: 18,
    location: "Brignoles",
    name: "Konklux",
    size: 19,
    skill: 3,
    solo: true,
    sport: "checkers",
    user_id: 3
  },
  {
    ages: 1,
    genders: 4,
    id: 19,
    location: "Nkove",
    name: "Kanlam",
    size: 11,
    skill: 3,
    solo: true,
    sport: "rugby",
    user_id: 1
  },
  {
    ages: 2,
    genders: 2,
    id: 20,
    location: "Changning",
    name: "Subin",
    size: 17,
    skill: 2,
    solo: false,
    sport: "football",
    user_id: 3
  },
  {
    ages: 1,
    genders: 1,
    id: 21,
    location: "Shekou",
    name: "Zoolab",
    size: 9,
    skill: 3,
    solo: true,
    sport: "checkers",
    user_id: 9
  },
  {
    ages: 3,
    genders: 4,
    id: 22,
    location: "Carnot",
    name: "Domainer",
    size: 10,
    skill: 2,
    solo: true,
    sport: "football",
    user_id: 8
  },
  {
    ages: 4,
    genders: 3,
    id: 23,
    location: "Novokuybyshevsk",
    name: "It",
    size: 15,
    skill: 1,
    solo: false,
    sport: "football",
    user_id: 2
  },
  {
    ages: 2,
    genders: 2,
    id: 24,
    location: "Aix-en-Provence",
    name: "Stim",
    size: 6,
    skill: 1,
    solo: false,
    sport: "football",
    user_id: 3
  },
  {
    ages: 2,
    genders: 1,
    id: 25,
    location: "Carbajales",
    name: "Home Ing",
    size: 5,
    skill: 1,
    solo: true,
    sport: "football",
    user_id: 10
  },
  {
    ages: 1,
    genders: 2,
    id: 26,
    location: "Nginjen",
    name: "Bytecard",
    size: 2,
    skill: 2,
    solo: false,
    sport: "volleyball",
    user_id: 4
  },
  {
    ages: 4,
    genders: 4,
    id: 27,
    location: "Cikaung",
    name: "Transcof",
    size: 10,
    skill: 1,
    solo: true,
    sport: "football",
    user_id: 3
  },
  {
    ages: 3,
    genders: 1,
    id: 28,
    location: "Limanancong",
    name: "Quo Lux",
    size: 3,
    skill: 2,
    solo: false,
    sport: "football",
    user_id: 6
  },
  {
    ages: 1,
    genders: 1,
    id: 29,
    location: "Tianjiazhai",
    name: "Redhold",
    size: 1,
    skill: 1,
    solo: false,
    sport: "football",
    user_id: 1
  },
  {
    ages: 2,
    genders: 2,
    id: 30,
    location: "Al ‘Awjah",
    name: "Stringtough",
    size: 12,
    skill: 2,
    solo: true,
    sport: "football",
    user_id: 10
  },
  {
    ages: 3,
    genders: 1,
    id: 31,
    location: "Sapareva Banya",
    name: "Flexidy",
    size: 21,
    skill: 2,
    solo: true,
    sport: "checkers",
    user_id: 4
  }
];

test("the function returns all of the event data", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getAllData.getTableData("events")).resolves.toEqual(events);
  });
});

test("the function fails with an error", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions();
    const msg = "OMG EXPLOSIONS";
    return getAllData
      .getTableData(new Error())
      .catch(Error => expect().rejects.toThrow(msg));
  });
});

test("the function returns all of the team data", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getAllData.getTableData("teams")).resolves.toEqual(teams);
  });
});

test("the function fails with an error", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions();
    const msg = "OMG EXPLOSIONS";
    return getAllData
      .getTableData(new Error())
      .catch(Error => expect().rejects.toThrow(msg));
  });
});
