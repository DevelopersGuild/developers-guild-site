import { useState, useEffect } from "react";

type QueryResponse = {
  readonly markdown: string;
  readonly loading: boolean;
  readonly error: Error | null;
};

function useMarkdown(path: string): QueryResponse {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      setLoading(true);
      fetch(path)
        .then((response) => response.text())
        .then((text) => {
          setMarkdown(text);
          setLoading(false);
        });
    } catch (error) {
      setError(error);
    }
  }, [path]);
  return {
    markdown,
    loading,
    error,
  };
}

export default useMarkdown;
