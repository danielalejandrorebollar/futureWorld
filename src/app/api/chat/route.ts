// import OpenAI from 'openai';
import { streamText, convertToModelMessages, type UIMessage } from "ai"
import { openai } from "@ai-sdk/openai"


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request){
    //Extract the 'messages' from the budy of the request
    const { messages, agent }: { messages: UIMessage[];agent?:string } = await req.json()

    const systemMessage = {
        role: "system",
        parts: [
            {
            type: "text",
            text: agent || "Eres un asistente útil",
            },
        ],
    } satisfies Omit<UIMessage, "id">

    //Ask OpenAI for a streaming chat completion given the prompt
    const result = await streamText({
        model: openai("gpt-4o"),
        messages: await convertToModelMessages([
            systemMessage,
            ...messages
        ]),
    });

    //Convert the response into a friendly text-stream
    // const stream = OpenAIStream(response);
    // //Respond with the stream
    // return new StreamingTextResponse(stream)
   return result.toUIMessageStreamResponse()

}