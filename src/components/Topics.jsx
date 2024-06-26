import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useSearchParams } from "react-router-dom";

export default function Topics({ setTopic, queryTopic }) {
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState();

  useEffect(() => {
    if (queryTopic) {
      setCurrentTopic(queryTopic);
    }
    getTopics().then(({ data }) => {
      const topics = data.topics;
      setTopics(topics);
    });
  }, [setCurrentTopic]);

  return (
    <section className="topic-section">
      <label className="topic-label">Topics: </label>
      <select
        className="topic-options"
        value={currentTopic}
        onChange={(event) => {
          setTopic(event.target.value);
          setCurrentTopic(event.target.value);
        }}
      >
        <option value="">All Topics</option>
        {topics.map((topic, index) => {
          const capitalisedTopic =
            topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1);
          return (
            <option value={topic.slug} key={index}>
              {capitalisedTopic}
            </option>
          );
        })}
      </select>
    </section>
  );
}
