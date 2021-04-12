import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

import SaferLink from "../../components/SaferLink.react"

const InterviewPrep = ({ gallery }) => {
  return (
    <>
      <h2 className="mt-4">Interview Prep</h2>
      <hr style={{ backgroundColor: "white" }} />
      <h3>Leaders</h3>
      <ul>
        <li>Tung Dao</li>
        <li>Seth</li>
        <li>Jesse Lutan</li>
      </ul>
      <h3>Weekly Meeting</h3>
      <p>
        Fridays 1:30 - 4pm (might change) in the{' '}
        <SaferLink
          className="text-info"
          href="https://discord.gg/BpaFS4h"
        >
          Discord
            </SaferLink>
        {' '}server
        </p>
      <h3>Description</h3>
      <p>
        Interview prep is a career-oriented group focused on preparing for technical interview questions. If you are a career-minded developer looking to get a head start on landing internships and jobs with tech companies, then this is the place to be!
				</p>
      <p>
        It is recommended for new members to have experience coding in at least one language, and very basic knowledge of object-oriented programming. Many of the topics we cover are similar to those taught in CIS 22C at De Anza. These include
				</p>
      <ul>
        <li>Linked Lists</li>
        <li>Big-O Notation</li>
        <li>Stacks and Queues</li>
        <li>Hashtables and Hashsets</li>
        <li>Sorting Algorithms</li>
        <li>Trees and Graphs</li>
      </ul>
      <p>
        We explain these topics enough to start solving some basic coding problems that are often brought up in real interviews.
				</p>
      <h3>Gallery</h3>
      {gallery.map(image =>
        <Image
          key={image.title}
          src={image.src}
          width={640}
          height={360}
          alt={image.title}
        />
      )}
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      gallery: [
        {
          title: "Fall 2020 Day 5",
          src: "/images/groups/interprep/10-30-2020.png"
        },
        {
          title: "Winter 2021 Day 1",
          src: "/images/groups/interprep/1-29-2021.png"
        }
      ]
    },
  };
};

export default InterviewPrep;