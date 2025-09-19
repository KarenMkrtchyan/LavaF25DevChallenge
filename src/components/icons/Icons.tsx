import Image from "next/image";

import upDownArrows from "./UpDownArrows.svg";
import filter from "./Filter.svg";
import placeholder from "./Placeholder.svg";
import indicatorPositive from "./Indicator_Positive.svg";
import indicatorNegative from "./Indicator_Negative.svg";
import indicatorNetural from "./Indicator_Netural.svg";
import check from "./Check.svg";
import plus from "./Plus.svg";
import homeActive from "./Home_Active.svg";
import homeInactive from "./Home_Inactive.svg";
import logOutIcon from "./logOutIcon.svg";
import linkIcon from "./Link.svg";
import searchIcon from "./Search_Icon.svg";

import logo from "./Tally_Icon.svg";
import materialsIconInactiveSvg from "./Sidebar_Icons/Materials_Icon_Inactive.svg";
import materialsIconActiveSvg from "./Sidebar_Icons/Materials_Icon_active.svg";
import fulfillmentIconActiveSvg from "./Sidebar_Icons/Fulfillment_Icon_Active.svg";
import fulfillmentIconInactiveSvg from "./Sidebar_Icons/Fulfillment_Icon_Inactive.svg";
import integrationsIconActiveSvg from "./Sidebar_Icons/Integrations_Icon_Active.svg";
import integrationsIconInactiveSvg from "./Sidebar_Icons/Integrations_Icon_Inactive.svg";
import productsIconActiveSvg from "./Sidebar_Icons/Products_Icon_Active.svg";
import productsIconInactiveSvg from "./Sidebar_Icons/Products_Icon_Inactive.svg";

export function Logo() {
  return <Image className="w-[36px] h-[36px]" src={logo} alt="Logo icon" />;
}

export function LogOutIcon() {
  return (
    <Image className="w-[36px] h-[36]px]" src={logOutIcon} alt="Log Out icon" />
  );
}

export function UpDownArrows() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={upDownArrows}
      alt="UpDownArrows icon"
    />
  );
}

export function Filter() {
  return <Image className="w-[24px] h-[24px]" src={filter} alt="Filter icon" />;
}

export function Placeholder() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={placeholder}
      alt="Placeholder icon"
    />
  );
}

export function IndicatorPositive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={indicatorPositive}
      alt="Indicator Positive icon"
    />
  );
}

export function IndicatorNegative() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={indicatorNegative}
      alt="Indicator Negative icon"
    />
  );
}

export function IndicatorNetural() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={indicatorNetural}
      alt="Indicator Netural icon"
    />
  );
}

export function MaterialsIconInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={materialsIconInactiveSvg}
      alt="Materials Inactive icon"
    />
  );
}

export function MaterialsIconActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={materialsIconActiveSvg}
      alt="Materials Active icon"
    />
  );
}

export function ProductsIconActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={productsIconActiveSvg}
      alt="Products Active icon"
    />
  );
}

export function SearchIcon() {
  return (
    <Image className="w-[16px] h-[16px]" src={searchIcon} alt="Search icon" />
  );
}

export function ProductsIconInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={productsIconInactiveSvg}
      alt="Products Inactive icon"
    />
  );
}

export function Check() {
  return <Image className="w-[24px] h-[24px]" src={check} alt="Check icon" />;
}

export function Plus() {
  return <Image className="w-[24px] h-[24px]" src={plus} alt="Plus icon" />;
}

export function PlusSmall() {
  return <Image className="w-[10px] h-[10px]" src={plus} alt="Plus icon" />;
}

export function HomeActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={homeActive}
      alt="Home Active icon"
    />
  );
}

export function HomeInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={homeInactive}
      alt="Home Inactive icon"
    />
  );
}

export function FulfillmentIconActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={fulfillmentIconActiveSvg}
      alt="Fulfillment Active icon"
    />
  );
}

export function FulfillmentIconInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={fulfillmentIconInactiveSvg}
      alt="Fulfillment Inactive icon"
    />
  );
}

export function LinkIcon() {
  return <Image className="w-[24px] h-[24px]" src={linkIcon} alt="Link icon" />;
}

export function IntegrationsIconActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={integrationsIconActiveSvg}
      alt="Integrations Active icon"
    />
  );
}

export function IntegrationsIconInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={integrationsIconInactiveSvg}
      alt="Integrations Inactive icon"
    />
  );
}
