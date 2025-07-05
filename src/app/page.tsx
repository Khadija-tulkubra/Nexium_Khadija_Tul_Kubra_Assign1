'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { quotes } from './quotes';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function Home() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleSearch = () => {
    const matched = quotes.filter(q =>
      q.topic.toLowerCase() === topic.toLowerCase()
    ).slice(0, 3)
    setResults(matched.map(m => m.text))
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-100 via-white to-pink-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 text-center">
       Motivational Quote Generator 
      </h1>

      <div className="flex gap-2 mb-4">
       <Select onValueChange={setTopic}>
  <SelectTrigger className="w-72 shadow-md">
    <SelectValue placeholder="Select a topic" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="success">Success</SelectItem>
    <SelectItem value="focus">Focus</SelectItem>
    <SelectItem value="discipline">Discipline</SelectItem>
    <SelectItem value="leadership">Leadership</SelectItem>
    <SelectItem value="confidence">Confidence</SelectItem>
  </SelectContent>
</Select>

        <Button onClick={handleSearch}>Get Quotes</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        {results.length > 0 ? results.map((quote, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:scale-[1.02] transition">
            <p className="text-gray-700 italic">“{quote}”</p>
          </div>
        )) : (
          topic && (
            <p className="text-gray-500">No quotes found for <strong>{topic}</strong>.</p>
          )
        )}
      </div>
    </main>
  )
}
