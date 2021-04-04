import React from 'react'
import Discount from './Discount'

type Props = {
  category: String,
  title: String,
  price: String,
  info: String,
  onClick: React.MouseEventHandler<HTMLAnchorElement>
  benefits: React.ReactNode
}

const Description = ({ category,info,price,title,onClick, benefits }: Props) => {

  return (
    <div className="description">
      <p className="cate">{category}</p>
      <h1 className="title">{title}</h1>
      <p className="price">{price}</p>
      <Discount />
      <p className="info">{info}</p>
      <ul>{benefits}</ul>
      <a onClick={onClick} href="#">Add to cart</a>
    </div>
  )
}

export default Description
