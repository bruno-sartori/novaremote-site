import type { ReactNode } from 'react';
import Icon, { type IconName } from '@/components/Icon';

/* iPhone and Apple Watch frames with the app's real screens, drawn in HTML/CSS (no screenshots to keep in sync). */

export function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-[280px] shrink-0 rounded-[46px] border border-line/10 bg-[#0a0d16] p-[9px] shadow-[0_40px_90px_-30px_rgb(var(--neon)/0.35),0_0_0_1px_rgb(var(--line)/0.04)] ${className}`}
    >
      <div className="relative flex h-[586px] flex-col overflow-hidden rounded-[38px] bg-ink">
        {/* the app's background: cyan and violet glows at the top */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_35%_at_0%_0%,rgb(var(--neon)/0.2),transparent_70%),radial-gradient(55%_32%_at_100%_0%,rgb(var(--plasma)/0.22),transparent_70%)]" />
        <div className="relative flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-fg">
          <span>19:37</span>
          <span className="h-[22px] w-[84px] rounded-full bg-black" />
          <span className="font-mono text-[9px]">●●● 80</span>
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}

function ServerChip() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-fill px-2.5 py-1 font-mono text-[9.5px] text-fg">
      <span className="size-1.5 rounded-full bg-signal shadow-[0_0_8px_rgb(var(--signal)/0.9)]" />
      BRUNO-DESKTOP
      <span className="text-muted">⌄</span>
    </span>
  );
}

const TABS: { icon: IconName; label: string }[] = [
  { icon: 'pointer', label: 'Trackpad' },
  { icon: 'play', label: 'Mídia' },
  { icon: 'power', label: 'Funções' },
  { icon: 'monitor', label: 'PCs' },
  { icon: 'layers', label: 'Ajustes' },
];

function TabBar({ selected }: { selected: string }) {
  return (
    <div className="mx-2.5 mb-3 flex justify-around rounded-full border border-line/8 bg-surface/90 px-1 py-1.5 backdrop-blur">
      {TABS.map((tab) => (
        <span
          key={tab.label}
          className={`flex flex-col items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[8px] ${
            tab.label === selected ? 'bg-neon/10 text-neon' : 'text-muted'
          }`}
        >
          <Icon name={tab.icon} className="size-[15px]" />
          {tab.label}
        </span>
      ))}
    </div>
  );
}

/** Trackpad with the floating keyboard open: echo strip, PC keys, iOS keyboard. */
export function TrackpadScreen() {
  const keyboardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  return (
    <div className="flex flex-1 flex-col gap-2 px-3 pt-2">
      <ServerChip />
      <div className="hud grid-lines relative flex flex-1 items-center justify-center rounded-[20px] border border-line/8 bg-ink-2/70">
        <span className="text-center font-mono text-[9px] leading-relaxed text-muted">
          arraste · toque · 2 dedos rolam
        </span>
        <span className="absolute left-[58%] top-[38%] size-6 rounded-full bg-neon/30 shadow-[0_0_24px_8px_rgb(var(--neon)/0.35)]" />
      </div>
      <div className="flex items-center gap-1.5 rounded-xl bg-fill px-2.5 py-2 text-[10.5px] text-fg">
        <span className="truncate">git commit -m &quot;nova cor&quot;</span>
        <span className="blink inline-block h-3.5 w-1.5 rounded-[1px] bg-neon shadow-[0_0_6px_rgb(var(--neon))]" />
        <span className="ml-auto rounded-md border border-neon/40 bg-neon/10 px-1.5 py-0.5 font-mono text-[8px] text-neon">
          Ctrl+S
        </span>
      </div>
      <div className="flex gap-1">
        {['Ctrl', 'Alt', 'Shift', 'Win', 'Esc'].map((key) => (
          <span
            key={key}
            className={`flex-1 rounded-md py-1.5 text-center font-mono text-[8.5px] font-semibold ${
              key === 'Ctrl'
                ? 'border border-neon/60 bg-neon/15 text-neon shadow-[0_0_10px_-2px_rgb(var(--neon)/0.6)]'
                : 'bg-fill text-fg'
            }`}
          >
            {key}
          </span>
        ))}
      </div>
      <div className="-mx-3 flex flex-col gap-1.5 bg-[#17191f] px-1 pb-4 pt-2">
        {keyboardRows.map((row) => (
          <div key={row} className="flex justify-center gap-[3px]">
            {row.split('').map((letter) => (
              <span key={letter} className="grid h-7 w-[22px] place-items-center rounded-[4px] bg-[#4a4c52] text-[11px] text-white">
                {letter}
              </span>
            ))}
          </div>
        ))}
        <div className="flex justify-center gap-[3px]">
          <span className="grid h-7 w-9 place-items-center rounded-[4px] bg-[#2c2e33] text-[9px] text-white">123</span>
          <span className="grid h-7 w-36 place-items-center rounded-[4px] bg-[#4a4c52] text-[9px] text-white">espaço</span>
          <span className="grid h-7 w-9 place-items-center rounded-[4px] bg-[#2c2e33] text-[9px] text-white">↵</span>
        </div>
      </div>
    </div>
  );
}

function RoundButton({ icon, big = false }: { icon: 'prev' | 'next' | 'pause'; big?: boolean }) {
  return (
    <span
      className={`grid place-items-center rounded-full ${
        big ? 'glow-fill size-16 text-ink' : 'size-11 bg-surface text-fg'
      }`}
    >
      {icon === 'pause' ? (
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
          <rect x="6" y="4.5" width="4" height="15" rx="1" />
          <rect x="14" y="4.5" width="4" height="15" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className={`size-4 ${icon === 'next' ? '' : 'rotate-180'}`} fill="currentColor">
          <path d="M5 4.5l10 7.5-10 7.5zM17 4.5h2.5v15H17z" />
        </svg>
      )}
    </span>
  );
}

export function VolumeLine({ value = 62, compact = false }: { value?: number; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 text-muted">
      {!compact && <SpeakerIcon />}
      <div className="relative h-1.5 flex-1 rounded-full bg-line/10">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-neon to-plasma shadow-[0_0_12px_rgb(var(--neon)/0.6)]"
          style={{ width: `${value}%` }}
        />
        <span
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_4px_rgb(var(--neon)/0.25),0_0_14px_rgb(var(--neon)/0.8)] ${
            compact ? 'size-2.5' : 'size-[18px]'
          }`}
          style={{ left: `${value}%` }}
        />
      </div>
      {!compact && <SpeakerIcon loud />}
    </div>
  );
}

function SpeakerIcon({ loud = false }: { loud?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4z" fill="currentColor" />
      {loud && <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />}
    </svg>
  );
}

export function MediaScreen() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-4 px-5 pt-2">
        <div className="flex items-center justify-between">
          <ServerChip />
          <span className="text-[12px] font-semibold text-fg">Mídia</span>
          <span className="w-16" />
        </div>
        <div className="aurora-art mx-auto mt-2 grid size-[176px] place-items-center rounded-[24px] shadow-[0_18px_40px_-12px_rgb(var(--plasma)/0.6)]">
          <svg viewBox="0 0 24 24" className="size-12 text-white/90" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-[15px] font-bold text-fg">Gurenge</p>
          <p className="text-[11px] text-muted">LiSA</p>
          <p className="eyebrow mt-1 text-[8px]">Spotify · tocando</p>
        </div>
        <div>
          <div className="relative h-1 rounded-full bg-line/10">
            <div className="absolute inset-y-0 left-0 w-[38%] rounded-full bg-fg/80" />
          </div>
          <div className="mt-1 flex justify-between font-mono text-[8.5px] text-muted">
            <span>1:29</span>
            <span>-2:26</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <RoundButton icon="prev" />
          <RoundButton icon="pause" big />
          <RoundButton icon="next" />
        </div>
        <VolumeLine />
      </div>
      <TabBar selected="Mídia" />
    </div>
  );
}

const POWER: { icon: IconName; title: string; caption: string; tint: string }[] = [
  { icon: 'power', title: 'Desligar', caption: 'Agora ou com timer', tint: 'text-flux bg-flux/15' },
  { icon: 'timer', title: 'Reiniciar', caption: 'Agora ou com timer', tint: 'text-plasma bg-plasma/15' },
  { icon: 'zap', title: 'Suspender', caption: 'Economiza energia', tint: 'text-plasma bg-plasma/15' },
  { icon: 'lock', title: 'Bloquear', caption: 'Tela de bloqueio', tint: 'text-neon bg-neon/15' },
];

export function FunctionsScreen() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-2.5 px-3.5 pt-2">
        <ServerChip />
        <p className="text-[20px] font-bold text-fg">Funções</p>
        <div className="flex items-center gap-2.5 rounded-2xl border border-flux/35 bg-linear-to-r from-flux/15 to-plasma/5 p-2.5 shadow-[0_8px_24px_-12px_rgb(var(--flux)/0.5)]">
          <span className="grid size-8 place-items-center rounded-lg bg-flux/15 text-flux">
            <Icon name="timer" className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-fg">Desliga às 23:42</p>
            <p className="font-mono text-[8.5px] text-muted">faltam 29:14</p>
          </div>
          <span className="ml-auto rounded-lg border border-flux/50 px-2 py-1 text-[9px] font-semibold text-flux">Cancelar</span>
        </div>
        <p className="eyebrow text-[8px]">Energia</p>
        <div className="grid grid-cols-2 gap-2">
          {POWER.map((tile) => (
            <div key={tile.title} className="panel flex flex-col gap-2 rounded-xl p-2.5">
              <span className={`grid size-7 place-items-center rounded-lg ${tile.tint}`}>
                <Icon name={tile.icon} className="size-3.5" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold text-fg">{tile.title}</p>
                <p className="text-[8.5px] text-muted">{tile.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="eyebrow text-[8px]">Atalhos do Windows</p>
        <div className="grid grid-cols-3 gap-1.5">
          {['Alternar janelas', 'Explorador', 'Captura de tela'].map((label, index) => (
            <div key={label} className="panel flex flex-col items-center gap-1.5 rounded-xl px-1 py-2 text-center text-[8px] text-fg">
              <Icon name={(['layers', 'monitor', 'spark'] as const)[index]} className="size-3.5 text-neon" />
              {label}
            </div>
          ))}
        </div>
      </div>
      <TabBar selected="Funções" />
    </div>
  );
}

const PCS = [
  { name: 'BRUNO-DESKTOP', detail: 'controlando · 192.168.18.40', state: 'active' },
  { name: 'NOTEBOOK', detail: 'ligado · 192.168.18.52', state: 'on' },
  { name: 'MEDIA-CENTER', detail: 'desligado · 192.168.18.60', state: 'off' },
] as const;

export function ServersScreen() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-2.5 px-3.5 pt-2">
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-bold text-fg">PCs</p>
          <span className="grid size-7 place-items-center rounded-full bg-fill text-neon">+</span>
        </div>
        <div className="hud panel flex items-center gap-2.5 rounded-xl p-3">
          <span className="size-2.5 rounded-full bg-signal shadow-[0_0_10px_rgb(var(--signal))]" />
          <div className="leading-tight">
            <p className="text-[11.5px] font-semibold text-fg">Controlando BRUNO-DESKTOP</p>
            <p className="text-[8.5px] text-muted">Toque em outro PC para trocar</p>
          </div>
        </div>
        <p className="eyebrow text-[8px]">Salvos</p>
        <div className="panel overflow-hidden rounded-xl">
          {PCS.map((pc) => (
            <div key={pc.name} className="flex items-center gap-2.5 border-b border-line/8 px-3 py-2.5 last:border-b-0">
              <span
                className={`relative grid size-8 place-items-center rounded-lg ${
                  pc.state === 'active' ? 'glow-fill text-ink' : 'border border-line/8 bg-fill text-fg'
                }`}
              >
                <Icon name="monitor" className="size-4" />
                <span
                  className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-surface ${
                    pc.state === 'off' ? 'bg-[#3a4152]' : 'bg-signal shadow-[0_0_6px_rgb(var(--signal))]'
                  }`}
                />
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="text-[11px] font-semibold text-fg">{pc.name}</p>
                <p className="truncate font-mono text-[8px] text-muted">{pc.detail}</p>
              </div>
              {pc.state === 'active' && <Icon name="check" className="size-4 text-neon drop-shadow-[0_0_5px_rgb(var(--neon))]" />}
              {pc.state === 'off' && (
                <span className="rounded-md border border-signal/45 bg-signal/10 px-2 py-0.5 text-[8.5px] font-semibold text-signal">Ligar</span>
              )}
            </div>
          ))}
        </div>
        <p className="eyebrow text-[8px]">Encontrados na rede</p>
        <div className="panel flex items-center gap-2 rounded-xl px-3 py-2.5 text-[10px] text-muted">
          <span className="size-3 animate-spin rounded-full border-2 border-neon/25 border-t-neon" />
          Procurando outros PCs na rede…
        </div>
      </div>
      <TabBar selected="PCs" />
    </div>
  );
}

export function WatchFrame({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-[150px] shrink-0 ${className}`}>
      <div className="absolute -right-[7px] top-[46px] h-[30px] w-[9px] rounded-r-md bg-[#2a2f3a]" />
      <div className="rounded-[38px] border border-line/12 bg-[#0d1018] p-[7px] shadow-[0_30px_60px_-20px_rgb(var(--plasma)/0.45)]">
        <div className="flex h-[176px] flex-col gap-2 rounded-[31px] bg-black px-3 pb-3 pt-2.5">
          <div className="flex items-center justify-between text-[9px] font-semibold">
            <span className="text-neon">‹ Mídia</span>
            <span className="text-fg">21:19</span>
          </div>
          <div className="text-center leading-tight">
            <p className="text-[11px] font-semibold text-fg">Gurenge</p>
            <p className="text-[8.5px] text-muted">LiSA</p>
          </div>
          <div className="relative mx-1 h-[3px] rounded-full bg-line/10">
            <div className="absolute inset-y-0 left-0 w-[38%] rounded-full bg-fg/75" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="grid size-7 place-items-center rounded-full border border-line/8 bg-fill text-fg">
              <svg viewBox="0 0 24 24" className="size-3 rotate-180" fill="currentColor"><path d="M5 4.5l10 7.5-10 7.5zM17 4.5h2.5v15H17z" /></svg>
            </span>
            <span className="glow-fill grid size-9 place-items-center rounded-full text-ink">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><rect x="6" y="4.5" width="4" height="15" rx="1" /><rect x="14" y="4.5" width="4" height="15" rx="1" /></svg>
            </span>
            <span className="grid size-7 place-items-center rounded-full border border-line/8 bg-fill text-fg">
              <svg viewBox="0 0 24 24" className="size-3" fill="currentColor"><path d="M5 4.5l10 7.5-10 7.5zM17 4.5h2.5v15H17z" /></svg>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-fill text-fg">
              <svg viewBox="0 0 24 24" className="size-2.5" fill="currentColor"><path d="M11 5L6 9H2v6h4l5 4z" /></svg>
            </span>
            <div className="flex-1">
              <VolumeLine compact />
            </div>
            <span className="font-mono text-[8px] font-semibold text-neon">62%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
