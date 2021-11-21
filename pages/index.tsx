import React from "react";
import Head from "next/head";
import { Box } from "@mui/system";
import { gql } from "@apollo/client";
import { Button, Grid, Hidden, TextField, Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import QuoteCarousel from "../components/QuoteCarousel";
import Link from "next/link";

import Login from '../components/Login'

import styles from "./Homepage.module.css";

const FetchPosts = gql`
  query GetPosts {
    getPosts {
      id
      post
      user {
        username
        id
      }
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}

export async function getStaticProps() {
  // const { data } = await client.query({
  //   query: FetchPosts,
  // });

  return {
    props: {
      //     countries: data,
    },
  };
}
