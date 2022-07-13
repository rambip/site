FROM jekyll/minimal

RUN gem install webrick
RUN gem install jekyll-paginate

## create new folder
RUN mkdir -m 777 /cv

## clone repo and add patch
COPY ./ /cv


COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /srv/jekyll

ENTRYPOINT ["/entrypoint.sh"]
