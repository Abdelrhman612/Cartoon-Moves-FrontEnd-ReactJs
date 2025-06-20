interface Props {
  reviews: { content: string; userId: string }[];
}

const ReviewList = ({ reviews }: Props) => {
  return (
    <div>
      <h5>Reviews:</h5>
      {reviews.length === 0 && <p>No reviews yet</p>}
      <ul>
        {reviews.map((rev, index) => (
          <li key={index}>{rev.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
