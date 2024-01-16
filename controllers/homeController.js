// Los controladores tienen la logica de negocio

const createHome = (req, res) => {
  // Aqui yo deberia crear mi home
  res.send({ message: 'Home created (FAKE)' })
}

module.exports = {
  createHome
}
