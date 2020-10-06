const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOURI, {useNewUserParsen: true})


