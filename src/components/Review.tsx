import React from 'react'
import { users } from '../data/review'

const Review = () => {
  return (
    <div className="review-box">
      <h2>Reviews</h2>
      {users.map(user => (
        <div key={user.id} className="item">
        <img src={user.image} alt={user.id} />
        <div className="user">
          <h3>{user.name}</h3>
          <p>{user.review}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Review
