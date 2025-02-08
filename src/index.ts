import {
    type Plugin,
} from "@elizaos/core";
import { Client, IAgentRuntime } from "@elizaos/core";
import {TelegramAccountConfig, validateTelegramAccountConfig} from "./environment.ts";
import { TelegramAccountClient } from "./telegramAccountClient.ts"

export const TelegramAccountClientInterface: Client = {
    name: 'telegramAccount',

    start: async (runtime: IAgentRuntime) => {
        const telegramAccountConfig: TelegramAccountConfig = await validateTelegramAccountConfig(runtime);
        const telegramAccountClient = new TelegramAccountClient(runtime, telegramAccountConfig);
        await telegramAccountClient.start();

        return telegramAccountClient;
    },
};

const telegramAccountPlugin: Plugin = {
    name: "telegramAccount",
    description: "Telegram account client plugin",
    clients: [TelegramAccountClientInterface],
};
export default telegramAccountPlugin;
