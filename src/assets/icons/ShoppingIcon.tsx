import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgShoppingIcon = (props: SvgProps) => (
  <Svg width={26} height={25} fill="none" viewBox="0 0 26 25" {...props}>
    <Path
      d="M11.137 21.5a1 1 0 1 1-1-.96.981.981 0 0 1 1 .96v0ZM22.137 21.5a1 1 0 1 1-1-.96.981.981 0 0 1 1 .96v0ZM2.137 1.54h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.6-8.39h-17"
      stroke="#333"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgShoppingIcon);
export default Memo;
