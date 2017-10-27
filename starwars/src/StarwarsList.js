import React from 'react';
import './StarwarsList.css';

export const StarwarsList = (props) => {
	return (
		<div>
			{props.startwarsCharacter.map((starwarsChar) => {
				return (
					<div className="chracters-container chractersList__eachChar">
						<h3>{starwarsChar.name}</h3>
						<p>Birth Year: {starwarsChar.birth_year}</p>
						<p>Gender: {starwarsChar.gender}</p>
						<p>Eye Color: {starwarsChar.eye_color}</p>
						<p>Hair Color: {starwarsChar.hair_color}</p>
						<a href="{starwarsChar.homeworld}">Homeworld: {starwarsChar.homeworld}</a>
						<p>Films:</p>
						<div> {starwarsChar.films.map((film) => {
							return (
								<div><a href="{film}">Film</a></div>
							);
						})} 
						</div>
					</div>
				);
			})}
		</div>
	);
}