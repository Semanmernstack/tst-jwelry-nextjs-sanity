import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: 'e5jx9yda',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2022-03-25', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source);
}