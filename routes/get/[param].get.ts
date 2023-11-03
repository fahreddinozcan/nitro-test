import {Redis} from '@upstash/redis/nodejs'

export default eventHandler(async (event) => {
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })

    try{
        const { param } = event.context.params

        const res = await redis.get(param)
        return { res }
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
})
