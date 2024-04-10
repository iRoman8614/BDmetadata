const pool = require('../db');
const {QueryTypes} = require("sequelize");

const getTableMetadata = async (req, res) => {
    try {
        const tableName = req.params.id;
        const queryText = `
      SELECT column_name, 
             data_type 
      FROM information_schema.columns 
      WHERE table_name = :tableName AND table_schema = 'public';
    `;
        const results = await pool.query(queryText, {
            replacements: { tableName },
            type: QueryTypes.SELECT
        });
        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).send('Таблица не найдена');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Серверная ошибка');
    }
};

module.exports = getTableMetadata;
