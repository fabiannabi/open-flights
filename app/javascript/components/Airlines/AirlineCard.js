import React from 'react'
import {Link} from 'react-router-dom'

const AirlineCard = (props) => {
	return (
	<div className="card" key={props.attributes.slug}>
		<div className="airline-logo">
			<img src={props.attributes.image_url} alt={props.attributes.name}/>
			</div>
		<div className="airline-name">{props.attributes.name}
		</div>
		<div className="airline-score">{props.attributes.avg_score}</div>
		<div className="airline-link">
			<Link  to={`/airlines/${props.attributes.slug}`}>VIEW MORE</Link>
		</div>
	</div>
)
}

export default AirlineCard
