import BrandStoryHero from '../../components/brand-story/brand-story-hero.jsx'
import BrandStoryOrigin from '../../components/brand-story/brand-story-origin.jsx'
import BrandStoryPhilosophy from '../../components/brand-story/brand-story-philosophy.jsx'
import BrandStoryValues from '../../components/brand-story/brand-story-values.jsx'
import BrandStoryCTA from '../../components/brand-story/brand-story-cta.jsx'

function BrandStory() {
  return (
    <div className="w-full">
      <BrandStoryHero />
      <BrandStoryOrigin />
      <BrandStoryPhilosophy />
      <BrandStoryValues />
      <BrandStoryCTA />
    </div>
  )
}

export default BrandStory
