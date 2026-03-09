import phoneImage from "../../assets/Phone.avif";
import phoneImage2 from "../../assets/zero-fees.avif";
import phoneImage3 from "../../assets/CB.avif";
import Feature from "./Feature";

function Features() {
  return (
    <>
      <Feature
        title="Powerful tools, designed for the advanced trader."
        description="Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience."
        buttonText="Start trading"
        image={phoneImage}
      />

      <Feature
        buttonValue="COINBASE ONE"
        title="Zero trading fees, more rewards."
        description="Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more."
        buttonText="Claim free trial"
        image={phoneImage2}
        reverse
      />
      <Feature
        buttonValue="BASE APP"
        title="Countless ways to earn crypto with the Base App."
        description="An everything app to trade, create, discover, and chat, all in one place."
        buttonText="Learn more"
        image={phoneImage3}
      />
    </>
  );
}

export default Features;