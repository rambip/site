{ stdenv, rubyPackages, jekyll }:

stdenv.mkDerivation {
    name = "my portfolio";
    buildInputs = [
        rubyPackages.jekyll-paginate
      
    ];
    unpackPhase = ''
    cp -r ${./my-portfolio-theme} ./theme
    chmod -R 777 ./theme
    cd theme
    cp -r ${./data} ./_data
    cp -r ${./posts} ./_posts
    cp -r ${./img} ./assets/img
    '';
    buildPhase = ''
    ${jekyll}/bin/jekyll build
    '';
    installPhase = ''
    cp -r ./_site $out
    '';
}

