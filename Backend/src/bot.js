
import { Telegraf } from "telegraf";


export default class Bot {

    constructor(token) {
        this.bot = new Telegraf(token);
        this.bot.launch();
    }

    sendMessage(chatId, message) {
        this.bot.telegram.sendMessage(chatId, message , { parse_mode: 'Markdown' });
    }

}
