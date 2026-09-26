# Hobbies Project

A React + CSS "Hobbies" page with original hand-coded SVG character
illustrations for each hobby (no external image files needed).

## Structure

```
src/
  illustrations/
    HobbyIllustrations.jsx  -> all 7 character SVGs (Music, Movie, Travel, Reading, Gaming, Photography, Cooking)
  components/
    FeaturedCard.jsx        -> the big "Listening to Music" hero card
    HobbyCard.jsx            -> the smaller grid cards
  data/
    hobbies.js               -> titles, descriptions, "why I like it" points, accent gradients
  App.jsx                    -> page layout
  App.css                    -> all card / grid / animation styles
  index.css                  -> global reset
  main.jsx                   -> React entry point
index.html
package.json
vite.config.js
```

## Run it

```bash
npm install
npm run dev
```

## Add a new hobby

1. Add a new illustration function to `src/illustrations/HobbyIllustrations.jsx`
   (copy an existing one and change `hair`, `outfit`, `glow`, and the `prop` shapes).
2. Register it in the `ILLUSTRATIONS` map at the top of `src/components/HobbyCard.jsx`.
3. Add a new entry to the `hobbies` array in `src/data/hobbies.js` with a matching `key`.

## Swap in a real photo instead of an illustration

In `HobbyCard.jsx`, replace `<Illustration />` with an `<img src="..." />` for
any hobby where you'd rather use your own photo.
