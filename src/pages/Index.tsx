import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/feelazores-hero-user.webp";
import tourImage from "@/assets/feelazores-tour-user.webp";
import bikeImage from "@/assets/feelazores-bike-v2.jpg";
import landscapeImage from "@/assets/feelazores-landscape-v2.jpg";
import statementImage from "@/assets/feelazores-statement.jpg";

const services = [
  {
    title: "Guided Tours",
    description:
      "Percursos desenhados localmente, guiados por quem conhece cada detalhe. Sem stress. Só pedalar.",
    image: tourImage,
    alt: "Cyclists enjoying a calm guided road ride through a natural landscape.",
  },
  {
    title: "Bike Rentals",
    description:
      "Bicicletas premium, prontas para qualquer terreno. Escolhes o ritmo. Nós tratamos do resto.",
    image: bikeImage,
    alt: "Premium road bike prepared for a refined cycling stay.",
  },
  {
    title: "Cycling Holidays",
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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

        <div className="editorial-shell relative z-10 flex min-h-screen items-center py-24 sm:py-28 lg:py-32">
          <Reveal className="max-w-3xl">
            <div className="mb-8 inline-flex rounded-full border border-primary-foreground/80 px-5 py-2">
              <span className="eyebrow font-semibold text-primary-foreground">Feelazores Sports</span>
            </div>

            <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-normal text-primary-foreground">
              Ride Beyond the
              <br />
              Ordinary
            </h1>

            <div className="mt-8 max-w-2xl space-y-3 text-lg font-semibold text-primary-foreground">
              <p className="leading-[1.45]">Estamos a preparar uma nova extensão da experiência FeelViana — agora sobre duas rodas.</p>
              <p className="leading-[1.45]">Tours guiados, aluguer de bicicletas premium e cycling holidays desenhadas à medida.</p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="pill" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                <a href="#capture-form">Be the first to ride</a>
              </Button>
              <Button asChild size="pill" className="border border-primary-foreground/55 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#services">Discover more</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-space bg-background">
        <div className="editorial-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Coming Soon</p>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] text-foreground">
              Uma nova forma de explorar os Açores
              <br />
              sobre duas rodas.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-subdued">
              Cada detalhe pensado para quem valoriza tempo de qualidade, natureza e performance com conforto.
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
            <div className="relative min-h-[500px] overflow-hidden rounded-[24px]">
              <img
                src={statementImage}
                alt="Cyclist riding along a misty coastal road in the Azores."
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-brand/55" />
              <div className="relative flex min-h-[500px] items-end p-8 sm:p-10 lg:p-16">
                <div className="max-w-2xl text-primary-foreground">
                  <p className="eyebrow text-primary-foreground/80">Feel the ride</p>
                  <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] text-primary-foreground">
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
                <h2 className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground">Entra primeiro nesta jornada.</h2>
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
                      What kind of ride are you looking for?
                    </label>
                    <textarea
                      id="ride-type"
                      name="rideType"
                      rows={4}
                      placeholder="Tours, rentals, cycling holidays..."
                      className="field-base resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="pill" className="w-full">
                    Join the journey
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
              <p className="font-serif text-3xl font-normal">Feelazores Sports</p>
              <p className="mt-2 text-sm text-brand-foreground/78">A FeelViana experience</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-brand-foreground/80 md:flex-row md:items-center md:justify-between">
            <p>© 2026 FeelViana. All rights reserved.</p>
            <nav aria-label="Footer" className="flex gap-6">
              <a href="#" className="transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-brand">
                Privacy
              </a>
              <a href="mailto:hello@feelviana.com" className="transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-brand">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
