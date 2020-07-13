import React from 'react'
import PropTypes from 'prop-types'

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items.map((e, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${e}_${index}`}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  )
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
}

Categories.defaultProps = {
  items: [],
}

export default Categories
