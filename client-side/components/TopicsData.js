import * as React from "react"
import { topicsURL } from "./api"

function TopicsList() {
  const [topics, setTopics] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    setLoading(true)
    fetch(topicsURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Request failed")
        }
        return response.json()
      })
      .then(data => setTopics(data))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return <div>An error has occurred: {error.message}</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <ul>
      {topics.map(topic => (
        <li key={topic.id}>
          <a href={topic.url}>{topic.title}</a>;
        </li>
      ))}
    </ul>
  )
}