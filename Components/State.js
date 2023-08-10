import React from 'react'
import styles from '@/Components/styles/State.module.css'
import { useRouter } from 'next/router'

const State = (props) => {
  let MyAppPaymentMethod = null
  let price
  let plan
  let status = props.status
  const router = useRouter()

  if(props.MyAppPaymentMethod) {
    MyAppPaymentMethod = props.MyAppPaymentMethod
    price = MyAppPaymentMethod.paymentIntent.amount/100
  }

  console.log(MyAppPaymentMethod);

  if(price == 100) {
    plan = ['Mobile', 'Monthly', 'Phone+Tablet']
  } else if(price == 200) { 
    plan = ['Basic', 'Monthly', 'Phone+Tablet+Computer+TV']
  } else if(price == 500) {
    plan = ['Standard', 'Monthly', 'Phone+Tablet+Computer+TV']
  } else if(price == 700) {
    plan = ['Premium', 'Monthly', 'Phone+Tablet+Computer+TV']
  } else if(price == 1000) {
    plan = ['Mobile', 'Yearly', 'Phone+Tablet']
  } else if(price == 2000) {
    plan = ['Basic', 'Yearly', 'Phone+Tablet+Computer+TV']
  } else if(price == 5000) {
    plan = ['Standard', 'Yearly', 'Phone+Tablet+Computer+TV']
  } else if(price == 7000) {
    plan = ['Premium', 'Yearly', 'Phone+Tablet+Computer+TV']
  }

  return (
    <>
      <div className={`${styles.bg}`}>
        <div className={`col-6`}>
          <div className={`${styles.card} py-3 px-3`}>
            <div className={`row`}>
              <div className={`col-8`}>
                <h5>
                  Current Plan Details 
                  {
                    status ? <span className="badge ms-2" style={{color: '#4b7bbd', background: '#bedafc'}}>Active</span> : <span className="badge ms-2" style={{color: '#e47470', background: '#f8e5e5'}}>Cancelled</span>
                  }
                  
                </h5>
              </div>
              {
                status ? 
                <div className={`col-4`}>
                  <p onClick={()=>{
                    router.push('/cancel')
                  }} className="text-end" style={{fontSize: '14px', color: '#5074a9', fontWeight: '800', cursor: 'pointer'}}>Cancel</p>
                </div> : ''
              }
              
            </div>
            <div>
              <div className={`${styles.planName}`}>
                <span className="mt-3" style={{textTransform:'capitalize'}}>{plan[0]}</span>
              </div>
              <div className={`${styles.planRes}`}>
                <span className="mt-3">{plan[2]}</span>
              </div>
              <div className={`${styles.planPrice}`}>
                <span className="mt-3">₹ {price}.00/{plan[1].substr(0,2)}</span>
              </div>
              <div>
                {
                  status ? 
                  <button onClick={()=>{
                    router.push('/price')
                  }} className={`btn btn-outline-primary ${styles.changePlan} mt-2 mb-3`}>Change Plan</button> : <button onClick={()=>{
                    router.push('/price')
                  }} className={`btn btn-outline-primary ${styles.changePlan} mt-2 mb-3`}>Choose Plan</button>
                }
              </div>
            </div>
            <div className={`${styles.note} px-2 py-1`}>
              {
                status ? <span>Your Subscription has started on Aug 10th, 2023 and will auto renew on Aug 10th, 2024.</span> : <span>Your Subscription was cancelled and you will loose access to the services.</span>
              }
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default State