require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/modelsRoute')

//промежуточная конфигурация сервера
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

//роутинг
app.use('/api/models', router)

//функця запуска сервера и присоединения к базе данных
async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('db connected')
        app.listen(PORT || 5000, ()=>{
            console.log(`server started on port ${PORT}`)
        });
    } catch (e) {
        console.log("error", e)
    }
}

start();