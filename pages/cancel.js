import State from '@/Components/State'
import React from 'react'

const Cancel = () => {
    let MyAppPaymentMethod = JSON.parse(localStorage.getItem('MyAppUser'))
    let Plan = JSON.parse(localStorage.getItem('Plan'))

  return (
    <div>
        <State MyAppPaymentMethod={MyAppPaymentMethod} Plan={Plan} status={false} />
    </div>
  )
}

export default Cancel