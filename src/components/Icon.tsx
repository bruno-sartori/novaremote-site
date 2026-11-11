import type { SVGProps } from 'react';

// Small stroke icon set (24×24, round caps), drawn for this site.
const PATHS = {
  pointer: <path d="M5 3v15l4.2-3.8L12.5 21l3-1.4-3.2-6.6H18z" />,
  keyboard: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M6.5 10h.01M10 10h.01M14 10h.01M17.5 10h.01M7.5 14h9" />
    </>
  ),
  play: <path d="M7 4.5v15l12-7.5z" />,
  power: (
    <>
      <path d="M12 3v8" />
      <path d="M6.3 7.5a8 8 0 1 0 11.4 0" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M8.5 20.5h7M12 16.5v4" />
    </>
  ),
  watch: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="3.5" />
      <path d="M9 6l.6-3h4.8L15 6M9 18l.6 3h4.8L15 18M12 9.5V12l1.5 1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.3-7.5 9.5-4.3-1.2-7.5-5-7.5-9.5V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  gamepad: (
    <>
      <path d="M7 8h10a4.5 4.5 0 0 1 4.4 5.4l-.8 4a2.4 2.4 0 0 1-4 1.2L14.5 17h-5l-2.1 1.6a2.4 2.4 0 0 1-4-1.2l-.8-4A4.5 4.5 0 0 1 7 8z" />
      <path d="M8 11v3M6.5 12.5h3M15.5 12h.01M17.5 13.5h.01" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0" />
      <path d="M12 19.5h.01" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </>
  ),
  download: <path d="M12 3.5v12M7 11l5 5 5-5M4.5 20.5h15" />,
  github: (
    <path d="M9 19c-4.5 1.4-4.5-2.4-6.3-2.9M15 21.5v-3.6a3.2 3.2 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.9 4.9 0 0 0-.1-3.6s-1.1-.4-3.7 1.4a12.6 12.6 0 0 0-6.6 0C5.9 2.4 4.8 2.8 4.8 2.8a4.9 4.9 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.2 3.2 0 0 0-.9 2.4v3.6" />
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  chevron: <path d="M9 6l6 6-6 6" />,
  spark: <path d="M12 2.5l2 7.5 7.5 2-7.5 2-2 7.5-2-7.5-7.5-2 7.5-2z" />,
  timer: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 10v3.5l2 2M9.5 2.5h5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  zap: <path d="M13 2.5L4.5 13.5H12l-1 8 8.5-11H12z" />,
  windows: <path d="M3.5 5.5l7-1v7h-7zM12.5 4.2l8-1.2v8.5h-8zM3.5 12.5h7v7l-7-1zM12.5 12.5h8V21l-8-1.2z" />,
  apple: (
    <path d="M16.4 12.6c0-2.4 2-3.5 2.1-3.6a4.6 4.6 0 0 0-3.6-2c-1.5-.2-3 .9-3.7.9s-2-.9-3.2-.8A4.8 4.8 0 0 0 4 9.6c-1.7 3-.4 7.4 1.3 9.8.8 1.2 1.8 2.5 3 2.5 1.2-.1 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.1-1.2 2.9-2.4a10 10 0 0 0 1.3-2.7 4.3 4.3 0 0 1-2.4-4.2zM14 5.4a4.3 4.3 0 0 0 1-3.2 4.5 4.5 0 0 0-2.9 1.5 4.2 4.2 0 0 0-1 3.1 3.7 3.7 0 0 0 2.9-1.4z" />
  ),
} as const;

export type IconName = keyof typeof PATHS;

export default function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
