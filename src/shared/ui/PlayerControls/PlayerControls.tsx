import {
  ArrowsAltOutlined,
  CaretRightFilled,
  PauseOutlined,
  ShrinkOutlined,
} from '@ant-design/icons';
import React from 'react';

import { IconButton } from '@/shared/ui/IconButton';

interface PlayerControlsProps {
  playing: boolean;
  togglePlayPause: () => void;
  defaultSize: boolean;
  toggleSize: () => void;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  playing,
  togglePlayPause,
  defaultSize,
  toggleSize,
}) => {
  return (
    <>
      <IconButton
        onClick={toggleSize}
        icon={defaultSize ? <ShrinkOutlined /> : <ArrowsAltOutlined />}
      />

      <IconButton
        onClick={togglePlayPause}
        icon={playing ? <PauseOutlined /> : <CaretRightFilled />}
      />
    </>
  );
};
