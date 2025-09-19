import Image from "next/image";

import upDownArrows from "./UpDownArrows.svg";
import filter from "./Filter.svg";
import placeholder from "./Placeholder.svg";
import indicatorPositive from "./Indicator_Positive.svg";
import indicatorNegative from "./Indicator_Negative.svg";
import indicatorNetural from "./Indicator_Netural.svg";
import elementsInactive from "./Elements_Inactive.svg";
import productsActive from "./Products_Active.svg";
import check from "./Check.svg";
import plus from "./Plus.svg";
import homeActive from "./Home_Active.svg";
import homeInactive from "./Home_Inactive.svg";
import ordersActive from "./Orders_Active.svg";
import ordersInactive from "./Orders_Inactive.svg";
import linkIcon from "./Link.svg";
import integrationsActive from "./Integrations_Active.svg";
import integrationsInactive from "./Integrations_Inactive.svg";
import componentsActive from "./Components_Active.svg";
import productsActiveDuplicate from "./Products_Active.svg";

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

export function ElementsInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={elementsInactive}
      alt="Elements Inactive icon"
    />
  );
}

export function ProductsActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={productsActive}
      alt="Products Active icon"
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

export function OrdersActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={ordersActive}
      alt="Orders Active icon"
    />
  );
}

export function OrdersInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={ordersInactive}
      alt="Orders Inactive icon"
    />
  );
}

export function LinkIcon() {
  return <Image className="w-[24px] h-[24px]" src={linkIcon} alt="Link icon" />;
}

export function IntegrationsActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={integrationsActive}
      alt="Integrations Active icon"
    />
  );
}

export function IntegrationsInactive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={integrationsInactive}
      alt="Integrations Inactive icon"
    />
  );
}

export function ComponentsActive() {
  return (
    <Image
      className="w-[24px] h-[24px]"
      src={componentsActive}
      alt="Components Active icon"
    />
  );
}
