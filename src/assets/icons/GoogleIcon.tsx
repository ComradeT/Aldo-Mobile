import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgGoogleIcon = (props: SvgProps) => (
  <Svg width={15} height={16} fill="none" viewBox="0 0 15 16" {...props}>
    <Path
      d="m14.63 6.722-.077-.321H7.574v2.954h4.17a4.172 4.172 0 0 1-4.083 3.141 4.882 4.882 0 0 1-3.286-1.309 4.69 4.69 0 0 1-1.4-3.311A4.838 4.838 0 0 1 4.35 4.565a4.674 4.674 0 0 1 3.264-1.276 4.257 4.257 0 0 1 2.777 1.082l2.1-2.088a7.427 7.427 0 0 0-4.945-1.9 7.644 7.644 0 0 0-5.41 2.2 7.613 7.613 0 0 0-2.135 5.3 7.537 7.537 0 0 0 2.052 5.212 7.83 7.83 0 0 0 5.644 2.29 6.963 6.963 0 0 0 5.071-2.132 7.487 7.487 0 0 0 1.948-5.186c.006-.45-.023-.9-.087-1.345Z"
      fill="#fff"
    />
  </Svg>
);

const Memo = memo(SvgGoogleIcon);
export default Memo;
