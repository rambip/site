{
  description = "the flake for the website of rambip";

  inputs = {
      julia-source.url = "github:rambip/web-julia";
      julia-source.flake = false;
      perfect-clear-source.url = "github:rambip/web-perfect-clear";
      perfect-clear-source.flake = false;
      utils.url   = github:numtide/flake-utils;
  };

  outputs = { self, nixpkgs, julia-source, perfect-clear-source, utils }: 
  with utils.lib; eachSystem allSystems (
    system:
        with import nixpkgs {inherit system;};
        { packages.default = callPackage ./website.nix {
            julia = callPackage julia-source {};
            perfect-clear = callPackage perfect-clear-source {};
        }; }
  );
}
