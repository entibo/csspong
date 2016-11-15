#!/bin/sh

scss scss/pong.scss css/pong.css
./node_modules/postcss-cli/bin/postcss --use autoprefixer cssnano -o css/pong.css css/pong.css