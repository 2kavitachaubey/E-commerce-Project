import React from 'react'
import ArticleHeader from '@/components/ArticleHeader'
import WellbeingSection from '@/components/WellbeingSection'
import Question from '@/components/Question'

const articles = () => {
  return (
    <div>
      <ArticleHeader/>
      <WellbeingSection/>
      <Question/>
    </div>
  )
}

export default articles
