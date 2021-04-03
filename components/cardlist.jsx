import React from 'react';
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import LinkCard from "./linkcard"

const CardList = ({ cards }) => {
  const router = useRouter()

  const handleClick = (link) => {
    router.push(link)
  }

  return (
    <Container>
      {cards.map(card => {
        return (
          <LinkCard
            className="linkcard my-5"
            handleClick={handleClick}
            link={card.link}
            title={card.title}
            image={card.image || ""}
            description={card.description}
          />
        )
      })}
    </Container>
  );
}

export default CardList;