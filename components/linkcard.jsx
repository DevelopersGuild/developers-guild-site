import React from 'react';
import { Container, Card } from 'react-bootstrap'

const LinkCard = ({ className, link, image, title, description, handleClick }) => {
  return (
    <Card
      className={className}
      variant="Dark"
      onClick={() => handleClick(link)}
    >
      <Container>
        {image ?
          <Card.Img
            src={image ? image : ""}
            alt={title}
          />
          : null}
        <Card.Body className="text-center">
          <Card.Title className="font-weight-bold">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default LinkCard;