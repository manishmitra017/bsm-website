import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function GanesherGajanonStory() {
  const story = getStoryBySlug('ganesher-gajanon')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
