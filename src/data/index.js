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
        name: 'Test numéro 1',
        tags: ['Test'],
    });

    const testresult = await test.save();
    console.log (testresult);
}
createTest();

