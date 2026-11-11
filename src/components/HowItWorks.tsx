const STEPS = [
  {
    title: 'Instale o servidor no PC',
    text: 'Baixe o instalador e siga o assistente. Ele fica na bandeja do Windows e já libera o firewall para a rede de casa.',
  },
  {
    title: 'Abra o app no iPhone',
    text: 'O PC aparece sozinho na lista. Se não aparecer, é só digitar o IP que está no menu da bandeja.',
  },
  {
    title: 'Digite o PIN',
    text: 'O PIN de 6 dígitos está no menu da bandeja. Pronto: o iPhone e o Apple Watch já controlam o PC.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-(--container-site) px-5 py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Como funciona</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Pronto em um minuto.</h2>
      </div>
      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="panel relative overflow-hidden p-6">
            <span className="font-mono text-5xl font-semibold text-transparent [-webkit-text-stroke:1px_rgb(var(--neon)/0.5)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-fg">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            {index < STEPS.length - 1 && (
              <span className="absolute right-0 top-1/2 hidden h-px w-8 bg-linear-to-r from-neon/60 to-transparent md:block" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
