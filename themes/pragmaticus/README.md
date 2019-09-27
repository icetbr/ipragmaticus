A readability focused, fast and minimal medium inspired Hugo blog theme.

I like Medium's focus on community and readability, but it's commenting system is atrocious, and the popups very annoying. Plus I want to keep my content as simple text (markdown) at my own computer, so I can do whatever I want with it with greater flexibility.

I wanted to play with vertical rhythm and other typography experiments, but by copying Medium's layout it seemed I created a `scss`code that is more complicated then it needed to be.

Anyway, I used zwellw's own eleventy-based website as a starting point for my own theme, learning a lot from his code and articles along the way.

I chose Hugo because dot its fast build speeds, but I was also very tempted to use eleventy for its node-based simplicity and gatsby, for its amazing community and focus on state of the art techniques, like PRPL.

I create my own theme because my obcession for control. I reviewed a lot of themes to come to a conclusion that none met my needs, although I could have settled for some of them (TODO: candidates)

This theme is meant to be as clean from clutter as possible, zen-habits style. I only used safe fonts, there is no javascript, unused css are removed, srcset and squoosh.io ensures the smallest possible image is served based on the device.

Seo was inspired by yoast.com's tips, but basically using Hugo's internal defaults whenever possible.


## Efficent Workflow: How to use this theme to create a blog

## Deploying
- enable postcss

## Speed otimization
- `postcss-uncss` has shown to be better then `purge-css` to remove unused css

archetypes: posts templates
bin: for vscode markdown
content: posts
data: configs
layouts: main theme templates
public: processed files
resources: processed files, output from pipes and image processing
static: static content (images, CSS, JavaScript, etc)
assets: dynamic content meant to be processed (scss)

It is, in short, a resource cache. I put it in the project (by default, there is a setting) to make it visible – you can commit parts or the whole directory to Git, if that fits your style.

    If you are theme author, you will most likely want to put the generated/fingerprinted resources as part of the theme distribution, so the users does not need to have PostCSS etc. installed to run your theme.
    If you use lots of thumbnails, you may consider comitting this to GitHub to avoid having to create thumbnails on every CI build etc.


## Images choices
- click on image opens full screen overlay
  - the first image can be small, the second larger, but that would need two images
  - the first one needs to be the larger
- click on image opens empty html page with srcset
  - needs to hit back button