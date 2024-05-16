import React, { FC } from 'react';
import './index.css';
import { getNameColor, splitName } from './helper';

export type AvatarProps = {
  size: number;
  textSize: number;
  nickName: string;
  borderRadius?: string;
  display?: string;
};

export const Avatar: FC<AvatarProps> = ({ size, textSize, nickName, borderRadius = "100%", display = "flex" }) => {
  const color = getNameColor(nickName);
  const [first, last] = splitName(nickName);
  return (
    <div
      className="fcr-avatar"
      style={{ width: size, display, height: size, background: color, fontSize: textSize, borderRadius }}>
      <span>{`${first}${last}`}</span>
    </div>
  );
};
