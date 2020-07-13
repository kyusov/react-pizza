import React from 'react'
import { Route } from 'react-router-dom'

import { Home, Cart } from './pages'
import { Header } from './components'

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    fetch('http://react-pizza-server.herokuapp.com/pizza')
      .then((response) => response.json())
      .then((json) => setPizzas(json.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

export default App
