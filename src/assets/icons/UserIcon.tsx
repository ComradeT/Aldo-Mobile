import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgUserIcon = (props: SvgProps) => (
  <Svg width={15} height={16} fill="none" viewBox="0 0 15 16" {...props}>
    <Path
      d="M7.16 0a4.219 4.219 0 1 0 0 8.438A4.219 4.219 0 0 0 7.16 0ZM14.112 12.459a6.772 6.772 0 0 0-5.645-3.021H5.852a6.771 6.771 0 0 0-5.645 3.021l-.08.118V16h14.064v-3.423l-.08-.118Z"
      fill="#333"
    />
  </Svg>
);

const Memo = memo(SvgUserIcon);
export default Memo;
