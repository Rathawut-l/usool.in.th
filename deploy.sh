#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'usool.in.th' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Rathawut-l/usool.in.th.git master:gh-pages

cd -
