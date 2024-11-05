"use client";

import { useQueryState, parseAsInteger } from 'nuqs'

export function Parse() {
  const [count, setCount] = useQueryState('count', parseAsInteger.withDefault(0))

  return (
    <div>
      <pre>count: {count}</pre>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* handling null values in setCount is annoying: */}
      <button onClick={() => setCount(c => c ?? 0 + 1)}>+</button>
      <button onClick={() => setCount(c => c ?? 0 - 1)}>-</button>
      <button onClick={() => setCount(null)}>Clear</button>
    </div>
  )
}