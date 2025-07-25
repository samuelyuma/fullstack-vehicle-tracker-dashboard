import { VehicleStatus } from "../../src/generated/prisma";

export const Users = [
  {
    id: "39ee94b8-ca38-4243-a514-435075f98130",
    name: "Admin",
    email: "admin@hotmail.com",
    password: "s3cur3.p4ssw0rd",
    avatar_url: "https://github.com/shadcn.png",
  },
];

export const Vehicles = [
  {
    id: "29335840-ae13-4b61-ab4b-1e3dc0ed5d09",
    name: "Mazda Charger",
    status: VehicleStatus.ACTIVE,
    fuel_level: 16,
    odometer: 83172,
    latitude: 84.88606688335287,
    longitude: 76.692942952706,
    speed: 104,
  },
  {
    id: "4561b764-5883-4428-9cc9-7d75da56520e",
    name: "Ferrari Sentra",
    status: VehicleStatus.ACTIVE,
    fuel_level: 66,
    odometer: 534494,
    latitude: -64.2273931325908,
    longitude: 133.32668222533067,
    speed: 134,
  },
  {
    id: "9992416b-f6c0-4a76-a63a-65dde86d133a",
    name: "Mazda Challenger",
    status: VehicleStatus.ACTIVE,
    fuel_level: 88,
    odometer: 443628,
    latitude: -73.79516897213496,
    longitude: 102.60489572968771,
    speed: 17,
  },
  {
    id: "233d6441-411f-476f-9c40-5787dba17645",
    name: "Toyota Ranchero",
    status: VehicleStatus.INACTIVE,
    fuel_level: 62,
    odometer: 837479,
    latitude: -6.7952722901912495,
    longitude: -108.01561174174941,
    speed: 52,
  },
  {
    id: "872b229f-66e9-4f06-ab98-9bd6ca23ce35",
    name: "Tesla Prius",
    status: VehicleStatus.ACTIVE,
    fuel_level: 60,
    odometer: 979724,
    latitude: 43.53634665602212,
    longitude: 98.46505839711318,
    speed: 149,
  },
  {
    id: "441f65a5-d61b-4330-a52c-c66962a5bcad",
    name: "Mazda El Camino",
    status: VehicleStatus.INACTIVE,
    fuel_level: 10,
    odometer: 942962,
    latitude: -83.94477169708574,
    longitude: 170.3922098845082,
    speed: 177,
  },
  {
    id: "ba139fa4-1563-41b5-bb81-fe3530ef4cd3",
    name: "Dodge Alpine",
    status: VehicleStatus.INACTIVE,
    fuel_level: 54,
    odometer: 415872,
    latitude: 87.12811514071268,
    longitude: 94.6133880946108,
    speed: 57,
  },
  {
    id: "32ae818c-f19a-469d-bf83-3027bc663fed",
    name: "Porsche Grand Caravan",
    status: VehicleStatus.INACTIVE,
    fuel_level: 22,
    odometer: 381164,
    latitude: -10.058408363360286,
    longitude: 116.46564715360796,
    speed: 144,
  },
  {
    id: "219a9d3e-86b1-4a8c-b736-55c919e96f6e",
    name: "Bentley Aventador",
    status: VehicleStatus.ACTIVE,
    fuel_level: 66,
    odometer: 514964,
    latitude: 78.44118052837871,
    longitude: 176.86275484348738,
    speed: 144,
  },
  {
    id: "751da5d7-210b-454e-b9d7-a49baaf8a0f3",
    name: "Jeep Impala",
    status: VehicleStatus.ACTIVE,
    fuel_level: 26,
    odometer: 299796,
    latitude: 5.944872616314441,
    longitude: 18.178288220973712,
    speed: 32,
  },
  {
    id: "8f1012cc-23a7-4d68-bbb1-0f578ab3dadc",
    name: "Kia Land Cruiser",
    status: VehicleStatus.INACTIVE,
    fuel_level: 98,
    odometer: 690299,
    latitude: -49.576902835111134,
    longitude: -97.23694728578046,
    speed: 36,
  },
  {
    id: "b4a38b17-7d18-4f9c-a8cc-457da5fb4eb7",
    name: "Fiat Corvette",
    status: VehicleStatus.INACTIVE,
    fuel_level: 25,
    odometer: 148160,
    latitude: -66.15838732353703,
    longitude: 123.55369133228947,
    speed: 70,
  },
  {
    id: "34d4f54e-fb34-423f-81f6-5f1b98a3afbd",
    name: "Ferrari 1",
    status: VehicleStatus.INACTIVE,
    fuel_level: 94,
    odometer: 974830,
    latitude: -70.12134335205988,
    longitude: -42.20516386995581,
    speed: 109,
  },
  {
    id: "8485097a-e58a-4105-9c8b-409abe12807a",
    name: "Honda Jetta",
    status: VehicleStatus.INACTIVE,
    fuel_level: 31,
    odometer: 914504,
    latitude: -87.72976981040252,
    longitude: 163.7461517595351,
    speed: 146,
  },
  {
    id: "43dc99c5-f215-4ac9-8e70-46962a26e9f6",
    name: "Volkswagen Durango",
    status: VehicleStatus.INACTIVE,
    fuel_level: 48,
    odometer: 839863,
    latitude: 64.93151123423445,
    longitude: 92.82990528979946,
    speed: 109,
  },
  {
    id: "a48a50ae-dca0-464e-857a-627028fef404",
    name: "Porsche Countach",
    status: VehicleStatus.ACTIVE,
    fuel_level: 96,
    odometer: 839198,
    latitude: 43.22235032799392,
    longitude: -157.20064395196192,
    speed: 17,
  },
  {
    id: "4d1e94db-6a43-4be4-b734-1e898c830d76",
    name: "Porsche El Camino",
    status: VehicleStatus.INACTIVE,
    fuel_level: 89,
    odometer: 644339,
    latitude: 50.11343011258282,
    longitude: -178.6251886309851,
    speed: 93,
  },
  {
    id: "c9bc9669-e07a-4fe0-b175-f07474e42d20",
    name: "Jeep Volt",
    status: VehicleStatus.ACTIVE,
    fuel_level: 91,
    odometer: 112021,
    latitude: 13.663702228190616,
    longitude: -52.52271014690628,
    speed: 181,
  },
  {
    id: "82972f14-f929-4e39-949e-e208874f30f8",
    name: "Bugatti Model S",
    status: VehicleStatus.ACTIVE,
    fuel_level: 96,
    odometer: 698942,
    latitude: -24.535685905913027,
    longitude: 159.45836866732571,
    speed: 81,
  },
  {
    id: "a6bc7eec-c867-4f92-a054-814007fc11b8",
    name: "Bentley 2",
    status: VehicleStatus.INACTIVE,
    fuel_level: 92,
    odometer: 535147,
    latitude: 86.0365555357125,
    longitude: -163.32183299837772,
    speed: 3,
  },
  {
    id: "42da23d8-0779-4a35-91ab-b77f7b3ea5b5",
    name: "Toyota Challenger",
    status: VehicleStatus.INACTIVE,
    fuel_level: 8,
    odometer: 482390,
    latitude: -68.52814405606892,
    longitude: -162.332792412878,
    speed: 86,
  },
  {
    id: "764e483c-5e68-4f21-ba70-7853a1153400",
    name: "Smart Accord",
    status: VehicleStatus.INACTIVE,
    fuel_level: 27,
    odometer: 367989,
    latitude: 70.21422988844569,
    longitude: 73.12559714030635,
    speed: 129,
  },
  {
    id: "1e87a6d7-0ad1-4c2e-8dea-26a0676b2d90",
    name: "Mazda V90",
    status: VehicleStatus.INACTIVE,
    fuel_level: 80,
    odometer: 242270,
    latitude: -61.24019672780169,
    longitude: 89.448860929739,
    speed: 107,
  },
  {
    id: "06df607c-143e-44c8-a16e-521dd1fd72d1",
    name: "Ferrari Corvette",
    status: VehicleStatus.INACTIVE,
    fuel_level: 56,
    odometer: 380865,
    latitude: -61.37185441086683,
    longitude: -103.1626082326041,
    speed: 194,
  },
  {
    id: "d97ac7e0-03b0-4546-abdd-82cdb832b9fb",
    name: "Mazda Taurus",
    status: VehicleStatus.INACTIVE,
    fuel_level: 64,
    odometer: 607363,
    latitude: 70.3431639725913,
    longitude: 139.7347625760076,
    speed: 190,
  },
  {
    id: "86f2a10a-8876-43e1-a3e2-36400d71f9fa",
    name: "Jaguar Mercielago",
    status: VehicleStatus.ACTIVE,
    fuel_level: 83,
    odometer: 750091,
    latitude: 47.720474897792315,
    longitude: -88.55612619466457,
    speed: 49,
  },
  {
    id: "83fdfc02-c074-4f95-8d8a-bf3fc2d10434",
    name: "Aston Martin Impala",
    status: VehicleStatus.ACTIVE,
    fuel_level: 25,
    odometer: 171993,
    latitude: -13.01814955045829,
    longitude: -98.19446944294089,
    speed: 80,
  },
  {
    id: "46c92689-6e3f-4502-bd52-d1f2d9739950",
    name: "Mercedes Benz V90",
    status: VehicleStatus.ACTIVE,
    fuel_level: 93,
    odometer: 209585,
    latitude: -88.48595231736219,
    longitude: 154.5267195109863,
    speed: 21,
  },
  {
    id: "4c3ef834-8faf-4188-a4c1-906494e354a0",
    name: "Mazda Colorado",
    status: VehicleStatus.ACTIVE,
    fuel_level: 7,
    odometer: 655807,
    latitude: 38.64892698009186,
    longitude: 117.6662196702552,
    speed: 94,
  },
  {
    id: "bb134d7d-45b6-45a9-92db-d3ffbc48935d",
    name: "Rolls Royce LeBaron",
    status: VehicleStatus.INACTIVE,
    fuel_level: 45,
    odometer: 844427,
    latitude: 51.25756592727544,
    longitude: -25.504855979986615,
    speed: 167,
  },
  {
    id: "1873179e-9c3b-4bb8-b52f-995885bd891c",
    name: "Jeep PT Cruiser",
    status: VehicleStatus.ACTIVE,
    fuel_level: 35,
    odometer: 737617,
    latitude: -42.37658003520512,
    longitude: 61.652267911986854,
    speed: 144,
  },
  {
    id: "7aba316f-c434-4928-9897-d807658638fb",
    name: "Audi Element",
    status: VehicleStatus.INACTIVE,
    fuel_level: 42,
    odometer: 833978,
    latitude: 3.0043351301803085,
    longitude: 105.63945782442516,
    speed: 120,
  },
  {
    id: "33b4b6bb-99d3-444a-ae37-3bf7504ffd7a",
    name: "Cadillac Expedition",
    status: VehicleStatus.ACTIVE,
    fuel_level: 13,
    odometer: 949573,
    latitude: -17.940692006658963,
    longitude: -130.7705744619125,
    speed: 77,
  },
  {
    id: "682f344f-edaa-4d41-8692-b29e8e0d0a14",
    name: "Jaguar Mercielago",
    status: VehicleStatus.INACTIVE,
    fuel_level: 48,
    odometer: 119968,
    latitude: -57.61134215209103,
    longitude: 143.90808736322197,
    speed: 50,
  },
  {
    id: "047e136f-c27f-46fc-8ac5-fe772270d534",
    name: "Mercedes Benz Impala",
    status: VehicleStatus.INACTIVE,
    fuel_level: 60,
    odometer: 727589,
    latitude: -47.47509966182222,
    longitude: 127.89687697580263,
    speed: 65,
  },
  {
    id: "802de0e0-0094-437d-80da-39fed6da3dfe",
    name: "Mini Camaro",
    status: VehicleStatus.ACTIVE,
    fuel_level: 67,
    odometer: 736099,
    latitude: -87.34191860586772,
    longitude: 99.81153286550898,
    speed: 28,
  },
  {
    id: "11e150d9-7abf-4192-a488-5361c8089bd9",
    name: "Chevrolet Explorer",
    status: VehicleStatus.INACTIVE,
    fuel_level: 94,
    odometer: 819071,
    latitude: -70.75024812023089,
    longitude: -46.200668184742995,
    speed: 134,
  },
  {
    id: "5c0864fa-2cbc-45b2-bc61-efffa636a2c8",
    name: "Jaguar Prius",
    status: VehicleStatus.INACTIVE,
    fuel_level: 4,
    odometer: 282997,
    latitude: 31.17219004517881,
    longitude: 132.31261254616066,
    speed: 104,
  },
  {
    id: "65ffd466-dc39-42ec-b3b3-6d68b6a7ec89",
    name: "Mercedes Benz A8",
    status: VehicleStatus.INACTIVE,
    fuel_level: 96,
    odometer: 727173,
    latitude: -59.31067898674823,
    longitude: -104.3653417058046,
    speed: 153,
  },
  {
    id: "74e77420-26e5-4094-8177-efefffa1fdf1",
    name: "Mini Focus",
    status: VehicleStatus.INACTIVE,
    fuel_level: 94,
    odometer: 156179,
    latitude: 75.32333134201005,
    longitude: 54.94196488669871,
    speed: 114,
  },
  {
    id: "c7994ba6-12cb-4e05-86a1-4120903b48b4",
    name: "Ford A4",
    status: VehicleStatus.ACTIVE,
    fuel_level: 24,
    odometer: 103645,
    latitude: 64.8311027208062,
    longitude: -62.57905732425276,
    speed: 7,
  },
  {
    id: "afb8a520-aa94-469e-9a5f-a7e5407e764e",
    name: "Rolls Royce Focus",
    status: VehicleStatus.ACTIVE,
    fuel_level: 49,
    odometer: 997849,
    latitude: -44.28528804597874,
    longitude: -72.23236994109634,
    speed: 85,
  },
  {
    id: "8538bb8c-5d1e-4b4d-851e-ce99f34eb294",
    name: "Kia Wrangler",
    status: VehicleStatus.ACTIVE,
    fuel_level: 86,
    odometer: 95761,
    latitude: -40.2697688087771,
    longitude: -5.119463737297053,
    speed: 63,
  },
  {
    id: "5d51efb9-137c-4fac-ac39-21d420ecd7ab",
    name: "Smart Prius",
    status: VehicleStatus.INACTIVE,
    fuel_level: 55,
    odometer: 741011,
    latitude: 31.22802002738665,
    longitude: -156.47673236851992,
    speed: 122,
  },
  {
    id: "cdb9308f-1878-4ed1-a5d6-e9bb5addbd5a",
    name: "Jaguar Alpine",
    status: VehicleStatus.INACTIVE,
    fuel_level: 55,
    odometer: 135952,
    latitude: 23.498920030630686,
    longitude: -44.67808338698859,
    speed: 191,
  },
  {
    id: "46422fa2-0f5d-4436-a41a-0b0c31231e9b",
    name: "Fiat El Camino",
    status: VehicleStatus.ACTIVE,
    fuel_level: 3,
    odometer: 301798,
    latitude: 49.90637390207439,
    longitude: -32.67917836910863,
    speed: 111,
  },
  {
    id: "10e0918a-237f-4ac7-aec9-eb5fed5fa054",
    name: "Polestar 2",
    status: VehicleStatus.INACTIVE,
    fuel_level: 29,
    odometer: 698234,
    latitude: 2.897720074145411,
    longitude: 134.96204871029312,
    speed: 1,
  },
  {
    id: "c5f3459b-034f-4cc2-92d4-61328ca0e399",
    name: "Mercedes Benz Model S",
    status: VehicleStatus.ACTIVE,
    fuel_level: 18,
    odometer: 708807,
    latitude: 56.16888827656521,
    longitude: -154.71945215681936,
    speed: 74,
  },
  {
    id: "1e7fbfca-41bb-42fd-afbd-633a9642b4e5",
    name: "Bugatti XC90",
    status: VehicleStatus.ACTIVE,
    fuel_level: 5,
    odometer: 482184,
    latitude: 19.756151363179413,
    longitude: 87.43284516815066,
    speed: 188,
  },
  {
    id: "f65b62ed-ff8a-4cd0-ac08-c0768817226d",
    name: "Honda Jetta",
    status: VehicleStatus.INACTIVE,
    fuel_level: 53,
    odometer: 702997,
    latitude: -57.15053564448435,
    longitude: 163.54283092367154,
    speed: 12,
  },
];
