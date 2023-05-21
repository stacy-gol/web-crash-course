import { useState } from 'react'
import "./styles.css";

const Button = (props) => (
  <button className='button' onClick={props.onClick}>
    {props.children}
  </button>
)

const Statistics = (props) => {
  if (props.buttonClicked === false) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
      <tbody>
        {props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.text}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [maxVoteIndex, setMaxVoteIndex] = useState(0)
  const data = [
    { text: "good", value: good },
    { text: "neutral", value: neutral },
    { text: "bad", value: bad },
    { text: "total", value: total },
    { text: "average", value: average },
    { text: "positive", value: positive },
  ];
  
  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const total = updatedGood + neutral + bad
    setTotal(total)
    setAverage((updatedGood * 1 + neutral * 0 + bad * -1) / total)
    setPositive(updatedGood / total * 100)
    setButtonClicked(true)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const total = updatedNeutral + good + bad
    setTotal(total)
    setAverage((updatedNeutral * 0 + good * 1 + bad * -1) / total)
    setPositive(good / total * 100)
    setButtonClicked(true)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const total = updatedBad + good + neutral
    setTotal(total)
    setAverage((updatedBad * -1 + neutral * 0 + good * 1) / total)
    setPositive(good / total * 100)
    setButtonClicked(true)
  }

  const chooseAnecdote = () => {
  const selected = Math.floor(Math.random() * anecdotes.length)
  setSelected(selected)
  }
 

  const voteForAnecdote = () => {
  const copy = [...points]
  const indexSelected = selected;
  copy[indexSelected]++;
  setPoints(copy)
  const maxVotes = Math.max(...copy)
  const indexMax = copy.findIndex((element) => element === maxVotes)
  setMaxVoteIndex(indexMax)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick}>good</Button>
      {good}
      <Button onClick={handleNeutralClick}>neutral</Button>
      {neutral}
      <Button onClick={handleBadClick}>bad</Button>
      {bad}
      <Statistics data={data} buttonClicked={buttonClicked} />
      <h2>anecdote of the day</h2>
      {anecdotes[selected]}
      <Button onClick={chooseAnecdote}>next anecdote</Button>
      <Button onClick={voteForAnecdote}>vote</Button>
      <p>has {points[selected]} votes</p>
      <h2>anecdote with most votes</h2>
      {anecdotes[maxVoteIndex]}
    </div>
  )
}

export default App