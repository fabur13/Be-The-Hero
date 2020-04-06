const connection = require('../database/connection')

module.exports = {
  async index (request, response) {
    const ongid = request.headers.authorization

    const incidents = await connection('incidents')
      .where('ongid', ongid)
      .select('*')

    return response.json(incidents)
  }
}
