import { SERVER } from '@/config/site';
import Icon from '@/components/Icon';
import { MediaScreen, PhoneFrame, WatchFrame } from '@/components/mockups/Phone';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* aurora + grid, like the website */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -left-40 -top-56 h-[34rem] w-[46rem] rounded-full bg-neon/25 blur-[120px] [animation:drift_26s_ease-in-out_infinite_alternate]" />
        <div className="aurora absolute -right-48 -top-40 h-[32rem] w-[40rem] rounded-full bg-plasma/30 blur-[120px] [animation:drift_26s_ease-in-out_-13s_infinite_alternate]" />
        <div className="grid-lines absolute inset-0 [background-size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_25%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-(--container-site) items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <div>
          <p className="eyebrow">Windows · iPhone · Apple Watch</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Seu PC na <span className="text-gradient">palma da mão</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/75">
            Trackpad, teclado, mídia e energia do Windows no iPhone e no Apple Watch. Sem cabos, sem conta e sem nuvem:
            tudo direto pela sua rede, criptografado.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={SERVER.downloadUrl} className="btn-primary">
              <Icon name="windows" className="size-4" />
              Baixar para Windows
            </a>
            <a href="#recursos" className="btn-ghost">
              Ver recursos
              <Icon name="chevron" className="size-4" />
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-muted">
            Grátis · versão {SERVER.version} · {SERVER.size} · Windows 10/11
          </p>
        </div>

        <div className="relative mx-auto flex items-end justify-center">
          <div className="absolute inset-x-6 bottom-10 top-16 -z-10 rounded-full bg-neon/15 blur-3xl" />
          <PhoneFrame>
            <MediaScreen />
          </PhoneFrame>
          <WatchFrame className="-ml-6 mb-2 hidden sm:block" />
        </div>
      </div>
    </section>
  );
}
