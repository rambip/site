{pkgs ? import <nixpkgs> {}}:
let
    portfolio = pkgs.callPackage ./portfolio/default.nix {};

in
pkgs.stdenv.mkDerivation {
    name = "personal website of rambip";
    src = ./html;
    installPhase = ''
    cp -r ./ $out
    cp -r ${portfolio} $out/portfolio
    '';
}

