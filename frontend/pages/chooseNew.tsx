import Head from "next/head";
import Link from "next/link";
import React from "react";
import MainLayout from '../components/MainLayout'

type Props = {};

// this page will contain the choice of the user to create a new project
// or to create a Card for his profile

const chooseNew = (_props: Props) => {
  return (
    <>
          <Head>
        <title>TeamMateW3</title>
        <meta name="description" content="Book your Event here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>Welcome. Choose a Card</p>
      </div>
      <div>
        <Link href="/project/createProject">
            <p>Create a new Project Card</p>
        </Link>
      </div>
      <div>
        <p>Create a new Availability Card</p>
      </div>
    </>
  );
};
chooseNew.PageLayout = MainLayout;

export default chooseNew;
