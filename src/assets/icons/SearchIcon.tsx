import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgSearchIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" viewBox="0 0 26 26" {...props}>
    <Path
      d="M21.556 11.778a9.778 9.778 0 1 1-19.557 0 9.778 9.778 0 0 1 19.557 0v0ZM24 24l-5.317-5.317"
      stroke="#A0A0A0"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgSearchIcon);
export default Memo;
