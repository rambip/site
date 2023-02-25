{
  description = "the flake for the website of rambip";

  inputs = {
      julia-source.url = "github:rambip/web-julia";
      perfect-clear-source.url = "github:rambip/web-perfect-clear";
      web-compress-source.url = "github:rambip/web-compress";
      utils.url   = github:numtide/flake-utils;
  };

  outputs = { self, nixpkgs, julia-source, perfect-clear-source, web-compress-source, utils }: 
  with utils.lib; eachSystem allSystems (
    system:
        with import nixpkgs {inherit system;};
        { packages.default = callPackage ./website.nix {
            julia = julia-source.defaultPackage."${system}";
            perfect-clear = perfect-clear-source.defaultPackage."${system}";
            web-compress = web-compress-source.defaultPackage."${system}";
        }; }
  );
}
