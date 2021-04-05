import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import LinkCard from "./linkcard"

const CardList = ({ cards, fade }) => {
  const router = useRouter()

  const handleClick = (link) => {
    router.push(link)
  }

  return (
    <Container>
      {cards.map(card => {
        return (
          <LinkCard
            key={card.link}
            className="my-5"
            handleClick={handleClick}
            link={card.link}
            title={card.title}
            image={card.image || ""}
            description={card.description}
            fade={fade}
          />
        )
      })}
    </Container>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(Object).isRequired,
  fade: PropTypes.bool,
}

CardList.defaultProps = {
  fade: false,
}

export default CardList;