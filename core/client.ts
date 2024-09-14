import { Champion, ChampionSummary, Item, LocaleVersionArgs, Perk, SummonerEmote, SummonerIcon, WardSkin, Companion, Loot, CherryAugment, Universe, TftItem, TftMapSkin, TftDamageSkin, Skin } from './models';
import axios from "axios";

export abstract class ApiObject {
  static url = "https://raw.communitydragon.org";

  getClientPath(args: LocaleVersionArgs): string {
    return `${ApiObject.url}/${args.version}/plugins/rcp-be-lol-game-data/global/${args.locale}`;
  }
}

export class Client {
  public items: ItemApi;
  public perks: PerkApi;
  public champions: ChampionApi;
  public championSummaries: ChampionSummaryApi;
  public summonerEmotes: SummonerEmoteApi;
  public summonerIcons: SummonerIconApi;
  public wardSkins: WardSkinApi;
  public companions: CompanionsApi;
  public loots: LootApi;
  public cherryAugments: CherryAugmentApi;
  public universes: UniverseApi;
  public tftItems: TftItemApi;
  public tftMapSkins: TftMapSkinApi;
  public tftDamageSkins: TftDamageSkinApi;
  public skins: SkinApi;

  constructor() {
    this.items = new ItemApi();
    this.perks = new PerkApi();
    this.champions = new ChampionApi();
    this.championSummaries = new ChampionSummaryApi();
    this.summonerEmotes = new SummonerEmoteApi();
    this.summonerIcons = new SummonerIconApi();
    this.wardSkins = new WardSkinApi();
    this.companions = new CompanionsApi();
    this.loots = new LootApi();
    this.cherryAugments = new CherryAugmentApi();
    this.universes = new UniverseApi();
    this.tftItems = new TftItemApi();
    this.tftMapSkins = new TftMapSkinApi();
    this.tftDamageSkins = new TftDamageSkinApi();
    this.skins = new SkinApi();
  }
}

export class ItemApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<Item>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/items.json`);
    return res.data.map((x: any) => new Item(x));
  }
}

export class PerkApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<Perk>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/perks.json`);
    return res.data.map((x: any) => new Perk(x));
  }
}

export class ChampionApi extends ApiObject {
  async getAsync(id: number, args: LocaleVersionArgs): Promise<Champion> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/champions/${id}.json`);
    return new Champion(res.data);
  }
}

export class ChampionSummaryApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<ChampionSummary>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/champion-summary.json`);
    return res.data.map((x: any) => new ChampionSummary(x));
  }
}

export class SummonerEmoteApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<SummonerEmote>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/summoner-emotes.json`);
    return res.data.map((x: any) => new SummonerEmote(x));
  }
}

export class SummonerIconApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<SummonerIcon>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/summoner-icons.json`);
    return res.data.map((x: any) => new SummonerIcon(x));
  }
}

export class WardSkinApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<WardSkin>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/ward-skins.json`);
    return res.data.map((x: any) => new WardSkin(x));
  }
}

export class CompanionsApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<Companion>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/companions.json`);
    return res.data.map((x: any) => new Companion(x));
  }
}

export class LootApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<Loot>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/loot.json`);
    return res.data['LootItems'].map((x: any) => new Loot(x));
  }
}

export class CherryAugmentApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<CherryAugment>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/cherry-augments.json`);
    return res.data.map((x: any) => new CherryAugment(x));
  }
}

export class UniverseApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<Universe>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/universes.json`);
    return res.data.map((x: any) => new Universe(x));
  }
}

export class TftItemApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<TftItem>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/tftitems.json`);
    return res.data.map((x: any) => new TftItem(x));
  }
}

export class TftMapSkinApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<TftMapSkin>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/tftmapskins.json`);
    return res.data.map((x: any) => new TftMapSkin(x));
  }
}

export class TftDamageSkinApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<TftDamageSkin>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/tftdamageskins.json`);
    return res.data.map((x: any) => new TftDamageSkin(x));
  }
}

export class SkinApi extends ApiObject {
  async listAsync(args: LocaleVersionArgs): Promise<Array<Skin>> {
    let res = await axios.get(`${this.getClientPath(args)}/v1/skins.json`);
    return Object.entries(res.data).map(([key, value]) => new Skin(value));
  }
}