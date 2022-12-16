import React from 'react';
import Layout from './layout';
import Card from './components/Card';
import Task from './components/Task';
import { cardInfo } from './data/cardInfo';

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const counterHandler = (event) => {
    const name = event.target.name;
    name === 'inc'
      ? setCounter(counter + 1)
      : !!counter && setCounter(counter - 1);
  };

  return (
    <Layout>
      <div className="row">
        <Task />
        <hr />
      </div>
      <div className="row">
        <div className="col">
          <h3>{counter}</h3>
          <button
            onClick={counterHandler}
            className="btn btn-primary"
            name="inc"
          >
            +
          </button>
          <button
            onClick={counterHandler}
            className="btn btn-danger"
            name="dec"
          >
            -
          </button>
        </div>
      </div>
      <div className="row row-cols-sm-2">
        {!!counter &&
          cardInfo.slice(0, counter).map((item) => (
            <Card
              key={item.id}
              counter={counter}
              title={item.title}
              detail={item.detail}
              counterHandler={counterHandler}
            >
              <h1>Ersen Gultepe</h1>
            </Card>
          ))}
      </div>
    </Layout>
  );
}
