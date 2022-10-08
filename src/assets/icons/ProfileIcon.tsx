import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgProfileIcon = (props: SvgProps) => (
  <Svg width={19} height={24} fill="none" viewBox="0 0 19 24" {...props}>
    <Path
      d="M19 21.326a12.491 12.491 0 0 0-2.7-7.877 8.234 8.234 0 0 0-12.9 0 12.488 12.488 0 0 0-2.7 7.868 22.298 22.298 0 0 0 9.151 2.333A20.361 20.361 0 0 0 19 21.326Z"
      fill="#A0A0A0"
    />
    <Path d="M9.848 9.503a4.576 4.576 0 1 0 0-9.152 4.576 4.576 0 0 0 0 9.152Z" fill="#A0A0A0" />
  </Svg>
);

const Memo = memo(SvgProfileIcon);
export default Memo;
