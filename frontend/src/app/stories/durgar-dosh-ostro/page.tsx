import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function DurgarDoshOstroStory() {
  const story = getStoryBySlug('durgar-dosh-ostro')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
