import { useState, useEffect } from "react";

type TQueryResponseError = Error | null;
type TQueryResponse = {
  markdown: string;
  loading: boolean;
  error: TQueryResponseError;
};

export default function useMarkdown(path: string): TQueryResponse {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(path)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => setError(error));
    setLoading(false);
  }, [path]);
  return { markdown, loading, error };
}
