import React, { useState, useEffect } from 'react'
import { products } from './products'
import './App.css'

function App() {
	const [search, setSearch] = useState('')
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [productsList] = useState(products)


	useEffect(function () {
		function handleEsc(e) {
			if (e.key === 'Escape') {
				setSelectedProduct(null)
			}
		}
		window.addEventListener('keydown', handleEsc)
		return function () {
			window.removeEventListener('keydown', handleEsc)
		}
	}, [])

	return (
		<div>
			<h1>Список товаров</h1>

			<input type='text' placeholder='Поиск товаров...' value={search}onChange={function (e) {setSearch(e.target.value)}}/>
			<div>
				{productsList
					.filter(function (item) {return item.title.toLowerCase().includes(search.toLowerCase())})
					.map(function (item) {
						return (
							<div
								className='product-card'
								key={item.id}
								onClick={function () {setSelectedProduct(item)}}>
								<img src={item.image} alt={item.title} width='150'/>
								<h3>{item.title}</h3>
								<p>Цена: {item.price} ₽</p>
							</div>
						)
					})}
			</div>

			{selectedProduct && (
				<div className="modal-overlay" onClick={function () {setSelectedProduct(null)}}>
					<div className="modal-window" onClick={function (e) { e.stopPropagation()}}>
						<button className="close-btn" onClick={function () { setSelectedProduct(null)}}>X</button>
						<img
							src={selectedProduct.image}
							alt={selectedProduct.title}
							width='150'
						/>
						<h2>{selectedProduct.title}</h2>
						<p>{selectedProduct.description}</p>
						<p>Цена: {selectedProduct.price} ₽</p>
						<button className='buy-btn'>Купить</button>
					</div>
				</div>
			)}
		</div>
	)
}
export default App