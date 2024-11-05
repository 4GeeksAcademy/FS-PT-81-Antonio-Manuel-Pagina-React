
import PropType from "prop-types";

import React from "react";



export const Card = () => {
	return (
		<div class="card" style={{ width: "19rem" }}>
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</p>
				<a href="#" class="btn btn-info">Find out more!</a>
			</div>
		</div>
		
	);
};