import React from 'react';

const multiDivHandler = {
  '*': '×',
  '/': '÷'
};

export const Button = ({ val, setNum, btnType }) => {
  return (
    <button
      type="button"
      className={btnType === 'operator' ? 'operator-btn' : 'btn'}
      onClick={() => setNum(val)}
    >
      {multiDivHandler[val] === undefined ? val : multiDivHandler[val]}
    </button>
  );
};
