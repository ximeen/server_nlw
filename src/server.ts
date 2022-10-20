import express from "express";
import cors from 'cors'

import {PrismaClient} from "@prisma/client"
import {ConvertHoursInMinutes} from "./utils/convert-hours-in-minutes"
import { ConvertMinutesForHours } from "./utils/convert-minutes-to-hours";

const app = express();
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get("/games", async (req, res) => {
    const games = await prisma.game.findMany({
        include:{
            _count:{
                select:{
                    ads: true
                }
            }
        }
    })

    return res.json(games)
})

app.post("/games/:id/ads", async (request, response) => {
    const gameId = request.params.id
    const body:any = request.body;

    const ad = await prisma.ad.create({
        data:{
            gameId,
            name: body.name,
            yarsPlaying: body.yarsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStar: ConvertHoursInMinutes(body.hourStar),
            hourEnd: ConvertHoursInMinutes(body.hourEnd),
            useVoiceChat: body.useVoiceChat
        }
    })
    return response.status(201).json(ad)
})

app.get("/games/:id/ads",async (request, response)=>{
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select:{
            id: true,
            name: true,
            useVoiceChat: true,
            yarsPlaying: true,
            hourEnd: true,
            hourStar: true,
            weekDays: true
        },

        where:{
            gameId,
        },
        orderBy:{
            createdAt: 'desc'
        }
    })

    return response.json(ads.map(ad =>{
        return{
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStar:ConvertMinutesForHours(ad.hourStar),
            hourEnd:ConvertMinutesForHours(ad.hourEnd),
        }
    }))
});

app.get("/ads/:id/discord", async(request, response)=>{
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select:{
            discord: true
        },
        where:{
            id: adId,

        }
    })

    return response.json({discord: ad.discord})
});
