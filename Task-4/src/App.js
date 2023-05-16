import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.children}
  </button>
)

const Statistics = (props) => {
  if (props.buttonClicked === false) 
    return (
      <div>
        No feedback given
      </div>
    )
  else {
    return (
  <div>
    <h1>Statistics</h1>
    <p>total {props.total}</p>
    <p>average {props.average}</p>
    <p>positive {props.positive} %</p>
  </div>
  )}
  }
  

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)


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


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick}>good</Button>
      {good}
      <Button onClick={handleNeutralClick}>neutral</Button>
      {neutral}
      <Button onClick={handleBadClick}>bad</Button>
      {bad}
      {!buttonClicked && <h2>No feedback given</h2>}
      {buttonClicked && (
        <Statistics total={total} average={average} positive={positive} />
      )}
    </div>
  )
}

export default App