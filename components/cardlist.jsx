import React from 'react';
import { Container, Row } from 'react-bootstrap'

import GroupCard from "./groupcard"

const CardList = ({ cards }) => {
	return (
		<Container>
			{cards.map(card => {
				return (
					<Row
						key={card.title}
					>
						<GroupCard
							link={card.link}
							title={card.title}
							img={card.img || ""}
							description={card.description}
						/>
					</Row>
				)
			})}
		</Container>
	);
}

export default CardList;