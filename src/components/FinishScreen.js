export default function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        Your result is {points} / {maxPossiblePoints} - {Math.ceil(percentage)}%
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
