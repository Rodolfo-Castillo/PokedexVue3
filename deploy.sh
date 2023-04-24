 #!/usr/bin/env bash

 # abort on errors
 set -e

 # build
 yarn run build

 # navigate into the build output directory
 cd dist

 # if you are deploying to a custom domain
 # echo 'www.example.com' > CNAME

 git init
 git checkout -b main
 git add -A
 git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
 # git push -f git@github.com:Rodolfo-Castillo/PokedexVue3.git.io.git main

 # if you are deploying to https://<USERNAME>.github.io
 # git push -f git@github.com:<USERNAME>/<USERNAME>.git main:gh-pages