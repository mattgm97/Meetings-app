import { Fragment } from 'react';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';
import mongoDBConnector from '../helpers/mongoDBConnector'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}


export async function getServerSideProps() {
  // fetch data from an API

  const {meetupsCollection, client} = await mongoDBConnector()

  const meetups = await meetupsCollection.find().toArray();
  

  client.close();

  return {
    props: {
      meetups: meetups.reverse().map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    }
  };
}

export default HomePage;
