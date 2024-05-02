
export class LocaleVersionArgs {
  locale: string;
  version: string

  constructor({locale, version}: {locale: string, version: string}) {
    this.locale = locale;
    this.version = version;
  }
}

export abstract class CommunityDragonObject {
  static url = "https://raw.communitydragon.org";

  resolveClientPath({path, args}: {path: string, args: LocaleVersionArgs}): string {
    const uri = path.replace("/lol-game-data/assets", "").toLowerCase();
    return `${CommunityDragonObject.url}/${args.version}/plugins/rcp-be-lol-game-data/global/${args.locale}/${uri}`;
  }

  resolveGamePath({path, version}: {path: string, version: string}): string {
    const uri = path.replace("/lol-game-data/assets/ASSETS/", "").replace(".jpg", ".png").toLowerCase();
    return `${CommunityDragonObject.url}/${version}/game/assets/${uri}`;
  }
}

export class Champion extends CommunityDragonObject {
  id: number;
  name: string;
  alias: string;
  title: string;
  shortBio: string;
  playstyleInfo: PlaystyleInfo;
  skins: Array<Skin>;
  passive: Passive;
  spells: Array<Spell>;

  constructor(json: any) {
    super();
    
    this.id = json.id;
    this.name = json.name;
    this.alias = json.alias;
    this.title = json.title;
    this.shortBio = json.shortBio;
    this.playstyleInfo = new PlaystyleInfo(json.playstyleInfo);
    this.skins = json.skins.map((x: any) => new Skin(x));
    this.passive = new Passive(json.passive);
    this.spells = json.spells.map((x: any) => new Spell(x));
  }
}

export class PlaystyleInfo extends CommunityDragonObject {
  damage: number;
  durability: number;
  crowdControl: number;
  mobility: number;
  utility: number;

  constructor(json: any) {
    super();

    this.damage = json.damage;
    this.durability = json.durability;
    this.crowdControl = json.crowdControl;
    this.mobility = json.mobility;
    this.utility = json.utility;
  }
}

export class Skin extends CommunityDragonObject {
  id: number;
  isBase: boolean;
  name: string;
  rarity: string;
  isLegacy: boolean;
  loadScreenPath: string;

  constructor(json: any) {
    super();

    this.id = json.id;
    this.isBase = json.isBase;
    this.name = json.name;
    this.rarity = json.rarity;
    this.isLegacy = json.isLegacy;
    this.loadScreenPath = json.loadScreenPath;
  }

  getLoadScreen(version: string): string {
    return this.resolveGamePath({path: this.loadScreenPath, version: version});
  }
}

export class Passive extends CommunityDragonObject {
  name: string;
  description: string;

  constructor(json: any) {
    super();

    this.name = json.name;
    this.description = json.description;
  }
}

export class Spell extends CommunityDragonObject {
  spellKey: string;
  name: string;
  description: string;

  constructor(json: any) {
    super();

    this.spellKey = json.spellKey;
    this.name = json.name;
    this.description = json.description;
  }
}

export class ChampionSummary extends CommunityDragonObject {
  id: number;
  name: string;
  alias: string;
  squarePortraitPath: string;

  constructor(json: any) {
    super();

    this.id = json.id;
    this.name = json.name;
    this.alias = json.alias;
    this.squarePortraitPath = json.squarePortraitPath;
  }

  getIcon(args: LocaleVersionArgs): string {
    return this.resolveClientPath({path: this.squarePortraitPath, args: args});
  }
}

export class Item extends CommunityDragonObject {
  id: number;
  name: string;
  description: string;
  active: boolean;
  inStore: boolean;
  from: Array<number>;
  to: Array<number>;
  categories: Array<number>;
  price: number;
  priceTotal: number;
  iconPath: string;

  constructor(json: any) {
    super();

    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.active = json.active;
    this.inStore = json.inStore;
    this.from = json.from;
    this.to = json.to;
    this.categories = json.categories;
    this.price = json.price;
    this.priceTotal = json.priceTotal;
    this.iconPath = json.iconPath;
  }

  getIcon(version: string): string {
    return this.resolveGamePath({path: this.iconPath, version: version});
  }
}

export class Perk extends CommunityDragonObject {
  id: number;
  name: string;
  shortDesc: string;
  longDesc: string;
  iconPath: string;

  constructor(json: any) {
    super();

    this.id = json.id;
    this.name = json.name;
    this.shortDesc = json.shortDesc;
    this.longDesc = json.longDesc;
    this.iconPath = json.iconPath;
  }

  getIcon(version: string): string {
    return this.resolveClientPath({path: this.iconPath, args: {version: version, locale: "default"}});
  }
}

export class SummonerEmote extends CommunityDragonObject {
  id: number;
  name: string;
  inventoryIcon: string;

  constructor(json: any) {
    super();

    this.id = json.id;
    this.name = json.name;
    this.inventoryIcon = json.inventoryIcon;
  }

  getInventoryIcon(version: string): string {
    return this.resolveGamePath({path: this.inventoryIcon, version: version}).replace("inventory", "vfx");
  }
}

export class SummonerIcon extends CommunityDragonObject {
  id: number;
  title: string;
  yearReleased: number;
  isLegacy: boolean;
  imagePath?: string;
  descriptions: Array<Description>;
  rarities: Array<Rarity>;

  constructor(json: any) {
    super();

    this.id = json.id;
    this.title = json.title;
    this.yearReleased = json.yearReleased;
    this.isLegacy = json.isLegacy;
    this.imagePath = json.imagePath;
    this.descriptions = json.descriptions.map((x: any) => new Description(x));
    this.rarities = json.rarities.map((x: any) => new Rarity(x));
  }

  getImage(version: string): string {
    return this.resolveClientPath({path: this.imagePath ?? "", args: {version: version, locale: "default"}});
  }
}

export class WardSkin extends CommunityDragonObject {
  id: number;
  name: string;
  description : string;
  wardImagePath: string;
  wardShadowImagePath: string;
  isLegacy: boolean;
  regionDescriptions: Array<Description>;
  rarities: Array<Rarity>;

  constructor(json: any) {
    super();

    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.wardImagePath = json.wardImagePath;
    this.wardShadowImagePath = json.wardShadowImagePath;
    this.isLegacy = json.isLegacy;
    this.regionDescriptions = json.regionalDescriptions.map((x: any) => new Description(x));
    this.rarities = json.rarities.map((x: any) => new Rarity(x));
  }

  getWardImage(version: string): string {
    return this.resolveClientPath({path: this.wardImagePath, args: {locale: "default", version: version}});
  }

  getWardShadowImage(version: string): string {
    return this.resolveClientPath({path: this.wardShadowImagePath, args: {locale: "default", version: version}});
  }
}

export class Description extends CommunityDragonObject {
  region: string;
  description: string;

  constructor(json: any) {
    super();
    
    this.region = json.region;
    this.description = json.description;
  }
}

export class Rarity extends CommunityDragonObject {
  region: string;
  rarity: string;

  constructor(json: any) {
    super();

    this.region = json.region;
    this.rarity = json.rarity;
  }
}