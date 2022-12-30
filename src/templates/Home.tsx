import { ContainerHome } from "../components/Container/ContainerHome";
import { WiseOldMan } from "../components/Container/WiseOldMan";
import { HomeBanner } from "../components/HomeBanner/HomeBanner";

export function Home() {
  return (
      <ContainerHome id="inicio" >
        <HomeBanner />
        <WiseOldMan />
      </ContainerHome>
  );
}
