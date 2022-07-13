#!/bin/sh

pwd

echo "content of data folder":
ls -la

ln -s $SOURCE_SIR/data /cv/_data
ln -s $SOURCE_DIR/img /cv/assets/img
ln -s $SOURCE_DIR/posts /cv/_posts

mkdir /cv/_site
mkdir $DEST_DIR/_site
ln -s /cv/_site $DEST_DIR/_site

cd /cv
/usr/gem/bin/jekyll $@
