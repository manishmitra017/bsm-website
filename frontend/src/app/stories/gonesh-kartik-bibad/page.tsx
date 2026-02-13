import StoryPageLayout from '@/components/StoryPageLayout'
import { getStoryBySlug } from '../storyData'

export default function GoneshKartikBibadStory() {
  const story = getStoryBySlug('gonesh-kartik-bibad')
  if (!story) return null
  return <StoryPageLayout story={story} />
}
