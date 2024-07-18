import type { IChannelsData, IFollowChannelsData } from "@/types"

export const followedChannels: { channels: IFollowChannelsData[] } = {
  channels: [
    {
      channelName: "Riot Games",
      slug: "riot-games",
      category: "League of Legend",
      isLive: true,
      view: 100_000,
      title: "T1 vs BLG | DAY 16 | MSI 2024",
      image: "/avatar/riot-games-avatar.png",
    },
    {
      channelName: "PirateSoftware",
      slug: "piratesoftware",
      category: "Once Human",
      isLive: true,
      view: 16_634,
      title:
        "Once Human 💜 Launch Day with Drops! 💛 @FerretSoftware !Heartbound !Website !TTS\n",
      image: "/avatar/pirate-software-avatar.png",
    },
    {
      channelName: "ewc_gold",
      slug: "ewc_gold",
      category: "League of Legend",
      isLive: true,
      view: 321_298,
      title: "EWC presenting LoL // Day 4 - Final",
      image: "/avatar/ewc-gold-avatar.png",
    },
    {
      channelName: "Kyedae",
      slug: "kyedae",
      category: "Valorant",
      isLive: true,
      view: 16_293,
      title: "SHORT STREAM (OW at 7pm) -ending at 8pm for a dinner",
      image: "/avatar/kyedae-avatar.png",
    },
    {
      channelName: "vei",
      slug: "vei",
      category: "Elden Ring",
      isLive: true,
      view: 35_210,
      title: "Elden Ring [Part 11] + GODDESS OF VICTORY: NIKKE",
      image: "/avatar/vei-avatar.png",
    },
    {
      channelName: "ironmouse",
      slug: "ironmouse",
      category: "Just Chatting",
      isLive: true,
      view: 19_123,
      title:
        "HANGING OUT YAPPING AND THEN GAMES. WHAT A DAY WE HAD YESTERDAY IM SO TIRED AHHH | #VSHOJO | !tts | !merch | !Youtube | !razer | !gamersupps",
      image: "/avatar/ironmouse-avatar.png",
    },
    {
      channelName: "Jynxzi",
      slug: "jynxzi",
      category: "Tom Clancy's Rainbow Six Siege",
      isLive: true,
      view: 78_012,
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
      view: 2_012,
      title:
        "UL31 🏮 200 HOURS PLAYED IN CBTS AMA !YT Gift 2 Subs for Rewards IN-Game ✦ 5 star selector sent tomorrow 「EN/中文」!WutheringWaves #ad",
      image: "/avatar/sweetily-avatar.png",
    },
    {
      channelName: "Thầy Giáo Ba",
      slug: "thay-giao-ba",
      category: "League of Legend",
      isLive: true,
      view: 8_856,
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
      view: 163_120,
      title:
        "📕LIVE📕CLICK📕HERE📕REACT📕VIDEOS📕GAMEPLAY📕#1 AT EVERYTHING📕POGCHAMPION📕",
      image: "/avatar/xqc-avatar.jpeg",
    },
    {
      channelName: "Kei",
      slug: "kei",
      category: "League of Legend",
      isLive: true,
      view: 10_234,
      title: "ROAD TO PLASTIC!!! ROAD TO IRON!!!",
      image: "/avatar/kei-avatar.png",
    },
    {
      channelName: "Kai Cenat",
      slug: "kai-cenat",
      category: "Elden Ring",
      isLive: true,
      view: 90_245,
      title:
        "⚔️100+ HR STREAM⚔️ELDEN RING⚔️CLICK HERE⚔️GAMER⚔️BIGGEST DWARF⚔️ELITE⚔️PRAY 4 ME⚔️",
      image: "/avatar/kai-cenat-avatar.png",
    },
    {
      channelName: "Tenz",
      slug: "tenz",
      category: "Valorant",
      isLive: true,
      view: 5_999,
      title: "feeling a little sick today",
      image: "/avatar/tenz-avatar.png",
    },
    {
      channelName: "Misanthrope",
      slug: "misanthrope",
      category: "Valorant",
      isLive: true,
      view: 9_283,
      title: "ROAD TO PLASTIC!!! ROAD TO IRON!!!",
      image: "/avatar/misanthrope-avatar.png",
    },
    {
      channelName: "CDawgVA",
      slug: "cdawgva",
      category: "IRL",
      isLive: true,
      view: 10_906,
      title: "I Rented an RV for 5 Days and Toured Japan",
      image: "/avatar/cdawgva-avatar.png",
    },
  ],
}

export const categoryData = {
  categories: [
    {
      title: "Valorant",
      currentTotalView: 60_500,
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
      currentTotalView: 213_130,
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
      currentTotalView: 109_251,
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
      currentTotalView: 22_137,
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
      currentTotalView: 97_600,
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
      currentTotalView: 33_728,
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
      currentTotalView: 7_150,
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
      currentTotalView: 7_721,
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
      currentTotalView: 15_420,
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
      currentTotalView: 4_132,
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
      currentTotalView: 111_000,
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
      currentTotalView: 79_100,
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
      currentTotalView: 54_000,
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
      currentTotalView: 53_400,
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
      currentTotalView: 49_900,
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
      currentTotalView: 47_900,
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
      currentTotalView: 40_800,
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
      currentTotalView: 37_800,
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
      currentTotalView: 11_400,
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
      currentTotalView: 10_800,
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
      totalView: 16_257,
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
      totalView: 1_700,
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
      totalView: 8_600,
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
      totalView: 1_900,
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
      totalView: 1_700,
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
      totalView: 4_412,
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
      totalView: 3_400,
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
      totalView: 4_600,
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
      totalView: 4_300,
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
      totalView: 53_000,
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
      totalView: 21_000,
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
      totalView: 6_600,
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

export const chatMessages = [
  {
    message:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    username: "Marie Curie",
    color: "rgb(0, 187, 204)",
  },
  {
    message:
      "All matter originates and exists only by virtue of a force... We must assume behind this force the existence of a conscious and intelligent Mind. This Mind is the matrix of all matter.",
    username: "Max Planck",
    color: "rgb(255, 69, 0)",
  },
  {
    message:
      "If I have seen further it is by standing on the shoulders of Giants.",
    username: "Issac Newton",
    color: "rgb(255, 105, 180)",
  },
  {
    message:
      "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
    username: "Albert Einstein",
    color: "rgb(255, 0, 0)",
  },
  {
    message:
      "Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.",
    username: "Nikola Tesla",
    color: "rgb(139, 88, 255)",
  },
  {
    message:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    username: "Marie Curie",
    color: "rgb(0, 187, 204)",
  },
  {
    message:
      "All matter originates and exists only by virtue of a force... We must assume behind this force the existence of a conscious and intelligent Mind. This Mind is the matrix of all matter.",
    username: "Max Planck",
    color: "rgb(255, 69, 0)",
  },
  {
    message:
      "If I have seen further it is by standing on the shoulders of Giants.",
    username: "Issac Newton",
    color: "rgb(255, 105, 180)",
  },
  {
    message:
      "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
    username: "Albert Einstein",
    color: "rgb(255, 0, 0)",
  },
  {
    message:
      "Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.",
    username: "Nikola Tesla",
    color: "rgb(139, 88, 255)",
  },
  {
    message:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    username: "Marie Curie",
    color: "rgb(0, 187, 204)",
  },
  {
    message:
      "All matter originates and exists only by virtue of a force... We must assume behind this force the existence of a conscious and intelligent Mind. This Mind is the matrix of all matter.",
    username: "Max Planck",
    color: "rgb(255, 69, 0)",
  },
  {
    message:
      "If I have seen further it is by standing on the shoulders of Giants.",
    username: "Issac Newton",
    color: "rgb(255, 105, 180)",
  },
  {
    message:
      "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
    username: "Albert Einstein",
    color: "rgb(255, 0, 0)",
  },
  {
    message:
      "Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.",
    username: "Nikola Tesla",
    color: "rgb(139, 88, 255)",
  },
  {
    message:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    username: "Marie Curie",
    color: "rgb(0, 187, 204)",
  },
  {
    message:
      "All matter originates and exists only by virtue of a force... We must assume behind this force the existence of a conscious and intelligent Mind. This Mind is the matrix of all matter.",
    username: "Max Planck",
    color: "rgb(255, 69, 0)",
  },
  {
    message:
      "If I have seen further it is by standing on the shoulders of Giants.",
    username: "Issac Newton",
    color: "rgb(255, 105, 180)",
  },
  {
    message:
      "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
    username: "Albert Einstein",
    color: "rgb(255, 0, 0)",
  },
  {
    message:
      "Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.",
    username: "Nikola Tesla",
    color: "rgb(139, 88, 255)",
  },
]
