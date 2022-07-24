{ pkgs ? import <nixpkgs> {  } }:

pkgs.stdenv.mkDerivation {
    name = "my portfolio";
    buildInputs = [
        pkgs.rubyPackages.jekyll-paginate
      
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
    ${pkgs.jekyll}/bin/jekyll build
    '';
    installPhase = ''
    cp -r ./_site $out
    '';
}

