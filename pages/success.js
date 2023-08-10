import State from '@/Components/State'
import React from 'react'

const Success = () => {
  let MyAppPaymentMethod = JSON.parse(localStorage.getItem('MyAppUser'))
  let Plan = JSON.parse(localStorage.getItem('Plan'))

  return (
    <div>
      <State MyAppPaymentMethod={MyAppPaymentMethod} Plan={Plan} status={true} />
    </div>
  )
}

export default Success