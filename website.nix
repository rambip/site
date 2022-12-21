{pkgs ? import <nixpkgs> {}, julia, perfect-clear, web-compress}:
let
    portfolio = pkgs.callPackage ./portfolio/default.nix {};
    maths = pkgs.callPackage ./maths/default.nix {inherit julia;};
    info = pkgs.callPackage ./info/default.nix {inherit perfect-clear;};
    tools = pkgs.callPackage ./tools/default.nix {inherit web-compress;};
    art = pkgs.callPackage ./art/default.nix {};
    #links = pkgs.callPackage ./links/default.nix {};

    builder = pkgs.writeShellScript "script" ''
    export PATH="$busybox/bin"
    cd $src
    mkdir $out
    cp index.html style.css explanations.html $out
    cp -r ./3d-art/ $out/3d-art
    cp -r ./about_me/ $out/about_me
    cp -r ./links/ $out/links

    cp -r ${portfolio} $out/portfolio
    cp -r ${info} $out/info
    cp -r ${maths} $out/maths
    cp -r ${tools} $out/tools
    cp -r ${art} $out/art
    '';
in
derivation {
    name = "personal-website-of-rambip";
    src = ./html;
    builder = "${pkgs.bash}/bin/bash";
    args = [builder];
    system = pkgs.system;
    busybox = pkgs.busybox;
}

