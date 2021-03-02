import React from "react";

const SearchArea = ({ test }) => {
  const testArrayDisplay = test.map((t) => (
    <li key={t.id}>{t.alt_description}</li>
  ));
  return (
    <div>
      <ul>{testArrayDisplay}</ul>
    </div>
  );
};
export default SearchArea;
