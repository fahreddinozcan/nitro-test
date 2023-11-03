import {Redis} from '@upstash/redis/nodejs'

export default eventHandler(async (event) => {
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })

    const { key, value } = event.context.params;

    try{
        const res = await redis.set(key, value)
        return { res }
    }catch(error){
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }

})
