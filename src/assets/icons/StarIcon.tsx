import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgStarIcon = (props: SvgProps) => (
  <Svg width={17} height={16} fill="none" viewBox="0 0 17 16" {...props}>
    <Path
      d="M16.977 5.796a.469.469 0 0 0-.378-.32l-4.96-.72L9.419.26a.469.469 0 0 0-.84 0L6.36 4.756l-4.961.72a.469.469 0 0 0-.26.8l3.589 3.5-.847 4.94a.469.469 0 0 0 .68.495L9 12.877l4.436 2.329a.468.468 0 0 0 .68-.494l-.847-4.94 3.589-3.5a.47.47 0 0 0 .119-.476Zm-4.54 3.48a.468.468 0 0 0-.134.415l.728 4.247-3.813-2.006a.469.469 0 0 0-.436 0l-3.814 2.005L5.7 9.69a.47.47 0 0 0-.135-.415l-3.09-3.007 4.265-.62a.47.47 0 0 0 .353-.256L9 1.528l1.907 3.864a.469.469 0 0 0 .353.256l4.264.62-3.086 3.008Z"
      fill="#000"
    />
  </Svg>
);

const Memo = memo(SvgStarIcon);
export default Memo;
