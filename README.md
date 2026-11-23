# Orbit Atlas

An interactive solar system explorer featuring a navigable 3D model, profiles for the eight planets and Earth’s Moon, a curated mission index, and a timeline of upcoming launches and spacecraft events.

## Open the site

From this folder, run `python3 serve.py`. It starts a local-only web server on an available port and opens the site in your browser. Keep its Terminal window open while you explore; press Control-C there to stop it. On macOS, you can also run the included launcher with `sh "Open Orbit Atlas.command"`.

Or run a local web server from this folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. The site’s scripts, planetary textures, and 3D library are included in this folder; the site does not need a third-party CDN to display.

## Explore

- Drag the 3D scene to orbit the view, scroll to zoom, and select a world to highlight it while keeping the full system in view.
- Use the world strip to open profiles for Mercury through Neptune and Earth’s Moon.
- Compare diameter, distance, day, year, gravity, and known moon counts.
- Open mission cards for descriptions, agencies, status, vehicles, and official sources.
- Use the mission index to compare completed visits, active or en route craft, and planned missions.
- Browse the date rail for planned launches and upcoming events for spacecraft already in flight.
- Pause orbital motion, adjust its speed, show labels, or reset the full-system view.

## Notes on scale, data, and dates

- Planetary measurements are drawn from NASA Goddard’s [Planetary Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/). Distances are shown in astronomical units (AU), the average Earth–Sun distance.
- Planet starting positions use approximate [NASA/JPL Keplerian elements](https://ssd.jpl.nasa.gov/planets/approx_pos.html). The paths retain approximate eccentricities and inclinations, but planet sizes are enlarged, distances are compressed unevenly, and the Moon’s orbit is widened so the system fits on screen. Motion is accelerated and simplified; this is not a live ephemeris or a gravity simulation.
- Mission counts reflect only the sourced cards shown for a selected destination. They are not all-time totals. A spacecraft visiting multiple worlds can appear in more than one guide. Earth lists orbital missions; moons are grouped with their primary world.
- “Active or en route” includes spacecraft operating at a destination and spacecraft still travelling there. Planned dates are targets and may change. The schedule snapshot is 23 November 2026.
- Recent status checks include [NASA’s Artemis update](https://www.nasa.gov/missions/artemis/nasa-shares-plans-to-accelerate-artemis-return-to-moon/), [NASA’s Juno update](https://science.nasa.gov/image-article/apod-2026-november-22-swirl-and-colors-on-jupiter-from-juno/), and official ISRO and ESA mission pages linked from relevant cards.

## Credits

- Planet textures: [Solar System Scope](https://www.solarsystemscope.com/textures/), CC BY 4.0; derived from NASA elevation and imagery data.
- 3D rendering: [Three.js](https://threejs.org/), MIT License. Local source files are in `assets/vendor/`.
- Planetary measurements: [NASA Goddard Planetary Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/).
