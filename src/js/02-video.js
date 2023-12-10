import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('#vimeo-player');

player.on(
  'timeupdate',
  throttle(
    data => localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  )
);

const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
  player
    .setCurrentTime(storedTime)
}
