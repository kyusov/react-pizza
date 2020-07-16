import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { Home, Cart } from './pages'
import { Header } from './components'
import { Route } from 'react-router-dom'
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://react-pizza-server.herokuapp.com/pizza').then(({ data }) => {
      dispatch(setPizzas(data.pizzas))
    })
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
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
