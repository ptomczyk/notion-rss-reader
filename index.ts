import { getNewFeedItems } from '@/getNewFeedItems.ts'
import { getFeedUrlList } from '@/getFeedUrlList.ts'
import { addFeedItems } from '@/addFeedItems.ts'

import dotenv from 'dotenv'
dotenv.config()

const feedUrlList = await getFeedUrlList()
feedUrlList.forEach(async (feedUrl: string) => {
  if (feedUrl) {
    try {
      const newFeedItems = await getNewFeedItems(feedUrl)
      await addFeedItems(newFeedItems)
    } catch (error) {
      // TODO: Provide some kind of notification to the user.
      console.error(error)
    }
  }
})
