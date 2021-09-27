const Joi = require('joi');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json({ "message": "Hey It's working" });
});

app.get('/api/user/:user', (req, res) => {
    const schema = Joi.object({
        user: Joi.string().min(3).required(),
    });
    const data = { user: req.params.user };
    // const { error, value } = schema.validate(data);

    schema.validateAsync(data)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error });
        });
})

app.listen(port, () => {
    console.log("Listening to the port 3000");
})
