import React from 'react';
import {Account} from 'stellar-sdk';
import PickerError from './PickerError';
import _ from 'lodash';

export default function(props) {
  let {value, onUpdate} = props;
  return <div>
    <input type="text"
      value={value}
      placeholder={props.placeholder || 'Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG'}
      onChange={(event) => {
        onUpdate(event.target.value);
      }}
      className="picker picker--textInput" />
    <PickerError message={validator(value)} />
  </div>
}

function validator(value) {
  if (!_.isString(value) || value.length === 0) {
    return;
  }
  if (!Account.isValidAccountId(value)) {
    return 'Public key is invalid.';
  }
}
