"use client";

import { useQueryState } from "nuqs";

export function Basic() {
  const [name, setName] = useQueryState("name");

  return (
    <div>
      <input value={name || ''} onChange={e => setName(e.target.value)} className="border"/>
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || 'anonymous visitor'}!</p>
    </div>
  );
}