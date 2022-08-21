import * as dotenv from "dotenv";
import * as fs from "fs";

dotenv.config();

const wellKnownDir = "./dist/.well-known";

const brave = {
  domain: process.env.BRAVE_DOMAIN ?? "",
  token: process.env.BRAVE_TOKEN ?? "",
};

export function braveConfig() {
  if (brave.domain && brave.token) {
    if (!fs.existsSync(wellKnownDir)) fs.mkdirSync(wellKnownDir);
    fs.writeFileSync(
      wellKnownDir + "/brave-rewards-verification.txt",
      `This is a Brave Rewards publisher verification file.

Domain: ${brave.domain}
Token: ${brave.token}`,
      { encoding: "utf-8" }
    );
  }
}