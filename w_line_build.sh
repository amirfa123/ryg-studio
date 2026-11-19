#!/bin/bash
# usage: w_line_build.sh <platform>   (needs w_line_<p>/cfg.js, words_raw.json)
p=$1; d=w_line_$p
cat w_lib.js $d/cfg.js examples/series_line/body.js > $d/full.js && python3 build.py $d $d/full.js
