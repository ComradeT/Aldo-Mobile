import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgFavoriteIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M23.962 9.691a.774.774 0 0 0-.634-.528l-7.4-.987L12.7 1.44a.774.774 0 0 0-1.4 0L8.076 8.179l-7.4.987a.774.774 0 0 0-.431 1.328l5.41 5.15L4.3 22.987a.774.774 0 0 0 1.13.821L12 20.254l6.57 3.553a.774.774 0 0 0 1.13-.821l-1.35-7.345 5.41-5.15a.774.774 0 0 0 .202-.8Z"
      fill="#A0A0A0"
    />
  </Svg>
);

const Memo = memo(SvgFavoriteIcon);
export default Memo;
