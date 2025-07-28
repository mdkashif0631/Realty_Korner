// src/utils/groupAmenitiesByCategory.js

import { featuresByCategory } from './amenitiesMap';

export const groupAmenitiesByCategory = (selectedAmenities) => {
  if (!Array.isArray(selectedAmenities)) return [];

  const grouped = {};

  for (const category in featuresByCategory) {
    const matched = featuresByCategory[category].filter(f =>
      selectedAmenities.includes(f)
    );

    if (matched.length > 0) {
      grouped[category] = matched;
    }
  }

  return Object.entries(grouped).map(([category, amenities]) => ({
    category,
    amenities,
  }));
};
