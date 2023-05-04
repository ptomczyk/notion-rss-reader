import { getNewFeedItems } from '@/getNewFeedItems.ts'
import { getFeedUrlList } from '@/getFeedUrlList.ts'
import { addFeedItems } from '@/addFeedItems.ts'

const feedUrlList = await getFeedUrlList()
feedUrlList.forEach(async (feedUrl: string) => {
  if (feedUrl) {
    try {
      const newFeedItems = await getNewFeedItems(feedUrl)
      await addFeedItems(newFeedItems)
    } catch (error) {
      // TODO: Provide some kind of bgh to the user.
      console.error('getFeedUrlList', error)
    }
  }
});
