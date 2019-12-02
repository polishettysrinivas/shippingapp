const express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.listen(5000, () => console.log('Express Server is Running at port no: 5000'));

//GET ALL USER SETAILS
app.get('/users', (req, res) => {
  const users = [
    {
        "id": "1",
        "userName": "tony@appmail.com",
        "password": "App@123",
        "role": "Manager",
        "fName": "Tony",
        "lName": "Polishetty",
        "dob": "20/05/1986",
        "status": "Active"
    },
    {
        "id": "2",
        "userName": "Paul@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Paul",
        "lName": "Ludwig",
        "dob": "20/07/1986",
        "status": "Active"
    },
    {
        "id": "3",
        "userName": "Jonas@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Jonas",
        "lName": "Winter",
        "dob": "26/03/1990",
        "status": "Active"
    },
    {
        "id": "4",
        "userName": "Elias@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Elias",
        "lName": "Kraus",
        "dob": "15/09/1984",
        "status": "Active"
    },
    {
        "id": "5",
        "userName": "Noah@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Noah",
        "lName": "Lorenz",
        "dob": "25/11/1985",
        "status": "Active"
    },
    {
        "id": "6",
        "userName": "Felix@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Felix",
        "lName": "Roth",
        "dob": "26/05/1986",
        "status": "Active"
    },
    {
        "id": "7",
        "userName": "Henry@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Henry",
        "lName": "Stein",
        "dob": "23/10/1988",
        "status": "Active"
    },
    {
        "id": "8",
        "userName": "Emil@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Emil",
        "lName": "Groß",
        "dob": "16/12/1986",
        "status": "Active"
    },
    {
        "id": "9",
        "userName": "Moritz@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Moritz",
        "lName": "Heinrich",
        "dob": "25/01/1990",
        "status": "Active"
    },
    {
        "id": "10",
        "userName": "Viktor@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Viktor",
        "lName": "Thomas",
        "dob": "13/10/1991",
        "status": "Active"
    },
    {
        "id": "11",
        "userName": "Ben@appmail.com",
        "password": "App@123",
        "role": "Biker",
        "fName": "Ben",
        "lName": "Horn",
        "dob": "30/12/1989",
        "status": "Active"
    }
];
  res.send(users);
});




//GET ALL SHIPMENT DETAILS
app.get('/shipmentsList', (req, res) => {
  const shipmentData = [
    {
        "id": "1",
        "vendorName": "Adidas",
        "Origin": "Berlin",
        "Destination": "Hamburg",
        "AssignedTo": "Paul@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "2",
        "vendorName": "Lange & Söhne",
        "Origin": "Bavaria",
        "Destination": "Cologne",
        "AssignedTo": "Jonas@appmail.com",
        "status": "Delivered",
        "date": "29/11/2019"
    },
    {
        "id": "3",
        "vendorName": "BayWa",
        "Origin": "Frankfurt",
        "Destination": "Cologne",
        "AssignedTo": "Elias@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "4",
        "vendorName": "Edeka",
        "Origin": "Essen",
        "Destination": "Stuttgart",
        "AssignedTo": "Noah@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "5",
        "vendorName": "Altana",
        "Origin": "Dortmund ",
        "Destination": "Düsseldorf",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "6",
        "vendorName": "Celesio",
        "Origin": "Bremen",
        "Destination": "Hanover",
        "AssignedTo": "Henry@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "7",
        "vendorName": "Der Spiegel",
        "Origin": "Leipzig",
        "Destination": "Munich",
        "AssignedTo": "Emil@appmail.com",
        "status": "Delivered",
        "date": "29/11/2019"
    },
    {
        "id": "8",
        "vendorName": "Aldi",
        "Origin": "Saxony",
        "Destination": "Hesse",
        "AssignedTo": "Moritz@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "9",
        "vendorName": "Bayer",
        "Origin": "Hamburg",
        "Destination": "Bavaria",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "10",
        "vendorName": "Epcos",
        "Origin": "Westphalia",
        "Destination": "Württemberg",
        "AssignedTo": "Ben@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "11",
        "vendorName": "Fein",
        "Origin": "Berlin",
        "Destination": "Hamburg",
        "AssignedTo": "Paul@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "12",
        "vendorName": "Gerresheimer",
        "Origin": "Bavaria",
        "Destination": "Cologne",
        "AssignedTo": "Jonas@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "13",
        "vendorName": "Heraeus",
        "Origin": "Frankfurt",
        "Destination": "Cologne",
        "AssignedTo": "Elias@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "14",
        "vendorName": "Adidas",
        "Origin": "Essen",
        "Destination": "Stuttgart",
        "AssignedTo": "Noah@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "15",
        "vendorName": "Lange & Söhne",
        "Origin": "Dortmund ",
        "Destination": "Düsseldorf",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "16",
        "vendorName": "BayWa",
        "Origin": "Bremen",
        "Destination": "Hanover",
        "AssignedTo": "Henry@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "17",
        "vendorName": "Edeka",
        "Origin": "Leipzig",
        "Destination": "Munich",
        "AssignedTo": "Emil@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "18",
        "vendorName": "Altana",
        "Origin": "Saxony",
        "Destination": "Hesse",
        "AssignedTo": "Moritz@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "19",
        "vendorName": "Celesio",
        "Origin": "Hamburg",
        "Destination": "Bavaria",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "20",
        "vendorName": "Der Spiegel",
        "Origin": "Westphalia",
        "Destination": "Württemberg",
        "AssignedTo": "Ben@appmail.com",
        "status": "Delivered",
        "date": "29/11/2019"
    },
    {
        "id": "21",
        "vendorName": "Aldi",
        "Origin": "Berlin",
        "Destination": "Hamburg",
        "AssignedTo": "Paul@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "22",
        "vendorName": "Bayer",
        "Origin": "Bavaria",
        "Destination": "Cologne",
        "AssignedTo": "Jonas@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "23",
        "vendorName": "Epcos",
        "Origin": "Frankfurt",
        "Destination": "Cologne",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "24",
        "vendorName": "Fein",
        "Origin": "Essen",
        "Destination": "Stuttgart",
        "AssignedTo": "Noah@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "25",
        "vendorName": "Gerresheimer",
        "Origin": "Dortmund ",
        "Destination": "Düsseldorf",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "26",
        "vendorName": "Heraeus",
        "Origin": "Bremen",
        "Destination": "Hanover",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "27",
        "vendorName": "Adidas",
        "Origin": "Leipzig",
        "Destination": "Munich",
        "AssignedTo": "Emil@appmail.com",
        "status": "Delivered",
        "date": "29/11/2019"
    },
    {
        "id": "28",
        "vendorName": "Lange & Söhne",
        "Origin": "Saxony",
        "Destination": "Hesse",
        "AssignedTo": "Moritz@appmail.com",
        "status": "Delivered",
        "date": "29/11/2019"
    },
    {
        "id": "29",
        "vendorName": "BayWa",
        "Origin": "Hamburg",
        "Destination": "Bavaria",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "30",
        "vendorName": "Edeka",
        "Origin": "Westphalia",
        "Destination": "Württemberg",
        "AssignedTo": "Ben@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "31",
        "vendorName": "Altana",
        "Origin": "Berlin",
        "Destination": "Hamburg",
        "AssignedTo": "Paul@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "32",
        "vendorName": "Celesio",
        "Origin": "Bavaria",
        "Destination": "Cologne",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "33",
        "vendorName": "Der Spiegel",
        "Origin": "Frankfurt",
        "Destination": "Cologne",
        "AssignedTo": "Elias@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "34",
        "vendorName": "Aldi",
        "Origin": "Essen",
        "Destination": "Stuttgart",
        "AssignedTo": "Noah@appmail.com",
        "status": "Delivered",
        "date": "29/11/2019"
    },
    {
        "id": "35",
        "vendorName": "Bayer",
        "Origin": "Dortmund ",
        "Destination": "Düsseldorf",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "36",
        "vendorName": "Epcos",
        "Origin": "Bremen",
        "Destination": "Hanover",
        "AssignedTo": "Henry@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "37",
        "vendorName": "Fein",
        "Origin": "Leipzig",
        "Destination": "Munich",
        "AssignedTo": "Emil@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "38",
        "vendorName": "Gerresheimer",
        "Origin": "Saxony",
        "Destination": "Hesse",
        "AssignedTo": "Moritz@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "39",
        "vendorName": "Heraeus",
        "Origin": "Hamburg",
        "Destination": "Bavaria",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "40",
        "vendorName": "Adidas",
        "Origin": "Westphalia",
        "Destination": "Württemberg",
        "AssignedTo": "Ben@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "41",
        "vendorName": "Lange & Söhne",
        "Origin": "Berlin",
        "Destination": "Hamburg",
        "AssignedTo": "Paul@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "42",
        "vendorName": "BayWa",
        "Origin": "Bavaria",
        "Destination": "Cologne",
        "AssignedTo": "Jonas@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "43",
        "vendorName": "Edeka",
        "Origin": "Frankfurt",
        "Destination": "Cologne",
        "AssignedTo": "Elias@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "44",
        "vendorName": "Altana",
        "Origin": "Essen",
        "Destination": "Stuttgart",
        "AssignedTo": "Noah@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "45",
        "vendorName": "Celesio",
        "Origin": "Dortmund ",
        "Destination": "Düsseldorf",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "46",
        "vendorName": "Der Spiegel",
        "Origin": "Bremen",
        "Destination": "Hanover",
        "AssignedTo": "Henry@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "47",
        "vendorName": "Aldi",
        "Origin": "Leipzig",
        "Destination": "Munich",
        "AssignedTo": "Emil@appmail.com",
        "status": "Assigned",
        "date": "29/11/2019"
    },
    {
        "id": "48",
        "vendorName": "Bayer",
        "Origin": "Saxony",
        "Destination": "Hesse",
        "AssignedTo": "Moritz@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    },
    {
        "id": "49",
        "vendorName": "Epcos",
        "Origin": "Hamburg",
        "Destination": "Bavaria",
        "AssignedTo": "Not Assigned",
        "status": "Waiting",
        "date": "29/11/2019"
    },
    {
        "id": "50",
        "vendorName": "Fein",
        "Origin": "Westphalia",
        "Destination": "Württemberg",
        "AssignedTo": "Ben@appmail.com",
        "status": "Picked Up",
        "date": "29/11/2019"
    }
];
  res.send(shipmentData);
});