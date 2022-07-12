#!/bin/sh

cp -r $1/data /cv/_data
cp -r $1/img /cv/assets/img
cp -r $1/posts /cv/_posts

cd /cv
/usr/gem/bin/jekyll build -s /cv -d ./_site
