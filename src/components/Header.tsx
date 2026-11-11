import Image from 'next/image';
import { NAV } from '@/config/site';
import Icon from '@/components/Icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/6 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-(--container-site) items-center gap-8 px-5">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-fg">
          <Image src="/icon.png" alt="" width={30} height={30} className="rounded-[8px]" priority />
          NovaRemote
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex" aria-label="Seções">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#download" className="btn-primary ml-auto px-4 py-2">
          <Icon name="download" className="size-4" />
          Baixar
        </a>
      </div>
    </header>
  );
}
