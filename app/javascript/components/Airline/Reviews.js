import React, {Fragment} from 'react'

const ReviewsCards =(props) => {

	const reviewCard =  props.attributes.map((review)=>{
		return (
			<Fragment key={review.attributes.title}>
				<div className="rating-container-card">
					<div className="rating-score">
						{review.attributes.score}
						<span className="star-review-card">★</span>
					</div >
					<div className="rating-title-card">
						{review.attributes.title}
					</div>
					<div className="rating-description">
						{review.attributes.description}
					</div>
				</div>
			</Fragment>
		)
	})

	return(
		<div>
			{reviewCard}
		</div>
	)
}

export default ReviewsCards
