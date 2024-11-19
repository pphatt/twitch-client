import { IngressClient, RoomServiceClient } from "livekit-server-sdk"

export const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
)

export const ingressClient = new IngressClient(process.env.LIVEKIT_API_URL!)

export const resetIngresses = async (hostIdentity: string) => {
  const ingresses = await ingressClient.listIngress({
    roomName: hostIdentity,
  })

  const rooms = await roomService.listRooms([hostIdentity])

  for (const room of rooms) {
    await roomService.deleteRoom(room.name)
  }

  for (const ingress of ingresses) {
    if (ingress.ingressId) {
      await ingressClient.deleteIngress(ingress.ingressId)
    }
  }
}
