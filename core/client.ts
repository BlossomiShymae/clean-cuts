import { Champion, ChampionSummary, Item, LocaleVersionArgs, Perk, SummonerEmote, SummonerIcon, WardSkin, Companion } from './models';
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

  constructor() {
    this.items = new ItemApi();
    this.perks = new PerkApi();
    this.champions = new ChampionApi();
    this.championSummaries = new ChampionSummaryApi();
    this.summonerEmotes = new SummonerEmoteApi();
    this.summonerIcons = new SummonerIconApi();
    this.wardSkins = new WardSkinApi();
    this.companions = new CompanionsApi();
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