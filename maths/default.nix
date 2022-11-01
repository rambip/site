{stdenv, julia}:
let
    julia_html = builtins.readFile ./julia/index.html;
    julia_explanations = builtins.readFile ./julia/index.html;
    julia_html_with_explanations = builtins.toFile "index.html"(
        builtins.replaceStrings ["{{explanations}}"] [julia_explanations] julia_html
    );
in

stdenv.mkDerivation {
    name = "julia";
    src = ./.;
    buildPhase = ''
    # create explanations.html
    cp ${julia}/*.wasm julia
    cp ${julia}/*.js julia
    cp ${julia_html_with_explanations} julia
    '';
    installPhase = ''
    mkdir $out
    cp -r ./ $out
    '';
}

