import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary'
import React from 'react'
import { labels } from 'views/labels'
import { Section_Reviews, ShadowBg } from './SectionReviews.stylest'

const SectionReviews = (): JSX.Element => {
  return (
    <Section_Reviews id="section-reviews">
        <ShadowBg />
        <CenterHeadingSecondary headingText={labels.sectionReviews.heading}/>
    </Section_Reviews>
  )
}

export default SectionReviews