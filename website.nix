{pkgs ? import <nixpkgs> {}, julia}:
let
    portfolio = pkgs.callPackage ./portfolio/default.nix {};
    maths = pkgs.callPackage ./maths/default.nix {inherit julia;};
    #info = pkgs.callPackage ./info/default.nix {};
    #art = pkgs.callPackage ./art/default.nix {};
    #links = pkgs.callPackage ./links/default.nix {};
in
pkgs.stdenv.mkDerivation {
    name = "personal website of rambip";
    src = ./html;
    installPhase = ''
    cp -r ./ $out
    cp -r ${portfolio} $out/portfolio
    cp -r ${maths} $out/maths
    '';
}

