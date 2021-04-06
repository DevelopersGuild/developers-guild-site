import React from 'react';
import Image from 'next/image';
import { StyleSheet, css } from 'aphrodite';
import { Container, Card } from 'react-bootstrap';
import Fade from 'react-reveal';

type TProps = Readonly<{
  className?: string,
  link: string,
  icon?: string,
  title?: string,
  description?: string,
  handleClick: (string) => void,
}>

const createCard = ({ className, link, icon, title = "Title", description = "Description", handleClick }: TProps) => {
  return (
    <Card
      className={css(styles.linkcard) + ' ' + className}
      bg="dark"
      onClick={() => handleClick(link)}
    >
      <Container>
        <Card.Body className="text-center">
          {icon ?
            <Image
              className={`${css(styles.icon)} py-3`}
              src={icon}
              width={65}
              height={65}
            />
            : null}
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
  },
  icon: {
    filter: 'saturate(0) invert(1)',
    display: 'inline-block',
  }
})

export default LinkCard;