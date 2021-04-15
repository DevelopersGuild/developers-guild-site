import React from 'react';
import Head from 'next/head';

import { getAllGroupIds, getGroupData } from '../../lib/groups';

export const getStaticPaths = async () => {
  const paths = getAllGroupIds();
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const groupData = await getGroupData(params.group);
  return {
    props: {
      groupData
    }
  }
}

const Group = ({ groupData }) => {
  return (
    <>
      <Head>
        <title>{groupData.title}</title>
      </Head>
      <article>
        <h1 className="text-center">{groupData.title}</h1>
        <div dangerouslySetInnerHTML={{__html: groupData.HtmlContent}} />
      </article>
    </>
  )
}

export default Group