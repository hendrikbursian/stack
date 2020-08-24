#!/usr/bin/env sh

set -e

yarn build

cd dist

git init

git config user.name "Hendrik Bursian"
git config user.email "hendrikbursian@protonmail.com"

git add -A
git commit -m 'deploy'

git push -f git@github.com:hendrikbursian/stack.git master:gh-pages

cd -
