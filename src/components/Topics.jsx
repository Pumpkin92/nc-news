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
  }, [setTopic]);

  return (
    <section>
      <select
        value={currentTopic}
        onChange={(event) => {
          setTopic(event.target.value);
          setCurrentTopic(event.target.value);
        }}
      >
        <option value="all">All Topics</option>
        {topics.map((topic, index) => {
          return (
            <option value={topic.slug} key={index}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </section>
  );
}
