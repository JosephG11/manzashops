import AdBlock from "./AdBlock";
import AdRow01 from "./AdRow01";
import AdRow02 from "./AdRow02";
import AdRow03 from "./AdRow03";
import AdRow04 from "./AdRow04";
import AdRow05 from "./AdRow05";
import BadgeSection from "./BadgeSection";
import {
  adRow1data001,
  adRow05data001,
  adRow05data002,
  mockHref,
  ourContentShop,
  sports,
  paidTopSpot,
  bangUrBuck,
  getYourBestBuy,
  exploreTrends,
  activeGear,
  exclusivePicks,
  valueVault,
  shopSmarter,
  freshFinds,
  gearUp,
  premiumPicks,
  dealHunters,
  smartPicks,
  topTrends,
  adventureReady,
  eliteChoices,
  savvySavings,
  brightBuys,
  latestLooks,
  outdoorEssentials,
  premiumSelections,
  budgetFinds,
  smartChoices,
  fashionForward,
  inGear,
  luxuryLines,
  savingsSpotlight,
  bestDeals,
  pcRichard,
  abercrombie,
  bestBuy,
} from "../../constants/Dash";
import TopBadges from "./TopBadges";
import { adRow03data001 } from "../../constants/Dash/content";
import { visor } from "../../constants/Dash/topBadges/visor/badge";
import { cvsl } from "../../constants/Dash/topBadges/cvs11/badge";
import { target } from "../../constants/Dash/topBadges/target/badge";
import { macys } from "../../constants/Dash/topBadges/macys/badge";

const Content = () => {
  return (
    <section className="flex items-center flex-col lg:gap-28 gap-10 bg-[#121212] lg:py-28 py-10">
      <AdBlock
        ads={
          <>
            <AdRow01 data={adRow1data001} />
          </>
        }
      />

      <TopBadges
        data={[cvsl, pcRichard, visor, target, abercrombie, bestBuy, macys]}
      />

      <BadgeSection
        data={[ourContentShop, sports, paidTopSpot, bangUrBuck, getYourBestBuy]}
      />

      <BadgeSection
        data={[
          exploreTrends,
          activeGear,
          exclusivePicks,
          valueVault,
          shopSmarter,
        ]}
      />

      <AdBlock
        ads={
          <>
            <AdRow03 data={adRow03data001} />

            <AdRow04
              ad1Href={mockHref}
              ad1Src={"/manzashops/assets/ad/abercrombiead5.png"}
              ad1Alt={"perfume2"}
              ad2Href={mockHref}
              ad2Src={"/manzashops/assets/ad/target1.jpeg"}
              ad2Alt={"target1"}
            />
          </>
        }
      />

      <BadgeSection
        data={[freshFinds, gearUp, premiumPicks, dealHunters, smartPicks]}
      />

      <BadgeSection
        data={[
          topTrends,
          adventureReady,
          eliteChoices,
          savvySavings,
          brightBuys,
        ]}
      />

      <AdBlock
        ads={
          <>
            <AdRow05 data={adRow05data001} />

            <AdRow05 data={adRow05data002} />
          </>
        }
      />

      <BadgeSection
        data={[
          latestLooks,
          outdoorEssentials,
          premiumSelections,
          budgetFinds,
          smartChoices,
        ]}
      />

      <BadgeSection
        data={[
          fashionForward,
          inGear,
          luxuryLines,
          savingsSpotlight,
          bestDeals,
        ]}
      />
      <BadgeSection
        data={[
          fashionForward,
          inGear,
          luxuryLines,
          savingsSpotlight,
          bestDeals,
        ]}
      />
    </section>
  );
};

export default Content;
