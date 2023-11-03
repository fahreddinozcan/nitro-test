import {Redis} from '@upstash/redis/nodejs'

export default eventHandler(async () => {
    const resSet = await $fetch('/set/foo/far')
    const resGet = await $fetch('/get/foo')


    const data = {resSet, resGet}
    try{
        return new Response(JSON.stringify(data))
    }catch (error){
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
})

