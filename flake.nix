{
  description = "the flake for the website of rambip";

  inputs = {
      julia.url = "github:rambip/web-julia";
      julia.flake = false;
      utils.url   = github:numtide/flake-utils;
  };

  outputs = { self, nixpkgs, julia, utils }: 
  with utils.lib; eachSystem allSystems (
    system:
        with import nixpkgs {inherit system;};
            { packages.default = callPackage ./website.nix {inherit julia;}; }
  );
}
