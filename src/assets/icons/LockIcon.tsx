import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgLockIcon = (props: SvgProps) => (
  <Svg width={14} height={16} fill="none" viewBox="0 0 14 16" {...props}>
    <Path
      d="M12.5 7h-.75V4.75a4.75 4.75 0 1 0-9.5 0V7H1.5A1.5 1.5 0 0 0 0 8.5v6A1.5 1.5 0 0 0 1.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 7ZM9.25 7h-4.5V4.75a2.25 2.25 0 1 1 4.5 0V7Z"
      fill="#333"
    />
  </Svg>
);

const Memo = memo(SvgLockIcon);
export default Memo;
