import React from "react";

function Filter({ filter, setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select
      className="border-[#ff0094] border-2 p-2 rounded-md"
      onChange={handleChange}
      defaultValue={filter || "0"}
    >
      <option tabIndex="0" value="0" ariallabel="Preço">
        Preço
      </option>
      <option tabIndex="0" value="1" ariallabel="Área Útil">
        Área Útil
      </option>
      <option tabIndex="0" value="2" ariallabel="Vagas de Garagem">
        Vagas de Garagem
      </option>
      <option tabIndex="0" value="3" ariallabel="Banheiros">
        Banheiros
      </option>
      <option tabIndex="0" value="4" ariallabel="Dormitórios">
        Dormitórios
      </option>
    </select>
  );
}

export default Filter;
