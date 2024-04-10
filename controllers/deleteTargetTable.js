const pool = require('../db')

const deleteTable = async (req, res) => {
    const tableName = req.params.id;
    try {
        const queryText = `DROP TABLE IF EXISTS ${tableName};`;
        await pool.query(queryText);
        res.send(`Таблица ${tableName} успешно удалена.`);
    } catch (err) {
        res.status(500).send('Серверная ошибка');
    }
};

module.exports = deleteTable;