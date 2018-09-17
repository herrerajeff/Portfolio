import React from 'react';
import '../svg/icons.svg';

const Icon = props => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
);

export default Icon;
