import type { ReactNode } from 'react';
import Icon from '@/components/Icon';
import { FunctionsScreen, PhoneFrame, ServersScreen, TrackpadScreen } from '@/components/mockups/Phone';

const ROWS: { eyebrow: string; title: string; text: string; points: string[]; screen: ReactNode }[] = [
  {
    eyebrow: 'Trackpad + teclado',
    title: 'Digite no PC sem largar o trackpad.',
    text: 'Um toque no botão flutuante abre o teclado do iPhone. Em cima dele ficam as teclas que o iPhone não tem, e uma faixa mostra o que você está digitando.',
    points: [
      'Ctrl, Alt, Shift e Win valem para a próxima tecla (Ctrl + S, Win + D…)',
      'Esc, Tab, setas, F1–F12, Home/End, PgUp/PgDn: as que repetem, repetem ao segurar',
      'Arraste com a mesma aceleração do movimento normal',
    ],
    screen: <TrackpadScreen />,
  },
  {
    eyebrow: 'Energia e atalhos',
    title: 'Dormiu no filme? O PC desliga sozinho.',
    text: 'Agende o desligamento ou o reinício para daqui a 15 minutos ou 2 horas, acompanhe a contagem e cancele quando quiser. Ou suspenda, hiberne, bloqueie e apague a tela.',
    points: [
      'Timer com contagem regressiva e botão de cancelar',
      'Atalhos do Windows e uma caixa para colar ou ditar textos longos',
      'Modo jogo com teclas que ficam pressionadas',
    ],
    screen: <FunctionsScreen />,
  },
  {
    eyebrow: 'Vários PCs',
    title: 'O desktop, o notebook e a TV da sala.',
    text: 'Os PCs com o servidor aparecem sozinhos na lista. Salve todos, veja quem está ligado e troque de PC pelo seletor no topo de qualquer tela.',
    points: [
      'Descoberta automática na rede (Bonjour)',
      'Wake-on-LAN: ligue o PC que está desligado ou suspenso',
      'O Apple Watch acompanha o PC escolhido no iPhone',
    ],
    screen: <ServersScreen />,
  },
];

export default function Showcase() {
  return (
    <section className="mx-auto max-w-(--container-site) space-y-28 px-5 py-16">
      {ROWS.map((row, index) => (
        <div key={row.title} className="grid items-center gap-12 lg:grid-cols-2">
          <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
            <p className="eyebrow">{row.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{row.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-fg/70">{row.text}</p>
            <ul className="mt-7 space-y-3">
              {row.points.map((point) => (
                <li key={point} className="flex gap-3 text-fg/85">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-neon" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-12 -z-10 rounded-full bg-plasma/15 blur-3xl" />
            <PhoneFrame>{row.screen}</PhoneFrame>
          </div>
        </div>
      ))}
    </section>
  );
}
