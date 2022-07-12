FROM jekyll/minimal

RUN gem install webrick
RUN gem install jekyll-paginate

## create new folder
RUN mkdir -m 777 /cv

## clone repo and add patch
RUN git clone https://github.com/rambip/Grape-Academic-Theme --depth 1 -b v2.2 /cv


COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
