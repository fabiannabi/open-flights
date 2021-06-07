import axios from 'axios';
import React ,  {useState, useEffect, Fragment} from 'react'
import Header from './Header'
import ReviewForm from './ReviewForm'

const Airline = (props) => {

	const [airline, setAirline] = useState({});
	const [review, setReview] = useState({
		title: '',
		description: '',
		score: 0
	});

 // a flag to check if the response loaded
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const slug = props.match.params.slug

		axios.get(`/api/v1/airlines/${slug}`).then((response) => {
			setAirline(response.data)
			setLoaded(true)
		}).catch((err) => consolelog(err) )
	},[])


	const handleChange = (e) => {
		e.preventDefault()

		console.log(e.target.name, e.target.value)

	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(e.target.name, e.target.value)
	}
	// pass the handleSubmit and handleChange as props with the same name as params
	// and pass the review state to fill it out in the form with the value
	return (

		<div className="wrapper">
		{ loaded &&
			<Fragment>
			<div className="column-main">
				<div className="main">
						<Header
							attributes ={airline.data.attributes}
							reviews = {airline.included}
						/>
					<div className="reviews"></div>
				</div>
			</div>
			<div className="column">
				<ReviewForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					attributes={airline.data.attributes}
					review={review}
				/>
			</div>
	</Fragment>
	}
	</div>
	)
}

export default Airline
