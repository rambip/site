{
  description = "the flake for the website of rambip";

  inputs = {
      julia-source.url = "github:rambip/web-julia";
      julia-source.flake = false;
      utils.url   = github:numtide/flake-utils;
  };

  outputs = { self, nixpkgs, julia-source, utils }: 
  with utils.lib; eachSystem allSystems (
    system:
        with import nixpkgs {inherit system;};
        { packages.default = callPackage ./default.nix {
            julia=callPackage julia-source {};
        }; }
  );
}
