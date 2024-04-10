const pool = require('../db');

const getAllTablesMetadata = async (req, res) => {
    try {
        const queryText = `
      SELECT table_name, column_name, data_type 
      FROM information_schema.columns 
      WHERE table_schema = 'public';
    `;
        const result = await pool.query(queryText, { type: pool.QueryTypes.SELECT });
        const tables = result.reduce((acc, { table_name, column_name, data_type }) => {
            if (!acc[table_name]) {
                acc[table_name] = {
                    table_name,
                    columns: []
                };
            }
            acc[table_name].columns.push({ column_name, data_type });
            return acc;
        }, {});
        if (Object.keys(tables).length > 0) {
            res.json(Object.values(tables));
        } else {
            res.status(404).send('Таблицы не найдены');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Серверная ошибка');
    }
};

module.exports = getAllTablesMetadata;
