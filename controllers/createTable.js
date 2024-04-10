const pool = require('../db')
const createTable = async (req, res) => {
    const { tableName, columns } = req.body;
    try {
        const queryText = `CREATE TABLE ${tableName} (${columns});`;
        await pool.query(queryText);
        res.status(201).send(`Таблица ${tableName} была успешно создана.`);
    } catch (err) {
        console.log(err)
        res.status(500).send('Серверная ошибка');
    }
};

module.exports = createTable;