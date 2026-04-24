import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/feelazores-hero-user.webp";
import tourImage from "@/assets/feelazores-tour-user.webp";
import bikeImage from "@/assets/feelazores-bike-user.jpg";
import landscapeImage from "@/assets/feelazores-landscape-user.jpg";
import statementImage from "@/assets/feelazores-statement-user.jpg";
import logoImage from "@/assets/feelazores-logo.png";

const services = [
  {
    title: "Passeios guiados",
    description:
      "Percursos desenhados localmente, guiados por quem conhece cada detalhe. Sem stresse. Só pedalar.",
    image: tourImage,
    alt: "Cyclists enjoying a calm guided road ride through a natural landscape.",
  },
  {
    title: "Aluguer de bicicletas",
    description:
      "Bicicletas premium, prontas para qualquer terreno. Escolhes o ritmo. Nós tratamos do resto.",
    image: bikeImage,
    alt: "Ciclista com bicicleta de estrada junto ao mar nos Açores.",
  },
  {
    title: "Férias de ciclismo",
    description:
      "Experiências completas, feitas à medida. Ride, stay, recover — tudo pensado como um só.",
    image: landscapeImage,
    alt: "Azorean landscape with winding roads for a tailored cycling holiday.",
  },
];

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>{children}</div>;
};

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!privacyAccepted) return;
    setSubmitted(true);
    setPrivacyAccepted(false);
    event.currentTarget.reset();
  };

  return (
    <main className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cyclist riding along a quiet Azorean road at golden hour."
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-brand/58" />
        </div>

        <div className="editorial-shell relative z-10 flex min-h-screen pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
          <Reveal className="max-w-3xl">
            <div className="flex min-h-[calc(100vh-6rem)] flex-col justify-between sm:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9rem)]">
              <div>
                <div className="mb-8">
                  <img
                    src={logoImage}
                    alt="Feelazores Sports"
                    className="h-10 w-auto sm:h-12 lg:h-14"
                  />
                </div>

                <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-normal text-primary-foreground">
                  Pedala para lá do
                  <br />
                  comum
                </h1>
              </div>

              <div className="max-w-2xl pb-1">
                <div className="space-y-2 text-xl font-bold text-primary-foreground sm:text-[1.35rem]">
                  <p className="leading-[1.35]">Estamos a preparar uma nova extensão da experiência FeelViana — agora sobre duas rodas.</p>
                  <p className="leading-[1.35]">Passeios guiados, aluguer de bicicletas premium e férias de ciclismo desenhadas à medida.</p>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="pill" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                    <a href="#capture-form">Sê dos primeiros a pedalar</a>
                  </Button>
                  <Button asChild size="pill" className="border border-primary-foreground/55 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="#services">Descobrir mais</a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-space bg-background">
        <div className="editorial-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Brevemente</p>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,3rem)] text-foreground">
              Uma nova forma de explorar os Açores
              <br />
              sobre duas rodas.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-subdued">
              Cada detalhe pensado para quem valoriza natureza e performance com conforto.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} className="h-full" >
                <article className="flex h-full flex-col overflow-hidden rounded-[24px] bg-card shadow-soft">
                  <div className="aspect-[4/5] overflow-hidden rounded-t-[24px] bg-surface">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      loading="lazy"
                      width={1024}
                      height={1280}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-[2rem] text-foreground">{service.title}</h3>
                    <p className="mt-4 text-subdued">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background pt-0">
        <div className="editorial-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[24px] bg-secondary p-6 sm:p-8 lg:p-10">
              <img
                src={statementImage}
                alt="Ciclista numa rua colorida dos Açores."
                className="block h-auto w-full rounded-[16px]"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="relative px-2 pt-10 sm:px-4 sm:pt-12 lg:px-6 lg:pt-14">
                <div className="max-w-3xl">
                  <p className="eyebrow">Sente a viagem</p>
                  <h2 className="mt-5 text-[clamp(1.25rem,2.2vw,1.875rem)] text-foreground">
                    Do vento no rosto aos percursos escolhidos com precisão, tudo é criado para que só tenhas de fazer uma coisa: pedalar.
                  </h2>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="capture-form" className="section-space bg-background pt-0">
        <div className="editorial-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <Reveal>
              <div className="max-w-xl lg:pt-6">
                <p className="eyebrow">Brevemente disponível</p>
                <h2 className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground">Entra primeiro nesta viagem.</h2>
                <p className="mt-6 text-lg text-subdued">
                  Recebe acesso antecipado, novidades e primeiros lançamentos da Feelazores Sports.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[24px] bg-card p-8 shadow-soft sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome
                    </label>
                    <input id="name" name="name" type="text" placeholder="O teu nome" className="field-base" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input id="email" name="email" type="email" placeholder="O teu email" className="field-base" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ride-type" className="text-sm font-medium text-foreground">
                      Que tipo de experiência procuras?
                    </label>
                    <textarea
                      id="ride-type"
                      name="rideType"
                      rows={4}
                      placeholder="Passeios, alugueres, férias de ciclismo..."
                      className="field-base resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                      className="mt-0.5 rounded-sm"
                    />
                    <Label htmlFor="privacy" className="text-sm leading-[1.4] text-foreground">
                      Li e aceito a política de privacidade.
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" size="pill" className="w-full" disabled={!privacyAccepted}>
                    Juntar-me à viagem
                  </Button>

                  {submitted ? (
                    <p className="text-sm text-accent">Obrigado. Em breve receberás novidades.</p>
                  ) : null}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="bg-brand text-brand-foreground">
        <div className="editorial-shell py-10">
          <div className="flex flex-col gap-4 border-b border-brand-foreground/15 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <img
                src={logoImage}
                alt="Feelazores Sports"
                className="h-8 w-auto sm:h-10"
              />
              <p className="mt-3 text-sm text-brand-foreground/78">Uma experiência FeelEverywhere</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-brand-foreground/80 md:flex-row md:items-center md:justify-between">
            <p>© 2026 FeelViana. Todos os direitos reservados.</p>
            <p>by Webcomum</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
