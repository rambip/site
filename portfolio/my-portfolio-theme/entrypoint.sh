#!/bin/sh

ln -s /srv/jekyll/data /cv/_data
ln -s /srv/jekyll/img /cv/assets/img
ln -s /srv/jekyll/posts /cv/_posts

mkdir /cv/_site
mkdir /srv/jekyll/_site
ln -s /cv/_site /srv/jekyll/_site

cd /cv
ls -la 
/usr/gem/bin/jekyll $@
