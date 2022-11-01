{stdenv, julia}:
let
    julia_page = import ./julia/default.nix {inherit stdenv julia;};
in

stdenv.mkDerivation {
    name = "math page";
    src = ./.;
    buildPhase = '''';
    installPhase = ''
    # create explanations.html
    mkdir $out
    cp -r ./gol2 $out/gol2
    cp -r ./number $out/number
    cp -r ${julia_page} $out/julia
    cp -r ./index.html $out
    '';
}

