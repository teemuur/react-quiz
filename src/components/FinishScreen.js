export default function FinishScreen({ points, maxPossiblePoints, highScore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        Your result is {points} / {maxPossiblePoints} - {Math.ceil(percentage)}%
      </p>
      <p>(HighScore: {highScore} points)</p>
    </>
  );
}
