# magpu.com — Music for your mind

> **Magpu** (rhymes with "fat who") — musically annoying geeks playing ugly.

**Live:** https://magpu-site-production.up.railway.app/

A complete, browsable recreation of **magpu.com**, the website of Magpu — a
taper-friendly progressive/jam band from the Dallas–Fort Worth area that played
from 1998 to 2003 (reunions aside). The band gave the world everything from
all-Phish Halloween sets to songs about burrito transplant surgery; this repo
gives the website back.

Rebuilt on **2026-09-09** from every recoverable snapshot in the Internet
Archive's Wayback Machine (captures spanning 2000–2025): **853 files, ~340 MB**,
including **63 playable recordings**.

---

## Start here

The homepage (`index.html`) is a **version portal**, styled like the original
site. magpu.com existed in three incarnations — all three are browsable:

| Version | Path | What it is |
|---|---|---|
| **2000–2008 · The original site** | [`/classic.html`](https://magpu-site-production.up.railway.app/classic.html) | The hand-built original: black background, Band Info, Setlists, Photos, member pages, and the "Magpu is on hiatus" announcement |
| **2010 · The band wiki** | [`/wiki/HomePage/`](https://magpu-site-production.up.railway.app/wiki/HomePage/) | The site reimagined as a wiki — show pages, song pages, extras |
| **2019–2025 · The final site** | [`/2025/`](https://magpu-site-production.up.railway.app/2025/) | The Jekyll relaunch: every show, setlist, and album, with in-browser audio players |

The portal also links a **Wayback Machine timeline** — snapshots of the live
site from 2002, 2008, 2013, 2021, and 2025.

## Listen

Five full recordings plus studio extras survived in the archive and play
directly in the browser:

- [1998-04-12 — Club Dada, Dallas](https://magpu-site-production.up.railway.app/shows/1998-04-12-show.html) — the very first Magpu show, at Tom Prejean's open mic night
- [1998-05-28 — The Home Bar, Dallas](https://magpu-site-production.up.railway.app/shows/1998-05-28-show.html) — two sets (Cliff's first show)
- [2001-10-31 — Halloween](https://magpu-site-production.up.railway.app/shows/2001-10-31-show.html) — set two is all Phish, start to finish
- [2002-07-12](https://magpu-site-production.up.railway.app/shows/2002-07-12-show.html) — a full two-set night (the band's 100th show era)
- [2003-03-01 — Denton jam session](https://magpu-site-production.up.railway.app/shows/2003-03-01-show.html) — dub versions and Weapons Inspection
- [Studio extras](https://magpu-site-production.up.railway.app/wiki/Extras/) — banter, *Prophetic*, *Punk*

The show pages use the site's own audio player (a reconstructed
`playlist_handler.js`, see below). Audio is `.ogg` where that's what the
archive holds — Chrome and Firefox play it natively.

## What's inside

| | |
|---|---|
| 52 show pages | `/shows/YYYY-MM-DD-show.html` with notes and posters |
| 106 setlists | [`/setlists/`](https://magpu-site-production.up.railway.app/setlists/) (index generated for this recreation) + all-on-one-page view |
| 90 song pages | every song they ever played, with debut/last-play dates |
| 24 news posts | 2003–2020, at `/YYYY/MM/DD/post.html` |
| Albums | *Project Pu*, *In the Land*, *Magpu 1998*, *Recreational Music* |
| Band member pages | Brian, Cliff, Kurt, Kyle, Terry — modern + 2001-era deep dives (gear lists, obscure-band lists, musical resumes) |
| Lyrics | originals + Zim's eyewitness show reports |
| Photos | galleries from 2001–2003 with thumbnails, plus miscellany |
| Flyers | show flyers from 1999–2002, newspaper scraps, postcards |
| Wiki | the 2010 band wiki (70 pages) |
| Recordings | 63 files, ~320 MB (`.ogg`/`.mp3`) |

## Run it locally

```sh
git clone https://github.com/marcuspat/magpu.git
cd magpu
python3 -m http.server 8090
# open http://127.0.0.1:8090/
```

Serve from the repo root — the final site's pages use absolute paths
(`/pages/...`). Or just `docker build -t magpu . && docker run -p 8080:80 magpu`.

## How it was built

1. **Inventory** — the Wayback CDX API (`url=magpu.com*`) listed 921 unique
   URLs across every era; each was resolved to its best surviving capture.
2. **Fetch** — raw content pulled via `/web/<timestamp>id_/` endpoints
   (unrewritten, no Wayback toolbar).
3. **Rewrite** — `magpu.com` URLs localized, track links pointed at
   never-archived `.mp3`s swapped to their archived `.ogg` twins,
   directory-style URLs mapped to `index.html` files.
4. **Crawl** — driven by the modern site's own navigation so every reachable
   page and asset came down; then everything else archived was pulled too.
5. **Reconstruct** — two files were never captured (below), plus classic-styled
   index pages were generated where the original site relied on
   auto-generated directory listings.

### Reconstructed (never captured by the archive)

| File | Note |
|---|---|
| `js/jquery-1.11.1.min.js` | original jQuery 1.11.1, sourced from an archived copy at code.jquery.com |
| `js/playlist_handler.js` | rewritten from the markup it drives (`<audio id="audio">` + `<ul id="playlist">`); the `.active` styling hook matches `assets/player.css` |
| `index.html`, `setlists/index.html`, `mp3/2003-03-01/index.html` | navigation pages built for this recreation, in the original site's visual style |

### Known gaps (nothing recoverable exists)

- ~350 links point at files the Wayback Machine never captured (mostly
  `.mp3` track files of shows that only survive as `.ogg`, `favicon`, one-off
  images). Left as dead links — faithful to what the archive holds.
- `photos/2003-03-01/dentonjam.jpg` — its single capture is corrupt in
  Wayback storage; the four sibling jam photos survive.
- Flash players (`flourish-player.swf`) are dead technology and were skipped.

## Deployment

Hosted on **Railway** as an `nginx:alpine` container (see `Dockerfile`) —
push-to-deploy from this repo's `main` branch. No Vercel: the payload
(~340 MB, mostly incompressible audio) exceeds Hobby-plan deployment limits.

## Credits

All content © its original authors — Magpu (Brian, Cliff, Kurt, Kyle, Terry)
and magpu.com. Site content served from the
[Internet Archive Wayback Machine](https://web.archive.org/web/*/magpu.com);
recreation assembled with gratitude for taper-friendly bands everywhere.
