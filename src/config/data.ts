import type { IChannelsData } from "@/types"

export const channelsData: { channels: IChannelsData[] } = {
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
      channelName: "xQc",
      category: "Just Chatting",
      isLive: true,
      view: 163_120,
      title:
        "📕LIVE📕CLICK📕HERE📕REACT📕VIDEOS📕GAMEPLAY📕#1 AT EVERYTHING📕POGCHAMPION📕",
      image: "/avatar/xqc-avatar.jpeg",
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
      channelName: "ironmouse",
      category: "Fallout: New Vegas",
      isLive: true,
      view: 9_283,
      title:
        "FRIDAY!!! GAMES PLAY ME BUY MY CUP OK THANK| !angel | !concert | !devil | !rodent | #VSHOJO | !tts | !merch | !YouTube | !razer |!gamersupps\n",
      image: "/avatar/ironmouse-avatar.png",
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
  ],
}
