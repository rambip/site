{stdenv, perfect-clear}:

stdenv.mkDerivation {
    name = "info page";
    src = ./.;
    installPhase = ''
    mkdir $out
    cp quine.html index.html $out
    cp -r ./ray_tracing $out/ray_tracing
    cp -r ./snake $out/snake
    cp -r ${perfect-clear} $out/perfect_clear
    '';
}
