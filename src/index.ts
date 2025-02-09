import { TelegramAccountClientInterface } from "./client";

const telegramAccountPlugin = {
    name: "telegramAccount",
    description: "Telegram account client plugin",
    clients: [TelegramAccountClientInterface],
};
export default telegramAccountPlugin;
