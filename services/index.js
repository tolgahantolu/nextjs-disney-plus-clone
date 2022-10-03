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
