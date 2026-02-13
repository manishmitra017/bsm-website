import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function HatekhariStory() {
  const story = getStoryBySlug('hatekhari')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
