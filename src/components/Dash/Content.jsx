import AdBlock from './AdBlock';
import AdRow01 from './AdRow01';
import AdRow03 from './AdRow03';
import AdRow04 from './AdRow04';
import AdRow05 from './AdRow05';
import BadgeSection from './BadgeSection';
import {
  adRow1data001,
  adRow05data001,
  adRow05data002,
  mockHref,
  clothing,
  jewelery,
  sneakers,
  beautyShops,
  electronics,
  supplements,
  activeGear,
  movies,
  giftCards,
  luxuryShops,
  justBoots,
  justHats,
  justDresses,
  justJackets,
  justSuits,
  streamingServices,
  ticketPlaces,
  leagueShops,
  bySportTeam,
  popularSportTeams,
  homeNecesities,
  indoorHomeFans,
  furnitureEssentials,
  decorationsSupplies,
  justCandles,
  homeImprovement,
  officeSuppliers,
  kitchenSupplies,
  rugs,
  homeArt,
  pcRichard,
  abercrombie,
  bestBuy,
} from '../../constants/Dash';
import TopBadges from './TopBadges';
import { adRow03data001 } from '../../constants/Dash/content';
import { visor } from '../../constants/Dash/topBadges/visor/badge';
import { cvsl } from '../../constants/Dash/topBadges/cvs11/badge';
import { target } from '../../constants/Dash/topBadges/target/badge';
import { macys } from '../../constants/Dash/topBadges/macys/badge';

const Content = () => {
  return (
    <section className="flex flex-col items-center gap-10 bg-[#121212] py-10 lg:gap-28 lg:py-28">
      <AdBlock
        ads={
          <>
            <AdRow01 data={adRow1data001} />
          </>
        }
      />

      <TopBadges data={[cvsl, pcRichard, visor, target, abercrombie, bestBuy, macys]} />

      <BadgeSection data={[clothing, jewelery, sneakers, beautyShops, electronics]} />

      <BadgeSection data={[supplements, activeGear, movies, giftCards, luxuryShops]} />

      <AdBlock
        ads={
          <>
            <AdRow03 data={adRow03data001} />

            <AdRow04
              ad1Href={mockHref}
              ad1Src={'/manzashops/assets/ad/abercrombiead5.png'}
              ad1Alt={'perfume2'}
              ad2Href={mockHref}
              ad2Src={'/manzashops/assets/ad/target1.jpeg'}
              ad2Alt={'target1'}
            />
          </>
        }
      />

      <BadgeSection data={[justBoots, justHats, justDresses, justJackets, justSuits]} />

      <BadgeSection
        data={[streamingServices, ticketPlaces, leagueShops, bySportTeam, popularSportTeams]}
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
          homeNecesities,
          indoorHomeFans,
          furnitureEssentials,
          decorationsSupplies,
          justCandles,
        ]}
      />

      <BadgeSection data={[homeImprovement, officeSuppliers, kitchenSupplies, rugs, homeArt]} />
      <BadgeSection data={[homeImprovement, officeSuppliers, kitchenSupplies, rugs, homeArt]} />
    </section>
  );
};

export default Content;
