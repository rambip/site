{stdenv}:
stdenv.mkDerivation {
    name = "art page";
    src = ./.;
    buildPhase = '''';
    installPhase = ''
    mkdir $out
    cp -r ${./libraries} $out/libraries
    cp -r ${./crowd} $out/crowd
    cp -r ${./music} $out/music
    cp -r ./index.html $out
    '';
}

