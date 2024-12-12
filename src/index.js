const TelegramBot = require('node-telegram-bot-api');

env= require('./.env');

const TOKEN="7784315239:AAEUZgFgClNZf4XvJq8aIWLF1Rwz3AxYccU";



// Replace with your bot token
const bot = new TelegramBot(7784315239:AAEUZgFgClNZf4XvJq8aIWLF1Rwz3AxYccU, { polling: true });

// channel username
const channelMain = '@amaranfilm';
const channelSpellbounde= '@spellbounde';
const channelCreatureCases='@creaturecases'

bot.onText('spellbound', async (msg) => {
 const chatId = msg.chat.id;
 const userId = msg.from.id;
 const name=msg.chat.first_name;
   try {
   const memberMain = await bot.getChatMember(channelMain, userId);
  const memberSub = await bot.getChatMember(channelSpellbounde, userId);
// Check membership using member#.status
 const isInChannelMain = ['member', 'creator', 'administrator'].includes(memberMain.status);
 const isInChannelSub = ['member', 'creator', 'administrator'].includes(memberSub.status);

 if (isInChannelMain && isInChannelSub) {
   const options = {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{ text: 'Click here to DOWNLOAD', url:'www.google.com'}],],}),};      
         bot.sendMessage(chatId, `Hi ${name}!
Welcome to our bot`, options)
 } else {
 if (!isInChannelMain || !isInChannelSub) {   
         //if user not join both channel
    const options = {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{ text: 'Channel 1', url:'https://t.me/+BHVKUvEJpnA3ZmVl' }],
            [{ text: 'Channel 2', url:'https://t.me/+GCBlbXDEPV0xZjc1' }],
            [{ text: 'START', url:'https://t.me/fastdownload1_bot?start=spellbound' }],],}),};
    bot.sendMessage(chatId,`Hi ${name}!
Join BOTH CHANNELS to start bot`, options)
}}
} catch (error) {
    console.error("Error checking membership:", error);
    if (error.response && error.response.body && error.response.body.description) {
        bot.sendMessage(chatId, "Error: " + error.response.body.description);
    } else {
        bot.sendMessage(chatId, "An error occurred. Please try again later.");
    }
 }
});


bot.onText('creaturecases', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const name=msg.chat.first_name;
      try {
      const memberMain = await bot.getChatMember(channelMain, userId);
     const memberSub = await bot.getChatMember(channelCreatureCases, userId);
   // Check membership using member#.status
    const isInChannelMain = ['member', 'creator', 'administrator'].includes(memberMain.status);
    const isInChannelSub = ['member', 'creator', 'administrator'].includes(memberSub.status);
   
    if (isInChannelMain && isInChannelSub) {
      const options = {
           reply_markup: JSON.stringify({
             inline_keyboard: [
               [{ text: 'Episode-01', url:'https://japanicartoo.github.io/the-creature-cases-S04E01/'}],
               [{ text: 'Episode-02', url:'https://japanicartoo.github.io/the-creature-cases-S04E02/'}],
               [{ text: 'Episode-03', url:'https://japanicartoo.github.io/the-creature-cases-S04E03/'}],
               [{ text: 'Episode-04', url:'https://japanicartoo.github.io/the-creature-cases-S04E04/'}],
               [{ text: 'Episode-05', url:'https://japanicartoo.github.io/the-creature-cases-S04E05/'}],
               [{ text: 'Episode-06', url:'https://japanicartoo.github.io/the-creature-cases-S04E06/'}],
               [{ text: 'Episode-07', url:'https://japanicartoo.github.io/the-creature-cases-S04E07/'}],
               [{ text: 'Episode-08', url:'https://japanicartoo.github.io/the-creature-cases-S04E08/'}],],}),};      
            bot.sendMessage(chatId, `Hi ${name}!
   Welcome to our bot`, options)
    } else {
    if (!isInChannelMain || !isInChannelSub) {   
            //if user not join both channel
       const options = {
           reply_markup: JSON.stringify({
             inline_keyboard: [
               [{ text: 'Join CHANNEL 1', url:'https://t.me/+BHVKUvEJpnA3ZmVl' }],
               [{ text: 'Join CHANNEL 2', url:'https://t.me/+TPOKBnAsgQdiMjI1' }],
               [{ text: 'START', url:`https://t.me/fastdownload1_bot?start=creaturecases` }],],}),};
       bot.sendMessage(chatId,`Hi ${name}!
Join BOTH CHANNELS to start bot`, options)
   
   }}
   } catch (error) {
       console.error("Error checking membership:", error);
       if (error.response && error.response.body && error.response.body.description) {
           bot.sendMessage(chatId, "Error: " + error.response.body.description);
       } else {
           bot.sendMessage(chatId, "An error occurred. Please try again later.");
       }

    }
   });
