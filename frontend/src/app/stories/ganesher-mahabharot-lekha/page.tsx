import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function GanesherMahabharotLekhaStory() {
  const story = getStoryBySlug('ganesher-mahabharot-lekha')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
