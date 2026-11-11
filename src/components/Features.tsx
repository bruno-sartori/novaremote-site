import Icon, { type IconName } from '@/components/Icon';

const HIGHLIGHTS: { icon: IconName; text: string }[] = [
  { icon: 'shield', text: 'HTTPS em tudo' },
  { icon: 'wifi', text: 'Só na sua rede' },
  { icon: 'zap', text: 'Pareamento por PIN' },
  { icon: 'spark', text: 'Grátis' },
];

const FEATURES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'pointer',
    title: 'Trackpad de verdade',
    text: 'Multitoque com aceleração: 1 dedo move, 2 rolam, toque com 2 é botão direito, 3 dedos trocam de janela.',
  },
  {
    icon: 'keyboard',
    title: 'Teclado sobre o trackpad',
    text: 'O teclado do iPhone com as teclas do PC em cima (Ctrl, Alt, Win, F1–F12, setas) e o texto que está sendo digitado.',
  },
  {
    icon: 'play',
    title: 'Mídia com volume real',
    text: 'O que está tocando no PC, com capa, barra de progresso para pular e o volume de verdade do Windows.',
  },
  {
    icon: 'power',
    title: 'Energia',
    text: 'Desligue ou reinicie agora ou com timer, suspenda, hiberne, bloqueie e apague a tela. E ligue o PC pela rede.',
  },
  {
    icon: 'monitor',
    title: 'Vários PCs',
    text: 'Os PCs da rede aparecem sozinhos. Salve quantos quiser, veja quem está ligado e troque em um toque.',
  },
  {
    icon: 'watch',
    title: 'Apple Watch',
    text: 'Trackpad no pulso, mídia com a coroa e complicações no mostrador. Configurado sozinho pelo iPhone.',
  },
  {
    icon: 'gamepad',
    title: 'Modo jogo',
    text: 'Botões que ficam pressionados no PC enquanto o dedo está neles, com várias teclas ao mesmo tempo.',
  },
  {
    icon: 'layers',
    title: 'Atalhos do Windows',
    text: 'Alternar janelas, área de trabalho, gerenciador de tarefas, captura de tela, copiar e colar a um toque.',
  },
];

export default function Features() {
  return (
    <section id="recursos" className="mx-auto max-w-(--container-site) px-5 py-20">
      <ul className="panel grid grid-cols-2 gap-px overflow-hidden p-0 md:grid-cols-4">
        {HIGHLIGHTS.map((item) => (
          <li key={item.text} className="flex items-center justify-center gap-2.5 bg-ink-2/40 px-4 py-5 text-sm text-fg">
            <Icon name={item.icon} className="size-5 text-neon" />
            {item.text}
          </li>
        ))}
      </ul>

      <div className="mt-24 max-w-2xl">
        <p className="eyebrow">Recursos</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tudo o que você faz com mouse e teclado, sem levantar do sofá.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <article key={feature.title} className="panel group p-5 transition-colors hover:border-neon/30">
            <span className="grid size-10 place-items-center rounded-xl bg-neon/10 text-neon transition-shadow group-hover:shadow-[0_0_24px_-4px_rgb(var(--neon)/0.6)]">
              <Icon name={feature.icon} className="size-5" />
            </span>
            <h3 className="mt-4 font-semibold text-fg">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
