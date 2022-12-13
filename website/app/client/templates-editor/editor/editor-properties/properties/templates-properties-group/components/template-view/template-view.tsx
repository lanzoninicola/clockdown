import { Box } from "@chakra-ui/react";

import { TEMPLATES } from "../../constants/templates";

interface TemplateProps {
  src: string;
  alt: string;

  /** The name of template */
  name: keyof typeof TEMPLATES;
  /** The ID of template */
  id: string;
}

export default function TemplateView({ src, alt, name, id }: TemplateProps) {
  return (
    <Box
      data-element="template-view-box"
      w={"100%"}
      h={"100%"}
      cursor={"pointer"}
    >
      <img src={`images/templates-thumb/${src}.jpg`} alt={alt} />
    </Box>
  );
}
