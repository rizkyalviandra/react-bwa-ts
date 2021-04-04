import React from 'react'

type DiscountProps = {
  isDiscount: Boolean
}

const initialValue:DiscountProps = {
  isDiscount: true
}

const DiscountContext = React.createContext(initialValue)


export { DiscountContext }
