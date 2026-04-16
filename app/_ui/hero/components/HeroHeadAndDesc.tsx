import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";
type HeroHeadAndDescProps = {
  orgName: string;
  orgNameFarsi?: string;
  otherLangKeys?: string[];
  description?: string;
};

export const HeroHeadAndDesc = ({
  orgName,
  orgNameFarsi,
  otherLangKeys,
  description,
}: HeroHeadAndDescProps) => {
  const showFarsiName =
    otherLangKeys?.includes("HZ") || otherLangKeys?.includes("FA");

  return (
    < >
      <Header as="h1" className="text-yellow-600">
        {orgName}
      </Header>
      {showFarsiName && orgNameFarsi && (
        <Header as="h1" >
          {orgNameFarsi}
        </Header>
      )}
      {description && <P className=" text-gray-50 mt-5 font-bold">{description}</P>}
    </>
  );
};
