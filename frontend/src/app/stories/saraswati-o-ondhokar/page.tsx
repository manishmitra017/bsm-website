import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function SaraswatiOOndhokarStory() {
  const story = getStoryBySlug('saraswati-o-ondhokar')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
