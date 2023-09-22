import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = ({ iconPrimary }: PathOptions) => (
  <g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 9C18.4772 9 14 13.4772 14 19V21C14 26.5228 18.4772 31 24 31C29.5228 31 34 26.5228 34 21V19C34 13.4772 29.5228 9 24 9ZM24 29C27.3137 29 30 26.3137 30 23C30 19.6863 27.3137 17 24 17C20.6863 17 18 19.6863 18 23C18 26.3137 20.6863 29 24 29ZM18 35.5C18 34.1193 19.1193 33 20.5 33H27.5C28.8807 33 30 34.1193 30 35.5C30 36.8807 28.8807 38 27.5 38H20.5C19.1193 38 18 36.8807 18 35.5ZM24 26C25.6569 26 27 24.6569 27 23C27 21.3431 25.6569 20 24 20C22.3431 20 21 21.3431 21 23C21 24.6569 22.3431 26 24 26Z"
      fill={iconPrimary}></path>
  </g>
);
export const viewBox = '0 0 48 48';
