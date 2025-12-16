import React from 'react'
import { products } from './products'

function App() {
	return (
		<div>
			<h1>Список товаров</h1>

			<div>
				{products.map(function (item) {
					return (
						<div key={item.id}>
							<img src={item.image} alt={item.title} width='150' />
							<h3>{item.title}</h3>
							<p>Цена: {item.price} ₽</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default App
