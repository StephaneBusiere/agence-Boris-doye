const express = require ('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/BorisDoye')
    .then(() => console.log ('Connecté à MongoDB'))
    .catch(err=> console.error ("Connexion échouée à MongoDB...", err));

const testSchema = new mongoose.Schema ({
    name: String,
    tags: [String],
    date: {type: Date, default: Date.now}
});

const Test = mongoose.model('Test', testSchema);
async function createTest () {
    const test = new Test ({
        name: 'Test numéro 3',
        tags: ['Test'],
    });

    const testresult = await test.save();
    console.log (testresult);
}

async function getTests(){
    const tests = await Test
        .find();
    console.log (tests);
};

app.get('/', (req, res) => {
    res.send('Hello World !');
});
app.get('/api/tests', (req, res) => {
    res.send(getTests())
});

// Port
const port = process.env.PORT || 3000;
app.listen (3000, () => console.log (`Ecoute sur le port ${port}...`));
getTests();

