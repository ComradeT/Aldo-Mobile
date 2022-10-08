import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgBurgerIcon = (props: SvgProps) => (
  <Svg width={24} height={20} fill="none" viewBox="0 0 24 20" {...props}>
    <Path
      d="M1 9.754h22M1 1h22M1 18.508h22"
      stroke="#333"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgBurgerIcon);
export default Memo;
