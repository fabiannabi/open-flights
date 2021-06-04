import axios from 'axios';
import React ,  {useState, useEffect} from 'react'
import Header from './Header'

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
		console.log(props)
		const slug = props.match.params.slug

		axios.get(`/api/v1/airlines/${slug}`).then((response) => {
			console.log(response)
			setAirline(response.data)
			setLoaded(true)
		}).catch((err) => consolelog(err) )
	},[])
	console.log(airline,"this is airline")
	return (
		<div className="wrapper">
			<div className="column-main">
				<div className="main">
					{ loaded &&
						<Header
							attributes ={airline.data.attributes}
							reviews = {airline.included}
						/>
					}
					<div className="reviews"></div>
				</div>
			</div>
			<div className="column">
				<div className="review-form">
					review goes here
				</div>
			</div>
		</div>
	)
}

export default Airline
