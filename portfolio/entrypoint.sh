#!/bin/sh

cd $1

cp -r ./data /cv/_data
cp -r ./imgs /cv/assets/img
cp -r ./posts /cv/_posts

cd /cv
/usr/gem/bin build
