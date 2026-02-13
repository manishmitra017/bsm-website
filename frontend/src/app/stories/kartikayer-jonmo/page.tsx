import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function KartikayerJonmoStory() {
  const story = getStoryBySlug('kartikayer-jonmo')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
