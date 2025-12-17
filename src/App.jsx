import React, { useState } from 'react'
import { products } from './products'

function App() {
	const [search, setSearch] = useState('')
	const [selectedProduct, setSelectedProduct] = useState(null)

	return (
		<div>
			<h1>Список товаров</h1>
			<input
				type='text'
				placeholder='Поиск товаров...'
				value={search}
				onChange={function (e) {
					setSearch(e.target.value)
				}}
			/>
			<div>
				{products
					.filter(function (item) {
						return item.title.toLowerCase().includes(search.toLowerCase())
					})
					.map(function (item) {
						return (
							<div
								key={item.id}
								onClick={function () {
									setSelectedProduct(item)
								}}
							>
								<img src={item.image} alt={item.title} width='150' />
								<h3>{item.title}</h3>
								<p>Цена: {item.price} ₽</p>
							</div>
						)
					})}
			</div>

			{selectedProduct && (
				<div onClick={function (e) {e.stopPropagation()}}>
					<button onClick={function () {setSelectedProduct(null)}}>X</button>
					<img
						src={selectedProduct.image}
						alt={selectedProduct.title}
						width='150'
					/>
					<h2>{selectedProduct.title}</h2>
					<p>{selectedProduct.description}</p>
					<p>Цена: {selectedProduct.price} ₽</p>
					<button>Купить</button>
				</div>
			)}
		</div>
	)
}

export default App
