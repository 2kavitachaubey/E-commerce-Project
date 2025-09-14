import React from 'react'
import ArticleHeader from '@/components/ArticleHeader'
import Articlepost from '@/components/Articlepost'
import WellbeingSection from '@/components/WellbeingSection'
import Question from '@/components/Question'

const articles = () => {
  return (
    <div>
      <ArticleHeader/>
      <Articlepost/>
      <WellbeingSection/>
      <Question/>
    </div>
  )
}

export default articles
