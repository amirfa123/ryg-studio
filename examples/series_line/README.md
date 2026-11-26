# Daily follower-line series — reusable build (made Day 1, 2026-11-19)
Same scene every day; only `cfg.js` + voice/words change per platform.

Per platform `p` in ig, fb, tt, yt:
1. `mkdir w_line_<p>`; put `vo.mp3` and `words_raw.json` (ElevenLabs transcript words) there.
   (If a number word is followed by a very long "of"/"kilometers" word in the transcript, shift the boundary so captions highlight right — see Day 1 run.)
2. Write `w_line_<p>/cfg.js`:
   `const CFG={day:1,TT:<voice+0.4>,count:25829,who:'FOLLOWERS'|'SUBSCRIBERS',lenM:<count*0.5>,cmp:'island'|'marathon'|'tennis'|'field',cmpTitle:'MORE THAN HALF OF MANHATTAN',cmpFrac:<line/object length>,cmpRef:'MANHATTAN ≈ 21.6 KM LONG',cmpPop:'WHOA!',pct:<percent number>,pctText:'0.03%',cta:'FOLLOW'|'SUBSCRIBE',outfit:{crown:1,chain:1}};`
   Comparison drawings available in body.js: `island` (long narrow island — Manhattan), `marathon` (winding road START→FINISH), `tennis` (court), `field` (American football field). Add new ones to the `CMP` map as numbers grow (keep them simple + original). Change `outfit` daily.
3. `./w_line_build.sh <p>` → `w_line_<p>/video.html`; check stills with `./w_line_sheet.sh w_line_<p> "0,3,6,9,12,15,TT-0.02"`.
4. Render: `node cap.js w_line_<p>/video.html video w_line_<p>/video.mp4 <ceil(TT*30)+2>` (2 CPUs → max 2 renders in parallel, ~3–4 min each).
5. SFX: `python3 examples/series_line/sfx_line.py w_line_<p> <TT>` (cue times come from the words). Mix + check: `./w_mix.sh w_line_<p> <TT>`.
Narration cue words the body/SFX look for: "There are <N>", "which", "That's", "only <pct>", "And", "Hit" — keep the script template wording.

## Added Day 2 (2026-11-20)
- `cfg.js` now also takes `names:[...]` (that platform's roster from line_roster.json, join order). Name tags (white pills, 46px, collision-stacked) float over figures 1..n in S3 and S6; NAMES[0] gets the crown + "FRONT OF THE LINE". Empty list → dashed "@YOUR_NAME?" + "THE FRONT IS OPEN!".
- Scene 6 now starts at the first word after "...of the way around." (welcome line / CTA), with a "COMMENT TO JOIN THE LINE!" pill on "Comment", then "HIT FOLLOW/SUBSCRIBE!" on "hit".
- New comparisons: `everest` (vertical, cmpFrac = line/Everest), `pyramid` (vertical), `channel` (horizontal England→France), `whale` (horizontal). Leader face follows outfit (beanie/shades).
- Script: never say "and" before the comparison ends (cue = first "and"); write "1.5"/"22.5" as digits, not "one and a half".
- Word fix: a digit word followed by a word > 0.6 s gets its end moved to next.end-0.35 (TTS reads the number over the next word).

## Added Day 3 (2026-11-21)
- New comparisons: `trench` (vertical DOWN, ocean cross-section; cmpFrac = line/trench depth ≥1), `bus` (two school buses end to end; cmpFrac = line/(2×12.2 m)), `obelisk` (tall monument; cmpFrac = line/169 m).
- Name tags: when > 6 names, S6 uses tidy rows (38px pills, round-robin by screen x, all names, crowned first joiner + "= FRONT OF THE LINE" pill under the rows); S3 keeps the old few-visible-tags mode. S6 tags fade out on "hit" so they never cover the guy at the loop.
- 2D leader face now supports `snapback` (outfit `{snapback:1,chain:1}`).
- Keep cmpTitle ≤ ~30 chars (longer auto-shrinks and gets tiny).

## Added Day 4 (2026-11-22)
- New comparisons: `sky` (vertical altitude; `skyObj:'jet'|'balloon'`, `skyLbl` label; cmpFrac = line/altitude ≥1), `bowling` (one lane foul line→head pin 18.29 m, drawn at 1/cmpFrac so the line fits), `tower` (simple original lattice tower; cmpFrac = line/330 m).
- 2D leader face supports `headphones` (`hpHex` color, purple #7C4DFF matches the 3D headphones).
- S6 tidy name-tag rows now shrink the font (38→26 px) until the rows + "FRONT OF THE LINE" pill end above y≈1330, so captions never cover them with 25 names.
- Pop word for `sky` sits low-left (y 1010) so it doesn't cover the plane/balloon; `tower` at y 700.
- Display list = [today's leader] + newest 24 others; non-Latin handles (Arabic/Thai) are kept in the roster but not drawn (no fonts in the render box → boxes).

## Changed 2026-11-22 (owner request): names pinned to each little person
- Owner did NOT like the "wall of names" (rows of pills with lines down to the crowd). Replaced with `headTags()`: every name floats directly above ITS OWN figure (NAMES[i] → figure i+1), short white stem to the head, neighbours alternate high/low, long handles shrink (min 30px) instead of overlapping. Today's leader = gold pill + "👑 LINE LEADER" on figure 1.
- S6 camera now glides SIDE-ON along the line (cam x=5, y=1.2), starting centered on the leader during "Today's line leader is…", panning back through the joiners until "hit", then eases to CAM0 for the loop. Trees between camera and line are auto-hidden.
- S3 shows NO name tags anymore (keeps the length counter clean). Don't bring back the old `nameTags()` rows.

## Added Day 5 (2026-11-23)
- New comparison: `skyscraper` (simple original stepped supertall tower; cmpFrac = line/828 m for the Burj Khalifa). `everest` works for any mountain (cmpRef names it, e.g. Kilimanjaro); `field` works for fractions of a field (goal line → goal line = 91.44 m).
- 2D leader face supports `hardhat`.
- headTags(): the leader's "👑 LINE LEADER" pill is now part of its collision box (it used to touch the 2nd name tag).
- The digit-word timing fix is NOT in build.py: apply it to words_raw.json yourself before building (number word end → next.end-0.35 when the next word is > 0.6 s).

## Added Day 6 (2026-11-24)
- 2D leader face supports `chefhat` (outfit `{chefhat:1}`).
- `sky` pop word moves up to y 560 when the plane/balloon is drawn high (cmpFrac > ~1.5) so it doesn't cover the altitude label.
- Counts note: Metricool's newest date may have only YouTube filled (IG/FB/TT null) — take each metric's most recent non-null value.

## Changed 2026-11-24 (owner: "add every single comment")
- Everyone who comments is added (only skip our own accounts + slurs/explicit sexual words). Pull Windsor comments with `last_30dT` (its date filter is the VIDEO's publish date).
- Display list = [today's leader] + up to 60 people not yet in `_featured` (oldest-joined first). `nShow` = whole list; the glide speeds up to fit. After posting, add shown handles to `_featured`.
- Arabic/Thai handles now render: Noto Sans Arabic/Thai are npm deps (`npm install`), loaded via FontFace at the top of body.js; font stack `Inter, NotoAr, NotoThai`.
- CTA: "Subscribe (YouTube) / Follow and comment to join the line!" — we cannot verify who follows, so never say we check.

## Added Day 7 (2026-11-25)
- New comparison: `hoops` (basketball court, NBA 28.65 m baseline→baseline; cmpFrac = line/28.65).
- `island` now supports cmpFrac > 1 (island shrinks about its south tip, dots run past the north tip; pop word moves left).
- 2D leader face supports `bandana` (red, outfit `{bandana:1,shades:1}`).
- `_featured` started today (it was empty): YT shows the oldest 60 un-featured joiners, IG all 45.

## Changed 2026-11-25 (owner: "slow on new names, fast on old")
- `cfg.js` now takes `names` = [today's leader, ...NEW (not in `_featured`, oldest-joined first), ...already-shown] and `nNew` = how many entries at the start are leader+new.
- Roll call pacing: leader 1.4 s, each NEW name 0.36 s (every name stays on screen ~1.2 s), already-shown 0.07 s (quick whoosh). Include up to ~40 already-shown names after the new ones.
- The video now GROWS to fit the roll call: TT = max(voice+0.4, s6 + roll + 1.6). Get it with `node tt.js w_line_<p>/video.html` (prints window.TT_OUT) and use THAT for: frame count (ceil(TT*30)+2), `sfx_line.py … <TT>`, `w_mix.sh … <TT>`. Music loops under the silent roll call; SFX: add a soft pop every ~1 s during the roll call if it's long.
- During the roll call the top pill reads "FIND YOUR NAME! 👀" and a green "NEW IN THE LINE: N" pill sits low (y 1600).
- Backlog: `_featured` was reset on 2026-11-24, so the first run after that treats everyone as new (long, slow video on YouTube — that's intended, owner wants everyone to see their name once). After each post, add every shown handle to `_featured`.

## Added Day 8 (2026-11-26)
- Script order "…Hit follow/subscribe and comment to join the line!" is supported: when "comment" comes after "hit", S6 shows "HIT FOLLOW!" first, then "COMMENT TO JOIN THE LINE!", then "FIND YOUR NAME! 👀".
- `sfx_line.py` adds a soft pop every ~1 s after the voice ends (long roll calls aren't dead air).
- Comparisons used: `channel` at cmpFrac < 1 (fraction of the way across), `everest` as Kilimanjaro ×5.25, `tower` ×1.9, `whale` 0.98 — all render fine.
