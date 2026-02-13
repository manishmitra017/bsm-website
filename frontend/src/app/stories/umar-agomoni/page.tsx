import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function UmarAgomoniStory() {
  const story = getStoryBySlug('umar-agomoni')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
