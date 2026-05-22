import { StartupHero } from "@/components/startup/StartupHero";
import { MarketStats } from "@/components/startup/MarketStats";
import { Capabilities } from "@/components/startup/Capabilities";
import { CompetitorTable } from "@/components/startup/CompetitorTable";
import { TechStack } from "@/components/startup/TechStack";
import { StartupCTA } from "@/components/startup/StartupCTA";

export const metadata = {
  title: "ConnectXeo — Samiullah | AI SaaS Product",
  description:
    "ConnectXeo: The only no-code AI agent for Shopify that processes refunds, updates inventory, and deploys on WhatsApp, Telegram, and Slack.",
};

export default function StartupPage() {
  return (
    <>
      <StartupHero />
      <MarketStats />
      <Capabilities />
      <CompetitorTable />
      <TechStack />
      <StartupCTA />
    </>
  );
}
