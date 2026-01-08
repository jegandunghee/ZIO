import "./Clock.scss";
import Select from 'react-select'
import React, { useState } from 'react';

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const Clock = () => {
  const [isClearable, setIsClearable] = useState(true);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla2', label: 'Vanilla2' },
    { value: 'vanilla3', label: 'Vanilla3' },
    { value: 'vanilla4', label: 'Vanilla4' }
  ];

    <Select options={options} />

  return (
    <section id='clock'>
      <div className='in-time'>
        <p>입차 시간</p>
        <Select
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={options[0]}
          isClearable={isClearable}
          name="color"
          options={options}
        />
      </div>
      <div className='out-time'>
        <p>출차 시간</p>
        <Select
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={colourOptions[0]}
          isClearable={isClearable}
          name="color"
          options={options}
        />
      </div>
    </section>
  )
}

export default Clock