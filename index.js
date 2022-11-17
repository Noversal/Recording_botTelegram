const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  ctx.reply('Esto es un reply');
});

bot.command('peso_anotar', (ctx) => {
  const message = ctx.update.message.text;
  const pesoNumber = Number(message.split(' ')[1]);
  const userName = ctx.update.message.from.first_name;
  if (!pesoNumber) {
    return ctx.reply('Se olvido de poner su peso');
  }

  ctx.reply(`Su peso es de ${pesoNumber}kg`);
  ctx.reply(`Gracias por confiar en nosotros ${userName}`);
});

bot.launch();
