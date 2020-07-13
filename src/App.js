import React from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { Home, Cart } from './pages'
import { Header } from './components'

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://react-pizza-server.herokuapp.com/pizza').then(({ data }) => {
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

export default App
