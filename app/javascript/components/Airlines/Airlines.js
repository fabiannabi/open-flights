import React ,  {useState, useEffect, Fragment} from 'react'
import axios from 'axios'

const Airlines = () => {

	const [airlines, setAirlines] = useState([])

	useEffect(() => {
		//Get all of Airlines from the Api endpoints
		//Update Airlines in our state
		axios.get('/api/v1/airlines.json').then(response =>{
			setAirlines(response.data.data)

			}).catch(err => console.log(err))
		},[airlines.length])

	const list = airlines.map(airline =>{
		return (
			<li key={airline.attributes.name}>{airline.attributes.name}</li>
		)
	})

	return (
		<Fragment>
			<div>This is the Airlines show view for the app
				<ul>
					{list}
				</ul>
			</div>
		</Fragment>
	)
}

export default Airlines
