import React, { useState } from "react";

const Statistics = ({ text, value }) => {
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
};

const Total = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <Statistics text="good" value={good} />
      <Statistics text="bad" value={bad} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => {
    setGood(good + 1);
  };

  const handleNeutralButton = () => {
    setNeutral(neutral + 1);
  };

  const handleBadButton = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (100 * good) / total;

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGoodButton}>good</button>
        <button onClick={handleNeutralButton}>neutral</button>
        <button onClick={handleBadButton}>bad</button>
      </div>
      <h2>statistics</h2>
      <Total good={good} neutral={neutral} bad={bad} />

      {/* Add similar lines for neutral and bad statistics */}
    </div>
  );
};

export default App;
