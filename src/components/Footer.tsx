import Image from 'next/image';
import { NAV, SERVER, SITE } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-line/6">
      <div className="mx-auto flex max-w-(--container-site) flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5 font-semibold text-fg">
            <Image src="/icon.png" alt="" width={28} height={28} className="rounded-[7px]" />
            NovaRemote
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{SITE.description}</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-muted" aria-label="Rodapé">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-fg">
              {item.label}
            </a>
          ))}
          <a href={SERVER.downloadUrl} className="hover:text-fg">
            Download
          </a>
          <a href={SITE.repos.ios} className="hover:text-fg">
            GitHub
          </a>
        </nav>
      </div>
      <div className="border-t border-line/6">
        <p className="mx-auto max-w-(--container-site) px-5 py-5 font-mono text-xs text-muted">
          © {new Date().getFullYear()} NovaRemote · feito por{' '}
          <a href={SITE.author.url} className="text-fg/80 hover:text-neon">
            {SITE.author.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
