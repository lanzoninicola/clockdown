import React from "react";

import { PremiumFeatureGuard } from "../../../../../premium-features";
import type { PropertyBarItem } from "../../types";
import PropertyButton from "../property-button/property-button";

interface PropertyBarProps {
  items: PropertyBarItem[];
  onItemSelected: (item: PropertyBarItem) => void;
}

export default function PropertiesBar({
  items,
  onItemSelected,
}: PropertyBarProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4"
      data-element="properties-bar"
    >
      {items.map((item, index) => {
        const button = (
          <PropertyButton
            key={index}
            ref={item.ref}
            label={item.label}
            shortLabel={item.shortLabel}
            icon={item.icon}
            onClick={() => onItemSelected(item)}
            data-element="property-button"
          />
        );

        if (item.isPremium) {
          return (
            <PremiumFeatureGuard key={index} variant="modal">
              {button}
            </PremiumFeatureGuard>
          );
        }

        return button;
      })}
    </div>
  );
}
