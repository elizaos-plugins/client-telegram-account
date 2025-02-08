import { Plugin, Client } from '@elizaos/core';

declare const TelegramAccountClientInterface: Client;
declare const telegramAccountPlugin: Plugin;

export { TelegramAccountClientInterface, telegramAccountPlugin as default };
