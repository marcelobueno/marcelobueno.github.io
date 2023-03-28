import React from 'react'
import './assets/css/app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'

export const App = () => {
	return (
		<Router>

			<Routes>

				<Route path='/' element={<Home/>}></Route>

			</Routes>

		</Router>
	)
}

