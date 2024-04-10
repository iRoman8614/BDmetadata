const Router = require('express')
const getAllTablesMetadata = require('../controllers/getAllTables')
const createTable = require('../controllers/createTable')
const deleteTable = require('../controllers/deleteTargetTable')
const editTable = require('../controllers/editTargetTable')
const getTableMetadata = require('../controllers/getTargetTable')

const router = new Router()

// создание таблицы
router.post('/', createTable)

// получение метаданных о всех таблицах
router.get('/', getAllTablesMetadata)

// получение метаданных конкретной таблицы
router.get('/:id', getTableMetadata)

// удаление таблицы
router.delete('/:id', deleteTable)

// изменение таблицы
router.put('/:id', editTable)


module.exports = router