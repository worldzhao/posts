import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";

import {
  CardContainer,
  CardHeader,
  CardCategory,
  CardReadingTime,
  CardDescription,
} from "./";

export const Card = ({ blog }) => {
  const [labels, setLabels] = useState([]);
  const history = useHistory();

  const openBlog = (title, number) => {
    history.push(`/post/${title}/${number}`);
  };

  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name !== "blog";
    });

    setLabels(labels);
  }, [blog.labels.nodes]);

  return (
    <CardContainer>
      <div onClick={() => openBlog(blog.title, blog.number)}>
        <h2 style={{ marginTop: "0.2em" }}>{blog.title}</h2>
        <CardHeader>
          <>
            {labels.map((value, i) => {
              return <CardCategory value={value} key={i} />;
            })}
          </>
        </CardHeader>
        <CardReadingTime time={readingTime(blog.body).minutes} />
        <CardDescription>{blog.bodyText}</CardDescription>
      </div>
    </CardContainer>
  );
};
