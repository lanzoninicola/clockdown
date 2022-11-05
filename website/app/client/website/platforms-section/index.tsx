export default function PlatformsSection() {
  return (
    <section
      id="platforms"
      className="flex flex-col gap-8  px-4 py-32  md:items-center md:justify-center "
    >
      <article className="flex flex-col justify-center gap-8 md:max-w-1440">
        <h2 className="md:leading-1 text-md  font-accent font-bold uppercase tracking-wide md:text-2xl">
          Clockdown suporta as principais plataformas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-1">
          <img src="/images/platforms/wordpress.png" alt="wordpress" />
          <img src="/images/platforms/woocommerce.png" alt="woocommerce" />
          <img src="/images/platforms/shopify.png" alt="shopify" />
          <img src="/images/platforms/squarespace.png" alt="squarespace" />
          <img src="/images/platforms/webflow.png" alt="webflow" />
          <img src="/images/platforms/wix.png" alt="wix" />
        </div>
      </article>
    </section>
  );
}
