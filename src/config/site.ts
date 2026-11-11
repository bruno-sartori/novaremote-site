function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL || // injected by Vercel
    process.env.VERCEL_URL ||
    'http://localhost:3000';
  try {
    return new URL(raw.startsWith('http') ? raw : `https://${raw}`).origin;
  } catch {
    return 'http://localhost:3000';
  }
}

const GITHUB = 'https://github.com/bruno-sartori';

export const SITE = {
  name: 'NovaRemote',
  title: 'NovaRemote · Seu PC no iPhone e no Apple Watch',
  description:
    'Trackpad, teclado, mídia e energia do Windows no iPhone e no Apple Watch. Grátis, seguro e só na sua rede.',
  url: resolveSiteUrl(),
  author: { name: 'Bruno Sartori', url: GITHUB },
  repos: {
    site: `${GITHUB}/novaremote-site`,
    ios: `${GITHUB}/novaremote-ios`,
  },
} as const;

/** The Windows server installer offered on the page. */
export const SERVER = {
  version: '0.1.0',
  size: '62 MB',
  file: 'NovaRemoteServerSetup.msi',
  /** Latest release of this site's repo; override with NEXT_PUBLIC_DOWNLOAD_URL (e.g. another host). */
  downloadUrl:
    process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
    `${GITHUB}/novaremote-site/releases/latest/download/NovaRemoteServerSetup.msi`,
  requirements: ['Windows 10 ou 11, 64 bits', 'PC e iPhone na mesma rede Wi-Fi', 'Não precisa instalar o .NET'],
} as const;

export const NAV = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'FAQ', href: '#faq' },
] as const;
