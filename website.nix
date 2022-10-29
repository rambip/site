{pkgs ? import <nixpkgs> {}, julia}:
let
    portfolio = pkgs.callPackage ./portfolio/default.nix {};
    julia =    

in
pkgs.stdenv.mkDerivation {
    name = "personal website of rambip";
    src = ./html;
    installPhase = ''
    cp -r ./ $out
    cp -r ${portfolio} $out/portfolio
    '';
}

