import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgHomeIcon = (props: SvgProps) => (
  <Svg width={31} height={24} fill="none" viewBox="0 0 31 24" {...props}>
    <Path
      d="m15.022 6.226-9.878 8.135v8.785a.857.857 0 0 0 .857.854l6-.016a.857.857 0 0 0 .853-.857v-5.128a.857.857 0 0 1 .857-.857h3.429a.857.857 0 0 1 .857.857v5.124a.857.857 0 0 0 .857.86l6 .017a.857.857 0 0 0 .857-.857v-8.787l-9.869-8.13a.653.653 0 0 0-.82 0Zm15.6 5.53-4.479-3.692V.646A.643.643 0 0 0 25.5.003h-3a.643.643 0 0 0-.643.643v3.89l-4.8-3.947a2.572 2.572 0 0 0-3.268 0L.233 11.755a.643.643 0 0 0-.086.905l1.366 1.661a.642.642 0 0 0 .906.087l12.6-10.38a.653.653 0 0 1 .82 0l12.6 10.38a.642.642 0 0 0 .905-.086l1.366-1.661a.643.643 0 0 0-.091-.907l.003.002Z"
      fill="#333"
    />
  </Svg>
);

const Memo = memo(SvgHomeIcon);
export default Memo;
