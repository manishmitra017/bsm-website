import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function MahishasurBodhStory() {
  const story = getStoryBySlug('mahishasur-bodh')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
