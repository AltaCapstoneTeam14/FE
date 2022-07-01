import React from 'react'
import { Link } from 'react-router-dom'
import ShowTopUp from '../../Components/Top Up/ShowTopUp'

function TopUpPage() {
  return (
    <div>
      <ShowTopUp></ShowTopUp>
      <Link to="/PulsaPage">Pulsa Product</Link>
      <Link to="/QuotaPage">Quota Product</Link>
    </div>
  )
}

export default TopUpPage
