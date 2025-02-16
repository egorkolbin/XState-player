import { Button } from 'antd';
import React from 'react';

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick, icon }) => {
  return <Button onClick={onClick} shape='circle' icon={icon} />;
};
