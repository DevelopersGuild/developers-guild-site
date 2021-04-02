import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Card } from 'react-bootstrap'

const GroupCard = ({ link, img, title, description }) => {
	return (
		<Link
			href={link}
		>
			<a>
				<Card variant='Dark'>
					{img ?
						<Image
							src={img ? img : ""}
							alt={title}
						/>
						: null}
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</Card.Body>
				</Card>
			</a>
		</Link>
	);
}

export default GroupCard;