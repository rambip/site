#!/nix/store/dd3713mm8wql4r2d5jxx0f58g16nfm4h-bash-5.1-p16/bin/sh

test -z "$SOURCE_DIR" && SOURCE_DIR=/srv/jekyll

# link ressources needed to build page in the right folder
ln -s $SOURCE_DIR/data /cv/_data
ln -s $SOURCE_DIR/img /cv/assets/img
ln -s $SOURCE_DIR/posts /cv/_posts

mkdir /srv/jekyll/_site
mkdir /cv/site
ln -s /cv/_site /srv/jekyll/_site

cd /cv
/usr/gem/bin/jekyll $@
