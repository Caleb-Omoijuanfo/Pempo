import React from 'react';

import ErrorImage from '../../assets/img/error.svg';
import './error.css';

function Error (props) {
	return (
		<div className="error-container">
			<img src={ErrorImage} style={{ width: `${props.imageWidth}`, height: `${props.imageHeight}` }} className="error-image" />
			<p style={{ textAlign: "center" }}>{props.errorMessage}</p>
		</div>
	)
}

Error.defaultProps = {
	imageWidth: "70%",
	imageHeight: "70%",
	errorMessage: "Something went wrong. Check that you have internet connection"
}

export default Error;