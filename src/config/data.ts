import type { IChannelsData, IFollowChannelsData } from "@/types/common"

export const followedChannels: { channels: IFollowChannelsData[] } = {
  channels: [
    {
      channelName: "Riot Games",
      slug: "riot-games",
      category: "League of Legend",
      isLive: true,
      view: 0,
      title: "T1 vs BLG | DAY 16 | MSI 2024",
      image: "/avatar/riot-games-avatar.png",
    },
    {
      channelName: "PirateSoftware",
      slug: "piratesoftware",
      category: "Once Human",
      isLive: true,
      view: 0,
      title:
        "Once Human 💜 Launch Day with Drops! 💛 @FerretSoftware !Heartbound !Website !TTS\n",
      image: "/avatar/pirate-software-avatar.png",
    },
    {
      channelName: "ewc_gold",
      slug: "ewc_gold",
      category: "League of Legend",
      isLive: true,
      view: 0,
      title: "EWC presenting LoL // Day 4 - Final",
      image: "/avatar/ewc-gold-avatar.png",
    },
    {
      channelName: "Kyedae",
      slug: "kyedae",
      category: "Valorant",
      isLive: true,
      view: 0,
      title: "SHORT STREAM (OW at 7pm) -ending at 8pm for a dinner",
      image: "/avatar/kyedae-avatar.png",
    },
    {
      channelName: "vei",
      slug: "vei",
      category: "Elden Ring",
      isLive: true,
      view: 1,
      title: "Elden Ring [Part 11] + GODDESS OF VICTORY: NIKKE",
      image: "/avatar/vei-avatar.png",
    },
    {
      channelName: "ironmouse",
      slug: "ironmouse",
      category: "Just Chatting",
      isLive: true,
      view: 0,
      title:
        "HANGING OUT YAPPING AND THEN GAMES. WHAT A DAY WE HAD YESTERDAY IM SO TIRED AHHH | #VSHOJO | !tts | !merch | !Youtube | !razer | !gamersupps",
      image: "/avatar/ironmouse-avatar.png",
    },
    {
      channelName: "Jynxzi",
      slug: "jynxzi",
      category: "Tom Clancy's Rainbow Six Siege",
      isLive: true,
      view: 0,
      title: "I said huh",
      image: "/avatar/jynxzi-avatar.png",
    },
    {
      channelName: "xull",
      slug: "xull",
      isLive: false,
      image: "/avatar/xull-avatar.png",
    },
    {
      channelName: "Sweetily",
      slug: "sweetily",
      category: "Wuthering Waves",
      isLive: true,
      view: 0,
      title:
        "UL31 🏮 200 HOURS PLAYED IN CBTS AMA !YT Gift 2 Subs for Rewards IN-Game ✦ 5 star selector sent tomorrow 「EN/中文」!WutheringWaves #ad",
      image: "/avatar/sweetily-avatar.png",
    },
    {
      channelName: "Thầy Giáo Ba",
      slug: "thay-giao-ba",
      category: "League of Legend",
      isLive: true,
      view: 0,
      title: "T1 vs BLG | DAY 16 | MSI 2024",
      image: "/avatar/thay-giao-ba-avatar.png",
    },
    {
      channelName: "喬希啊 (josie5297)",
      slug: "josie5297",
      isLive: false,
      image: "/avatar/josie5297-avatar.png",
    },
  ],
}

export const recommendedLiveChannelsData: { channels: IChannelsData[] } = {
  channels: [
    {
      channelName: "xQc",
      slug: "xqc",
      category: "Just Chatting",
      isLive: true,
      view: 0,
      title:
        "📕LIVE📕CLICK📕HERE📕REACT📕VIDEOS📕GAMEPLAY📕#1 AT EVERYTHING📕POGCHAMPION📕",
      image: "/avatar/xqc-avatar.jpeg",
    },
    {
      channelName: "Kei",
      slug: "kei",
      category: "League of Legend",
      isLive: true,
      view: 1,
      title: "ROAD TO PLASTIC!!! ROAD TO IRON!!!",
      image: "/avatar/kei-avatar.png",
    },
    {
      channelName: "Kai Cenat",
      slug: "kai-cenat",
      category: "Elden Ring",
      isLive: true,
      view: 0,
      title:
        "⚔️100+ HR STREAM⚔️ELDEN RING⚔️CLICK HERE⚔️GAMER⚔️BIGGEST DWARF⚔️ELITE⚔️PRAY 4 ME⚔️",
      image: "/avatar/kai-cenat-avatar.png",
    },
    {
      channelName: "Tenz",
      slug: "tenz",
      category: "Valorant",
      isLive: true,
      view: 0,
      title: "feeling a little sick today",
      image: "/avatar/tenz-avatar.png",
    },
    {
      channelName: "Misanthrope",
      slug: "misanthrope",
      category: "Valorant",
      isLive: true,
      view: 1,
      title: "ROAD TO PLASTIC!!! ROAD TO IRON!!!",
      image: "/avatar/misanthrope-avatar.png",
    },
    {
      channelName: "CDawgVA",
      slug: "cdawgva",
      category: "IRL",
      isLive: true,
      view: 0,
      title: "I Rented an RV for 5 Days and Toured Japan",
      image: "/avatar/cdawgva-avatar.png",
    },
  ],
}

export const categoryData = {
  categories: [
    {
      title: "Valorant",
      currentTotalView: 0,
      slug: "valorant",
      image: "/category/valorant.jpg",
      tags: [
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "Shooter",
          slug: "",
        },
      ],
    },
    {
      title: "Just Chatting",
      currentTotalView: 0,
      slug: "just-chatting",
      image: "/category/just-chatting.jpg",
      tags: [
        {
          name: "IRL",
          slug: "",
        },
      ],
    },
    {
      title: "League of Legend",
      currentTotalView: 0,
      slug: "league-of-legend",
      image: "/category/league-of-legend.png",
      tags: [
        {
          name: "MOBA",
          slug: "",
        },
        {
          name: "Action",
          slug: "",
        },
      ],
    },
    {
      title: "Elden Ring",
      currentTotalView: 0,
      slug: "elden-ring",
      image: "/category/elden-ring.jpg",
      tags: [
        {
          name: "RPG",
          slug: "",
        },
      ],
    },
    {
      title: "Grand Theft Auto V",
      currentTotalView: 0,
      slug: "grand-theft-auto-v",
      image: "/category/grand-theft-auto-v.jpg",
      tags: [
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "Shooter",
          slug: "",
        },
      ],
    },
    {
      title: "Overwatch 2",
      currentTotalView: 0,
      slug: "overwatch-2",
      image: "/category/over-watch-2.png",
      tags: [
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "Shooter",
          slug: "",
        },
      ],
    },
    {
      title: "PUBG: BATTLEGROUNDS",
      currentTotalView: 0,
      slug: "pubg-battlegrounds",
      image: "/category/pubg-battlegrounds.png",
      tags: [
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "Shooter",
          slug: "",
        },
      ],
    },
    {
      title: "Teamfight Tactics",
      currentTotalView: 0,
      slug: "teamfight-tactics",
      image: "/category/teamfight-tactics.jpg",
      tags: [
        {
          name: "Strategy",
          slug: "",
        },
      ],
    },
    {
      title: "IRL",
      currentTotalView: 0,
      slug: "irl",
      image: "/category/irl.png",
      tags: [
        {
          name: "IRL",
          slug: "",
        },
      ],
    },
    {
      title: "Music",
      currentTotalView: 0,
      slug: "music",
      image: "/category/music.jpg",
      tags: [
        {
          name: "IRL",
          slug: "",
        },
        {
          name: "Creative",
          slug: "",
        },
      ],
    },
    {
      title: "Dota 2",
      currentTotalView: 0,
      slug: "dota-2",
      image: "/category/dota-2.png",
      tags: [
        {
          name: "Strategy",
          slug: "",
        },
        {
          name: "MOBA",
          slug: "",
        },
      ],
    },
    {
      title: "Tom Clancy's Rainbow Six Siege",
      currentTotalView: 0,
      slug: "tom-clancys-rainbow-six-siege",
      image: "/category/tom-clancys-rainbow-six-siege.jpg",
      tags: [
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "Shooter",
          slug: "",
        },
      ],
    },
    {
      title: "Wuthering Waves",
      currentTotalView: 0,
      slug: "wuthering-waves",
      image: "/category/wuthering-waves.jpg",
      tags: [
        {
          name: "RPG",
          slug: "",
        },
        {
          name: "Adventure Game",
          slug: "",
        },
      ],
    },
    {
      title: "Minecraft",
      currentTotalView: 0,
      slug: "minecraft",
      image: "/category/minecraft.jpg",
      tags: [
        {
          name: "Simulation",
          slug: "",
        },
      ],
    },
    {
      title: "EA Sports FC 24",
      currentTotalView: 0,
      slug: "ea-sports-fc-24",
      image: "/category/ea-sports-fc-24.jpg",
      tags: [
        {
          name: "Simulation",
          slug: "",
        },
      ],
    },
    {
      title: "World of Warcraft",
      currentTotalView: 0,
      slug: "world-of-warcraft",
      image: "/category/world-of-warcraft.png",
      tags: [
        {
          name: "RPG",
          slug: "",
        },
        {
          name: "Adventure Game",
          slug: "",
        },
      ],
    },
    {
      title: "Apex Legends",
      currentTotalView: 0,
      slug: "apex-legends",
      image: "/category/apex-legends.jpg",
      tags: [
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "Shooter",
          slug: "",
        },
      ],
    },
    {
      title: "Chess",
      currentTotalView: 0,
      slug: "chess",
      image: "/category/chess.jpg",
      tags: [
        {
          name: "Strategy",
          slug: "",
        },
        {
          name: "Action",
          slug: "",
        },
      ],
    },
    {
      title: "ASMR",
      currentTotalView: 0,
      slug: "asmr",
      image: "/category/asmr.jpg",
      tags: [
        {
          name: "IRL",
          slug: "",
        },
      ],
    },
    {
      title: "Rust",
      currentTotalView: 0,
      slug: "rust",
      image: "/category/rust.jpg",
      tags: [
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "Shooter",
          slug: "",
        },
        {
          name: "RPG",
          slug: "",
        },
      ],
    },
  ],
}

export interface LiveChannelDataI {
  channel: {
    name: string
    image: string
    slug: string
    follower: number
    bio: string
  }
  title: string
  slug: string
  totalView: number
  isLive: boolean
  category: string
  livePreviewImage: string
  themeColor: string
  tags: { name: string; slug: string }[]
}

export const liveChannels = {
  channels: [
    {
      channel: {
        name: "PirateSoftware",
        image: "/avatar/pirate-software-avatar.png",
        slug: "/piratesoftware",
        follower: 806_200,
        bio: "Hi, my name is Thor. I've been in the games industry for 19 years. I worked for Blizzard Entertainment, Amazon Games Studios, the United States Department of Energy, and now I own my own studio called Pirate Software. I'm a game developer, a hacker, and a giant nerd. Ask me stuff!",
      },
      title:
        "Once Human 💜 Launch Day with Drops! 💛 @FerretSoftware !Heartbound !Website !TTS",
      slug: "/piratesoftware",
      totalView: 1,
      isLive: true,
      category: "Once Human",
      livePreviewImage:
        "/recommend-live-channel/live-piratesoftware-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "Memes",
          slug: "",
        },
        {
          name: "PixelArt",
          slug: "",
        },
        {
          name: "Chatting",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "xull",
        image: "/avatar/xull-avatar.png",
        slug: "/xull",
        follower: 122_200,
        bio: "",
      },
      title: "idc ♡",
      slug: "/xull",
      totalView: 1,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-xull-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "woman",
          slug: "",
        },
        {
          name: "missu",
          slug: "",
        },
        {
          name: "chatty",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "Tenz",
        image: "/avatar/tenz-avatar.png",
        slug: "/tenz",
        follower: 1_301_203,
        bio: "",
      },
      title: "valorant then variety",
      slug: "/tenz",
      totalView: 0,
      isLive: true,
      category: "HELLDIVERS 2",
      livePreviewImage: "/recommend-live-channel/live-tenz-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "Anime",
          slug: "",
        },
        {
          name: "FPS",
          slug: "",
        },
        {
          name: "English",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "Grimm",
        image: "/avatar/grimm-avatar.png",
        slug: "/grimm",
        follower: 120_201,
        bio: "",
      },
      title:
        "🟥SAGE MAIN RETURNS🟥T1 GRIM🟥BEST VALORANT EXPERIENCE🟥DERUSTING GETTING BETTER🟥HOPEFULLY WE CAN STILL GAME AT A HIGHT LEVEL🟥",
      slug: "/grimm",
      totalView: 0,
      isLive: true,
      category: "Valorant",
      livePreviewImage: "/recommend-live-channel/live-grimm-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "English",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "Thầy Giáo Ba",
        image: "/avatar/thay-giao-ba-avatar.png",
        slug: "/thay-giao-ba",
        follower: 73_312,
        bio: "",
      },
      title: "Đồng hành cùng MSI !!",
      slug: "/thay-giao-ba",
      totalView: 0,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-thay-giao-ba-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "English",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "한갱 (woohankyung)",
        image: "/avatar/woohankyung-avatar.png",
        slug: "/woohankyung",
        follower: 813_312,
        bio: "",
      },
      title: "낭만을 찾아서,,",
      slug: "/woohankyung",
      totalView: 0,
      isLive: true,
      category: "Just Chatting",
      livePreviewImage: "/recommend-live-channel/live-woohankyung-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "한국어",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "喬希啊 (josie5297)",
        image: "/avatar/josie5297-avatar.png",
        slug: "/josie5297",
        follower: 873_312,
        bio: "",
      },
      title: "欸黑:D  !SNS",
      slug: "/josie5297",
      totalView: 0,
      isLive: true,
      category: "Just Chatting",
      livePreviewImage: "/recommend-live-channel/live-josie5297-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "中文",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "Jankos",
        image: "/avatar/jankos-avatar.png",
        slug: "/jankos",
        follower: 243_312,
        bio: "",
      },
      title:
        "❗❗EDUCATION?!  POSITIVE VIBES ❗ ❗ !YOUTUBE !CLIPS !DISCORD !PRIME !TIERLIST !DUO",
      slug: "/jankos",
      totalView: 0,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-jankos-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "English",
          slug: "",
        },
        {
          name: "Educational",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "lol_nemesis",
        image: "/avatar/nemesis-avatar.png",
        slug: "/nemesis",
        follower: 162_312,
        bio: "",
      },
      title: "euw soloqqq !patreon !discord !nordvpn",
      slug: "/nemesis",
      totalView: 0,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-nemesis-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "English",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "HasanAbi",
        image: "/avatar/hasanabi-avatar.jpeg",
        slug: "/hasanabi",
        follower: 2_300_001,
        bio: "",
      },
      title:
        "ICJ ISSUES CEASEFIRE ORDER, ISRAEL RESPONDS W/ MORE FIRE -LOUISIANA RECLASSIFIES ABORTION DRUG - BATMAN FINALE LATER!",
      slug: "/hasanabi",
      totalView: 0,
      isLive: true,
      category: "Just Chatting",
      livePreviewImage: "/recommend-live-channel/live-hasanabi-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "English",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "ESL_DOTA2",
        image: "/avatar/dota-2-avatar.png",
        slug: "/dota-2",
        follower: 402_000,
        bio: "",
      },
      title: "LIVE: BetBoom Team vs Xtreme Gaming - DreamLeague S23 - LB3",
      slug: "/dota-2",
      totalView: 0,
      isLive: true,
      category: "Dota 2",
      livePreviewImage: "/recommend-live-channel/live-dota-2-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "Esports",
          slug: "",
        },
        {
          name: "English",
          slug: "",
        },
      ],
    },
    {
      channel: {
        name: "mago2dgod",
        image: "/avatar/mago2dgod-avatar.png",
        slug: "/mago2dgod",
        follower: 102_000,
        bio: "",
      },
      title: "【SF6】寝て起きたらゴウキが上手くなっていた件について",
      slug: "/mago2dgod",
      totalView: 0,
      isLive: true,
      category: "Street Fighter 6",
      livePreviewImage: "/recommend-live-channel/live-mago2dgod-preview.jpg",
      themeColor: "rgb(243, 243, 79)",
      tags: [
        {
          name: "格闘ゲーマー",
          slug: "",
        },
        {
          name: "日本語",
          slug: "",
        },
      ],
    },
  ],
}

// export const chatMessages = [
//   {
//     id: faker.database.mongodbObjectId(),
//     message:
//       "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
//     username: "Marie Curie",
//     color: "rgb(0, 187, 204)",
//   },
//   {
//     id: faker.database.mongodbObjectId(),
//     message:
//       "All matter originates and exists only by virtue of a force... We must assume behind this force the existence of a conscious and intelligent Mind. This Mind is the matrix of all matter.",
//     username: "Max Planck",
//     color: "rgb(255, 69, 0)",
//   },
//   {
//     id: faker.database.mongodbObjectId(),
//     message:
//       "If I have seen further it is by standing on the shoulders of Giants.",
//     username: "Issac Newton",
//     color: "rgb(255, 105, 180)",
//   },
//   {
//     id: faker.database.mongodbObjectId(),
//     message:
//       "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
//     username: "Albert Einstein",
//     color: "rgb(255, 0, 0)",
//   },
//   {
//     id: faker.database.mongodbObjectId(),
//     message:
//       "Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.",
//     username: "Nikola Tesla",
//     color: "rgb(139, 88, 255)",
//   },
// ]

export const defaultColor = [
  "rgb(0, 187, 204)",
  "rgb(255, 69, 0)",
  "rgb(255, 105, 180)",
  "rgb(255, 0, 0)",
  "rgb(139, 88, 255)",
]

export const chatMessages = [
  {
    id: "cac04dbbffa52d33fd8fdcce",
    username: "George92",
    color: "rgb(139, 88, 255)",
    message: "green pepper",
    timestamp: 1726572666814,
  },
  {
    id: "069cc585185b7b5fb70a18e4",
    username: "Christine.Streich72",
    color: "rgb(255, 69, 0)",
    message:
      "A slow-roasted Warbling Vireo with a zesty, tangy exterior. Stuffed with cherry and covered in honeydew melon sauce. Sides with onion puree and wild pumpkin.",
    timestamp: 1726572666916,
  },
  {
    id: "bd4eef3c11d462dfa3e9f772",
    username: "Derek.Stokes42",
    color: "rgb(139, 88, 255)",
    message: "Irish",
    timestamp: 1726572667010,
  },
  {
    id: "ddc176f2dfd6a01abf2f5caf",
    username: "Oran.Reichel",
    color: "rgb(0, 187, 204)",
    message: "kangaroo",
    timestamp: 1726572667116,
  },
  {
    id: "d4dd6348ffc9decbb22efebd",
    username: "Lee.Kling85",
    color: "rgb(255, 105, 180)",
    message: "sumac",
    timestamp: 1726572667210,
  },
  {
    id: "ac9e2bb1b571f000253f12a7",
    username: "Veronica_Zieme",
    color: "rgb(255, 69, 0)",
    message: "Zanzibari",
    timestamp: 1726572667310,
  },
  {
    id: "1de97ac688d2d94512cf20fc",
    username: "Eliezer_Renner46",
    color: "rgb(255, 0, 0)",
    message:
      "A slow-roasted Green Heron with a smoky, smoky exterior. Stuffed with plum and covered in mango sauce. Sides with potatoes puree and wild kale.",
    timestamp: 1726572667410,
  },
  {
    id: "a23a26d0b86f010cfaec49ef",
    username: "Telly.Kshlerin",
    color: "rgb(139, 88, 255)",
    message: "coriander",
    timestamp: 1726572667510,
  },
  {
    id: "b3dbb63dc5c75dd7cb281fe4",
    username: "Reynold68",
    color: "rgb(139, 88, 255)",
    message: "Hummus",
    timestamp: 1726572667662,
  },
  {
    id: "f196aab43abab98536b6581b",
    username: "Woodrow_OConner",
    color: "rgb(255, 0, 0)",
    message: "sumac",
    timestamp: 1726572667713,
  },
  {
    id: "a2a190d0e1efeebdc6ef85e8",
    username: "Freddie_Gottlieb",
    color: "rgb(255, 0, 0)",
    message:
      "Juicy crocodile, grilled to your liking and drizzled with a bold tagine sauce, served alongside roasted peas.",
    timestamp: 1726572667812,
  },
  {
    id: "3b2f08ef1ab2af4e223d2ec9",
    username: "Makenzie_Rau",
    color: "rgb(255, 69, 0)",
    message: "Keralite",
    timestamp: 1726572667923,
  },
  {
    id: "1bcadbaed20fb19cada3ba5f",
    username: "Arianna.Swaniawski83",
    color: "rgb(255, 69, 0)",
    message: "A simple jarrahdale pumpkin pie. No fancy stuff. Just pie.",
    timestamp: 1726572668010,
  },
  {
    id: "0655e5ea99cb4e9e1955d0d7",
    username: "Noelia_Kulas85",
    color: "rgb(139, 88, 255)",
    message: "Incaberry And Cantaloupe Tart",
    timestamp: 1726572668126,
  },
  {
    id: "dafbfaea682e36fd7dd59c40",
    username: "Kacie_Labadie11",
    color: "rgb(255, 105, 180)",
    message: "duck",
    timestamp: 1726572668210,
  },
]
