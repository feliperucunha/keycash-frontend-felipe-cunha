import React from "react";
import { areaFilterText, priceFilterText, garageFilterText, bedroomsFilterText, bathroomsFilterText } from '../locales/pt-br'

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
        {priceFilterText}
      </option>
      <option tabIndex="0" value="1" ariallabel="Área Útil">
        {areaFilterText}
      </option>
      <option tabIndex="0" value="2" ariallabel="Vagas de Garagem">
        {garageFilterText}
      </option>
      <option tabIndex="0" value="3" ariallabel="Banheiros">
        {bathroomsFilterText}
      </option>
      <option tabIndex="0" value="4" ariallabel="Dormitórios">
        {bedroomsFilterText}
      </option>
    </select>
  );
}

export default Filter;
