import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function PrithiviProdokshinStory() {
  const story = getStoryBySlug('prithivi-prodokshin')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
