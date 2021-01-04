const API_URL = 'https://mail.ibial.com/api'

export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {number}  id
   *
   * @return  {Promise}
   */
  getTickets() {
    return $axios.$post(`${API_URL}/gettickets`)
  }
})
