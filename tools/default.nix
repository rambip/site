{stdenv, web-compress}:
stdenv.mkDerivation {
    name = "tools page";
    src = ./.;
    buildPhase = '''';
    installPhase = ''
    # create explanations.html
    mkdir $out
    cp -r ${web-compress} $out/converter
    cp -r ./index.html $out
    '';
}

