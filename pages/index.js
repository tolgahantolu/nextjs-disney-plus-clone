import { GraphQLClient, gql } from "graphql-request";
import { getVideosData } from "../services";

const graphQLUrl = process.env.HYGRAPH_ENDPOINT_URL;
const graphQLToken = process.env.HYGRAPH_TOKEN;

export default function Home({ videos }) {
  console.log(videos);
  return <div>hellooğğğ</div>;
}

export async function getStaticProps() {
  const videos = (await getVideosData()) || [];

  return {
    props: {
      videos,
    },
  };
}
