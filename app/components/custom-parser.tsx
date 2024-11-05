"use client"

import { createParser, useQueryState } from "nuqs"

export function CustomParser() {
  const parseAsStarRating = createParser({
    parse(queryValue) {
      const inBetween = queryValue.split('★')
      const isValid = inBetween.length > 1 && inBetween.every(s => s === '')
      if (!isValid) return null
      const numStars = inBetween.length - 1
      return Math.min(5, numStars)
    },
    serialize(value) {
      return Array.from({length: value}, () => '★').join('')
    }
  })

  const [rating, setRating] = useQueryState('rating', parseAsStarRating)

  return (
    <div className="border">
      Example of a custom parser
      {rating}
    </div>
  )
}