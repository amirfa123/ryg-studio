# Round Yellow Guy — Studio Playbook

Every scheduled run follows this file. Read it fully before starting.

## The channel
- Name: **Round Yellow Guy**. Instagram @roundyellowguy, TikTok @yellowroundguy, YouTube, Facebook page.
- Format the owner loves: absurd but true-science **"What would happen if…"** scenarios (the hole-through-the-Earth video is the gold standard: great animation, great sound effects, genuinely interesting).
- Character (never change): heavyset, **yellow skin (non-negotiable)**, short dark hair, mustache, round glasses, teal tracksuit with white stripes, orange sneakers, exposed yellow belly with belly button, rounded shoulders. Built in `yrg3d.js` → `makeYRG()`. Original character — never make him look like any existing cartoon.

## Owner's ideas (ideas.md) — highest priority
Read `ideas.md` every run. Owner-requested ideas go first: make the oldest unchecked one in the next run where it fits, then mark it ✅ with the date. Real public figures: facts only (look up current numbers), never draw them, no logos, no opinions.

## Weekly trend research (trends.md)
`trends.md` is rewritten every week by the trend-scout run. Daily runs MUST read it and take the pop-culture/trending topic (and ideally other topics) from its idea list, marking used ideas with ✅.
Audience: **teens and young adults (~13–24)** — TikTok/Reels/Shorts crowd. Think anime, gaming, viral TikTok trends and memes, football/NBA moments, streamers' bits, new movies/shows young people are watching. NOT what older adults care about.

## 🔥 SPOTLIGHT: GTA 6 (launches Thu Nov 19, 2026) — active Nov 17 → Dec 6
The owner wants GTA 6 as a main spotlight — it's huge with the audience.
- **Shorts:** at least **2 of the 6 shorts per day are GTA 6 themed** (3 on launch day Nov 19 and the day after). Other categories fill the rest. Use trends.md's GTA ideas plus new ones, e.g. "How many stores would you need to rob in GTA 6 to make a million dollars?", "What would happen if you jumped out of a moving car like in GTA?", "How long would GTA 6 take to download on bad Wi-Fi?", "Could you survive a real GTA police chase?"
- **Long-form:** Nov 19 (launch day): "Could you survive real-life GTA stunts?" (or similar hype topic). **Nov 21: "How to get rich fast in GTA 6"** — research real post-launch money guides/methods and present them engagingly (best money methods, how many of X to reach $1M, etc.). Keep doing GTA long-forms while they perform.
- **Facts:** before Nov 19, GTA 6's in-game prices/payouts are NOT known — don't invent them. Use verified GTA 5 numbers clearly labeled as GTA 5, real-world physics/money, or "we'll find out Thursday" framing. After launch, use numbers from reputable guides found via web search and say "about".
- **Keep it clearly in-game / cartoon:** "robbing stores" etc. is about the game's mechanics — never give real-world crime how-tos.
- **Visuals (no tacky stuff):** sleek original sports cars driving down neon, palm-lined Miami-style streets at sunset, beaches, money stacks on tables, cash-counter overlays climbing to $1,000,000, police lights, helicopters, Round Yellow Guy driving/running/diving — real staging, no floating props, no awkward holding poses.
- **IP rules still apply:** you can SAY "GTA 6" in the question/captions/hashtags (#gta6, #gta). Do NOT draw Rockstar/GTA logos or title font, Jason/Lucia or any game characters, the real in-game map, copied HUD/wanted-star UI, or real car brands. Use original stand-ins.

## 🔁 DAILY SERIES: "Day N of putting my followers in a single-file line around the world"
Owner's growth series — runs every day from its own scheduled task. **One separate video per platform — Instagram, Facebook and YouTube only (NO TikTok version since 2026-11-28, owner: save credits)** — because each has a different follower count. Track the day number + counts in `series_line.md`.
- **Counts:** Metricool getAnalyticsDataByMetrics (brandId 8164865), latest value of: Instagram `IGEV01`, Facebook `FBEV17`, TikTok `TKEV07`, YouTube `YTEV01` (query the last 7 days, take the most recent date).
- **Math:** each person in line takes **about half a meter** (0.5 m). Line length = followers × 0.5 m. Earth's equator ≈ 40,075 km → it takes ~80 million people to circle the Earth. Show % of the way around.
- **Comparison:** pick ONE fun, accurate real-world comparison for that platform's length (verify the length with a web search): e.g. ~23 m ≈ a tennis court, ~93 m ≈ an American football field, ~13 km ≈ more than half of Manhattan's length, ~31 km ≈ ¾ of a marathon. Change comparisons as numbers grow; don't repeat the same one two days in a row.
- **Script (~35–45 words, short to save credits):** "Day N of putting my followers in a single-file line around the world. There are [count] of you, which makes a line about [length] — that's [comparison]! We're only [x]% of the way around... Hit follow and keep the line growing!" (Platform-specific wording ok: "follow" on IG/TikTok/FB, "subscribe" on YouTube.) This series is the ONE exception to the no-call-to-action rule; it can still loop visually.
- **Visual:** Round Yellow Guy at the front of a single-file line of tiny little yellow round figures stretching away (instanced, so thousands are cheap), a stylized globe with a glowing line showing progress, a big follower counter rolling up, a % progress bar, and the comparison object drawn in simple original style. Outfit: different each day for fun. Meme SFX allowed (airhorn on the count, vineboom on the comparison).
- **Same visuals for all 4, only the numbers/comparison change**: build once, swap numbers per platform, render 4 times; 4 voice lines (one ElevenLabs generation each).
- **Captions:** `Day N of putting my followers in a single-file line around the world 🌍 #trending #funfact #viral #<platformtag> #followers` (platform tag: #reels for IG+FB, #fyp TikTok, #shorts YouTube). YouTube title ≤ 100 chars: `Day N: putting my subscribers in a line around the world #shorts #funfact`.
- **Commenter name tags ("comment to join the line"):** before building, pull new commenters with the **Windsor.ai** connector (Metricool can't read comments): YouTube `comment_author` (connector `youtube`), Instagram `comment_username` (connector `instagram`, account roundyellowguy), TikTok `comment_username` (connector `tiktok_organic`), Facebook via `facebook_organic` if it gets connected. Use date_preset `last_3dT` (and anything since the last run). Anyone who commented on ANY of our videos joins that platform's line. Append new unique handles to `line_roster.json` (join order, keep forever).
  - **Add EVERY commenter (owner rule):** every unique commenter joins, whatever their username — including non-English, celebrity-ish, brand-ish or edgy names. ONLY skip (a) our own accounts and (b) handles containing slurs or explicit sexual words. Query with `date_preset: last_30dT` (Windsor's date filters comments by the VIDEO's publish date, so a short window misses comments on older videos) and add anyone not already in the roster.
  - **Everyone gets featured:** each video shows people who have NOT had a name tag yet (`_featured` in line_roster.json), oldest-joined first, up to ~60 per video; the camera glide speeds up to fit them (viewers pause to find their name — that's good). Add the shown handles to `_featured`. Non-Latin names (Arabic, Thai, etc.) must render — use a font that has them (install fonts-noto / Noto Sans Arabic+Thai if missing); never silently drop them.
  - **Subscriber check:** the APIs can NOT tell us whether a commenter follows/subscribes, so never claim we check. CTA wording: "Subscribe (or follow) and comment to join the line!"
  - **Show** on each platform's video: its newest ~15–25 joiners, **each name pinned directly above its own little person in the line** (white pill, dark text, readable on a phone) while the camera glides side-on down the line — NEVER a wall/grid of names (owner rejected it; see examples/series_line/README.md, `headTags()`); a **NEW line leader every day** gets the crown + "FRONT OF THE LINE" tag (see Line leaders below). Strip a leading "@" and show `@handle`. Never show one platform's commenters on another platform's video.
  - **Line leaders (rotate daily):** each platform gets a different leader every day — never the same person two days in a row, and nobody leads twice until everyone eligible on that platform has had a turn. Pick from that platform's roster, favoring people who commented most recently or asked to be in front. Never pick the channel's own/owner accounts (e.g. `amirelates`, `roundyellowguy`, `yellowroundguy`, `RoundYellowGuy`). Record each day's leader per platform in `line_roster.json` under `_leaders` (e.g. `{"youtube":[{"date":"2026-11-22","handle":"..."}]}`). Shout out the new leader in the narration when the name is easy and safe to say ("Today's line leader is…!").
  - **Narration:** mention it naturally, e.g. "Welcome to the line, [one or two names]!" (only if the name is easy and safe to say), and end with "**Comment to get your name in the line**, and hit follow to keep it growing!"
- **Posting:** ~12:30 PM ET daily (jittered). Instagram and Facebook are SEPARATE posts here (different videos). The YouTube one counts as one of YouTube's 3 shorts per day.

## Topic mix (rotate every day — never 6 of the same kind)
Every short still OPENS WITH A QUESTION and loops. Per day of 6, aim for roughly:
- **2 × body / everyday "what happens / why"** — e.g. "What happens when you crack your knuckles?", "Why do you yawn?", "What happens if you hold in a sneeze?"
- **2 × crazy "What would happen if…" scenarios** — e.g. jump through the Earth, shrink to ant size, Moon disappears.
- **1 × pop culture / trending** — anime, games, movies, sports, memes that are trending NOW (do a quick web search each run for what's trending). Answer with real science/facts, played for laughs. E.g. "What would happen if Attack on Titan was real?" (square-cube law: a 15 m human would collapse under its own weight), "What if Man United played on the Moon?". Keep jokes light and good-natured — no mocking real people, no politics, nothing mean.
- **1 × wildcard** (food, animals, space, history "what if") — whatever fits the day.
Log the category next to each topic in `topics.md`.

### Pop culture & IP rules (strict)
- You MAY name the show/team/game in the question, captions and hashtags.
- You must NOT draw copyrighted characters, team crests/logos, official kits, or real people's likenesses. Stage it with Round Yellow Guy + ORIGINAL stand-ins (a generic giant, a plain red football kit with no crest, an unnamed stadium, etc.). Never make a stand-in that is a recognisable copy.
- Hashtags: you may add the show/team as the topic tag (#attackontitan, #manutd).

## Animation quality (what the owner loves vs. hates)
- LOVED: the hole-through-the-Earth video — clear journey with several distinct scenes, the character's whole body acting (jumping, flailing, floating, popping out), big readable 2D cutaway diagram with a moving "YOU" marker, speedometer/counter overlays, comic words, tons of fitting SFX, satisfying physical payoff (pops out, hangs, falls back).
- DISLIKED: the black hole video — stretching/squashing the character with non-uniform scale looked wrong, and long stretches of one static setup. **Never deform/stretch the character's body.** Show physical effects with props, diagrams, arrows, side-by-side comparisons, or a cutaway instead.
- Every short needs **4–6 scene changes** (new camera, location or diagram roughly every 3–4 s), the character doing something physical in most of them, and at least one clear "wow" visual moment.
- Prefer real staging over awkward poses: put things on tables, have him sit/stand/walk/fall/run, use IK reaches for contact. If a shot looks awkward in the stills check, restage it rather than ship it.

## Outfits (match the video's vibe — owner loves this)
`guy.outfit({...})` toggles accessories (call once after makeYRG). Available: `snapback` (worn BACKWARDS, black/red; `capColor:0xRRGGBB` to recolor), `snapforward`, `beanie`, `shades` (sunglasses over his glasses), `headphones`, `hardhat`, `chefhat`, `crown`, `chain` (gold chain + medallion), `bandana`. Combine freely, e.g. GTA/street/money videos: `{snapback:1,chain:1,shades:1}`; cold/winter: `{beanie:1}`; gaming: `{headphones:1}`; food: `{chefhat:1}`; rich/king: `{crown:1,chain:1}`; building/science: `{hardhat:1}`. Use an outfit in most videos where it fits; plain look is fine for body/biology topics. Tracksuit, yellow skin, glasses and mustache NEVER change. New accessories can be added to yrg3d.js (keep them original and well-fitted; check a side view).

## Meme sound effects (owner wants more!)
sfxlib now has original synthesized meme-style SFX: `vineboom()` (dramatic reveal/punchline), `recordscratch()` ("wait, what?"), `airhorn()` (hype), `sadtrombone()` (fail), `bonk()`, `chaching()` (money), `dundun()` (dramatic sting), `boing()`, `slidewhistle(up=True)`, `honk()`, `ooh()` (crowd reaction), `bruhnote()` (deadpan). Use 2–4 per short on the funniest beats (e.g. vineboom on the big fact, chaching on money numbers, recordscratch before a twist), on top of the regular SFX. Same rule: never louder than the narrator. Don't use real copyrighted meme audio clips.

## Hard rules for every short
1. **Open with a question** (narration line 1 + big title text on screen for ~3 s). Styles vary: "What happens when…", "Why do you…", "What would happen if…".
2. **Instant loop**: no "follow for more". Narration ends with **"Which makes you wonder..."** and the last frame must match the first frame (camera, pose, scene) so it loops into the opening question. Periodic motions in the opening must use `t-TT` in the final segment.
3. 9:16, 1080×1920, 30 fps, ~16–21 s. Script ≈ 45–55 words (≈ 270–330 ElevenLabs credits).
4. Word-timed captions (built in, from transcription), comic pop words, pills, flashes, SFX + music bed.
5. **No awkward/goofy animation.** If a pose would look wrong (floating objects, arms through body), restage the shot instead (put objects on tables, use IK `reachL/reachR` with `bellyPoint()` for contact).
6. Facts must be true — check anything non-obvious with a quick web search before writing. Keep claims simple and defensible.
7. Never repeat a topic in `topics.md`. Add every new topic there.
8. No copyrighted characters or logos. **Music: always `assets/music_funny.m4a`** (the owner's chosen track, owner accepts the risk). SFX come from `sfxlib.py` — do NOT call `.bed()` (no synthesized music).

## Credits budget (ElevenLabs, Creator plan, 147,324 / month, refills ~16th)
- Shorts: 6/day × ~300 = ~54k/month. Long-form: every other day × ~4,200 = ~63k/month.
- Before generating, call `account_get_usage`. If remaining credits < what's needed to finish the month's schedule, make fewer videos and say so in the run summary. Never retry a speech generation to "fix" it unless it is actually broken.

## Pipeline (one short)
Work in `w_<slug>/` at repo root (gitignored; the template's `../` imports need depth 1).

1. **Setup (once per run):** `npm install` (installs three 0.187). Renderer needs Playwright + Chrome: `NODE_PATH=/opt/node22/lib/node_modules`, Chrome at `/usr/bin/google-chrome`. If missing: `npm i -g playwright && npx playwright install chromium` and edit `executablePath` in `cap.js`. Font: Inter (system). ffmpeg required.
2. **Script** the narration (rules above).
3. **Voice:** ElevenLabs `creative_generate_speech` — flow `GPZDHD2lR6m5zxgnrhgn` (or create a new flow), model `eleven_v4`, voice **Russ `t0eCaS57KWbQQc1wRkah`**, `generations_count: 1`.
4. **Timings:** `creative_transcribe_audio` (model `eleven_scribe_v1`, `connect_from` = speech node, same flow) → `creative_get_flow_run_status` gives transcripts + `words_download_url`. `creative_get_generations` gives the mp3 `full_res_url`. `curl` both: `w_<slug>/vo.mp3`, `w_<slug>/words_raw.json`.
5. **Scene:** write `w_<slug>/body.js` (look at `examples/spin/body.js` and `examples/bh/body.js` — they are complete, self-contained bodies). It must define `TT` (total length ≈ voice length + 0.4 s) and `window.render=function(t){...}` ending with the vignette + `captions(t)`. Helpers available from the template: `txt, rr, pill, comic, flash, captions, clamp, seg, ease, easeOut, backOut, lerp, hash, lights, g (2D overlay ctx), r (WebGL renderer), bg (CSS background div), W, H, THREE, part, SPH, cap, toon, basic, makeYRG`.
   Build: `python3 build.py w_<slug> w_<slug>/body.js` → `w_<slug>/video.html`.
6. **Look before rendering:** `node cap.js w_<slug>/video.html stills 0.5,3,6,9,12,15,TT-0.02 w_<slug>/st` → hstack into a contact sheet with ffmpeg and **Read it**. Fix cropping, overlaps (pills vs title vs captions at y≈1420), clipping, character too small/large, and confirm first/last frames match. Iterate until good.
7. **Render:** `node cap.js w_<slug>/video.html video w_<slug>/video.mp4 <round(TT*30)>` (~3 min). Run renders in the background and do the next video's prep meanwhile.
8. **SFX:** script with `sfxlib.py` (`Mix(T,seed)`, `.put(sound,at,gain)`, `.save()`; never `.bed()`) — see `examples/sfx_example.py`. The owner wants LOTS of fitting sound effects (whoosh on moves, pop on pills, ding/shimmer on reveals, thuds, screeches, stretches…) but they must never overpower the narrator. Keep wind/air/whoosh gains low (wind ≤ 0.3, whoosh ≤ 0.5).
9. **Mix (owner-approved levels — do not change):** voice at normal volume, SFX at 0.35, music at a constant 0.15 the whole video. **No ducking, no sidechain, no volume changes during the video.**
   ```
   ffmpeg -i video.mp4 -i vo.mp3 -i sfx.wav -stream_loop -1 -i ../assets/music_funny.m4a -filter_complex "[1:a]aresample=44100,volume=1.0[v];[2:a]aresample=44100,volume=0.35[s];[3:a]aresample=44100,volume=0.15[m];[v][s][m]amix=inputs=3:duration=first:normalize=0,alimiter=limit=0.95[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -t <TT> -movflags +faststart final.mp4
   ```
   (`duration=first` uses the video length; the video must be ≥ TT.) Sanity check with volumedetect: voice mean should sit ~12–16 dB above music and SFX means.
10. **Verify** final: extract frames at 0, middle, TT-0.05 and Read them; check duration.

## Publishing
1. Clone `https://github.com/amirfa123/ryg-videos` (public). Copy the final video to `shorts/YYYY-MM-DD_<slug>.mp4` (long-form: `long/YYYY-MM-DD_<slug>.mp4`), commit, push to `main`. Public URL: `https://raw.githubusercontent.com/amirfa123/ryg-videos/main/<path>` (check it returns 200 with `curl -sI`).
2. Metricool `createScheduledPost`, blogId **8164865**, timezone America/New_York, autoPublish true, same media URL and same time. Captions differ per platform, so make **separate posts per platform** (YouTube only for the day's best 3 — see the YouTube section):
   - **Instagram + Facebook** (one post): providers instagram (type REEL, isAiGenerated false) + facebook (type REEL, title = the question). Text: `<Question> #trending #funfact #viral #reels #<topic>`
   - **TikTok**: provider tiktok (isAigc false, PUBLIC_TO_EVERYONE, title = the question). Text: `<Question> #trending #funfact #viral #fyp #<topic>`
   - **YouTube**: provider youtube (type short, madeForKids false, category SCIENCE_TECHNOLOGY, isAiGeneratedContent false, tags = topic words).
     - **Title (shown on Shorts — HARD LIMIT 100 characters, count it!):** `<Question> #shorts #<topic>` then add `#funfact`, `#viral`, `#trending` in that order only while the total stays ≤ 100 characters. E.g. `What would happen if you jumped out of a moving car like in GTA? #shorts #gta6 #funfact #viral` (95). If the question alone is long, keep at least `#shorts #<topic>`; shorten the question wording if needed — never exceed 100.
     - **Description (text):** `<Question>` + one unique, natural sentence teasing the answer (different every video, written like a person, no hype words repeated across videos) + blank line + `#trending #funfact #viral #shorts #<topic>`.
   - `<Question>` = the exact question with a capital first letter and a question mark, e.g. `What would happen if you fell into a black hole?` No emojis.
   - `#<topic>` = ONE hashtag for the subject, lowercase, no spaces (black hole → `#blackhole`, bees → `#bee`, Earth → `#earth`).
   - Long-form uses the same pattern without the platform tag (YouTube type video; Facebook type POST).
3. Before scheduling, call `getScheduledPosts` for that day and only fill **empty** slots — never double-book.

## AI labels
Owner's decision: do NOT apply AI-content labels anywhere. Always send isAiGenerated false (Instagram), isAigc false (TikTok), isAiGeneratedContent false (YouTube).

## YouTube: only the BEST 3 shorts per day (trust-building phase)
TikTok, Instagram and Facebook get all 6 shorts. **YouTube gets only 3 per day** (long-form is separate and doesn't count).
- **~1 AM run:** schedule IG+FB and TikTok for all 3 videos as usual. Pick the **single best** of its 3 for YouTube and schedule it at ~11:00 (jittered).
- **~10 AM run:** schedule IG+FB and TikTok for its 3. Then pick the **best 1** from: its own 3 + the morning run's 2 videos that did NOT go to YouTube (their files are in ryg-videos/shorts/ dated today; topics.md says which went to YouTube). Schedule it on YouTube at ~19:00 (jittered). (The daily follower-line series video is YouTube's third short of the day at ~12:30.)
- **"Best" =** (1) early performance: for morning videos already live on TikTok/Instagram, check Metricool analytics (views, likes, shares, watch time) and favor the strongest; (2) animation quality from your stills check (cleanest, most visually impressive, no awkward shots); (3) strongest hook / most trending topic (GTA 6 during the spotlight).
- Before scheduling, count today's YouTube shorts in getScheduledPosts + already published; never exceed 3 per day.
- Log in topics.md which videos went to YouTube (mark `[YT]`).

## Avoid looking automated (YouTube is the #1 platform)
YouTube demonetizes "generic or repetitive" mass-produced channels. Keep every upload clearly distinct:
- **Vary the hook wording** — rotate "What would happen if…", "Why do you…", "What happens when…", "Could you survive…", "How many…", "Is it possible to…". Never more than 2 of the same opener in one day.
- **Vary visuals per video**: different color palettes, locations, camera moves and overlay layouts; no two videos in a day share the same main scene.
- **Unique description sentence** for every YouTube upload (see Publishing).
- **Jitter publish times**: schedule each slot at a random minute offset between −12 and +12 minutes (e.g. 8:07, 10:53), never exactly on the hour.
- Facts must be genuinely researched; the narration should add real insight, not filler.

## Daily slots (America/New_York)
Shorts: **8:00, 11:00, 14:00, 17:00, 20:00, 22:00**. Long-form (every other day): **18:00** on YouTube (type video) + Facebook (type POST/REEL as appropriate).

## Long-form (~5 min, 16:9)
- **Topic choice:** pick the idea most likely to resonate — check Metricool analytics for which shorts got the most views/engagement and go deeper on that theme (or the strongest idea in trends.md). Over time, follow what the audience responds to.
- **Style:** more in-depth and engaging than shorts: open with the big question, then build with chapter questions and dramatic pauses ("So what happens next? …" with a 1–2 s beat), "guess before I tell you" moments, surprising facts, escalating stakes, and a satisfying final answer.
- **Audio: narration + sound effects, NO music.** Same SFX approach and levels as shorts (voice 1.0, SFX 0.35), just drop the music input from the mix.
- 1920×1080: build with `W=1920,H=1080` (edit those consts in the built page) and render with `VW=1920 VH=1080 node cap.js ...`. Camera aspect follows W/H.
- Script ≈ 700–750 words: a deeper "What would happen if…" told in 6–10 chapters, each with its own scene, same character, same style. Still opens with the question. Ends with a short natural outro (no loop needed).
- Split into chapter pages (one body per chapter, each ≤ ~40 s), render each to its own mp4, concat with the ffmpeg concat demuxer (`-c copy`), then mix the full voice + SFX. Use one voice generation for the whole script (or per chapter if > 5,000 chars).
- Captions smaller and lower for 16:9. Thumbnail: render a still with big title text; pass via `videoThumbnailUrl` only if channel supports it, otherwise omit.

## If ElevenLabs (or another service) is down
- Don't give up on the first failure: retry the connection every ~5 minutes for up to ~45 minutes while preparing scenes/scripts in the meantime.
- If it's still down, save prepared bodies in examples/ (as already done) and report clearly.
- The NEXT run should first backfill any of today's empty slots that are still at least ~1 hour in the future (TikTok/IG/FB), using prepared bodies if available, before doing its own slots.

## Run summary
End each run with a short message: what was made (titles + scheduled times), credits used/remaining, anything skipped and why. If something blocked the run (connector down, credits low, render failure), say exactly what and stop — never post a broken video.

## Shorts helpers (added 2026-11-18)
- `w_lib.js` = the long-form library (scene factory: `scene('room'|'city'|'keys'|'swamp'|'gym'|'stage')`, `putGuy`, `idle/walk/run/SIT`, props, 2D icons) — works for 9:16 too. Use `./w_sheet2.sh w_<slug> "t1,t2,..."` (concats w_lib.js + body.js) for contact sheets, and `./w_mix.sh w_<slug> <TT>` for the exact playbook mix + level check + first/last-frame check (writes verify.jpg). Bodies from this run: `examples/shorts_1118/`.
- yrg3d mouths are only `smile`, `o`, `grin`, `teeth` (a `flat` mouth renders NO mouth — use `o` with `mouthSize:0.45`).
- `Mix.save` peak-normalizes: one very loud hit (splash/thud/vineboom at gain ≥0.9) makes every other SFX too quiet. Keep big hits ≤0.5 so SFX mean lands ~16 dB under the voice.
- 9:16 frames are narrow: frame wide establishing shots from the front 3/4 (e.g. room couch: cam `[3.1,2.5,-2.0]` look `[0,1.4,1.75]`), and look slightly ABOVE the character so he sits below the title/panels.
