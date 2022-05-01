import {
  firstText,
  secondSingularText,
  secondPluralText,
} from "../locales/pt-br";

const createBedroomsString = (bedrooms) => {
  if (bedrooms === 1)
    return (
      <>
        {firstText} {bedrooms} {secondSingularText}
      </>
    );
  if (bedrooms !== 1)
    return (
      <>
        {firstText} {bedrooms} {secondPluralText}
      </>
    );
};

export default createBedroomsString;