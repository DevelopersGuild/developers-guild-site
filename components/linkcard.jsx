import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';

const createCard = ({ className, link, image, title, description, handleClick }) => {
  return (
    <Card
      className={css(styles.linkcard) + ' ' + className}
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
      <Fade left>
        {createCard(props)}
      </Fade> :
      createCard(props)
  );
}

const styles = StyleSheet.create({
  linkcard: {
    ':hover': {
      cursor: 'pointer',
      filter: 'brightness(1.25)',
      transform: 'scale(1.1)'
    }
  }
})

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