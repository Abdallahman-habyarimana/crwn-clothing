
import React from 'react'

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'sneakers'
    },
    {
      id:  3,
      title: 'Jackets'
    },
    {
      id: 4,
      title: 'Mens'
    },
    {
      id: 5,
      title: 'Womens'
    },
  ]
  return (
    <div className="categories-container">
        { categories.map((category )=> ( 
            <div className='.category-container ' key={category.id}>
              <div className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
        ))}
      
    </div>
  )
}

export default App