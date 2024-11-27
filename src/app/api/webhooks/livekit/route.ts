import { headers } from "next/headers"
import { LiveStream } from "@modules/core/presentation/endpoints/livestream/livestream.request"
import { WebhookReceiver } from "livekit-server-sdk"

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
)

export async function POST(request: Request) {
  const body = await request.text()
  const headerPayload = headers()
  const authorization = headerPayload.get("Authorization")

  if (!authorization) {
    return new Response("No authorization header", { status: 400 })
  }

  const event = receiver.receive(body, authorization)

  if (event.event === "ingress_started") {
    console.log("INGRESS ID")
    console.log(event.ingressInfo?.ingressId)

    console.log("PARTICIPANT COUNT")
    console.log(event.room?.maxParticipants)

    console.log(event)

    await LiveStream.setStreamStatus({
      userId: event.ingressInfo!.roomName!,
      isLive: true,
    })
  }

  if (event.event === "ingress_ended") {
    console.log(event)

    await LiveStream.setStreamStatus({
      userId: event.ingressInfo!.roomName!,
      isLive: false,
    })
  }

  if (event.event === "participant_joined") {
    console.log("participant_joined")
    console.log(event)
  }

  if (event.event === "participant_left") {
    console.log("participant_left")
    console.log(event)
  }

  return Response.json(
    {
      message: "API RUN",
    },
    {
      status: 200,
    }
  )
}
