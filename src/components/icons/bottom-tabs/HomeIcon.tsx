import React from 'react';
import { SvgXml } from 'react-native-svg';
import Props from './types/Props';

const HomeIcon = ({ color, fill }: Props) => {
  return (
    <SvgXml
      xml={
        fill
          ? `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2386_636" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_2386_636)">
              <path d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z" fill="${color}"/>
            </g>
          </svg>
          `
          : `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2386_650" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_2386_650)">
              <path d="M5.99997 18.9999H9.34615V13.0576H14.6538V18.9999H18V9.99989L12 5.48066L5.99997 9.99989V18.9999ZM4.5 20.4999V9.24991L12 3.60571L19.5 9.24991V20.4999H13.1538V14.5575H10.8461V20.4999H4.5Z" fill="${color}"/>
            </g>
          </svg>
      `
      }
    />
  );
};

export default HomeIcon;
