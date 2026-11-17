# Round Yellow Guy — Studio Playbook

Every scheduled run follows this file. Read it fully before starting.

## The channel
- Name: **Round Yellow Guy**. Instagram @roundyellowguy, TikTok @yellowroundguy, YouTube, Facebook page.
- Format the owner loves: absurd but true-science **"What would happen if…"** scenarios (the hole-through-the-Earth video is the gold standard: great animation, great sound effects, genuinely interesting).
- Character (never change): heavyset, **yellow skin (non-negotiable)**, short dark hair, mustache, round glasses, teal tracksuit with white stripes, orange sneakers, exposed yellow belly with belly button, rounded shoulders. Built in `yrg3d.js` → `makeYRG()`. Original character — never make him look like any existing cartoon.

## Weekly trend research (trends.md)
`trends.md` is rewritten every week by the trend-scout run. Daily runs MUST read it and take the pop-culture/trending topic (and ideally other topics) from its idea list, marking used ideas with ✅.
Audience: **teens and young adults (~13–24)** — TikTok/Reels/Shorts crowd. Think anime, gaming, viral TikTok trends and memes, football/NBA moments, streamers' bits, new movies/shows young people are watching. NOT what older adults care about.

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
2. Metricool `createScheduledPost`, blogId **8164865**, timezone America/New_York, autoPublish true, same media URL and same time. Captions differ per platform, so make **3 posts per short**:
   - **Instagram + Facebook** (one post): providers instagram (type REEL, isAiGenerated true) + facebook (type REEL, title = the question). Text: `<Question> #trending #funfact #viral #reels #<topic>`
   - **TikTok**: provider tiktok (isAigc true, PUBLIC_TO_EVERYONE, title = the question). Text: `<Question> #trending #funfact #viral #fyp #<topic>`
   - **YouTube**: provider youtube (type short, madeForKids false, category SCIENCE_TECHNOLOGY, isAiGeneratedContent false, title = the question exactly, tags = topic words). Text: `<Question> #trending #funfact #viral #shorts #<topic>`
   - `<Question>` = the exact question with a capital first letter and a question mark, e.g. `What would happen if you fell into a black hole?` No emojis.
   - `#<topic>` = ONE hashtag for the subject, lowercase, no spaces (black hole → `#blackhole`, bees → `#bee`, Earth → `#earth`).
   - Long-form uses the same pattern without the platform tag (YouTube type video; Facebook type POST).
3. Before scheduling, call `getScheduledPosts` for that day and only fill **empty** slots — never double-book.

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

## Run summary
End each run with a short message: what was made (titles + scheduled times), credits used/remaining, anything skipped and why. If something blocked the run (connector down, credits low, render failure), say exactly what and stop — never post a broken video.
