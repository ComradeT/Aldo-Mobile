import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgGridIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" viewBox="0 0 18 18" {...props}>
    <Path
      d="M1 1h6.222v6.222H1V1ZM10.778 1H17v6.222h-6.222V1ZM10.778 10.778H17V17h-6.222v-6.222ZM1 10.778h6.222V17H1v-6.222Z"
      stroke="#333"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgGridIcon);
export default Memo;
