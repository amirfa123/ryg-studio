# Long-form 2026-11-19: Could you survive real-life GTA stunts? (16:9, 4:39)
Bodies = examples/gta6_long/lib.js + lib2.js (new scenes: roof, bay/tower, hwy + motorbike w/ wheelie pivot, sky clouds, field + sagging net; helpers speedo, hpBar, verdict stamp, stuntIcon, rollAt pivot for forward rolls) + cN.js.
Pipeline: one voice gen -> pauses.py (silence beats) -> build16.py per chapter -> render.sh (2 workers in parallel, ~0.27 s/frame) -> concat -> sfx_stunts.py -> mix voice 1.0 + SFX 0.35, no music.
Tip: roll the character around his body center with rollAt() (rotating holder about the feet sinks him into the ground).
Final mp4 was 104 MB (just under GitHub's 100 MiB limit) — for longer videos use -crf 21+ when concatenating/re-encoding.
