import CustomizationSection from "./customization-section";
import TemplatesSection from "./templates-section";

export default function ProductDetailsSection() {
  return (
    <section id="product-details">
      <TemplatesSection />
      <CustomizationSection />
    </section>
  );
}
