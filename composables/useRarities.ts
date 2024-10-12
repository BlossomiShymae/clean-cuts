export default function useRarities(value: any) {
  const rarities: any = {
    "1": "Rare",
    "2": "Epic",
    "3": "Legendary",
    "4": "Mythic",
    "5": "Ultimate"
  };
  if (Object.hasOwn(rarities, value)) return rarities[value];
  return "";
}