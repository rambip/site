#!/bin/sh

ln -s $PWD/data /cv/_data
ln -s $PWD/img /cv/assets/img
ln -s $PWD/posts /cv/_posts

mkdir /cv/_site
mkdir $PWD/_site
ln -s /cv/_site $PWD/_site

cd /cv
ls -la $PWD
/usr/gem/bin/jekyll $@
