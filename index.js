'use strict';
const is727 = require('is-727');

export default function(value) {
  if (!is727(value)){
    return true
  } else {
    return false
  }
}
