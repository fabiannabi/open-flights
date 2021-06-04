import React ,  {useState, useEffect} from 'react'
import axios from 'axios'
import AirlineCard from './AirlineCard'

const Airlines = () => {
	const [airlines, setAirlines] = useState([])

	useEffect(() => {
		//Get all of Airlines from the Api endpoints
		//Update Airlines in our state
			axios.get('/api/v1/airlines.json').then(response => setAirlines(response.data.data))
			.catch(err => console.log(err) )
	}, [airlines.length])

	const grid = airlines.map(airline =>{
		return (
			<AirlineCard
				key={airline.attributes.name}
			 	attributes={airline.attributes}/>
		)
	})

	return (
		<div className="home">
			<div className='header'>
				<h1>Open Fligths</h1>
				<div className='subheader'>Honest, unbaised Fligths reviewes.</div>
			</div>
			<div className="grid-container">
				{grid}
			</div>
		</div>
	)
}

export default Airlines
