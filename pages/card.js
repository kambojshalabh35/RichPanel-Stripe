import CardInfo from '@/Components/CardInfo'
import React, { useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {useState} from 'react'


const Card =  (props) => {
    let {Plan} = props

    let clientSecret = `pk_test_51NdC4MSASbTjQH3W3mH9N0KYZ6vMk8wLedoH5yxmImxwU5f4fN6uL0xxZEgK3Xz0DSI9KN1AiNo9luvdiafrtsdI00BdcvfbmS`

    const [Stripe, setStripe] = useState('')

    useEffect(() => {
      let stripepromise = null
      if (!stripepromise) {
        const data = async () => {
          stripepromise = await loadStripe(clientSecret);
          setStripe(stripepromise)
        }
        data()
      } else {
        setStripe(stripepromise)
      }
    }, [])
    
  return (
    <div>
        <CardInfo Stripe={Stripe} Plan={Plan} clientSecret={clientSecret} />
    </div>
  )
}

export default Card