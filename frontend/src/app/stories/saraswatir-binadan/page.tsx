import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function SaraswatirBinadanStory() {
  const story = getStoryBySlug('saraswatir-binadan')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
