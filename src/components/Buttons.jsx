import React from 'react';

import { Button } from './Button';

export const Buttons = ({ getVal }) => {
  const createButtons = () => {
    let buttons = [];
    const operators = ['+', '-', '*', '/'];
    for (let i = 0; i < 10; i++) {
      buttons.push(
        <Button btnType="number" setNum={getVal} key={i} val={i}></Button>
      );
    }
    let zero = buttons.shift();
    buttons.push(zero);
    operators.map(x =>
      buttons.push(
        <Button btnType="operator" key={x} setNum={getVal} val={x}></Button>
      )
    );
    return buttons;
  };
  return (
    <div id="btn-grid">
      {createButtons()}{' '}
      <button className="submitBtn" type="submit">
        =
      </button>
    </div>
  );
};
