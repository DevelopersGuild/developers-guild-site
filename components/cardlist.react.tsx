import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import LinkCard from "./linkcard.react";

type TProps = Readonly<{
  cards: ReadonlyArray<JSON>,
  fade?: boolean
}>

const CardList = ({ cards, fade = false }) => {
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
            icon={card.icon || null}
            description={card.description}
            fade={fade}
          />
        )
      })}
    </Container>
  );
}

export default CardList;