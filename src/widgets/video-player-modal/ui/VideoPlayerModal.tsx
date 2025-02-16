import { PlayCircleOutlined } from '@ant-design/icons';
import { useMachine } from '@xstate/react';

import { modalWithVideoMachine } from '@/entities/video/model/videoMachine.ts';
import { VideoModal } from '@/features/video-modal/ui';

export const VideoPlayerModal = () => {
  const [state, send] = useMachine(modalWithVideoMachine);

  const handleCancel = () => {
    send({ type: 'TOGGLE_PAUSE' });
    setTimeout(() => {
      send({ type: 'CLOSE_MODAL' });
    }, 100);
  };

  return (
    <>
      <div
        className='closed-modal'
        onClick={() => send({ type: 'OPEN_MODAL' })}
      >
        <PlayCircleOutlined className='playing-icon' />
      </div>
      <VideoModal
        visible={state.matches('opened')}
        playing={state.context.playingVideo}
        defaultSize={state.matches({ opened: { size: 'default' } })}
        onClose={handleCancel}
        onTogglePlayPause={() =>
          send({
            type: state.context.playingVideo ? 'TOGGLE_PAUSE' : 'TOGGLE_PLAY',
          })
        }
        onToggleSize={() =>
          send({
            type: state.matches({ opened: { size: 'default' } })
              ? 'TOGGLE_SMALLER'
              : 'TOGGLE_DEFAULT',
          })
        }
      />
    </>
  );
};
