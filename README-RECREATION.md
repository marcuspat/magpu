# magpu.com — recreated from the Wayback Machine

A complete, browsable local recreation of **magpu.com** ("Magpu — Music for your
mind"), the website of Magpu, a Dallas–Fort Worth prog/jam band that played from
1998 to 2003. Built on 2026-09-09 from every recoverable snapshot in the
Internet Archive Wayback Machine (captures spanning 2000–2026).

## How to view it

```sh
cd magpu && python3 -m http.server 8090
# open http://127.0.0.1:8090/
```

Serve it from the folder root (pages use absolute paths like `/pages/...`).

`index.html` is a **version portal styled like the original site** (black
background, MAGPU logo, pipe-separated nav) — magpu.com existed in three
incarnations, and all three are browsable locally:

- `/2025/` — the final Jekyll site (2019–2025), built out as a content hub:
  News (all 24 archived posts), Listen (the five playable recordings + studio
  extras), Explore the site, and highlights from the original 2001 site
- `/wiki/HomePage/` — the 2010 band wiki
- `/classic.html` — the original 2000–2008 site's homepage ("Magpu is on
  hiatus"), linking the old nav: band info, setlists, albums, lyrics, audio,
  photos, member pages
- plus a Wayback Machine timeline (2002 → 2025 snapshots of the live site)

## What's inside

- **The final site (Jekyll era, 2019–2025)** — homepage, news posts back to
  2009, show pages for 1998–2003, band info, albums, setlists (all 150+ shows),
  contact, taping policy, RSS feed, `main.css` / `player.css`.
- **Audio that actually plays** — 63 archived recordings (~320 MB of .ogg/.mp3):
  full shows from 1998-04-12, 1998-05-28, 2002-07-12 and 2003-03-01, plus the
  2001-10-31 "Halloween" set 2 mp3s and studio extras. Track links that pointed
  at never-archived .mp3s were rewritten to their archived .ogg twins.
- **The 2000–2008 original site** — member pages (Brian, Cliff, Kurt, Kyle,
  Terry), lyrics, guestbook form, band photos with thumbnails, album pages
  (Project Pu, In the Land, Magpu 1998, Recreational Music), flyers from every
  era, the 2010 band wiki, and the Escher Edmunds promo art.

## Reconstructed parts (never captured by the archive)

| File | Note |
|---|---|
| `js/jquery-1.11.1.min.js` | original jQuery 1.11.1, sourced from an archived copy at code.jquery.com |
| `js/playlist_handler.js` | rewritten from the markup it drives (`<audio id="audio">` + `<ul id="playlist">`); styling hook `.active` matches `player.css` |

## Known gaps (nothing recoverable exists in the archive)

- ~350 links point at files the Wayback Machine never captured (mostly .mp3
  track files of shows only archived as .ogg, `favicon`, one-off images).
  These were left as dead links — faithful to what the archive holds.
- `photos/2003-03-01/dentonjam.jpg` — its single capture is corrupt in
  Wayback storage and returns an error page; the four sibling jam photos exist.
- Flash players (`flourish-player.swf`) were dead technology and are skipped.

## Method

URL manifest built from the Wayback CDX API (`url=magpu.com*`, 921 unique
paths), best capture per path, raw content fetched via `/web/<ts>id_/`
endpoints, HTML rewritten to localize magpu.com URLs, crawl-driven from the
modern site's nav plus every remaining archived path. 833 files, ~337 MB.
