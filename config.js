module.exports = {
  bot: {
    token: "", // Bot List Bot Token from https://discord.com/developers/applications
    owners: ["485139648071598105"],
    mongourl: "mongodb+srv://auserthatjoin:aa123456@dislord.tad6e3t.mongodb.net/?retryWrites=true&w=majority&appName=dislord", //https://mongodb.com/cloud/atlas/register
    servers: {
      token: "" // Server List Bot Token
    },
  },

  website: {
    callback: "https://plastic-amethyst-crystal.glitch.me/callback", //example : https://vcodes.xyz/callback avoid / at last.
    secret: "Csau-r2nhrCQHbyrkKAssqhxOJ5MvNeS",
    clientID: "791150901821308950", // Bot client id.
    tags: [
      "Moderation",
      "Fun",
      "Minecraft",
      "Economy",
      "Guard",
      "NSFW",
      "Anime",
      "Invite",
      "Music",
      "Logging",
      "Web Dashboard",
      "Reddit",
      "Youtube",
      "Twitch",
      "Crypto",
      "Leveling",
      "Game",
      "Roleplay",
      "Utility",
      "Turkish",
    ],
    languages: [
      { flag: "gb", code: "en", name: "English" },
      { flag: "tr", code: "tr", name: "Türkçe" },
      { flag: "de", code: "de", name: "Deutsch" },
    ],
    servers: {
      tags: [
        {
          icon: "fal fa-code",
          name: "Development",
        },
        {
          icon: "fal fa-play",
          name: "Stream",
        },
        {
          icon: "fal fa-camera",
          name: "Media",
        },
        {
          icon: "fal fa-building",
          name: "Company",
        },
        {
          icon: "fal fa-gamepad",
          name: "Game",
        },
        {
          icon: "fal fa-icons",
          name: "Emoji",
        },
        {
          icon: "fal fa-robot",
          name: "Bot List",
        },
        {
          icon: "fal fa-server",
          name: "Server List",
        },
        {
          icon: "fal fa-moon-stars",
          name: "Turkish",
        },
        {
          icon: "fab fa-discord",
          name: "Support",
        },
        {
          icon: "fal fa-volume",
          name: "Sound",
        },
        {
          icon: "fal fa-comments",
          name: "Chatting",
        },
        {
          icon: "fal fa-lips",
          name: "NSFW",
        },
        {
          icon: "fal fa-comment-slash",
          name: "Challange",
        },
        {
          icon: "fal fa-hand-rock",
          name: "Protest",
        },
        {
          icon: "fal fa-headphones-alt",
          name: "Roleplay",
        },
        {
          icon: "fal fa-grin-alt",
          name: "Meme",
        },
        {
          icon: "fal fa-shopping-cart",
          name: "Shop",
        },
        {
          icon: "fal fa-desktop",
          name: "Technology",
        },
        {
          icon: "fal fa-laugh",
          name: "Fun",
        },
        {
          icon: "fal fa-share-alt",
          name: "Social",
        },
        {
          icon: "fal fa-laptop",
          name: "E-Spor",
        },
        {
          icon: "fal fa-palette",
          name: "Design",
        },
        {
          icon: "fal fa-users",
          name: "Community",
        },
      ],
    },
  },

  server: {
    id: "791474571249188895",
    invite: "https://discord.gg/dBDBBjJ5gZ",
    roles: {
      administrator: "1383654471850266695",
      moderator: "1383654533476909148",
      profile: {
        sitecreator: "Evan H.",
        booster: "",
        sponsor: "",
        supporter: "",
        partnerRole: "",
      },
      codeshare: {
        javascript: "",
        html: "",
        substructure: "",
        bdfd: "", // Bot Designer For Discord
        fiveInvite: "",
        tenInvite: "",
        fifteenInvite: "",
        twentyInvite: "",
      },
      botlist: {
        developer: "1383650121040003115",
        certified_developer: "1383650266586284053",
        bot: "1383649333488123955", // This is not your Bot ID, This is the Role ID Approved Bots get when they join your server
        certified_bot: "1383650343489110106",
      },
    },
    channels: {
      codelog: "791474572166692899",
      login: "791474572166692899",
      webstatus: "791474572166692899",
      uptimelog: "791474572166692899",
      botlog: "791474572166692899",
      votes: "791474572166692899",
      reportlog: "791474572166692899"
    },
  },
};