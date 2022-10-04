import { request, gql } from "graphql-request";

const graphQLUrl = process.env.HYGRAPH_ENDPOINT_URL;

export const getVideosData = async () => {
  const query = gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        tags
        slug
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const result = await request(graphQLUrl, query);

  return result.videos;
};

export const getVideoDetailsData = async (slug) => {
  const query = gql`
    query ($slug: String!) {
      video(where: { slug: $slug }) {
        createdAt
        id
        title
        description
        seen
        tags
        slug
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const result = await request(graphQLUrl, query, { slug });

  return result.video;
};

export const getAccountsData = async () => {
  const query = gql`
    query {
      account(where: { id: "cl8st3m1a37xx0burdly4clke" }) {
        username
        id
        avatar {
          url
        }
      }
    }
  `;

  const result = await request(graphQLUrl, query);

  return result.account;
};
