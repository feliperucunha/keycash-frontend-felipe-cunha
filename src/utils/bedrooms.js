export const createBedroomsString = (bedrooms) => {
  if (bedrooms === 1) return <>Imóvel com {bedrooms} quarto</>
  if (bedrooms !== 1) return <>Imóvel com {bedrooms} quartos</>
}