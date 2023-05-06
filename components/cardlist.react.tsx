import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import LinkCard from "./linkcard.react";

type Props = Readonly<{
  fade?: boolean
  cards: ReadonlyArray<CardProps>,
  cardStyle?: Readonly<JSON>
}>

type CardProps = Readonly<{
  link: String,
  title?: String,
  icon?: String,
  description?: String,
}>;

const CardList = ({ fade = false, cards, cardStyle }: Props) => {
  const router = useRouter()

  const handleClick = (link) => {
    router.push(link)
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      {cards.map(card => {
        return (
          <LinkCard
            key={card.link}
            className={`my-4 ${cardStyle}`}
            handleClick={handleClick}
            link={card.link}
            title={card.title}
            icon={card.icon || null}
            description={card.description}
          />
        )
      })}
    </Container>
  );
}

export default CardList;