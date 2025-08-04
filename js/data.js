// data.js - Centralized data management for the anime streaming platform

/**
 * Main data structure containing all anime information
 * In a real application, this would come from a backend API
 */
const animeData = {
    // Rankings data for different time periods
    rankings: {
        today: [
            { 
                title: "One Piece", 
                views: "145,580", 
                link: "/watch/one-piece-100",
                genre: ["action", "adventure"],
                year: 2023,
                status: "ongoing"
            },
            { 
                title: "Gachiakuta", 
                views: "122,156", 
                link: "/watch/gachiakuta-19785",
                genre: ["action", "drama"],
                year: 2023,
                status: "ongoing"
            },
            { 
                title: "Kaiju No. 8 Season 2", 
                views: "67,527", 
                link: "/watch/kaiju-no-8-season-2-19792",
                genre: ["action", "sci-fi"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Apocalypse Bringer Mynoghra", 
                views: "40,801", 
                link: "/watch/apocalypse-bringer-mynoghra-19772",
                genre: ["fantasy", "action"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "The Water Magician", 
                views: "37,425", 
                link: "/watch/the-water-magician-19770",
                genre: ["fantasy", "adventure"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Naruto: Shippuden", 
                views: "35,153", 
                link: "/watch/naruto-shippuden-355",
                genre: ["action", "adventure"],
                year: 2007,
                status: "completed"
            },
            { 
                title: "Sakamoto Days Part 2", 
                views: "34,141", 
                link: "/watch/sakamoto-days-part-2-19787",
                genre: ["action", "comedy"],
                year: 2025,
                status: "ongoing"
            },
            { 
                title: "Solo Leveling Season 2", 
                views: "32,876", 
                link: "/watch/solo-leveling-season-2",
                genre: ["action", "fantasy"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Jujutsu Kaisen", 
                views: "31,542", 
                link: "/watch/jujutsu-kaisen",
                genre: ["action", "supernatural"],
                year: 2020,
                status: "ongoing"
            },
            { 
                title: "Dan Da Dan Season 2", 
                views: "30,479", 
                link: "/watch/dan-da-dan-season-2-19793",
                genre: ["action", "comedy", "supernatural"],
                year: 2024,
                status: "ongoing"
            }
        ],
        
        week: [
            { 
                title: "One Piece", 
                views: "1,066,725", 
                link: "/watch/one-piece-100",
                genre: ["action", "adventure"],
                year: 2023,
                status: "ongoing"
            },
            { 
                title: "Gachiakuta", 
                views: "618,456", 
                link: "/watch/gachiakuta-19785",
                genre: ["action", "drama"],
                year: 2023,
                status: "ongoing"
            },
            { 
                title: "Kaiju No. 8 Season 2", 
                views: "573,185", 
                link: "/watch/kaiju-no-8-season-2-19792",
                genre: ["action", "sci-fi"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "The Water Magician", 
                views: "465,426", 
                link: "/watch/the-water-magician-19770",
                genre: ["fantasy", "adventure"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Attack on Titan", 
                views: "412,789", 
                link: "/watch/attack-on-titan",
                genre: ["action", "drama"],
                year: 2013,
                status: "completed"
            },
            { 
                title: "Dan Da Dan Season 2", 
                views: "377,678", 
                link: "/watch/dan-da-dan-season-2-19793",
                genre: ["action", "comedy", "supernatural"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Naruto: Shippuden", 
                views: "334,701", 
                link: "/watch/naruto-shippuden-355",
                genre: ["action", "adventure"],
                year: 2007,
                status: "completed"
            },
            { 
                title: "Demon Slayer", 
                views: "298,543", 
                link: "/watch/demon-slayer",
                genre: ["action", "supernatural"],
                year: 2019,
                status: "ongoing"
            },
            { 
                title: "Sakamoto Days Part 2", 
                views: "258,730", 
                link: "/watch/sakamoto-days-part-2-19787",
                genre: ["action", "comedy"],
                year: 2025,
                status: "ongoing"
            },
            { 
                title: "Clevatess", 
                views: "221,458", 
                link: "/watch/clevatess-19760",
                genre: ["fantasy", "action"],
                year: 2024,
                status: "ongoing"
            }
        ],
        
        month: [
            { 
                title: "One Piece", 
                views: "4,122,409", 
                link: "/watch/one-piece-100",
                genre: ["action", "adventure"],
                year: 2023,
                status: "ongoing"
            },
            { 
                title: "Gachiakuta", 
                views: "1,772,971", 
                link: "/watch/gachiakuta-19785",
                genre: ["action", "drama"],
                year: 2023,
                status: "ongoing"
            },
            { 
                title: "The Water Magician", 
                views: "1,463,391", 
                link: "/watch/the-water-magician-19770",
                genre: ["fantasy", "adventure"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Dan Da Dan Season 2", 
                views: "1,397,776", 
                link: "/watch/dan-da-dan-season-2-19793",
                genre: ["action", "comedy", "supernatural"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Naruto: Shippuden", 
                views: "1,358,607", 
                link: "/watch/naruto-shippuden-355",
                genre: ["action", "adventure"],
                year: 2007,
                status: "completed"
            },
            { 
                title: "My Hero Academia", 
                views: "1,298,456", 
                link: "/watch/my-hero-academia",
                genre: ["action", "superhero"],
                year: 2016,
                status: "ongoing"
            },
            { 
                title: "Kaiju No. 8 Season 2", 
                views: "1,267,379", 
                link: "/watch/kaiju-no-8-season-2-19792",
                genre: ["action", "sci-fi"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Lord of Mysteries", 
                views: "907,814", 
                link: "/watch/lord-of-mysteries-19802",
                genre: ["mystery", "supernatural"],
                year: 2024,
                status: "ongoing"
            },
            { 
                title: "Black Clover", 
                views: "883,237", 
                link: "/watch/black-clover-2404",
                genre: ["action", "magic"],
                year: 2017,
                status: "completed"
            },
            { 
                title: "Jujutsu Kaisen", 
                views: "856,123", 
                link: "/watch/jujutsu-kaisen",
                genre: ["action", "supernatural"],
                year: 2020,
                status: "ongoing"
            }
        ]
    },
    
    // Recently added anime with detailed information
    recentlyAdded: [
        { 
            title: "Yuu Gi Ou: Go Rush!!", 
            year: "2022", 
            episodes: "151/151", 
            type: "
