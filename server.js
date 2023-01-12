
const express = require("express");
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001;
const app = express();
mongoose.mongoose.connect('mongodb://127.0.0.1/hospital');
const bodyParser = require('body-parser');
const { response } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', './views');


var doctorSchema = mongoose.Schema({
    name: String,
    speciality: String

});

var Doctor = mongoose.model("Doctor", doctorSchema)

app.get("/api", (req, res) => {
    Doctor.find((err, response) => {
        if (err) {
            res.send("error")
        } else {
            res.json({ result: response })

        }
    })
})



app.post('/api', (req, res) => {
    doctorDetials = req.body
    var newDoctor = new Doctor({
        name: doctorDetials.name,
        speciality: doctorDetials.speciality

    })
    newDoctor.save((err, Doctor) => {
        if (err) {
            res.send('error')
        } else {
            res.status(200).send({ success: "success" })
        }
    })

})



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
