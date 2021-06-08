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
		}).catch((err) => console.log(err) )
	},[])


	const handleChange = (e) => {
		e.preventDefault()
		//when adding to the state always use make a copy do not modify the original
		//first take the object values
		const {name, value} = e.target

		//to set the state, pass the original object, spread it and pass the new one
		// ( (original) => ({...origin, [new_key]:new:value}) )
		setReview(review => ( {
				...review,
				[name]: value

			})
		)
	}



	const setRating = (score, e) => {
		e.preventDefault()
		console.log(e, score)
		setReview({...review, score})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const airline_id = airline.data.id

		//set up a csfrToken to prevent attacks
		const cstf_tokens = document.querySelector("[name=csrf-token]").content

		axios.defaults.headers.common['X-CSRF-TOKEN'] = cstf_tokens

		//set up the payload data as second argument
		axios.post('/api/v1/reviews', {review, airline_id}).then(response => {

			const included = [... airline.included, response.data.data]

			setAirline({ ...airline, included })
			setReview({ title: '', description: '', score: 0 })
		}).catch(err => {

		})

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
					setRating={setRating}
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
