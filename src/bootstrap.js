console.warn('BOOTSTRAPING!!!')

const placeholder = [
  {
    "_id": "5869eb4675ad1ee93cb86fba",
    "index": 0,
    "guid": "7de794e1-4732-4a3a-8fe4-69fc2c6d12f9",
    "isActive": false,
    "balance": "$2,570.96",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Sally Donovan",
    "gender": "female",
    "company": "ENAUT",
    "email": "sallydonovan@enaut.com",
    "phone": "+1 (820) 520-2467",
    "address": "821 Commerce Street, Bagtown, Marshall Islands, 2325",
    "about": "Lorem anim ut nulla esse Lorem ex excepteur culpa eiusmod occaecat. Ullamco ullamco in esse velit adipisicing anim pariatur eu pariatur laboris cupidatat amet. Reprehenderit excepteur culpa sunt aliqua ipsum aliqua ex aliquip labore mollit. Consequat consectetur cupidatat qui sit nisi commodo consequat. Fugiat culpa velit aliquip deserunt amet aute incididunt. Tempor et esse ipsum aute nulla dolore veniam cupidatat ullamco magna. Aliquip culpa commodo dolore irure ex qui nulla exercitation Lorem ad qui nisi tempor fugiat.\r\n",
    "registered": "2014-09-13T10:53:46 -08:00",
    "latitude": -69.166756,
    "longitude": 12.858629,
    "tags": [
      "non",
      "nisi",
      "consectetur",
      "consequat",
      "eu",
      "magna",
      "quis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Addie Robbins"
      },
      {
        "id": 1,
        "name": "Cohen Knight"
      },
      {
        "id": 2,
        "name": "Alma Schwartz"
      }
    ],
    "greeting": "Hello, Sally Donovan! You have 4 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5869eb46f5e868eb23fa242c",
    "index": 1,
    "guid": "2ddb5637-5a52-49ea-8879-e5a033f22936",
    "isActive": true,
    "balance": "$3,749.29",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "green",
    "name": "Gabriela Garner",
    "gender": "female",
    "company": "XPLOR",
    "email": "gabrielagarner@xplor.com",
    "phone": "+1 (814) 491-3342",
    "address": "383 Ludlam Place, Bowie, Pennsylvania, 2978",
    "about": "Ullamco irure occaecat cillum fugiat minim dolore do tempor quis do amet anim aute ea. Ea anim aliqua dolor fugiat excepteur laboris officia. Commodo aute ipsum et proident duis aliquip adipisicing culpa laboris minim cupidatat.\r\n",
    "registered": "2014-05-14T12:53:25 -08:00",
    "latitude": 61.223817,
    "longitude": 178.848573,
    "tags": [
      "mollit",
      "cillum",
      "id",
      "eu",
      "consequat",
      "irure",
      "Lorem"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Iris Kline"
      },
      {
        "id": 1,
        "name": "Johnnie Morris"
      },
      {
        "id": 2,
        "name": "Helena Caldwell"
      }
    ],
    "greeting": "Hello, Gabriela Garner! You have 2 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5869eb46c32e325072fd5da3",
    "index": 2,
    "guid": "c4fc72f1-2ee8-436c-bcfc-516ad25ad4ae",
    "isActive": true,
    "balance": "$1,985.91",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": "French Herrera",
    "gender": "male",
    "company": "BOILCAT",
    "email": "frenchherrera@boilcat.com",
    "phone": "+1 (946) 533-2705",
    "address": "270 Bridgewater Street, Cetronia, Maryland, 8631",
    "about": "Ipsum minim consequat reprehenderit nisi nisi ipsum mollit dolor reprehenderit cupidatat qui in. Aute ad duis sunt voluptate est aliquip commodo. Amet laboris non ad ad enim commodo fugiat deserunt est. Amet pariatur adipisicing occaecat occaecat enim irure. Nisi nostrud laborum duis quis commodo Lorem anim est sint do.\r\n",
    "registered": "2015-02-06T10:16:22 -08:00",
    "latitude": 33.734774,
    "longitude": 145.363821,
    "tags": [
      "ex",
      "do",
      "mollit",
      "dolore",
      "aliqua",
      "aute",
      "consectetur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Marci Preston"
      },
      {
        "id": 1,
        "name": "Berger Garrett"
      },
      {
        "id": 2,
        "name": "Stein Blake"
      }
    ],
    "greeting": "Hello, French Herrera! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5869eb4673471736b41669dc",
    "index": 3,
    "guid": "dfea01ae-390b-403c-b02a-e31c46cfe9b4",
    "isActive": true,
    "balance": "$3,415.39",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Abbott Maldonado",
    "gender": "male",
    "company": "NETPLODE",
    "email": "abbottmaldonado@netplode.com",
    "phone": "+1 (927) 441-2299",
    "address": "236 Colonial Road, Onton, Guam, 1890",
    "about": "Laboris cillum velit Lorem dolor mollit nostrud ex ut adipisicing in eu nisi deserunt. Dolore fugiat aliqua voluptate pariatur veniam nostrud. Non do ut irure culpa laborum pariatur sunt sit ea in excepteur elit. Nisi ullamco ex ad exercitation ipsum sint nisi exercitation. Aliqua anim enim mollit irure magna duis pariatur est.\r\n",
    "registered": "2015-06-05T02:01:49 -08:00",
    "latitude": 84.817846,
    "longitude": -122.863015,
    "tags": [
      "aliquip",
      "et",
      "aliquip",
      "do",
      "non",
      "ut",
      "officia"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Riley Guthrie"
      },
      {
        "id": 1,
        "name": "Vasquez Reyes"
      },
      {
        "id": 2,
        "name": "Shelby Chase"
      }
    ],
    "greeting": "Hello, Abbott Maldonado! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5869eb464efc7f845ded1de2",
    "index": 4,
    "guid": "932e4393-a01c-434d-b902-2d9f857f18b1",
    "isActive": false,
    "balance": "$3,960.95",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Lori Gentry",
    "gender": "female",
    "company": "MANUFACT",
    "email": "lorigentry@manufact.com",
    "phone": "+1 (874) 412-3286",
    "address": "914 Fane Court, Bainbridge, Wisconsin, 2753",
    "about": "Reprehenderit tempor elit nulla magna consectetur esse et excepteur. Cillum nostrud et aute laborum adipisicing anim incididunt officia commodo. Deserunt nulla consectetur eiusmod pariatur incididunt elit. In in nulla velit labore et. Incididunt aute labore minim eiusmod velit aute eu amet ea proident est.\r\n",
    "registered": "2016-10-21T12:58:56 -08:00",
    "latitude": -20.123964,
    "longitude": -33.686527,
    "tags": [
      "voluptate",
      "consequat",
      "mollit",
      "cupidatat",
      "laboris",
      "anim",
      "irure"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ball Harper"
      },
      {
        "id": 1,
        "name": "Sheila Sharpe"
      },
      {
        "id": 2,
        "name": "Oneil Wooten"
      }
    ],
    "greeting": "Hello, Lori Gentry! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5869eb46e3b7c8152435ac7a",
    "index": 5,
    "guid": "95b3815e-c67a-4fc1-bf76-bf9f110216d3",
    "isActive": true,
    "balance": "$2,222.46",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "green",
    "name": "Judy Sloan",
    "gender": "female",
    "company": "WEBIOTIC",
    "email": "judysloan@webiotic.com",
    "phone": "+1 (970) 567-3842",
    "address": "773 Cyrus Avenue, Spelter, Rhode Island, 7741",
    "about": "Lorem nulla excepteur deserunt dolor et proident Lorem occaecat. Dolore est minim commodo adipisicing excepteur. Deserunt non veniam ipsum labore deserunt ipsum do officia velit exercitation reprehenderit nostrud cupidatat est. Excepteur commodo sunt in labore. Sunt officia id Lorem nostrud laboris incididunt duis commodo qui proident. Consectetur pariatur incididunt sint laborum officia aliqua mollit ut enim duis nulla. Est qui ut ullamco nisi dolor sit mollit irure ullamco velit qui non commodo labore.\r\n",
    "registered": "2014-02-05T05:14:59 -08:00",
    "latitude": -54.679102,
    "longitude": 67.809954,
    "tags": [
      "non",
      "cupidatat",
      "cupidatat",
      "ullamco",
      "adipisicing",
      "proident",
      "laborum"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Shaw Mcintosh"
      },
      {
        "id": 1,
        "name": "Navarro Head"
      },
      {
        "id": 2,
        "name": "Edwards Kirk"
      }
    ],
    "greeting": "Hello, Judy Sloan! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  }
]

void function () {
  return placeholder
}()
