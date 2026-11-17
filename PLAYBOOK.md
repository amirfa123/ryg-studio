# Round Yellow Guy — Studio Playbook

Every scheduled run follows this file. Read it fully before starting.

## The channel
- Name: **Round Yellow Guy**. Instagram @roundyellowguy, TikTok @yellowroundguy, YouTube, Facebook page.
- Format the owner loves: absurd but true-science **"What would happen if…"** scenarios (the hole-through-the-Earth video is the gold standard: great animation, great sound effects, genuinely interesting).
- Character (never change): heavyset, **yellow skin (non-negotiable)**, short dark hair, mustache, round glasses, teal tracksuit with white stripes, orange sneakers, exposed yellow belly with belly button, rounded shoulders. Built in `yrg3d.js` → `makeYRG()`. Original character — never make him look like any existing cartoon.

## Hard rules for every short
1. **Open with a question** (narration line 1 + big title text on screen for ~3 s).
2. **Instant loop**: no "follow for more". Narration ends with **"Which makes you wonder..."** and the last frame must match the first frame (camera, pose, scene) so it loops into the opening question. Periodic motions in the opening must use `t-TT` in the final segment.
3. 9:16, 1080×1920, 30 fps, ~16–21 s. Script ≈ 45–55 words (≈ 270–330 ElevenLabs credits).
4. Word-timed captions (built in, from transcription), comic pop words, pills, flashes, SFX + music bed.
5. **No awkward/goofy animation.** If a pose would look wrong (floating objects, arms through body), restage the shot instead (put objects on tables, use IK `reachL/reachR` with `bellyPoint()` for contact).
6. Facts must be true — check anything non-obvious with a quick web search before writing. Keep claims simple and defensible.
7. Never repeat a topic in `topics.md`. Add every new topic there.
8. No copyrighted characters, logos, songs. Music + SFX come only from `sfxlib.py` (free, synthesized).

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
8. **SFX:** script with `sfxlib.py` (`Mix(T,seed)`, `.put(sound,at,gain)`, `.bed(gates)`, `.save()`) — see `examples/sfx_example.py`. Hit every visual beat (whoosh on moves, pop on pills, ding/shimmer on reveals, etc.).
9. **Mix:**
   ```
   ffmpeg -i video.mp4 -i vo.mp3 -i sfx.wav -filter_complex "[1:a]aresample=44100,asplit=2[v][sc];[2:a]aresample=44100,volume=0.6[b];[b][sc]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=300[bd];[v][bd]amix=inputs=2:duration=longest:normalize=0,alimiter=limit=0.95[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -t <TT> -movflags +faststart final.mp4
   ```
10. **Verify** final: extract frames at 0, middle, TT-0.05 and Read them; check duration.

## Publishing
1. Clone `https://github.com/amirfa123/ryg-videos` (public). Copy the final video to `shorts/YYYY-MM-DD_<slug>.mp4` (long-form: `long/YYYY-MM-DD_<slug>.mp4`), commit, push to `main`. Public URL: `https://raw.githubusercontent.com/amirfa123/ryg-videos/main/<path>` (check it returns 200 with `curl -sI`).
2. Metricool `createScheduledPost`, blogId **8164865**, timezone America/New_York, autoPublish true. Shorts: providers instagram (type REEL, isAiGenerated true), tiktok (isAigc true, PUBLIC_TO_EVERYONE, title = the question), youtube (type short, madeForKids false, category SCIENCE_TECHNOLOGY, title "<Question> #shorts", 3–6 tags, isAiGeneratedContent false), facebook (type REEL, title). Caption text = the question + 1–2 emojis + 5–6 hashtags (#whatif #science …).
3. Before scheduling, call `getScheduledPosts` for that day and only fill **empty** slots — never double-book.

## Daily slots (America/New_York)
Shorts: **8:00, 11:00, 14:00, 17:00, 20:00, 22:00**. Long-form (every other day): **18:00** on YouTube (type video) + Facebook (type POST/REEL as appropriate).

## Long-form (~5 min, 16:9)
- 1920×1080: build with `W=1920,H=1080` (edit those consts in the built page) and render with `VW=1920 VH=1080 node cap.js ...`. Camera aspect follows W/H.
- Script ≈ 700–750 words: a deeper "What would happen if…" told in 6–10 chapters, each with its own scene, same character, same style. Still opens with the question. Ends with a short natural outro (no loop needed).
- Split into chapter pages (one body per chapter, each ≤ ~40 s), render each to its own mp4, concat with the ffmpeg concat demuxer (`-c copy`), then mix the full voice + SFX. Use one voice generation for the whole script (or per chapter if > 5,000 chars).
- Captions smaller and lower for 16:9. Thumbnail: render a still with big title text; pass via `videoThumbnailUrl` only if channel supports it, otherwise omit.

## Run summary
End each run with a short message: what was made (titles + scheduled times), credits used/remaining, anything skipped and why. If something blocked the run (connector down, credits low, render failure), say exactly what and stop — never post a broken video.
