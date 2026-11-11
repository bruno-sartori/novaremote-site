import Icon from '@/components/Icon';

const QUESTIONS = [
  {
    q: 'Quanto custa?',
    a: 'Nada. O servidor e os apps são gratuitos, sem anúncios e sem assinatura.',
  },
  {
    q: 'O iPhone e o PC precisam estar na mesma rede?',
    a: 'Sim. O NovaRemote fala direto com o PC pela rede local (Wi-Fi ou cabo no PC), sem passar pela internet.',
  },
  {
    q: 'Funciona no Mac ou no Linux?',
    a: 'Por enquanto o servidor é só para Windows 10 e 11 (64 bits).',
  },
  {
    q: 'O Apple Watch precisa do iPhone por perto?',
    a: 'Não. Depois de configurado pelo iPhone, o relógio fala direto com o PC pela rede.',
  },
  {
    q: 'É seguro deixar o servidor ligado?',
    a: 'Sim. Ele só aceita aparelhos pareados com o PIN, usa conexão criptografada e só fica liberado no firewall para redes privadas. Você pode remover qualquer aparelho pelo menu da bandeja.',
  },
  {
    q: 'Por que o instalador pede permissão de administrador?',
    a: 'Para instalar em Program Files e criar a regra do firewall que deixa o iPhone se conectar. O servidor em si roda sem privilégios.',
  },
  {
    q: 'Dá para ligar o PC pelo iPhone?',
    a: 'Sim, com Wake-on-LAN, se ele estiver ativado na BIOS e na placa de rede. Funciona melhor com o PC no cabo e suspenso.',
  },
  {
    q: 'Como desinstalar?',
    a: 'Em Configurações › Aplicativos › Aplicativos instalados, procure NovaRemote Server. O desinstalador fecha o servidor, remove a regra do firewall e a inicialização com o Windows.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <p className="eyebrow text-center">FAQ</p>
      <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Perguntas frequentes
      </h2>
      <div className="mt-10 space-y-3">
        {QUESTIONS.map((item) => (
          <details key={item.q} className="panel group px-5 py-4 open:border-neon/25">
            <summary className="flex list-none items-center justify-between gap-4 font-medium text-fg [&::-webkit-details-marker]:hidden">
              {item.q}
              <Icon name="chevron" className="size-4 shrink-0 text-muted transition-transform group-open:rotate-90 group-open:text-neon" />
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
