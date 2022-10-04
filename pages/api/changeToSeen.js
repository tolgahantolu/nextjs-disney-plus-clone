import { GraphQLClient } from "graphql-request";

export default async ({ body }, res) => {
  const url = process.env.HYGRAPH_ENDPOINT_URL;
  const hygraphcms = new GraphQLClient(url, {
    //prettier-ignore
    headers: { "Authorization" : `Bearer ${ process.env.HYGRAPH_TOKEN}`},
  });

  await hygraphcms.request(
    `
        mutation($slug: String!) {
          updateVideo(where: 
            { slug: $slug}, 
            data: { seen: true}
          ) {
            id,
            title,
            seen
          }
        }
        `,
    { slug: body.slug }
  );

  await graphcms.request(
    `mutation publishVideo($slug: String) {
        publishVideo(where: { slug: $slug}, to: PUBLISHED) {
            slug
            }
        }`,
    { slug: body.slug }
  );

  res.status(201).json({ slug: body.slug });
};
