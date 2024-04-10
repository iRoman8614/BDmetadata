const pool = require('../db')

const editTable = async (req, res) => {
    const { tableName, operation } = req.body;
    try {
        const queryText = `ALTER TABLE ${tableName} ${operation};`;
        await pool.query(queryText);
        res.send(`Таблица ${tableName} успешно изменена.`);
    } catch (err) {
        res.status(500).send('Серверная ошибка');
    }
};

module.exports = editTable
