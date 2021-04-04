import React from 'react'
import { DiscountContext } from '../contexts/DiscountContext'


const Discount = () => {
    const {isDiscount} = React.useContext(DiscountContext)

    return <p>{isDiscount ? 'Discount 50% Off': `Haven't discount`}</p>
}

export default Discount
