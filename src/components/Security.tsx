import Icon, { type IconName } from '@/components/Icon';

const POINTS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'lock',
    title: 'Criptografado de ponta a ponta',
    text: 'Tudo passa por HTTPS e WebSocket seguro. O servidor nem aceita conexões sem criptografia.',
  },
  {
    icon: 'shield',
    title: 'Certificado fixado no pareamento',
    text: 'O iPhone guarda a identidade do PC e recusa qualquer outra. Um código de segurança na tela confirma que é o seu PC.',
  },
  {
    icon: 'zap',
    title: 'PIN e acesso revogável',
    text: 'Cada aparelho recebe um acesso próprio depois do PIN, e você pode removê-lo na bandeja quando quiser.',
  },
  {
    icon: 'wifi',
    title: 'Sem nuvem, sem conta',
    text: 'Nada sai da sua casa: o iPhone fala direto com o PC pela rede local. Não há cadastro nem servidor no meio.',
  },
];

export default function Security() {
  return (
    <section id="seguranca" className="mx-auto max-w-(--container-site) px-5 py-20">
      <div className="hud panel grid gap-10 overflow-hidden p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="eyebrow">Segurança</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Só você controla o seu PC.
          </h2>
          <p className="mt-5 leading-relaxed text-fg/70">
            Um app que mexe no mouse e no teclado precisa ser à prova de curiosos. O NovaRemote foi feito assim desde o
            começo.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-line/8 bg-ink/60 px-5 py-4">
            <span className="grid size-10 place-items-center rounded-xl bg-signal/10 text-signal">
              <Icon name="shield" className="size-5" />
            </span>
            <div>
              <p className="text-xs text-muted">Código de segurança</p>
              <p className="font-mono text-xl font-semibold tracking-wider text-fg">11A9-E872</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {POINTS.map((point) => (
            <div key={point.title} className="rounded-2xl border border-line/6 bg-ink/40 p-5">
              <Icon name={point.icon} className="size-5 text-neon" />
              <h3 className="mt-3 font-semibold text-fg">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
