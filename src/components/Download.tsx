import { SERVER, SITE } from '@/config/site';
import Icon from '@/components/Icon';

export default function Download() {
  return (
    <section id="download" className="relative mx-auto max-w-(--container-site) px-5 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-80 max-w-3xl rounded-full bg-neon/10 blur-[100px]" />
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Download</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Comece pelo PC.</h2>
        <p className="mt-4 text-lg text-fg/70">
          Instale o servidor no Windows; depois é só abrir o app no iPhone.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
        <div className="panel relative overflow-hidden p-8">
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-neon/15 blur-3xl" />
          <div className="flex items-center gap-4">
            <span className="glow-fill grid size-14 place-items-center rounded-2xl text-ink">
              <Icon name="windows" className="size-7" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">NovaRemote Server</h3>
              <p className="font-mono text-xs text-muted">
                Windows · versão {SERVER.version} · {SERVER.size}
              </p>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-fg/75">
            Um assistente de instalação coloca o servidor em <span className="font-mono text-sm">Program Files</span>, cria
            o atalho no menu Iniciar e libera o firewall para redes privadas. Ele aparece em Aplicativos instalados para
            desinstalar quando quiser.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
            {SERVER.requirements.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-fg/80">
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-signal" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={SERVER.downloadUrl} className="btn-primary px-6 py-3.5 text-base">
              <Icon name="download" className="size-5" />
              Baixar {SERVER.file}
            </a>
            <span className="text-xs text-muted">O Windows pede permissão de administrador uma vez.</span>
          </div>
        </div>

        <div className="panel flex flex-col p-8">
          <div className="flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-2xl border border-line/10 bg-fill text-fg">
              <Icon name="apple" className="size-7" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">iPhone e Apple Watch</h3>
              <p className="font-mono text-xs text-muted">iOS 17+ · watchOS 10+</p>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-fg/75">
            O app do iPhone já leva o do relógio junto. Ainda não está na App Store: por enquanto, ele é instalado pelo
            Xcode a partir do código-fonte.
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            <span className="rounded-xl border border-dashed border-line/15 px-4 py-2.5 text-sm text-muted">
              Em breve na App Store
            </span>
            <a href={SITE.repos.ios} className="btn-ghost px-4 py-2.5">
              <Icon name="github" className="size-4" />
              Código-fonte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
