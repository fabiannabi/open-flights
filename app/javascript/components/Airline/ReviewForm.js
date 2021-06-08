import React, {Fragment} from 'react'

const ReviewForm = (props) => {

	const ratingOptions = [ 5,4,3,2,1].map((score, index)=>{
		return(	<Fragment>
				<input type="radio"
					value={score}
					name="rating"
					defaultChecked={props.review.score == score}
					onClick={props.setRating.bind(this, score)}
					id={`rating-${score}`}/>
				<div className="star" onClick={props.setRating.bind(this, score)}>{`${score}★`}</div>
			</Fragment>
		)
	})

	console.log(props.review.score)

	return(
		<div className="form-wrapper">
			<form onSubmit={props.handleSubmit}>
				<div className="headline">
					Have an expirience with {props.attributes.name} ? Share your review!
				</div>
				<div className="field">
					<input onChange={props.handleChange} defaultValue={ props.review.title } type="text" name="title" placeholder="Review Title"/>
				</div>
				<div className="field">
					<input onChange={props.handleChange} defaultValue={ props.review.description } type="text" name="description" placeholder="Review Description"/>
				</div>
				<div className="field">
					<div className="rating-container">
						<div className="rating-title">Rate this Airline</div>
						<div className="raiting-box">
						{ratingOptions}
						</div>
						<div className="rating-stars">Your rating {props.review.score}<span className="star-review">★</span></div>
					</div>
				</div>
				<button className="submit" type="submit"> Sumbmit your review!</button>
			</form>
		</div>
	)
}

export default ReviewForm
