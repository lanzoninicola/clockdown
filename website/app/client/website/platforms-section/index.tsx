import TitleH2 from "../common/titles/title-h2";
import TitleH3 from "../common/titles/title-h3";

export default function PlatformsSection() {
  return (
    <section
      id="platforms"
      className="flex flex-col gap-8 bg-blue-sm px-4 py-32  md:items-center md:justify-center md:bg-blue-md"
    >
      <article className="flex flex-col justify-center gap-16 md:max-w-1440">
        <TitleH3 className="text-center">
          Clockdown suporta as principais plataformas
        </TitleH3>
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-6 md:grid-rows-1">
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
