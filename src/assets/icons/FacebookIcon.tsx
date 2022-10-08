import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgFacebookIcon = (props: SvgProps) => (
  <Svg width={9} height={15} fill="none" viewBox="0 0 9 15" {...props}>
    <Path
      d="m8.072 8.477.414-2.7H5.9V4.028A1.349 1.349 0 0 1 7.418 2.57H8.6V.272A14.355 14.355 0 0 0 6.506.09 3.294 3.294 0 0 0 2.98 3.722v2.057H.609v2.7h2.37V15H5.9V8.477h2.173Z"
      fill="#fff"
    />
  </Svg>
);

const Memo = memo(SvgFacebookIcon);
export default Memo;
