{
  description = "the flake for the website of rambip";

  inputs = {
      julia.url = "github:rambip/web-julia";
      perfect-clear.url = "github:rambip/web-perfect-clear";
      web-compress.url = "github:rambip/web-compress";
      utils.url   = github:numtide/flake-utils;
  };

  outputs = { self, nixpkgs, julia, perfect-clear, web-compress, utils }: 
  with utils.lib; eachSystem [system.x86_64-linux] (
    system:
        with import nixpkgs {inherit system;};
        { 
            packages.default = callPackage ./website.nix {
                julia = julia.packages."${system}".default;
                perfect-clear = perfect-clear.packages."${system}".default;
                web-compress = web-compress.packages."${system}".default;
            }; 
        }
  );
}
