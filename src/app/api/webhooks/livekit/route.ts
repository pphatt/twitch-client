import { headers } from "next/headers"
import { WebhookReceiver } from "livekit-server-sdk"
import {LiveStream} from "@modules/core/presentation/endpoints/livestream/livestream.request";

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
    // await db.stream.update({
    //   where: {
    //     ingressId: event.ingressInfo?.ingressId,
    //   },
    //   data: {
    //     isLive: true,
    //   },
    // });
  }

  if (event.event === "ingress_ended") {
    console.log("PARTICIPANT COUNT")
    console.log(event.room?.maxParticipants)
    // await db.stream.update({
    //   where: {
    //     ingressId: event.ingressInfo?.ingressId,
    //   },
    //   data: {
    //     isLive: false,
    //   },
    // });
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
