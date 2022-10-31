import { Client } from '@notionhq/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any

export const getFeedUrlList = async () => {
  console.log((Deno.env.get("NOTION_KEY") ?? "undefined").slice(0, 4))
  const notion = new Client({ auth: Deno.env.get("NOTION_KEY") })
  const databaseId = Deno.env.get("NOTION_FEEDER_DATABASE_ID") || ''

  const response = await notion.databases.query({
    database_id: databaseId,
  })

  const feedUrlList = response.results.filter(
    (result: TODO) => result.properties.Enable.checkbox
  )

  return feedUrlList.map((result: TODO) => result.properties.Link.url as string)
}
