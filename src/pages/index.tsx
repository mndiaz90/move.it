import React, { useContext } from "react";
import 'font-awesome/css/font-awesome.min.css';

import { GetServerSideProps } from 'next'

import { ChallengeProvider } from "../contexts/ChallengeContext";
import Principal from "../pages/Principal";

interface HomeProps {
  level: number,
  user: string,
  password: string
}


export default function Home(props: HomeProps) {

  return (
    <ChallengeProvider level={props.level}>
      <Principal />
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level } = ctx.req.cookies
  return {
    props: {
      level: Number(level)
    }
  }
}
