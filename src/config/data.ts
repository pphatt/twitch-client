import type { IChannelsData, IFollowChannelsData } from "@/types"

export const followedChannels: { channels: IFollowChannelsData[] } = {
  channels: [
    {
      channelName: "Riot Games",
      category: "League of Legend",
      isLive: true,
      view: 100_000,
      title: "T1 vs BLG | DAY 16 | MSI 2024",
      image: "/avatar/riot-games-avatar.png",
    },
    {
      channelName: "Thầy Giáo Ba",
      category: "League of Legend",
      isLive: true,
      view: 8_856,
      title: "T1 vs BLG | DAY 16 | MSI 2024",
      image: "/avatar/thay-giao-ba-avatar.png",
    },
    {
      channelName: "ironmouse",
      category: "Fallout: New Vegas",
      isLive: true,
      view: 9_283,
      title:
        "FRIDAY!!! GAMES PLAY ME BUY MY CUP OK THANK| !angel | !concert | !devil | !rodent | #VSHOJO | !tts | !merch | !YouTube | !razer |!gamersupps",
      image: "/avatar/ironmouse-avatar.png",
    },
    {
      channelName: "Jynxzi",
      category: "Tom Clancy's Rainbow Six Siege",
      isLive: true,
      view: 78_012,
      title: "I said huh",
      image: "/avatar/jynxzi-avatar.png",
    },
    {
      channelName: "xull",
      isLive: false,
      image: "/avatar/xull-avatar.png",
    },
    {
      channelName: "Sweetily",
      category: "Wuthering Waves",
      isLive: true,
      view: 2_012,
      title:
        "UL31 🏮 200 HOURS PLAYED IN CBTS AMA !YT Gift 2 Subs for Rewards IN-Game ✦ 5 star selector sent tomorrow 「EN/中文」!WutheringWaves #ad",
      image: "/avatar/sweetily-avatar.png",
    },
    {
      channelName: "喬希啊 (josie5297)",
      isLive: false,
      image: "/avatar/josie5297-avatar.png",
    },
  ],
}

export const recommendedLiveChannelsData: { channels: IChannelsData[] } = {
  channels: [
    {
      channelName: "xQc",
      category: "Just Chatting",
      isLive: true,
      view: 163_120,
      title:
        "📕LIVE📕CLICK📕HERE📕REACT📕VIDEOS📕GAMEPLAY📕#1 AT EVERYTHING📕POGCHAMPION📕",
      image: "/avatar/xqc-avatar.jpeg",
    },
    {
      channelName: "Kei",
      category: "League of Legend",
      isLive: true,
      view: 10_234,
      title: "ROAD TO PLASTIC!!! ROAD TO IRON!!!",
      image: "/avatar/kei-avatar.png",
    },
    {
      channelName: "Kai Cenat",
      category: "Elden Ring",
      isLive: true,
      view: 90_245,
      title:
        "⚔️100+ HR STREAM⚔️ELDEN RING⚔️CLICK HERE⚔️GAMER⚔️BIGGEST DWARF⚔️ELITE⚔️PRAY 4 ME⚔️",
      image: "/avatar/kai-cenat-avatar.png",
    },
    {
      channelName: "Tenz",
      category: "Valorant",
      isLive: true,
      view: 5_999,
      title: "feeling a little sick today",
      image: "/avatar/tenz-avatar.png",
    },
    {
      channelName: "Misanthrope",
      category: "Valorant",
      isLive: true,
      view: 9_283,
      title: "ROAD TO PLASTIC!!! ROAD TO IRON!!!",
      image: "/avatar/misanthrope-avatar.png",
    },
    {
      channelName: "CDawgVA",
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

export const liveChannels = {
  channels: [
    {
      channel: {
        name: "xull",
        image: "/avatar/xull-avatar.png",
      },
      title: "idc ♡",
      totalView: 1_700,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-xull-preview.jpg",
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
      },
      title: "valorant then variety",
      totalView: 8_600,
      isLive: true,
      category: "HELLDIVERS 2",
      livePreviewImage: "/recommend-live-channel/live-tenz-preview.jpg",
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
      },
      title:
        "🟥SAGE MAIN RETURNS🟥T1 GRIM🟥BEST VALORANT EXPERIENCE🟥DERUSTING GETTING BETTER🟥HOPEFULLY WE CAN STILL GAME AT A HIGHT LEVEL🟥",
      totalView: 1_900,
      isLive: true,
      category: "Valorant",
      livePreviewImage: "/recommend-live-channel/live-grimm-preview.jpg",
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
      },
      title: "Đồng hành cùng MSI !!",
      totalView: 1_700,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-thay-giao-ba-preview.jpg",
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
      },
      title: "낭만을 찾아서,,",
      totalView: 4_412,
      isLive: true,
      category: "Just Chatting",
      livePreviewImage: "/recommend-live-channel/live-woohankyung-preview.jpg",
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
      },
      title: "欸黑:D  !SNS",
      totalView: 3_400,
      isLive: true,
      category: "Just Chatting",
      livePreviewImage: "/recommend-live-channel/live-josie5297-preview.jpg",
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
      },
      title:
        "❗❗EDUCATION?!  POSITIVE VIBES ❗ ❗ !YOUTUBE !CLIPS !DISCORD !PRIME !TIERLIST !DUO",
      totalView: 4_600,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-jankos-preview.jpg",
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
      },
      title: "euw soloqqq !patreon !discord !nordvpn",
      totalView: 4_300,
      isLive: true,
      category: "League of Legend",
      livePreviewImage: "/recommend-live-channel/live-jankos-preview.jpg",
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
      },
      title:
        "ICJ ISSUES CEASEFIRE ORDER, ISRAEL RESPONDS W/ MORE FIRE -LOUISIANA RECLASSIFIES ABORTION DRUG - BATMAN FINALE LATER!",
      totalView: 53_000,
      isLive: true,
      category: "Just Chatting",
      livePreviewImage: "/recommend-live-channel/live-hasanabi-preview.jpg",
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
        image: "/avatar/dota-2-avatar.jpeg",
      },
      title: "LIVE: BetBoom Team vs Xtreme Gaming - DreamLeague S23 - LB3",
      totalView: 21_000,
      isLive: true,
      category: "Dota 2",
      livePreviewImage: "/recommend-live-channel/live-dota-2-preview.jpg",
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
        image: "/avatar/mago2dgod-avatar.jpeg",
      },
      title: "【SF6】寝て起きたらゴウキが上手くなっていた件について",
      totalView: 6_600,
      isLive: true,
      category: "Street Fighter 6",
      livePreviewImage: "/recommend-live-channel/live-mago2dgod-preview.jpg",
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
