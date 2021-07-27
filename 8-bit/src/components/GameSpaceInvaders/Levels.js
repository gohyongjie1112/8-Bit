//Settings for the game levels
export const LEVELS = [
  {
    context: null,
    currentScore: 0,
    topScore: localStorage['topscore'] || 0,
    inGame: false,
    pause: false,
    fuse: false,
    animate: 0,
    difficult: 0,
    steps: 0,
    nextRow: 5,
    animateDir: 'right',
    maxAlienRight: 0,
    maxAlienLeft: Infinity,
    alienLaserFuse: false,
    screen: 'start',
    keys: {
      left: 0,
      right: 0,
      up: 0,
      down: 0,
      space: 0,
      p: 0,
    },
    user: {
      pos: {
        x: 135,
        padding: 20,
      },
      explode: false,
      show: false,
      width: 40,
      height: 40,
    },
    laser: {
      width: 5,
      height: 10,
      speed: 3,
      alienWidth: 5,
      alienHeight: 10,
      alienSpeed: 3,
    },
    settings: {
      sensitivity: 10,
      animateDelay: 70,
      //Canvas size
      width: 800,
      height: 600,
    },
    alien: {
      startPos: {
        left: 150,
        top: 50,
      },
      movement: {
        side: 10,
        down: 40,
        left: 20,
        right: 20,
      },
      width: 40,
      height: 40,
      padding: 5,
      row: 11,
      column: 5,
    },
  },
  {
    inGame: true,
    currentScore: 0,
    alienCount: 55,
    screen: 'game',
    alienLaserFuse: false,
    user: {
      pos: {
        x: 135,
        padding: 20,
      },
      explode: false,
      show: true,
      width: 40,
      height: 40,
    },
  },
  {
    alienLaserFuse: true,
    alienCount: 54,
    fuse: false,
    animate: 0,
    difficult: 0,
    steps: 0,
    nextRow: 5,
    animateDir: 'right',
    maxAlienRight: 0,
    maxAlienLeft: Infinity,
    laser: {
      width: 5,
      height: 10,
      speed: 3,
      alienWidth: 5,
      alienHeight: 10,
      alienSpeed: 3,
    },
    alien: {
      startPos: {
        left: 150,
        top: 50,
      },
      movement: {
        side: 10,
        down: 40,
        left: 20,
        right: 20,
      },
      width: 40,
      height: 40,
      padding: 5,
      row: 11,
      column: 5,
    },
  },
]
