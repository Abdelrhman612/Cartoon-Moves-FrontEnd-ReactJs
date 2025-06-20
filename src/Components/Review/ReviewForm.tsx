import React, { useState } from "react";

interface Props {
  onSubmit: (content: string) => void;
  loading: boolean;
}

const ReviewForm = ({ onSubmit, loading }: Props) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <textarea
        className="form-control mb-2"
        placeholder="Write a review"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" disabled={loading} className="btn btn-primary">
        {loading ? "Submitting..." : "Add Review"}
      </button>
    </form>
  );
};

export default ReviewForm;
