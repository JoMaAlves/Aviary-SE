import { useState } from "react"

export default function Temperature({temp}) {
  return (
    <div>
      <h1>Temperature</h1>
      <span>{temp}°C</span>
    </div>
  )
}
