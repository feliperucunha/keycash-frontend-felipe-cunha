import React from "react";

function Header() {
  return (
    <div className="px-16 flex justify-between items-center border-y border-black border-t-0 bg-rose-200 lg:py-0">
      <div className="space-y-5 py-20">
        <h1 className="text-5xl font-bold max-w-xl font-serif">
          Você sonha. Nós te ajudamos a{" "}
          <span className="text-rose-500">conquistar</span>
        </h1>
        <h2 className="text-xl pb-4">
          Selecione uma moradia abaixo e obtenha <br /> seu imóvel com a
          Keycash.
        </h2>
        <a
          target="_blank"
          href="https://github.com/feliperucunha/keycash-frontend-felipe-cunha"
          rel="noreferrer"
        >
          <h3 className="cursor-pointer text-white border w-48 text-center px-3 py-2 rounded-full border-black bg-black">
            Fale Conosco
          </h3>
        </a>
      </div>
      <h1 className="text-9xl hidden md:inline-flex h-32 lg:h-full px-20 pr-36 font-serif">
        K
      </h1>
    </div>
  );
}

export default Header;
