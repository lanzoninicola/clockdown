import Section from "../common/section";
import EditorButton from "../components/editor-button";

export default function HeroSection() {
  return (
    <Section id="hero" className="bg-hero-bg bg-cover bg-center py-16 ">
      <div className="grid grid-rows-2 items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col gap-16">
          <div>
            <h1 className="mb-4 font-accent text-2xl font-bold uppercase tracking-wide md:text-4xl md:leading-[130%]">
              Impulsiona as vendas com um contador regressivo <br /> de tempo
              limitado
            </h1>
            <h2 className="font-titles text-xl font-bold">
              <span className="bg-accent-base">E' gratuito. </span>
              Para o seu site ou loja.
            </h2>
          </div>
          <EditorButton variant="accent" />
        </div>
        <div className="grid place-items-center">
          <picture>
            <img
              src="/images/hero.png"
              alt="hero"
              className="h-450 animate-float md:h-[851px] "
            />
          </picture>
        </div>
      </div>
    </Section>
  );
}
