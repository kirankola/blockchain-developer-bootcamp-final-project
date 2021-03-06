#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.<github.io>
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.<github.io/><REPO>
git push -f https://github.com/kirankola/Patient-record.git master:gh-pages
#git remote add origin https://github.com/elbaruni/gh-pages-vue.git