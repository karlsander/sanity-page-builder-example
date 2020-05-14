# Sanity 💜 Next Page Builder Example

This is an showcase of how to set up a modular page builder architecture with Sanity CMS and Next.js.

## Really Real Time Previews

This is the special feature that I wanted to explore here. Instead of running a server somewhere to provide the preview inside the CMS, this example renders the same components as the next app directly in sanity studio. This gives you ultra fast previews with no deployment overhead. Feels like we're inching ever closer to the convience of Wordpress.

### Benefits

- very fast
- nothing extra to deploy

### Downsides

- Code needs to build in two different webpack environments. This limits the fancy things you can do with webpack, because you need to write the webpack/babel customization for next.js and sanity. But this discipline can also be a good thing. For example your components are ready to run in something like storybook out of the box (cough gatsby cough).
- can't omit the react import, but this project uses theme-ui with its custom pragma so you don't need it anyway
