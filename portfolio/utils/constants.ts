// Animation constants
export const ANIMATION_CONSTANTS = {
  CURSOR_SCALE_FACTOR: 1.5,
  CURSOR_INTERPOLATION_SPEED: 0.1,
  CURSOR_BIG_BALL_SIZE: 60,
  CURSOR_SMALL_BALL_SIZE: 8,
  MAGNETIC_MOVEMENT_MULTIPLIER: 0.3,
  MAGNETIC_TRANSITION_DURATION: '0.3s',
  FADE_DURATION: 1500,
  FADE_EASING: 'ease-out',
  FADE_THRESHOLD: 0.1,
  BLUR_AMOUNT: '150px',
} as const;

// Color constants
export const COLORS = {
  PRIMARY_BLUE: '#224faa',
  WHITE: '#ffffff',
  BLACK: '#000000',
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
} as const;

// Z-index layers
export const Z_INDEX = {
  BACKGROUND: 0,
  CONTENT: 10,
  NAVBAR: 50,
  CURSOR: 1000,
} as const; 