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
