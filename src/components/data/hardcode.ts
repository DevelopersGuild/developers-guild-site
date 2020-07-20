import mainCurated from "./main-curated.json";

type Curated = {
  readonly source: string;
  readonly recommendedBy: string;
};

export type CuratedCollection = {
  readonly data: ReadonlyArray<Curated>;
};

export const youtubeMainPageHardCoded: CuratedCollection = mainCurated;
