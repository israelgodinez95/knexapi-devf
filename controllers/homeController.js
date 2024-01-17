// Los controladores tienen la logica de negocio
const ModelHomes = require('../models/Homes')

const createHome = (req, res) => {
  // Aqui yo deberia crear mi home
  // res.send({ message: 'Home created (FAKE)' })
  ModelHomes.create(req.body)
    .then((result) => {
      res.status(201).send({ message: 'Home created', data: result })
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error creating home', error })
    })
}

const findAllHomes = (req, res) => {
  ModelHomes.findAll()
    .then((result) => {
      res.status(201).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing homes', error })
    })
}

module.exports = {
  createHome,
  findAllHomes
}
