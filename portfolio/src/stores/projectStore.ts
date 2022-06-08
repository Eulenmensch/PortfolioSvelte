import { readable, type Readable } from "svelte/store";

export const projectData: Readable<{ [index: string]: any }> = readable({
    internship: {
        videoId: '',
        title: 'Unnanounced AAA Game',
        titleFont: "'Inter', Arial, sans-serif",
        titleSize: '4rem',
        titleWeight: '900',
        genre: 'Turn-Based-Tactics / 4X',
        roles: 'Game Design Intern',
        pageLink: '/internship',
        externalLink: 'https://kingart-games.com/',
        externalButtonText: 'KING Art Games',
        backgroundImg: 'images/home/KingArtDesk.png',
        overlayColorHSLA: '157, 30%, 7%, 90%',
        innerText: [
            'As an intern at KING Art Games I worked on the combat and UX design of a pre-production project in direct and frequent communication with the Game Director and Lead Designer.',
            'This project is currently still under an NDA and will be updated when possible.'
        ],
        facts: {
            genre: '',
            engine: '',
            'team size': '',
            duration: '',
            role: ''
        },
        gameDescription: '',
        videoDescription: '',
        calloutText: ['']
    },
    hoversword: {
        videoId: 'HP-GeZLaELo',
        title: 'Hoversword',
        titleFont: "'KnifePrincess', Arial, sans-serif",
        titleSize: '4rem',
        titleWeight: '500',
        genre: 'Action-Adventure / Racing',
        roles: '3Cs / Gameplay / Programming / UX',
        pageLink: '/hoversword',
        externalLink: 'https://eulenmensch.itch.io/hoversword',
        externalButtonText: 'itch.io',
        backgroundImg: 'images/home/HoverswordScreenshotJump.png',
        overlayColorHSLA: '218, 50%, 7%, 90%',
        innerText: [
            '‘Hoversword’ is the vertical slice to a 3rd person action adventure about high speeds, futuristic boardsports, and an underground dungeon-delving hoverboard scene.',
            'I worked on this project together with a game/level designer as well as three artists during my 3rd year of university.'
        ],
        facts: {
            genre: '',
            engine: '',
            'team size': '',
            duration: '',
            role: ''
        },
        gameDescription: '',
        videoDescription: '',
        calloutText: ['']
    },
    nvfps: {
        videoId: 'rMMEmDwaF6Y',
        title: 'Non-Violent FPS',
        titleFont: "'Bigboy', Arial, sans-serif",
        titleSize: '5rem',
        titleWeight: '500',
        subtitle: "(Bachelor's Thesis)",
        genre: 'FPS / Platformer / Wholesome',
        roles: 'Solo-Project',
        pageLink: '/nvfps',
        externalLink: 'https://eulenmensch.itch.io/nvfps',
        externalButtonText: 'itch.io',
        backgroundImg: 'images/home/nvfpsScreenshotGrapplers.png',
        overlayColorHSLA: '336, 40%, 16%, 0.9',
        innerText: [
            'A series of prototypes that explore non-violent shooting and the effect of system design as well as game feel on the perception of violence in FPS games.',
            "Created as a complimentary design project to my bachelor's thesis."
        ],
        facts: {
            genre: '',
            engine: '',
            'team size': '',
            duration: '',
            role: ''
        },
        gameDescription: '',
        videoDescription: '',
        calloutText: ['']
    },
    gush: {
        videoId: 'b61jFY8Ec0c',
        videoId2: 'G4pPEIvkAl0',
        title: 'GUSH',
        titleFont: "'CoreSansG', Arial, sans-serif",
        titleSize: '4.5rem',
        titleWeight: '500',
        subtitle: 'currently pink',
        genre: 'Physics-Sandbox / Waterslide',
        roles: 'Systems / Level Design / Prototyping',
        pageLink: '/gush',
        externalLink: 'https://gushthegame.itch.io/gush',
        externalButtonText: 'itch.io',
        backgroundImg: 'images/home/gushScreenshot.png',
        overlayColorHSLA: '13, 87%, 9%, 0.8',
        innerText: [
            'GUSH - currently pink is a sandboxy, physics based waterslide game where your only objective is to get a shiny cube into the jello-filled tank at the end of each level.'
        ],
        facts: {
            genre: 'Physics-Sandbox / Waterslide',
            engine: 'Unity 3D',
            'team size': '4',
            duration: '5 Months',
            role: 'Gameplay / Systems / UX / Level Design'
        },
        gameDescription: 'A sandboxy, physics based waterslide game where your only objective is to get a shiny cube into the jello-filled tank at the end of each level.',
        videoDescription: 'a playthrough of the level I designed for the game',
        calloutText: ['During the development of GUSH I was mainly responsible for designing and prototyping the game systems and UX.',
            'I prototyped the initial core mechanics and later explored different approaches to making interesting challenges and levels for the existing systems.']
    }
});