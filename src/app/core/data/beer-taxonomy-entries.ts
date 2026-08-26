import type { BeerTaxonomyDataset } from './beer-taxonomy-entry';

/**
 * Generated source-aware records for all 168 Brewers Association 2026 entries.
 * Direct guide measurements are marked documented; interpretive mappings are derived.
 */
export const beerTaxonomy = {
  schemaVersion: 'beer-taxonomy-dataset/v1',
  taxonomyId: 'brewers-association-2026-circular-taxonomy',
  taxonomyTitle: 'Beer Taxonomy: 2026 Brewers Association Styles',
  generatedAt: '2026-08-26',
  sources: [
    {
      id: 'ba-2026',
      title: '2026 Brewers Association Beer Style Guidelines',
      url: 'https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/',
      publisher: 'Brewers Association',
      edition: '2026',
      accessedAt: '2026-08-26',
      notice:
        'Brewers Association 2026 Beer Style Guidelines (https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/) published by the Brewers Association.',
    },
    {
      id: 'bjcp-2021',
      title: '2021 Beer Style Guidelines',
      url: 'https://www.bjcp.org/style/2021/beer/',
      publisher: 'Beer Judge Certification Program',
      edition: '2021',
      accessedAt: '2026-08-26',
    },
  ],
  entries: [
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:ordinary-bitter',
      title: 'Ordinary Bitter',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 0,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'copper'],
            srm: {
              min: 5,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3,
              max: 4.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.033,
            max: 1.038,
            unit: 'SG',
          },
          plato: {
            min: 8.3,
            max: 9.5,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 63.6,
          max: 84.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      servingTradition: {
        value: ['cask service'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'yeast-led',
        'amber-ale-family',
        'amber-color',
        'bitter',
        'british-isles',
        'session-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:special-bitter-or-best-bitter',
      title: 'Special Bitter or Best Bitter',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 1,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'copper'],
            srm: {
              min: 6,
              max: 14,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 28,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 4.2,
              max: 4.8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 28,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.038,
            max: 1.045,
            unit: 'SG',
          },
          plato: {
            min: 9.5,
            max: 11.2,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 68.4,
          max: 86.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'low',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      servingTradition: {
        value: ['cask service'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'yeast-led',
        'amber-ale-family',
        'amber-color',
        'bitter',
        'british-isles',
        'standard-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:extra-special-bitter',
      title: 'Extra Special Bitter',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 2,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'copper'],
            srm: {
              min: 8,
              max: 17,
              unit: 'SRM',
            },
            ebc: {
              min: 16,
              max: 34,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 30,
              max: 45,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.046,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 11.4,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65.2,
          max: 83.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'low',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'toast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      servingTradition: {
        value: ['cask service'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'yeast-led',
        'amber-ale-family',
        'amber-color',
        'bitter',
        'british-isles',
        'session-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:english-style-summer-ale',
      title: 'English-Style Summer Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 3,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 3.7,
              max: 5.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.036,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 9,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 88,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'earthy', 'citrus', 'stone fruit'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      servingTradition: {
        value: ['cask service'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      seasonality: {
        value: ['summer'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'british-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:classic-english-style-pale-ale',
      title: 'Classic English-Style Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 4,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'copper'],
            srm: {
              min: 5,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 20,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'earthy', 'stone fruit'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'british-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:british-style-india-pale-ale',
      title: 'British-Style India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 5,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'copper'],
            srm: {
              min: 6,
              max: 14,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 28,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 4.5,
              max: 7.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 35,
              max: 63,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.046,
            max: 1.064,
            unit: 'SG',
          },
          plato: {
            min: 11.4,
            max: 15.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60.9,
          max: 81.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'earthy', 'stone fruit'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'hop-led',
        'yeast-led',
        'bitter',
        'british-isles',
        'high-strength',
        'hoppy',
        'ipa-family',
        'pale-color',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:strong-ale',
      title: 'Strong Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 6,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'brown'],
            srm: {
              min: 8,
              max: 21,
              unit: 'SRM',
            },
            ebc: {
              min: 16,
              max: 42,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7,
              max: 11.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
            ibu: {
              min: 30,
              max: 60,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.125,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 29,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 33.3,
          max: 88.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'british-origin', 'malt-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:old-ale',
      title: 'Old Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 7,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'very-dark'],
            srm: {
              min: 12,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 24,
              max: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 9.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
            ibu: {
              min: 30,
              max: 60,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.058,
            max: 1.088,
            unit: 'SG',
          },
          plato: {
            min: 14.3,
            max: 21.1,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 48.3,
          max: 84.1,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'malt-led',
        'yeast-led',
        'aged',
        'amber-color',
        'british-isles',
        'high-strength',
        'malty',
        'strong-ale-family',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:english-style-pale-mild-ale',
      title: 'English-Style Pale Mild Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 8,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber'],
            srm: {
              min: 6,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 18,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3.4,
              max: 4.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 20,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.036,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 88.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'british-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:english-style-dark-mild-ale',
      title: 'English-Style Dark Mild Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 9,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 17,
              max: 34,
              unit: 'SRM',
            },
            ebc: {
              min: 34,
              max: 68,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3.4,
              max: 4.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 24,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.036,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 88.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'yeast-led',
        'british-isles',
        'brown-ale-family',
        'dark-color',
        'malty',
        'session-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:english-style-brown-ale',
      title: 'English-Style Brown Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 10,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'black'],
            srm: {
              min: 12,
              max: 45,
              unit: 'SRM',
            },
            ebc: {
              min: 24,
              max: 90,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.2,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 12,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'toast', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'british-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:brown-porter',
      title: 'Brown Porter',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 11,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 20,
              max: 35,
              unit: 'SRM',
            },
            ebc: {
              min: 40,
              max: 70,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 88,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'medium',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'roast-led',
        'yeast-led',
        'british-isles',
        'dark-color',
        'malty',
        'porter-family',
        'roasty',
        'standard-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:robust-porter',
      title: 'Robust Porter',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 12,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark', 'black'],
            srm: {
              min: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.1,
              max: 6.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 25,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 11.2,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 64.4,
          max: 86.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'medium-high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'british-origin', 'roast-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:sweet-stout-or-cream-stout',
      title: 'Sweet Stout or Cream Stout',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 13,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['black'],
            srm: {
              min: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 3.2,
              max: 6.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 15,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.2,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      finalSweetness: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      attenuation: {
        value: {
          min: 55.6,
          max: 78.6,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'medium-high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'roast-led',
        'yeast-led',
        'british-isles',
        'dark-color',
        'malty',
        'roasty',
        'standard-strength',
        'stout-family',
        'sweet',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:oatmeal-stout',
      title: 'Oatmeal Stout',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 14,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'oats',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'black'],
            srm: {
              min: 20,
              unit: 'SRM',
            },
            ebc: {
              min: 40,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 3.8,
              max: 6.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'oats',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.038,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 9.5,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 47.4,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'coffee', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'variable',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'roast-led',
        'yeast-led',
        'balanced',
        'british-isles',
        'dark-color',
        'roasty',
        'standard-strength',
        'stout-family',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:british-style-imperial-stout',
      title: 'British-Style Imperial Stout',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 15,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'very-dark'],
            srm: {
              min: 20,
              max: 35,
              unit: 'SRM',
            },
            ebc: {
              min: 40,
              max: 70,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 45,
              max: 65,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.08,
            max: 1.1,
            unit: 'SG',
          },
          plato: {
            min: 19.3,
            max: 23.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 62.5,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'citrus'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'very-low',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'british-origin',
        'roast-led',
        'yeast-led',
        'bitter',
        'british-isles',
        'craft-style',
        'dark-color',
        'malty',
        'north-america',
        'roasty',
        'stout-family',
        'top-fermented',
        'traditional-style',
        'very-high-strength',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:british-style-barley-wine-ale',
      title: 'British-Style Barley Wine Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / British origin.',
      taxonomy: {
        parentId: 'group:ale:british-origin',
        path: ['beer', 'family:ale', 'group:ale:british-origin'],
        sortOrder: 16,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United Kingdom',
            kind: 'country',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper'],
            srm: {
              min: 11,
              max: 36,
              unit: 'SRM',
            },
            ebc: {
              min: 22,
              max: 72,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 8.5,
              max: 12.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 40,
              max: 65,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.085,
            max: 1.12,
            unit: 'SG',
          },
          plato: {
            min: 20.4,
            max: 28,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 67.1,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      carbonation: {
        value: {
          perceived: 'low',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'british-origin', 'malt-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:irish-style-red-ale',
      title: 'Irish-Style Red Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Irish origin.',
      taxonomy: {
        parentId: 'group:ale:irish-origin',
        path: ['beer', 'family:ale', 'group:ale:irish-origin'],
        sortOrder: 17,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Ireland',
            kind: 'country',
            countryCode: 'IE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'brown'],
            srm: {
              min: 11,
              max: 18,
              unit: 'SRM',
            },
            ebc: {
              min: 22,
              max: 36,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 4,
              max: 4.8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 28,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.048,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 11.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 79.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'irish-origin',
        'yeast-led',
        'amber-ale-family',
        'amber-color',
        'balanced',
        'british-isles',
        'standard-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:classic-irish-style-dry-stout',
      title: 'Classic Irish-Style Dry Stout',
      type: 'style',
      description: 'A published beer-style entry in Ale / Irish origin.',
      taxonomy: {
        parentId: 'group:ale:irish-origin',
        path: ['beer', 'family:ale', 'group:ale:irish-origin'],
        sortOrder: 18,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Ireland',
            kind: 'country',
            countryCode: 'IE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['black'],
            srm: {
              min: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.1,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 30,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.038,
            max: 1.048,
            unit: 'SG',
          },
          plato: {
            min: 9.5,
            max: 11.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      finalSweetness: {
        value: 'low',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      attenuation: {
        value: {
          min: 68.4,
          max: 83.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'coffee', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'variable',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'irish-origin',
        'roast-led',
        'yeast-led',
        'bitter',
        'british-isles',
        'dark-color',
        'roasty',
        'standard-strength',
        'stout-family',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:export-style-stout',
      title: 'Export-Style Stout',
      type: 'style',
      description: 'A published beer-style entry in Ale / Irish origin.',
      taxonomy: {
        parentId: 'group:ale:irish-origin',
        path: ['beer', 'family:ale', 'group:ale:irish-origin'],
        sortOrder: 19,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Ireland',
            kind: 'country',
            countryCode: 'IE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['black'],
            srm: {
              min: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 5.6,
              max: 8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 30,
              max: 60,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.052,
            max: 1.072,
            unit: 'SG',
          },
          plato: {
            min: 12.9,
            max: 17.5,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 61.5,
          max: 88.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'coffee', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'variable',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'irish-origin',
        'roast-led',
        'yeast-led',
        'balanced',
        'british-isles',
        'dark-color',
        'high-strength',
        'roasty',
        'stout-family',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:golden-or-blonde-ale',
      title: 'Golden or Blonde Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 20,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.1,
              max: 5.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 15,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.054,
            unit: 'SG',
          },
          plato: {
            min: 11.2,
            max: 13.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 64.4,
          max: 85.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:session-india-pale-ale',
      title: 'Session India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 21,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'copper'],
            srm: {
              min: 3,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 0.5,
              max: 5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 20,
              max: 55,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.008,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 2.1,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 90.4,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      drinkingPurpose: {
        value: ['session or table drinking'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-amber-red-ale',
      title: 'American-Style Amber/Red Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 22,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'brown'],
            srm: {
              min: 8,
              max: 18,
              unit: 'SRM',
            },
            ebc: {
              min: 16,
              max: 36,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 6.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 25,
              max: 45,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.048,
            max: 1.058,
            unit: 'SG',
          },
          plato: {
            min: 11.9,
            max: 14.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 62.5,
          max: 82.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-pale-ale',
      title: 'American-Style Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 23,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 4,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 30,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 68.2,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'resin', 'citrus', 'tropical', 'stone fruit', 'pine'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:juicy-or-hazy-pale-ale',
      title: 'Juicy or Hazy Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 24,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 5,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 68.2,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['tropical'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-strong-pale-ale',
      title: 'American-Style Strong Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 25,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'copper'],
            srm: {
              min: 3,
              max: 8,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 16,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.6,
              max: 6.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 40,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.058,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 14.2,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 80,
          max: 89.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'resin', 'citrus', 'tropical', 'stone fruit', 'pine'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:juicy-or-hazy-strong-pale-ale',
      title: 'Juicy or Hazy Strong Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 26,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 8,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 16,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.6,
              max: 6.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 15,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.058,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 14.2,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 64,
          max: 82.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['tropical'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-india-pale-ale',
      title: 'American-Style India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 27,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'copper'],
            srm: {
              min: 4,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 50,
              max: 70,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.07,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 17.1,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'resin', 'citrus', 'tropical', 'stone fruit', 'pine'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'north-american-origin',
        'hop-led',
        'yeast-led',
        'bitter',
        'craft-style',
        'high-strength',
        'hoppy',
        'ipa-family',
        'north-america',
        'pale-color',
        'top-fermented',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:juicy-or-hazy-india-pale-ale',
      title: 'Juicy or Hazy India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 28,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.07,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 17.1,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 82.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['tropical'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'north-american-origin',
        'hop-led',
        'yeast-led',
        'bitter',
        'craft-style',
        'high-strength',
        'hoppy',
        'ipa-family',
        'north-america',
        'pale-color',
        'top-fermented',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-belgo-style-ale',
      title: 'American-Belgo-Style Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 29,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'banana', 'phenolic', 'brettanomyces', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-brown-ale',
      title: 'American-Style Brown Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 30,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'brown', 'very-dark'],
            srm: {
              min: 15,
              max: 26,
              unit: 'SRM',
            },
            ebc: {
              min: 30,
              max: 52,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.2,
              max: 6.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 30,
              max: 45,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 55,
          max: 83.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-black-ale',
      title: 'American-Style Black Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 31,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['very-dark', 'black'],
            srm: {
              min: 35,
              unit: 'SRM',
            },
            ebc: {
              min: 70,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 40,
              max: 70,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.056,
            max: 1.075,
            unit: 'SG',
          },
          plato: {
            min: 13.8,
            max: 18.2,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 67.9,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'citrus', 'pine'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'medium-low',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'roast-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-stout',
      title: 'American-Style Stout',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 32,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['black'],
            srm: {
              min: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 5.7,
              max: 8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 35,
              max: 60,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.075,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 18.2,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 56,
          max: 86.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'coffee', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['resin', 'citrus'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'medium',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'north-american-origin',
        'roast-led',
        'yeast-led',
        'bitter',
        'craft-style',
        'dark-color',
        'high-strength',
        'hoppy',
        'north-america',
        'roasty',
        'stout-family',
        'top-fermented',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-imperial-porter',
      title: 'American-Style Imperial Porter',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 33,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['black'],
            srm: {
              min: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 35,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.08,
            max: 1.1,
            unit: 'SG',
          },
          plato: {
            min: 19.3,
            max: 23.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 62.5,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'medium',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'roast-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-imperial-stout',
      title: 'American-Style Imperial Stout',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 34,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['black'],
            srm: {
              min: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 50,
              max: 80,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.08,
            max: 1.1,
            unit: 'SG',
          },
          plato: {
            min: 19.3,
            max: 23.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 62.5,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'citrus'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'variable',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'north-american-origin',
        'roast-led',
        'yeast-led',
        'bitter',
        'british-isles',
        'craft-style',
        'dark-color',
        'malty',
        'north-america',
        'roasty',
        'stout-family',
        'top-fermented',
        'traditional-style',
        'very-high-strength',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:double-hoppy-red-ale',
      title: 'Double Hoppy Red Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 35,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'copper', 'brown'],
            srm: {
              min: 10,
              max: 17,
              unit: 'SRM',
            },
            ebc: {
              min: 20,
              max: 34,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.1,
              max: 7.9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 45,
              max: 80,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.058,
            max: 1.08,
            unit: 'SG',
          },
          plato: {
            min: 14.3,
            max: 19.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 58.6,
          max: 81.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'toast', 'caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:imperial-red-ale',
      title: 'Imperial Red Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 36,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'copper', 'brown'],
            srm: {
              min: 10,
              max: 17,
              unit: 'SRM',
            },
            ebc: {
              min: 20,
              max: 34,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 8,
              max: 10.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 55,
              max: 85,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.08,
            max: 1.1,
            unit: 'SG',
          },
          plato: {
            min: 19.3,
            max: 23.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-imperial-or-double-india-pale-ale',
      title: 'American-Style Imperial or Double India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 37,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 2,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7.6,
              max: 10.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 65,
              max: 100,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'intense',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.067,
            max: 1.087,
            unit: 'SG',
          },
          plato: {
            min: 16.5,
            max: 21,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 76.1,
          max: 89.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'resin', 'citrus', 'tropical', 'stone fruit', 'pine'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'north-american-origin',
        'hop-led',
        'yeast-led',
        'bitter',
        'craft-style',
        'hoppy',
        'ipa-family',
        'north-america',
        'pale-color',
        'top-fermented',
        'very-high-strength',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:juicy-or-hazy-imperial-or-double-india-pale-ale',
      title: 'Juicy or Hazy Imperial or Double India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 38,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 2,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7.6,
              max: 10.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 30,
              max: 80,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'intense',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.067,
            max: 1.087,
            unit: 'SG',
          },
          plato: {
            min: 16.5,
            max: 21,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 64.2,
          max: 83.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['tropical'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: ['ale', 'north-american-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-barley-wine-ale',
      title: 'American-Style Barley Wine Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 39,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'copper'],
            srm: {
              min: 11,
              max: 18,
              unit: 'SRM',
            },
            ebc: {
              min: 22,
              max: 36,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 8.5,
              max: 12.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 60,
              max: 100,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.09,
            max: 1.12,
            unit: 'SG',
          },
          plato: {
            min: 21.6,
            max: 28,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 68.9,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'malt-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-wheat-wine-ale',
      title: 'American-Style Wheat Wine Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 40,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 5,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 8.5,
              max: 12.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 45,
              max: 85,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.088,
            max: 1.12,
            unit: 'SG',
          },
          plato: {
            min: 21.1,
            max: 28,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 63.6,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:smoke-porter',
      title: 'Smoke Porter',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 41,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'North America',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'black'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['roast-led', 'smoke-led', 'yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['smoked malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'variable',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      smokeCharacter: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'roast-led', 'smoke-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-sour-ale',
      title: 'American-Style Sour Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 42,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'lactic-bacteria'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['acidity-led', 'yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'acidity-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-fruited-sour-ale',
      title: 'American-Style Fruited Sour Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 43,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'lactic-bacteria'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['acidity-led', 'fruit-led', 'yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'acidity-led', 'fruit-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:kentucky-common-beer',
      title: 'Kentucky Common Beer',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 44,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Kentucky',
            kind: 'region',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber'],
            srm: {
              min: 11,
              max: 20,
              unit: 'SRM',
            },
            ebc: {
              min: 22,
              max: 40,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4,
              max: 5.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 15,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.055,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 13.6,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 55,
          max: 81.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'spicy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-fruit-beer',
      title: 'American-Style Fruit Beer',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 45,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 5,
              max: 50,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 100,
              unit: 'EBC',
            },
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 2.5,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 5,
              max: 70,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['fruit-led'],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.11,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 25.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 94.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'north-american-origin', 'fruit-led', 'fruit', 'specialty-beer'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:west-coast-style-india-pale-ale',
      title: 'West Coast-Style India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / North American origin.',
      taxonomy: {
        parentId: 'group:ale:north-american-origin',
        path: ['beer', 'family:ale', 'group:ale:north-american-origin'],
        sortOrder: 46,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Western United States',
            kind: 'region',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 50,
              max: 75,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.055,
            max: 1.07,
            unit: 'SG',
          },
          plato: {
            min: 13.5,
            max: 17.1,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 78.2,
          max: 92.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'resin', 'citrus', 'tropical', 'stone fruit', 'pine'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'north-american-origin',
        'hop-led',
        'yeast-led',
        'bitter',
        'craft-style',
        'high-strength',
        'hoppy',
        'ipa-family',
        'north-america',
        'pale-color',
        'top-fermented',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-koelsch',
      title: 'German-Style Koelsch',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 47,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['stange'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 22,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.042,
            max: 1.048,
            unit: 'SG',
          },
          plato: {
            min: 10.5,
            max: 11.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 76.2,
          max: 87.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'german-origin',
        'yeast-led',
        'balanced',
        'central-europe',
        'lagered',
        'pale-ale-family',
        'pale-color',
        'standard-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-altbier',
      title: 'German-Style Altbier',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 48,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'brown'],
            srm: {
              min: 11,
              max: 19,
              unit: 'SRM',
            },
            ebc: {
              min: 22,
              max: 38,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.6,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 25,
              max: 52,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 68.2,
          max: 84.6,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'german-origin',
        'yeast-led',
        'amber-ale-family',
        'amber-color',
        'bitter',
        'central-europe',
        'lagered',
        'standard-strength',
        'top-fermented',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:berliner-style-weisse',
      title: 'Berliner-Style Weisse',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 49,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'pale'],
            srm: {
              min: 2,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 2.8,
              max: 5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 3,
              max: 6,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'lactic-bacteria'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['acidity-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.028,
            max: 1.044,
            unit: 'SG',
          },
          plato: {
            min: 7.1,
            max: 11,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 78.6,
          max: 90.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'german-origin',
        'acidity-led',
        'yeast-led',
        'central-europe',
        'pale-color',
        'session-strength',
        'sour',
        'top-fermented',
        'traditional-style',
        'wheat-beer-family',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:leipzig-style-gose',
      title: 'Leipzig-Style Gose',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 50,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'salt',
            category: 'other',
            defining: true,
          },
          {
            name: 'coriander',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 2,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 5,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'lactic-bacteria'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['acidity-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'salt',
            category: 'other',
            defining: true,
          },
          {
            name: 'coriander',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.036,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 9,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'german-origin', 'acidity-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:contemporary-style-gose',
      title: 'Contemporary-Style Gose',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 51,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'salt',
            category: 'other',
            defining: true,
          },
          {
            name: 'coriander',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 18,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 5,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'lactic-bacteria'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['acidity-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'salt',
            category: 'other',
            defining: true,
          },
          {
            name: 'coriander',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.036,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 9,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'german-origin',
        'acidity-led',
        'central-europe',
        'historical-style',
        'pale-color',
        'sour',
        'spice',
        'standard-strength',
        'top-fermented',
        'wheat-beer-family',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:south-german-style-hefeweizen',
      title: 'South German-Style Hefeweizen',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 52,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 18,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.9,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.047,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.7,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['banana', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'german-origin',
        'yeast-led',
        'central-europe',
        'malty',
        'pale-color',
        'standard-strength',
        'top-fermented',
        'traditional-style',
        'wheat-beer-family',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:south-german-style-kristal-weizen',
      title: 'South German-Style Kristal Weizen',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 53,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 18,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.9,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.047,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.7,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'high',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['banana', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-leichtes-weizen',
      title: 'German-Style Leichtes Weizen',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 54,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber', 'copper'],
            srm: {
              min: 3.5,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 7,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'low',
            abv: {
              min: 2.5,
              max: 3.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.028,
            max: 1.044,
            unit: 'SG',
          },
          plato: {
            min: 7.1,
            max: 11,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 71.4,
          max: 90.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:south-german-style-bernsteinfarbenes-weizen',
      title: 'South German-Style Bernsteinfarbenes Weizen',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 55,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'brown'],
            srm: {
              min: 9,
              max: 13,
              unit: 'SRM',
            },
            ebc: {
              min: 18,
              max: 26,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.048,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.9,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'high',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:south-german-style-dunkel-weizen',
      title: 'South German-Style Dunkel Weizen',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 56,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'brown', 'very-dark'],
            srm: {
              min: 10,
              max: 25,
              unit: 'SRM',
            },
            ebc: {
              min: 20,
              max: 50,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.048,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.9,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'high',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['chocolate', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'german-origin',
        'yeast-led',
        'amber-color',
        'central-europe',
        'malty',
        'standard-strength',
        'top-fermented',
        'traditional-style',
        'wheat-beer-family',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:south-german-style-weizenbock',
      title: 'South German-Style Weizenbock',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 57,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'very-dark'],
            srm: {
              min: 4.5,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 9,
              max: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 7,
              max: 9.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 15,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.066,
            max: 1.08,
            unit: 'SG',
          },
          plato: {
            min: 16.1,
            max: 19.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 57.6,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'banana', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'german-origin',
        'malt-led',
        'yeast-led',
        'amber-color',
        'central-europe',
        'high-strength',
        'malty',
        'pale-color',
        'top-fermented',
        'traditional-style',
        'wheat-beer-family',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-rye-ale',
      title: 'German-Style Rye Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 58,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'rye',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 4,
              max: 25,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 50,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.9,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rye',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.047,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.7,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'caramel', 'chocolate', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'banana', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:bamberg-style-weiss-rauchbier',
      title: 'Bamberg-Style Weiss Rauchbier',
      type: 'style',
      description: 'A published beer-style entry in Ale / German origin.',
      taxonomy: {
        parentId: 'group:ale:german-origin',
        path: ['beer', 'family:ale', 'group:ale:german-origin'],
        sortOrder: 59,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'brown'],
            srm: {
              min: 4,
              max: 18,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 36,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.9,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['smoke-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['smoked malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.047,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.7,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'high',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['banana', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      smokeCharacter: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'german-origin', 'smoke-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-table-beer',
      title: 'Belgian-Style Table Beer',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 60,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 5,
              max: 50,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 100,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'low',
            abv: {
              min: 0.5,
              max: 2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 5,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.008,
            max: 1.023,
            unit: 'SG',
          },
          plato: {
            min: 2.1,
            max: 5.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 91.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      drinkingPurpose: {
        value: ['session or table drinking'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-session-ale',
      title: 'Belgian-Style Session Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 61,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 2.1,
              max: 5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 5,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.018,
            max: 1.04,
            unit: 'SG',
          },
          plato: {
            min: 4.5,
            max: 10,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 44.4,
          max: 95,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      drinkingPurpose: {
        value: ['session or table drinking'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-speciale-belge',
      title: 'Belgian-Style Speciale Belge',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 62,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'amber'],
            srm: {
              min: 4,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5,
              max: 6.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.054,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 13.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 85.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-blonde-ale',
      title: 'Belgian-Style Blonde Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 63,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 2,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 15,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.054,
            max: 1.068,
            unit: 'SG',
          },
          plato: {
            min: 13.3,
            max: 16.6,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 74.1,
          max: 85.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'yeast-led',
        'any-fermentation',
        'balanced',
        'craft-style',
        'north-america',
        'pale-ale-family',
        'pale-color',
        'standard-strength',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-strong-blonde-ale',
      title: 'Belgian-Style Strong Blonde Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 64,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 2,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7.1,
              max: 11.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 20,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.064,
            max: 1.096,
            unit: 'SG',
          },
          plato: {
            min: 15.7,
            max: 22.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 71.9,
          max: 91.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-strong-dark-ale',
      title: 'Belgian-Style Strong Dark Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 65,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'very-dark'],
            srm: {
              min: 8,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 16,
              max: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7.1,
              max: 11.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.064,
            max: 1.096,
            unit: 'SG',
          },
          plato: {
            min: 15.7,
            max: 22.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 71.9,
          max: 87.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-dubbel',
      title: 'Belgian-Style Dubbel',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 66,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 16,
              max: 36,
              unit: 'SRM',
            },
            ebc: {
              min: 32,
              max: 72,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.075,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 18.2,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      productionTradition: {
        value: ['monastic or abbey-associated'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'yeast-led',
        'amber-color',
        'high-strength',
        'malty',
        'top-fermented',
        'traditional-style',
        'western-europe',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-tripel',
      title: 'Belgian-Style Tripel',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 67,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'amber'],
            srm: {
              min: 4,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 17.5,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7.1,
              max: 10.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 20,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.063,
            max: 1.092,
            unit: 'SG',
          },
          plato: {
            min: 15.5,
            max: 22,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 77.8,
          max: 91.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'banana', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      productionTradition: {
        value: ['monastic or abbey-associated'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'yeast-led',
        'bitter',
        'high-strength',
        'pale-color',
        'top-fermented',
        'traditional-style',
        'western-europe',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-quadrupel',
      title: 'Belgian-Style Quadrupel',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 68,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'brown'],
            srm: {
              min: 16,
              max: 36,
              unit: 'SRM',
            },
            ebc: {
              min: 32,
              max: 72,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 10,
              max: 14.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 25,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.092,
            max: 1.12,
            unit: 'SG',
          },
          plato: {
            min: 22,
            max: 28,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 78.3,
          max: 88.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      productionTradition: {
        value: ['monastic or abbey-associated'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-witbier',
      title: 'Belgian-Style Witbier',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 69,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'oats',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'coriander',
            category: 'spice',
            defining: true,
          },
          {
            name: 'citrus peel',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'pale'],
            srm: {
              min: 2,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4,
              max: 5.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 10,
              max: 17,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'oats',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'coriander',
            category: 'spice',
            defining: true,
          },
          {
            name: 'citrus peel',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.038,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 9.5,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 63.2,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'yeast-led',
        'pale-color',
        'spice',
        'standard-strength',
        'top-fermented',
        'traditional-style',
        'western-europe',
        'wheat-beer-family',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:classic-french-and-belgian-style-saison',
      title: 'Classic French & Belgian-Style Saison',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 70,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 2,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.5,
              max: 6.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 38,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 80,
          max: 93.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'high',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'spicy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      packagingCarbonation: {
        value: ['bottle-conditioned'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      productionTradition: {
        value: ['farmhouse'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:specialty-saison',
      title: 'Specialty Saison',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 71,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium and France',
            kind: 'multiple',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'brown'],
            srm: {
              min: 3,
              max: 20,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 40,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 5,
              max: 9.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 20,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.08,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 19.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 93.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      carbonation: {
        value: {
          perceived: 'high',
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'clove', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      packagingCarbonation: {
        value: ['bottle-conditioned'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      productionTradition: {
        value: ['farmhouse'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:french-style-biere-de-garde',
      title: 'French-Style Bière de Garde',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 72,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'France',
            kind: 'country',
            countryCode: 'FR',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'brown'],
            srm: {
              min: 4,
              max: 16,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 32,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 4.4,
              max: 8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.08,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 19.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 87.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'yeast-led',
        'amber-ale-family',
        'amber-color',
        'any-fermentation',
        'high-strength',
        'lagered',
        'malty',
        'pale-color',
        'traditional-style',
        'western-europe',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-flanders-oud-bruin-or-oud-red-ale',
      title: 'Belgian-Style Flanders Oud Bruin or Oud Red Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 73,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'very-dark'],
            srm: {
              min: 12,
              max: 25,
              unit: 'SRM',
            },
            ebc: {
              min: 24,
              max: 50,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 6.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 5,
              max: 18,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'lactic-bacteria'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['acidity-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 63.6,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'acidity-led',
        'yeast-led',
        'amber-color',
        'balanced',
        'sour',
        'sour-ale-family',
        'standard-strength',
        'top-fermented',
        'traditional-style',
        'western-europe',
        'wood',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-lambic',
      title: 'Belgian-Style Lambic',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 74,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'amber'],
            srm: {
              min: 6,
              max: 13,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 26,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 5,
              max: 7.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 11,
              max: 23,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['spontaneous-culture'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['acidity-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['blended-age', 'wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      fermentationProgram: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      acidificationMethod: {
        value: ['spontaneous'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.065,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 16,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'acidity-led',
        'yeast-led',
        'pale-color',
        'sour',
        'standard-strength',
        'traditional-style',
        'western-europe',
        'wheat-beer-family',
        'wild-fermented',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:traditional-belgian-style-gueuze',
      title: 'Traditional Belgian-Style Gueuze',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 75,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'amber'],
            srm: {
              min: 6,
              max: 13,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 26,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 5,
              max: 8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 11,
              max: 23,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['spontaneous-culture'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['acidity-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['blended-age', 'wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      fermentationProgram: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      acidificationMethod: {
        value: ['spontaneous'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.065,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 16,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      blending: {
        value: ['blend of multiple lambic ages'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'ale',
        'belgian-and-french-origin',
        'acidity-led',
        'yeast-led',
        'aged',
        'high-strength',
        'pale-color',
        'sour',
        'traditional-style',
        'western-europe',
        'wheat-beer-family',
        'wild-fermented',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:contemporary-belgian-style-spontaneous-fermented-ale',
      title: 'Contemporary Belgian-Style Spontaneous Fermented Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 76,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'very-dark'],
            srm: {
              min: 6,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 5,
              max: 8.9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 11,
              max: 23,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['spontaneous-culture'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      fermentationProgram: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.072,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 17.5,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 63.6,
          max: 94.4,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'earthy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:other-belgian-style-ale',
      title: 'Other Belgian-Style Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 77,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-fruit-beer',
      title: 'Belgian-Style Fruit Beer',
      type: 'style',
      description: 'A published beer-style entry in Ale / Belgian and French origin.',
      taxonomy: {
        parentId: 'group:ale:belgian-and-french-origin',
        path: ['beer', 'family:ale', 'group:ale:belgian-and-french-origin'],
        sortOrder: 78,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 5,
              max: 50,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 100,
              unit: 'EBC',
            },
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 2.5,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
            ibu: {
              min: 5,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['fruit-led'],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.11,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 25.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 94.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'belgian-and-french-origin', 'fruit-led', 'fruit', 'specialty-beer'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:grodziskie',
      title: 'Grodziskie',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 79,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Poland',
            kind: 'country',
            countryCode: 'PL',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'low',
            abv: {
              min: 2.5,
              max: 3.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.031,
            max: 1.034,
            unit: 'SG',
          },
          plato: {
            min: 7.7,
            max: 8.5,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 61.3,
          max: 73.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:adambier',
      title: 'Adambier',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 80,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 15,
              max: 35,
              unit: 'SRM',
            },
            ebc: {
              min: 30,
              max: 70,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 9,
              max: 11,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 30,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.07,
            max: 1.09,
            unit: 'SG',
          },
          plato: {
            min: 17.1,
            max: 21.6,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 71.4,
          max: 88.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:dutch-style-kuit-kuyt-or-koyt',
      title: 'Dutch-Style Kuit, Kuyt or Koyt',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 81,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Netherlands',
            kind: 'country',
            countryCode: 'NL',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'copper'],
            srm: {
              min: 5,
              max: 12.5,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 25,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 4.7,
              max: 7.9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 25,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.08,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 19.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 70,
          max: 92.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:international-style-pale-ale',
      title: 'International-Style Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 82,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Multiple or other origins',
            kind: 'multiple',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'copper'],
            srm: {
              min: 5,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 6.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 20,
              max: 42,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 90,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:classic-australian-style-pale-ale',
      title: 'Classic Australian-Style Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 83,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Australia',
            kind: 'country',
            countryCode: 'AU',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'copper'],
            srm: {
              min: 3,
              max: 10,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 20,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 15,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 13,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 75,
          max: 92.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:australian-style-pale-ale',
      title: 'Australian-Style Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 84,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Australia',
            kind: 'country',
            countryCode: 'AU',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 18,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 15,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 13,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 75,
          max: 88.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['tropical', 'stone fruit'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:new-zealand-style-pale-ale',
      title: 'New Zealand-Style Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 85,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'New Zealand',
            kind: 'country',
            countryCode: 'NZ',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 3,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 18,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 15,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 13,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 75,
          max: 88.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['tropical', 'stone fruit'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:new-zealand-style-india-pale-ale',
      title: 'New Zealand-Style India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 86,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'New Zealand',
            kind: 'country',
            countryCode: 'NZ',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 8,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 16,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 50,
              max: 70,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'intense',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.07,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 17.1,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'citrus', 'tropical', 'stone fruit'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:finnish-style-sahti',
      title: 'Finnish-Style Sahti',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 87,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Finland',
            kind: 'country',
            countryCode: 'FI',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'copper'],
            srm: {
              min: 4,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 7,
              max: 8.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 3,
              max: 16,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.09,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 21.6,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 33.3,
          max: 82.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'banana', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:swedish-style-gotlandsdricke',
      title: 'Swedish-Style Gotlandsdricke',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 88,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Sweden',
            kind: 'country',
            countryCode: 'SE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'copper'],
            srm: {
              min: 4,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.5,
              max: 6.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 15,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:breslau-style-schoeps',
      title: 'Breslau-Style Schoeps',
      type: 'style',
      description: 'A published beer-style entry in Ale / Other origin.',
      taxonomy: {
        parentId: 'group:ale:other-origin',
        path: ['beer', 'family:ale', 'group:ale:other-origin'],
        sortOrder: 89,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Wrocław / Breslau',
            kind: 'cultural-area',
            countryCode: 'PL',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'black'],
            srm: {
              min: 2,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 6,
              max: 7,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.067,
            max: 1.072,
            unit: 'SG',
          },
          plato: {
            min: 16.5,
            max: 17.5,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 64.2,
          max: 77.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'biscuit', 'toast', 'caramel', 'nutty', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:scottish-style-light-ale',
      title: 'Scottish-Style Light Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Scottish origin.',
      taxonomy: {
        parentId: 'group:ale:scottish-origin',
        path: ['beer', 'family:ale', 'group:ale:scottish-origin'],
        sortOrder: 90,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Scotland',
            kind: 'cultural-area',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'brown'],
            srm: {
              min: 6,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'low',
            abv: {
              min: 2.8,
              max: 3.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 9,
              max: 20,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.035,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 8.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 82.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'scottish-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:scottish-style-heavy-ale',
      title: 'Scottish-Style Heavy Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Scottish origin.',
      taxonomy: {
        parentId: 'group:ale:scottish-origin',
        path: ['beer', 'family:ale', 'group:ale:scottish-origin'],
        sortOrder: 91,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Scotland',
            kind: 'cultural-area',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'brown'],
            srm: {
              min: 8,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 16,
              max: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3.5,
              max: 4.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 12,
              max: 20,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.035,
            max: 1.04,
            unit: 'SG',
          },
          plato: {
            min: 8.8,
            max: 10,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60,
          max: 75,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'scottish-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:scottish-style-export-ale',
      title: 'Scottish-Style Export Ale',
      type: 'style',
      description: 'A published beer-style entry in Ale / Scottish origin.',
      taxonomy: {
        parentId: 'group:ale:scottish-origin',
        path: ['beer', 'family:ale', 'group:ale:scottish-origin'],
        sortOrder: 92,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Scotland',
            kind: 'cultural-area',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'brown'],
            srm: {
              min: 9,
              max: 19,
              unit: 'SRM',
            },
            ebc: {
              min: 18,
              max: 38,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.1,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 15,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 55,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'scottish-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:scotch-ale-or-wee-heavy',
      title: 'Scotch Ale or Wee Heavy',
      type: 'style',
      description: 'A published beer-style entry in Ale / Scottish origin.',
      taxonomy: {
        parentId: 'group:ale:scottish-origin',
        path: ['beer', 'family:ale', 'group:ale:scottish-origin'],
        sortOrder: 93,
      },
      fermentationFamily: 'ale',
      originLocations: {
        value: [
          {
            name: 'Scotland',
            kind: 'cultural-area',
            countryCode: 'GB',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['top-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 15,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 30,
              max: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.6,
              max: 8.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 25,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.072,
            max: 1.085,
            unit: 'SG',
          },
          plato: {
            min: 17.5,
            max: 20.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 61.1,
          max: 81.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['ale', 'scottish-origin', 'malt-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:czech-style-pale-lager',
      title: 'Czech-Style Pale Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / European origin.',
      taxonomy: {
        parentId: 'group:lager:european-origin',
        path: ['beer', 'family:lager', 'group:lager:european-origin'],
        sortOrder: 94,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Czechia',
            kind: 'country',
            countryCode: 'CZ',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 4,
              max: 7,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 14,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.6,
              max: 5.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 22,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.99,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 68.2,
          max: 82.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['clear'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'biscuit', 'toast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'european-origin',
        'yeast-led',
        'bitter',
        'bottom-fermented',
        'central-europe',
        'hoppy',
        'lagered',
        'pale-color',
        'pale-lager-family',
        'session-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:vienna-style-lager',
      title: 'Vienna-Style Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / European origin.',
      taxonomy: {
        parentId: 'group:lager:european-origin',
        path: ['beer', 'family:lager', 'group:lager:european-origin'],
        sortOrder: 95,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Vienna',
            kind: 'city',
            countryCode: 'AT',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'brown'],
            srm: {
              min: 6,
              max: 18,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 36,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 26,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.046,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.4,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60.9,
          max: 85.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'european-origin',
        'yeast-led',
        'amber-color',
        'amber-lager-family',
        'balanced',
        'bottom-fermented',
        'central-europe',
        'lagered',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:baltic-style-porter',
      title: 'Baltic-Style Porter',
      type: 'style',
      description: 'A published beer-style entry in Lager / European origin.',
      taxonomy: {
        parentId: 'group:lager:european-origin',
        path: ['beer', 'family:lager', 'group:lager:european-origin'],
        sortOrder: 96,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Baltic region',
            kind: 'cultural-area',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['black'],
            srm: {
              min: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 7.6,
              max: 9.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 35,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['roast-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast', 'lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.072,
            max: 1.092,
            unit: 'SG',
          },
          plato: {
            min: 17.5,
            max: 22,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 69.4,
          max: 82.6,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['opaque'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'banana'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      roastIntensity: {
        value: 'medium-high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'european-origin',
        'roast-led',
        'yeast-led',
        'any-fermentation',
        'dark-color',
        'eastern-europe',
        'high-strength',
        'lagered',
        'malty',
        'porter-family',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:czech-style-amber-lager',
      title: 'Czech-Style Amber Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / European origin.',
      taxonomy: {
        parentId: 'group:lager:european-origin',
        path: ['beer', 'family:lager', 'group:lager:european-origin'],
        sortOrder: 97,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Czechia',
            kind: 'country',
            countryCode: 'CZ',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'brown'],
            srm: {
              min: 10,
              max: 17,
              unit: 'SRM',
            },
            ebc: {
              min: 20,
              max: 35,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 5.8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 14.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 61.4,
          max: 85,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'toast', 'caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'european-origin',
        'yeast-led',
        'amber-color',
        'amber-lager-family',
        'balanced',
        'bottom-fermented',
        'central-europe',
        'lagered',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:czech-style-dark-lager',
      title: 'Czech-Style Dark Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / European origin.',
      taxonomy: {
        parentId: 'group:lager:european-origin',
        path: ['beer', 'family:lager', 'group:lager:european-origin'],
        sortOrder: 98,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Czechia',
            kind: 'country',
            countryCode: 'CZ',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'black'],
            srm: {
              min: 35,
              unit: 'SRM',
            },
            ebc: {
              min: 68,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.4,
              max: 5.8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 18,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 14.99,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65.9,
          max: 85,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'toast', 'caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'european-origin',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'central-europe',
        'dark-color',
        'dark-lager-family',
        'lagered',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:italian-style-pilsener',
      title: 'Italian-Style Pilsener',
      type: 'style',
      description: 'A published beer-style entry in Lager / European origin.',
      taxonomy: {
        parentId: 'group:lager:european-origin',
        path: ['beer', 'family:lager', 'group:lager:european-origin'],
        sortOrder: 99,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Italy',
            kind: 'country',
            countryCode: 'IT',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.5,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 25,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 70.5,
          max: 88.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'european-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-lager',
      title: 'American-Style Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 100,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.1,
              max: 5.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 5,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.048,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 11.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 70,
          max: 87.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'north-american-origin',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'lagered',
        'north-america',
        'pale-color',
        'pale-lager-family',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:contemporary-american-style-lager',
      title: 'Contemporary American-Style Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 101,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.1,
              max: 5.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 5,
              max: 16,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.048,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 11.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 70,
          max: 87.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'north-american-origin',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'lagered',
        'north-america',
        'pale-color',
        'pale-lager-family',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-light-lager',
      title: 'American-Style Light Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 102,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['very-light', 'pale'],
            srm: {
              min: 1.5,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 3,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3.5,
              max: 4.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 4,
              max: 10,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.024,
            max: 1.04,
            unit: 'SG',
          },
          plato: {
            min: 6.1,
            max: 10,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 100,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'north-american-origin',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'lagered',
        'north-america',
        'pale-color',
        'pale-lager-family',
        'session-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:contemporary-american-style-light-lager',
      title: 'Contemporary American-Style Light Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 103,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['very-light', 'amber'],
            srm: {
              min: 1.5,
              max: 12,
              unit: 'SRM',
            },
            ebc: {
              min: 3,
              max: 24,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3.5,
              max: 4.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 5,
              max: 20,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.024,
            max: 1.04,
            unit: 'SG',
          },
          plato: {
            min: 6.1,
            max: 10,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 100,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'north-american-origin',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'lagered',
        'north-america',
        'pale-color',
        'pale-lager-family',
        'session-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-pilsener',
      title: 'American-Style Pilsener',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 104,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.9,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 25,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 11.2,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:contemporary-american-style-pilsener',
      title: 'Contemporary American-Style Pilsener',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 105,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.9,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 25,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.053,
            unit: 'SG',
          },
          plato: {
            min: 11.2,
            max: 13,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60,
          max: 81.1,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-india-pale-lager',
      title: 'American-Style India Pale Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 106,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2.5,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 5,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 5.6,
              max: 7.9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 50,
              max: 70,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.065,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 15.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 68,
          max: 90.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-malt-liquor',
      title: 'American-Style Malt Liquor',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 107,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 12,
              max: 23,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      alternativeFermentables: {
        value: [
          {
            name: 'alternative fermentable',
            category: 'other',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 80,
          max: 93.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'malt-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-amber-lager',
      title: 'American-Style Amber Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 108,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['gold', 'copper'],
            srm: {
              min: 6,
              max: 14,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 28,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 18,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.042,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 10.5,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 57.1,
          max: 82.1,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'north-american-origin',
        'yeast-led',
        'amber-color',
        'amber-lager-family',
        'bottom-fermented',
        'lagered',
        'malty',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-maerzen-oktoberfest',
      title: 'American-Style Maerzen/Oktoberfest',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 109,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'brown'],
            srm: {
              min: 4,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.1,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'biscuit', 'toast', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal', 'spicy', 'citrus'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      seasonality: {
        value: ['autumn festival'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-dark-lager',
      title: 'American-Style Dark Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 110,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 14,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 28,
              max: 50,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.1,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 14,
              max: 24,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 70,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'north-american-origin',
        'yeast-led',
        'bottom-fermented',
        'dark-color',
        'dark-lager-family',
        'lagered',
        'malty',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:mexican-style-light-lager',
      title: 'Mexican-Style Light Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 111,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Mexico',
            kind: 'country',
            countryCode: 'MX',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'pale', 'gold'],
            srm: {
              min: 2,
              max: 3,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 6,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3.2,
              max: 4.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 8,
              max: 17,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.026,
            max: 1.044,
            unit: 'SG',
          },
          plato: {
            min: 6.5,
            max: 11,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 61.5,
          max: 93.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:mexican-style-pale-lager',
      title: 'Mexican-Style Pale Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 112,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Mexico',
            kind: 'country',
            countryCode: 'MX',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'gold'],
            srm: {
              min: 3,
              max: 5,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 10,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 4.5,
              max: 5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 15,
              max: 22,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 11.1,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:mexican-style-amber-lager',
      title: 'Mexican-Style Amber Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 113,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Mexico',
            kind: 'country',
            countryCode: 'MX',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'copper'],
            srm: {
              min: 7,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 13,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4,
              max: 5.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 12,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 11.1,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.3,
          max: 80.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'caramel', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:mexican-style-dark-lager',
      title: 'Mexican-Style Dark Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 114,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Mexico',
            kind: 'country',
            countryCode: 'MX',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'brown'],
            srm: {
              min: 16,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 31,
              max: 59,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.5,
              max: 5.8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 12,
              max: 28,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.048,
            max: 1.053,
            unit: 'SG',
          },
          plato: {
            min: 11.9,
            max: 13.1,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 75,
          max: 83,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'toast', 'caramel', 'nutty', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:west-coast-style-pilsener',
      title: 'West Coast-Style Pilsener',
      type: 'style',
      description: 'A published beer-style entry in Lager / North American origin.',
      taxonomy: {
        parentId: 'group:lager:north-american-origin',
        path: ['beer', 'family:lager', 'group:lager:north-american-origin'],
        sortOrder: 115,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Western United States',
            kind: 'region',
            countryCode: 'US',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2.5,
              max: 6.5,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 13,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 30,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.057,
            unit: 'SG',
          },
          plato: {
            min: 12.5,
            max: 14,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 76,
          max: 91.2,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'toast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'resin', 'citrus', 'tropical', 'stone fruit', 'pine', 'dank'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'north-american-origin', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:international-light-lager',
      title: 'International Light Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / Other origin.',
      taxonomy: {
        parentId: 'group:lager:other-origin',
        path: ['beer', 'family:lager', 'group:lager:other-origin'],
        sortOrder: 116,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Multiple or other origins',
            kind: 'multiple',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2,
              max: 5,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 10,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.1,
              max: 5.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 9,
              max: 18,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.038,
            max: 1.046,
            unit: 'SG',
          },
          plato: {
            min: 9.5,
            max: 11.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73.7,
          max: 87,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'other-origin',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'lagered',
        'pale-color',
        'pale-lager-family',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:international-style-pilsener',
      title: 'International-Style Pilsener',
      type: 'style',
      description: 'A published beer-style entry in Lager / Other origin.',
      taxonomy: {
        parentId: 'group:lager:other-origin',
        path: ['beer', 'family:lager', 'group:lager:other-origin'],
        sortOrder: 117,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Multiple or other origins',
            kind: 'multiple',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: false,
          },
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.6,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 15,
              max: 40,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65,
          max: 84.6,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'other-origin',
        'hop-led',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'lagered',
        'pale-color',
        'pale-lager-family',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:rice-lager',
      title: 'Rice Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / Other origin.',
      taxonomy: {
        parentId: 'group:lager:other-origin',
        path: ['beer', 'family:lager', 'group:lager:other-origin'],
        sortOrder: 118,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Multiple or other origins',
            kind: 'multiple',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'rice',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'pale', 'gold'],
            srm: {
              min: 2,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 15,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rice',
              form: 'unmalted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 80,
          max: 92.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['nutty', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'other-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-leichtbier',
      title: 'German-Style Leichtbier',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 119,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'pale'],
            srm: {
              min: 2,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 2.5,
              max: 3.7,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 16,
              max: 24,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.026,
            max: 1.034,
            unit: 'SG',
          },
          plato: {
            min: 6.6,
            max: 8.5,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 61.5,
          max: 82.4,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'yeast-led',
        'bitter',
        'bottom-fermented',
        'central-europe',
        'hoppy',
        'lagered',
        'pale-color',
        'pale-lager-family',
        'session-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-pilsener',
      title: 'German-Style Pilsener',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 120,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 4,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 8,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.6,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
            ibu: {
              min: 25,
              max: 50,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 72.7,
          max: 88.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      hopExpression: {
        value: ['floral', 'herbal'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'hop-led',
        'yeast-led',
        'bitter',
        'bottom-fermented',
        'central-europe',
        'hoppy',
        'lagered',
        'pale-color',
        'pilsner-family',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:munich-style-helles',
      title: 'Munich-Style Helles',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 121,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'gold'],
            srm: {
              min: 2.5,
              max: 5,
              unit: 'SRM',
            },
            ebc: {
              min: 5,
              max: 10,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 15,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.048,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 11.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 72.7,
          max: 83.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'yeast-led',
        'bottom-fermented',
        'central-europe',
        'lagered',
        'malty',
        'pale-color',
        'pale-lager-family',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:dortmunder-european-style-export',
      title: 'Dortmunder/European-Style Export',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 122,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 6,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 12,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.1,
              max: 6.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 23,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.057,
            unit: 'SG',
          },
          plato: {
            min: 12.5,
            max: 14,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 72,
          max: 82.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'biscuit', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:franconian-style-rotbier',
      title: 'Franconian-Style Rotbier',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 123,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber'],
            srm: {
              min: 6,
              max: 18,
              unit: 'SRM',
            },
            ebc: {
              min: 12,
              max: 36,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.4,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 22,
              max: 28,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.046,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.4,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60.9,
          max: 78.6,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-maerzen',
      title: 'German-Style Maerzen',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 124,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'brown'],
            srm: {
              min: 4,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.1,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 18,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.052,
            max: 1.057,
            unit: 'SG',
          },
          plato: {
            min: 13,
            max: 14,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 61.5,
          max: 78.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'biscuit', 'toast', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      seasonality: {
        value: ['autumn festival'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'yeast-led',
        'amber-color',
        'amber-lager-family',
        'bottom-fermented',
        'central-europe',
        'lagered',
        'malty',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-oktoberfest-festbier',
      title: 'German-Style Oktoberfest/Festbier',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 125,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 3,
              max: 8,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 15,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.1,
              max: 6.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 23,
              max: 29,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.054,
            max: 1.057,
            unit: 'SG',
          },
          plato: {
            min: 13.5,
            max: 14,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 74.1,
          max: 82.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      seasonality: {
        value: ['autumn festival'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:munich-style-dunkel',
      title: 'Munich-Style Dunkel',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 126,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown'],
            srm: {
              min: 15,
              max: 25,
              unit: 'SRM',
            },
            ebc: {
              min: 30,
              max: 49,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 16,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.048,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.9,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 62.5,
          max: 75,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'biscuit', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'yeast-led',
        'bottom-fermented',
        'central-europe',
        'dark-color',
        'dark-lager-family',
        'lagered',
        'malty',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:european-style-dark-lager',
      title: 'European-Style Dark Lager',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 127,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'black'],
            srm: {
              min: 15,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 30,
              max: 78,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 20,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['dark or roasted malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.048,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.9,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 62.5,
          max: 75,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'german-origin', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-schwarzbier',
      title: 'German-Style Schwarzbier',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 128,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'brown', 'very-dark', 'black'],
            srm: {
              min: 25,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 50,
              max: 80,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 3.8,
              max: 4.9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 22,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 65.9,
          max: 80.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'yeast-led',
        'balanced',
        'bottom-fermented',
        'central-europe',
        'dark-color',
        'dark-lager-family',
        'lagered',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:bamberg-style-helles-rauchbier',
      title: 'Bamberg-Style Helles Rauchbier',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 129,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'gold'],
            srm: {
              min: 4,
              max: 5.5,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 11,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.8,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 18,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['smoke-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['smoked malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.05,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.4,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 72.7,
          max: 84,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      smokeCharacter: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'german-origin', 'smoke-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:bamberg-style-maerzen-rauchbier',
      title: 'Bamberg-Style Maerzen Rauchbier',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 130,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'brown'],
            srm: {
              min: 4,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 5.1,
              max: 6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 18,
              max: 25,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['smoke-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['smoked malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.05,
            max: 1.06,
            unit: 'SG',
          },
          plato: {
            min: 12.4,
            max: 14.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60,
          max: 80,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      smokeCharacter: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      seasonality: {
        value: ['autumn festival'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'german-origin', 'smoke-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:bamberg-style-bock-rauchbier',
      title: 'Bamberg-Style Bock Rauchbier',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 131,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 20,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 40,
              max: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['smoke-led', 'malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['smoked malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.066,
            max: 1.074,
            unit: 'SG',
          },
          plato: {
            min: 16.1,
            max: 18,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 63.6,
          max: 75.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      smokeCharacter: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['lager', 'german-origin', 'smoke-led', 'malt-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-heller-bock-maibock',
      title: 'German-Style Heller Bock/Maibock',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 132,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'amber'],
            srm: {
              min: 4,
              max: 9,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 18,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 8.1,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 20,
              max: 38,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.066,
            max: 1.074,
            unit: 'SG',
          },
          plato: {
            min: 16.1,
            max: 18,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 69.7,
          max: 83.8,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['bread', 'toast', 'caramel', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'malt-led',
        'yeast-led',
        'bock-family',
        'bottom-fermented',
        'central-europe',
        'high-strength',
        'lagered',
        'malty',
        'pale-color',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:traditional-german-style-bock',
      title: 'Traditional German-Style Bock',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 133,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'very-dark'],
            srm: {
              min: 20,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 40,
              max: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.3,
              max: 7.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 20,
              max: 30,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['cold-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.066,
            max: 1.074,
            unit: 'SG',
          },
          plato: {
            min: 16.1,
            max: 18,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 63.6,
          max: 75.7,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel', 'nutty', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'malt-led',
        'yeast-led',
        'amber-color',
        'bock-family',
        'bottom-fermented',
        'central-europe',
        'high-strength',
        'lagered',
        'malty',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-doppelbock',
      title: 'German-Style Doppelbock',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 134,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['copper', 'brown'],
            srm: {
              min: 12,
              max: 30,
              unit: 'SRM',
            },
            ebc: {
              min: 24,
              max: 60,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 6.6,
              max: 7.9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 17,
              max: 27,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.074,
            max: 1.08,
            unit: 'SG',
          },
          plato: {
            min: 18,
            max: 19.3,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 73,
          max: 82.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'malt-led',
        'yeast-led',
        'amber-color',
        'bock-family',
        'bottom-fermented',
        'central-europe',
        'high-strength',
        'lagered',
        'malty',
        'pale-color',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:german-style-eisbock',
      title: 'German-Style Eisbock',
      type: 'style',
      description: 'A published beer-style entry in Lager / German origin.',
      taxonomy: {
        parentId: 'group:lager:german-origin',
        path: ['beer', 'family:lager', 'group:lager:german-origin'],
        sortOrder: 135,
      },
      fermentationFamily: 'lager',
      originLocations: {
        value: [
          {
            name: 'Germany',
            kind: 'country',
            countryCode: 'DE',
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1700,
          toYear: 1900,
          label: '18th to 19th century tradition',
          precision: 'century',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['bottom-fermented'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['brown', 'black'],
            srm: {
              min: 15,
              max: 50,
              unit: 'SRM',
            },
            ebc: {
              min: 30,
              max: 100,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 8.6,
              max: 14.3,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 26,
              max: 33,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['malt-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.074,
            max: 1.116,
            unit: 'SG',
          },
          plato: {
            min: 18,
            max: 27.2,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'lager',
        'german-origin',
        'malt-led',
        'yeast-led',
        'amber-color',
        'bock-family',
        'bottom-fermented',
        'central-europe',
        'lagered',
        'malty',
        'traditional-style',
        'very-high-strength',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:belgian-style-fruit-lambic',
      title: 'Belgian-Style Fruit Lambic',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 136,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Belgium',
            kind: 'country',
            countryCode: 'BE',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 4,
              max: 9,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 15,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['spontaneous-culture'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['acidity-led', 'fruit-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['blended-age', 'wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      fermentationProgram: {
        value: ['spontaneous-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      acidificationMethod: {
        value: ['spontaneous'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      definingAdditions: {
        value: [
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.036,
            max: 1.072,
            unit: 'SG',
          },
          plato: {
            min: 9,
            max: 17.5,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 55.6,
          max: 88.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'mixed',
        'all-origins',
        'acidity-led',
        'fruit-led',
        'yeast-led',
        'fruit',
        'pale-color',
        'sour',
        'standard-strength',
        'traditional-style',
        'western-europe',
        'wheat-beer-family',
        'wild-fermented',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:session-beer',
      title: 'Session Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 137,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 2,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'session',
            abv: {
              min: 0.5,
              max: 5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 10,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.008,
            max: 1.04,
            unit: 'SG',
          },
          plato: {
            min: 2.1,
            max: 10,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 90,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      drinkingPurpose: {
        value: ['session or table drinking'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-cream-ale',
      title: 'American-Style Cream Ale',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 138,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['nonic-pint'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'maize',
            category: 'grain',
            defining: false,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'gold'],
            srm: {
              min: 2,
              max: 5,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 10,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.3,
              max: 5.7,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
            ibu: {
              min: 10,
              max: 22,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'maize',
              form: 'unmalted',
              primary: false,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['ale yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.044,
            max: 1.052,
            unit: 'SG',
          },
          plato: {
            min: 11,
            max: 12.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 77.3,
          max: 92.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'mixed',
        'all-origins',
        'yeast-led',
        'any-fermentation',
        'balanced',
        'north-america',
        'pale-ale-family',
        'pale-color',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:california-common-beer',
      title: 'California Common Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 139,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Western United States',
            kind: 'region',
            countryCode: 'US',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['warm-fermented-lager-yeast'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber'],
            srm: {
              min: 8,
              max: 15,
              unit: 'SRM',
            },
            ebc: {
              min: 16,
              max: 30,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 4.6,
              max: 5.7,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
            ibu: {
              min: 35,
              max: 45,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['saccharomyces-lager'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'medium-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.045,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 11.2,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 60,
          max: 82.1,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['toast', 'caramel'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'mixed',
        'all-origins',
        'yeast-led',
        'amber-color',
        'amber-lager-family',
        'bitter',
        'bottom-fermented',
        'hoppy',
        'north-america',
        'standard-strength',
        'traditional-style',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:american-style-wheat-beer',
      title: 'American-Style Wheat Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 140,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'United States',
            kind: 'country',
            countryCode: 'US',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1900,
          toYear: 2026,
          label: 'modern commercial or craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'brown'],
            srm: {
              min: 2,
              max: 22,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 44,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'standard',
            abv: {
              min: 3.5,
              max: 5.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 10,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      yeastFamily: {
        value: ['lager yeast', 'weissbier yeast'],
        status: 'documented',
        sourceIds: ['bjcp-2021'],
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.036,
            max: 1.056,
            unit: 'SG',
          },
          plato: {
            min: 9,
            max: 13.8,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 55.6,
          max: 92.9,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'caramel', 'chocolate', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      tags: [
        'mixed',
        'all-origins',
        'yeast-led',
        'any-fermentation',
        'balanced',
        'craft-style',
        'north-america',
        'pale-color',
        'standard-strength',
        'wheat-beer-family',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:kellerbier-or-zwickelbier',
      title: 'Kellerbier or Zwickelbier',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 141,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'sulfur'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:fruit-wheat-beer',
      title: 'Fruit Wheat Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 142,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['weizen-glass'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'wheat',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber'],
            srm: {
              min: 2,
              max: 10,
              unit: 'SRM',
            },
            ebc: {
              min: 4,
              max: 20,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 2.5,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 10,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'wheat',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['fruit-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'fruit',
            category: 'fruit',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.11,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 25.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 94.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'fruit-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:field-beer',
      title: 'Field Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 143,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:pumpkin-spice-beer',
      title: 'Pumpkin Spice Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 144,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'pumpkin or squash',
            category: 'other',
            defining: true,
          },
          {
            name: 'spices',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 5,
              max: 50,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 100,
              unit: 'EBC',
            },
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 2.5,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 5,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'pumpkin or squash',
            category: 'other',
            defining: true,
          },
          {
            name: 'spices',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.11,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 25.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 94.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      seasonality: {
        value: ['autumn'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:pumpkin-squash-beer',
      title: 'Pumpkin/Squash Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 145,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'pumpkin or squash',
            category: 'other',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 5,
              max: 50,
              unit: 'SRM',
            },
            ebc: {
              min: 10,
              max: 100,
              unit: 'EBC',
            },
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 2.5,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
            ibu: {
              min: 5,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'pumpkin or squash',
            category: 'other',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.11,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 25.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 94.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      seasonality: {
        value: ['autumn'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:chocolate-or-cocoa-beer',
      title: 'Chocolate or Cocoa Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 146,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'chocolate or cocoa',
            category: 'other',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      definingAdditions: {
        value: [
          {
            name: 'chocolate or cocoa',
            category: 'other',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:coffee-beer',
      title: 'Coffee Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 147,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'coffee',
            category: 'other',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      definingAdditions: {
        value: [
          {
            name: 'coffee',
            category: 'other',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['coffee'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:chili-pepper-beer',
      title: 'Chili Pepper Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 148,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'chili pepper',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'chili pepper',
            category: 'spice',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['pepper'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:herb-and-spice-beer',
      title: 'Herb and Spice Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 149,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'herbs or spices',
            category: 'herb',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium-low',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      definingAdditions: {
        value: [
          {
            name: 'herbs or spices',
            category: 'herb',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:specialty-beer',
      title: 'Specialty Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 150,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:specialty-honey-beer',
      title: 'Specialty Honey Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 151,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'honey',
            category: 'sugar',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 1,
              max: 100,
              unit: 'SRM',
            },
            ebc: {
              min: 2,
              max: 200,
              unit: 'EBC',
            },
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 2.5,
              max: 12,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 1,
              max: 100,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'honey',
            category: 'sugar',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      alternativeFermentables: {
        value: [
          {
            name: 'honey',
            category: 'sugar',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.03,
            max: 1.11,
            unit: 'SG',
          },
          plato: {
            min: 7.6,
            max: 25.9,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 0,
          max: 94.5,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:rye-beer',
      title: 'Rye Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 152,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'rye',
            category: 'grain',
            defining: true,
          },
          {
            name: 'barley',
            category: 'grain',
            defining: false,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['straw', 'amber', 'copper', 'brown'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'rye',
              form: 'malted',
              primary: true,
            },
            {
              grain: 'barley',
              form: 'malted',
              primary: false,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['biscuit', 'caramel', 'chocolate', 'roast', 'sweet'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'clove', 'phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:brett-beer',
      title: 'Brett Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 153,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['brettanomyces'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'medium',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: [
        'mixed',
        'all-origins',
        'yeast-led',
        'craft-style',
        'north-america',
        'specialty-beer',
        'wild-fermentation',
      ],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:mixed-culture-brett-beer',
      title: 'Mixed-Culture Brett Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 154,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'high',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['mixed-culture'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'medium',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:ginjo-beer-or-sake-yeast-beer',
      title: 'Ginjo Beer or Sake-Yeast Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 155,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['pale', 'brown'],
            srm: {
              min: 4,
              max: 20,
              unit: 'SRM',
            },
            ebc: {
              min: 8,
              max: 40,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 4.3,
              max: 10.2,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'medium',
            ibu: {
              min: 12,
              max: 35,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'medium',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.04,
            max: 1.09,
            unit: 'SG',
          },
          plato: {
            min: 10,
            max: 21.6,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 50,
          max: 91.1,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:fresh-hop-beer',
      title: 'Fresh Hop Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 156,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopUse: {
        value: ['fresh-hop'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:wood-and-barrel-aged-sour-beer',
      title: 'Wood- and Barrel-Aged Sour Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 157,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['saccharomyces-ale', 'lactic-bacteria'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['acidity-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['barrel-aged'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'acidity-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:aged-beer',
      title: 'Aged Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 158,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'extended',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['wood-matured'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:experimental-beer',
      title: 'Experimental Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 159,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026', 'bjcp-2021'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'variable',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026', 'bjcp-2021'],
        },
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry', 'overlapping BJCP 2021 style'],
        status: 'documented',
        sourceIds: ['ba-2026', 'bjcp-2021'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced', 'specialty-beer'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:experimental-india-pale-ale',
      title: 'Experimental India Pale Ale',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 160,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'fresh',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              min: 3,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 6,
              max: 80,
              unit: 'EBC',
            },
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 6.3,
              max: 10.6,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-high',
            ibu: {
              min: 30,
              max: 100,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['hop-led', 'yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['fresh'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-high',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.06,
            max: 1.1,
            unit: 'SG',
          },
          plato: {
            min: 14.7,
            max: 23.7,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 66.7,
          max: 100,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['cloudy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester', 'phenolic', 'brettanomyces'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'hop-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:historical-beer',
      title: 'Historical Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 161,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'historical or traditional',
          precision: 'traditional',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'historical or reconstructed tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:wild-beer',
      title: 'Wild Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 162,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['mixed-fermentation'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'very-low',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['mixed-culture'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'high',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['acidity-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      fermentationProgram: {
        value: ['mixed-fermentation'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      acidificationMethod: {
        value: ['microbial-souring'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      body: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['hazy'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'acidity-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:smoke-beer',
      title: 'Smoke Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 163,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['very-light', 'black'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['smoke-led', 'yeast-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      maltTreatment: {
        value: ['smoked malt'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      definingAdditions: {
        value: [
          {
            name: 'smoked malt',
            category: 'malt',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['phenolic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      smokeCharacter: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'smoke-led', 'yeast-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:other-strong-ale-or-lager',
      title: 'Other Strong Ale or Lager',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 164,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['pilsner-glass', 'mug'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'strong',
            abv: {
              min: 8,
              max: 8,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['malt-led'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'malt-led'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:gluten-free-beer',
      title: 'Gluten-Free Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 165,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      alternativeFermentables: {
        value: [
          {
            name: 'alternative fermentable',
            category: 'other',
            defining: true,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      dietaryComposition: {
        value: ['gluten-free'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:non-alcohol-malt-beverage',
      title: 'Non-Alcohol Malt Beverage',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 166,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          label: 'origin period not narrowly established',
          precision: 'unknown',
        },
        status: 'unknown',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['tulip'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['variable'],
            srm: {
              max: 8,
              unit: 'SRM',
            },
            ebc: {
              max: 16,
              unit: 'EBC',
            },
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'non-alcoholic',
            abv: {
              max: 0.5,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'variable',
          },
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['balanced'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      dietaryComposition: {
        value: ['non-alcoholic'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      flavorComplexity: {
        value: 'layered',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'recognized style tradition',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      baseStyleDependence: {
        value: {
          kind: 'open-speciality',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'balanced'],
    },
    {
      schemaVersion: 'beer-taxonomy-entry/v1',
      id: 'style:dessert-or-pastry-beer',
      title: 'Dessert or Pastry Beer',
      type: 'style',
      description: 'A published beer-style entry in Hybrid / Mixed / All origins.',
      taxonomy: {
        parentId: 'group:mixed:all-origins',
        path: ['beer', 'family:mixed', 'group:mixed:all-origins'],
        sortOrder: 167,
      },
      fermentationFamily: 'mixed',
      originLocations: {
        value: [
          {
            name: 'Variable',
            kind: 'multiple',
          },
        ],
        status: 'variable',
        sourceIds: ['ba-2026'],
      },
      eraOfOrigin: {
        value: {
          fromYear: 1990,
          toYear: 2026,
          label: 'modern craft era',
          precision: 'approximate',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      preferredGlassware: {
        value: ['snifter'],
        status: 'derived',
        note: 'Common service suggestion, not a formal style requirement.',
      },
      fermentationMethod: {
        value: ['variable'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      ingredients: {
        value: [
          {
            name: 'barley',
            category: 'grain',
            defining: true,
          },
          {
            name: 'hops',
            category: 'hop',
            defining: false,
          },
        ],
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Broad ingredient families only; individual recipes may differ.',
      },
      age: {
        value: {
          band: 'standard',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      core: {
        color: {
          value: {
            descriptors: ['amber', 'black'],
            srm: {
              min: 13,
              max: 40,
              unit: 'SRM',
            },
            ebc: {
              min: 25,
              max: 70,
              unit: 'EBC',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        strength: {
          value: {
            band: 'very-strong',
            abv: {
              min: 7,
              max: 13,
              unit: '% ABV',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        bitterness: {
          value: {
            perceived: 'low',
            ibu: {
              min: 20,
              max: 65,
              unit: 'IBU',
            },
          },
          status: 'documented',
          sourceIds: ['ba-2026'],
        },
        grain: {
          value: [
            {
              grain: 'barley',
              form: 'malted',
              primary: true,
            },
          ],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        fermentationCulture: {
          value: ['variable'],
          status: 'variable',
          sourceIds: ['ba-2026'],
        },
        acidity: {
          value: {
            perceived: 'none',
          },
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        dominantCharacter: {
          value: ['addition-led', 'yeast-led'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
        maturationMethod: {
          value: ['tank-conditioned'],
          status: 'derived',
          sourceIds: ['ba-2026'],
        },
      },
      hopProminence: {
        value: 'very-low',
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      originalGravity: {
        value: {
          specificGravity: {
            min: 1.08,
            max: 1.12,
            unit: 'SG',
          },
          plato: {
            min: 19.3,
            max: 28,
            unit: '°P',
          },
        },
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      finalSweetness: {
        value: 'high',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      attenuation: {
        value: {
          min: 25,
          max: 83.3,
          unit: '%',
        },
        status: 'derived',
        sourceIds: ['ba-2026'],
        note: 'Calculated from the published OG and FG limits.',
      },
      clarity: {
        value: ['variable'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      maltExpression: {
        value: ['caramel', 'chocolate', 'coffee', 'roast'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      yeastExpression: {
        value: ['fruity ester'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      drinkingPurpose: {
        value: ['dessert-style service'],
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      historicalContinuity: {
        value: 'modern innovation',
        status: 'derived',
        sourceIds: ['ba-2026'],
      },
      standardization: {
        value: ['Brewers Association 2026 style entry'],
        status: 'documented',
        sourceIds: ['ba-2026'],
      },
      tags: ['mixed', 'all-origins', 'addition-led', 'yeast-led'],
    },
  ],
} as const satisfies BeerTaxonomyDataset;

export const beerTaxonomyEntries = beerTaxonomy.entries;
