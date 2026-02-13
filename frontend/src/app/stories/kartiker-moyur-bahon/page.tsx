import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function KartikerMoyurBahonStory() {
  const story = getStoryBySlug('kartiker-moyur-bahon')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
