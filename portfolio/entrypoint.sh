#!/usr/bin/sh

# TODO: environment variable for location of folders

cp -r ./data /cv/_data
cp -r ./imgs /cv/assets/img
cp -r ./posts /cv/_posts

cd /cv
/usr/gem/bin $1
