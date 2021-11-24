import React from "react";
import Head from "next/head";
import { Box } from "@mui/system";
import { gql } from "@apollo/client";
import {
  Button,
  Grid,
  Hidden,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useTheme from "../global-store/useTheme";
import styles from "../styles/Home.module.css";

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

export default function Feeds() {
  const { mode, toggleMode } = useTheme((state) => state);

  return (
    <div>
      <Grid
        container
        justifyContent="space-evenly"
        className={styles.homeContainer}
      >
        <Hidden mdDown>
          <Grid xl={2} lg={2} md={3} item style={{ padding: "1rem" }}>
            <Typography variant="h6" style={{ fontWeight: 800 }} mb={2}>
              Remedy
            </Typography>
            <div>search</div>
            <div>my feed/home</div>
            <div>bookmarks/saved</div>
            <div>create post</div>
            <div>subscriptions</div>
            <div>drafts</div>
            <div>expolore search</div>
            <div>theme</div>
            <div>settings</div>
            <div>Ads</div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={toggleMode}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Grid>
        </Hidden>
        <Grid
          xl={6}
          lg={7}
          md={9}
          sm={10}
          xs={12}
          item
          style={{
            border: "1px solid #555",
            borderTop: "none",
            borderBottom: "none",
            padding: "1rem",
          }}
        >
          {" "}
          <Typography
            variant="h6"
            style={{
              minHeight: "80px",
              fontWeight: 800,
              border: "1px solid #555",
              padding: "1rem",
              borderRadius: "6px",
            }}
          >
            Create a Post here
          </Typography>
          <div
            style={{
              borderBottom: "1px solid #888",
              padding: "1rem",
              display: "flex",
            }}
          ></div>
          <div style={{ padding: "1rem", display: "flex" }}>
            {Array(5)
              .fill(0)
              .map((a: any) => (
                <div
                  key={Math.random()}
                  style={{
                    border: "1px solid #555",
                    padding: "5px 1rem",
                    height: "30px",
                    borderRadius: "20px",
                    margin: "10px",
                    fontSize: ".8rem",
                  }}
                >
                  #interest
                </div>
              ))}
          </div>
          {Array(10)
            .fill(0)
            .map((a: any) => (
              <div
                key={Math.random()}
                style={{
                  border: "1px solid #555",
                  padding: "1rem",
                  height: "180px",
                  margin: "1rem",
                  borderRadius: "6px",
                }}
              >
                blog post feeds
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a,
                velit ipsa quam quaerat exercitationem labore recusandae
                obcaecati mollitia nostrum vel deleniti voluptas, sint
                necessitatibus minus officia quidem magnam quis.
              </div>
            ))}
        </Grid>
        <Hidden lgDown>
          <Grid xl={4} lg={3} item style={{ padding: "1rem" }}>
            <div>notification{"     "} profile/logout</div>
            <Typography variant="h6" style={{ fontWeight: 800 }}>
              Tag, Feed Peoples...
            </Typography>
            <div>
              recent feeds
              <br />
              /reactions/likes/comments
            </div>
          </Grid>
        </Hidden>
      </Grid>
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
