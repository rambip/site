{stdenv, julia}:
let
    julia_html = builtins.readFile ./index.html;
    julia_explanations = builtins.readFile ./explanations.html;
    julia_html_with_explanations = builtins.toFile "index.html"(
        builtins.replaceStrings ["{{explanations}}"] [julia_explanations] julia_html
    );
in

stdenv.mkDerivation {
    name = "julia";
    src = ./.;
    buildPhase = ''
    # create explanations.html
    mkdir site
    cp ${julia}/*.wasm site
    cp ${julia}/*.js site
    cp ${julia_html_with_explanations} site/index.html
    '';
    installPhase = ''
    cp -r site $out
    '';
}

