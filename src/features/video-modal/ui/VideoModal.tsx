import { Modal } from 'antd';
import React from 'react';

import { VideoPlayer } from '@/entities/video/ui';
import { PlayerControls } from '@/shared/ui/PlayerControls';

interface VideoModalProps {
  visible: boolean;
  playing: boolean;
  defaultSize: boolean;
  onClose: () => void;
  onTogglePlayPause: () => void;
  onToggleSize: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  visible,
  playing,
  defaultSize,
  onClose,
  onTogglePlayPause,
  onToggleSize,
}) => {
  return (
    <Modal
      title='PLAYER'
      open={visible}
      onCancel={onClose}
      width={defaultSize ? 1000 : 500}
      footer={
        <PlayerControls
          playing={playing}
          togglePlayPause={onTogglePlayPause}
          defaultSize={defaultSize}
          toggleSize={onToggleSize}
        />
      }
    >
      <VideoPlayer
        playing={playing}
        url='https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8'
      />
    </Modal>
  );
};
