import { ContainerDark } from "../components/Container/ContainerDark";
import { Counter } from "../components/GridMember/Counter";
import { MembersBenefits } from "../components/GridMember/MembersBenefits";

export function Member() {
  return (
    <ContainerDark id="membro">
      <MembersBenefits />
      <Counter />
    </ContainerDark>
  );
}
