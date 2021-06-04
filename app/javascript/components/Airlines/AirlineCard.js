import React from 'react'

const AirlineCard = (props) => {

	console.log(props.attributes.name)

	return (
	<div className="card" key={props.attributes.slug}>
		<div className="airline-logo">
			<img src={props.attributes.image_url} alt={props.attributes.name}/>
		</div>
		<div className="airline-name">{props.attributes.name}
		</div>
		<div className="airline-score">{props.attributes.avg_score}</div>
		<div className="airline-link">
			<a href={`/airines/${props.attributes.slug}`}>VIEW MORE</a>
		</div>
	</div>
)

}

export default AirlineCard
