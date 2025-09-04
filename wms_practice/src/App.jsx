// import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { QtysCard } from './components/QtysCard.jsx'
import './App.css'

const cardsData = [
  {
    id: 1,
    name: 'Inventory Balance',
    qty: 42102,
    icon: 'fa-warehouse text-sky-500'
  },
  {
    id: 2,
    name: 'Received Items',
    qty: 1230,
    icon: 'fa-cart-flatbed text-green-600'
  },
  {
    id: 3,
    name: 'Order to Ship',
    qty: 56,
    icon: 'fa-boxes-stacked text-yellow-500'
  },
  {
    id: 4,
    name: 'Users',
    qty: 54,
    icon: 'fa-users text-cyan-500'
  }
]

function App() {

  return (
    <>
      <Navbar />
      <section className='flex gap-3 p-4'>
        {
          cardsData.map(card =>{
            const { id, name, qty, icon } = card

            return(
                <QtysCard
                  key={id}
                  name={name}
                  qty={qty}
                  icon={icon} 
                />
              )
          })
        }
        </section>
    </>
  )
}

export default App
