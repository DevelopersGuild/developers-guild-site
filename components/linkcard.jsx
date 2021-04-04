import React from 'react';
import { Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';

import cardStyles from "../styles/components/linkcard.module.css";

const createCard = ({ className, link, image, title, description, handleClick }) => {
  return (
    <Card
      className={cardStyles.linkcard + ' ' + className}
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

const LinkCard = (props) => {
  return (
    props.fade ?
      <Fade bottom>
        {createCard(props)}
      </Fade> :
      createCard(props)
  );
}

LinkCard.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}

LinkCard.defaultProps = {
  className: "",
  image: null,
  title: "Title",
  description: "Description",
}

export default LinkCard;