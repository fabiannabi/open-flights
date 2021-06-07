import React from 'react'

const Header = (props) => {

const { name, image_url , avg_score} = props.attributes

const review = props.reviews.length

	return (
		<div className="header-wrapper">
			<h1 className="airline-name "><img src={image_url} alt={name}/>{name}</h1>
			<div>
				<div className="total-reviews">{ review } User reviews</div>
				<div className="star-rating">stars</div>
				<div className="total-out-of">{avg_score} out of 5</div>
			</div>
		</div>
	)
}

export default Header
