import React from "react";
import { showingText, itemsText } from "../locales/pt-br";

function PaginationFilter({ pagination, setPagination }) {
  const handleChange = (e) => {
    setPagination(e.target.value);
  };

  return (
    <select
      className="border-[#ff0094] border-2 p-2 rounded-md"
      onChange={handleChange}
      defaultValue={pagination || "0"}
    >
      <option tabIndex="0" value="0" ariallabel="5 itens">
        {showingText} 5 {itemsText}
      </option>
      <option tabIndex="0" value="1" ariallabel="10 itens">
        {showingText} 10 {itemsText}
      </option>
      <option tabIndex="0" value="2" ariallabel="15 itens">
        {showingText} 15 {itemsText}
      </option>
    </select>
  );
}

export default PaginationFilter;
