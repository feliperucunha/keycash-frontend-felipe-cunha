import {
  firstText,
  secondSingularText,
  secondPluralText,
} from "../locales/pt-br";

export const createBedroomsString = (bedrooms) => {
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
