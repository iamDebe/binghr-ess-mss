module.exports = {
    plugins: [
      {
        name: '@svgr/plugin-svgo',
        options: {
          replaceAttrValue: {
            // Replace the value of the `fill` attribute only if it's present in the original SVG
            '#FF6384': '{props.color || "#FF6384"}', // use the value of `props.color` if defined, or fallback to `#FF6384`
          },
          // Add the `fill` attribute with the `currentColor` value if it's not present in the original SVG
          addAttributesToSVGElement: {
            attribute: 'fill',
            value: 'currentColor',
          },
        },
      },
    ],
  };
  