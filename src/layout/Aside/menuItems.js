import { channels } from "../../channels"
const menuItems=[
    {
        id:"performance",
        title:"Performance",
        children:[
            {
                id:channels.RAM_STATS,
                title:"Memory",
            }, 
            {
                id:channels.PROCESSOR_STATS,
                title:"Processor",
            }, 
            {
                id:channels.HARD_DISK_STATS,
                title:"Harddisk",
            }, 
        ]
    },
    {
        id:"adobe_reader",
        title:"Adobe Reader",
        children:[
            {
                id:channels.CLEAR_ADOBE_CACHE,
                title:"Cache",
            }, 
            {
                id:channels.CLEAR_ADOBE_MOST_RECENT,
                title:"Most Recent Used",
            }, 
            {
                id:channels.CLEAR_ADOBE_TEMP,
                title:"Temperory Files",
            }, 
        ]
    },
    {
        id:"file_zilla",
        title:"File Zilla",
        children:[
            {
                id:channels.CLEAR_FILE_ZILLA_MOST_RECENT,
                title:"Most Recent Used",
            }
        ]
    },
    {
        id:"flash_player",
        title:"Flash Player",
        children:[
            {
                id:channels.CLEAR_FLASH_PLAYER_CACHE,
                title:"Cache",
            },
            {
                id:channels.CLEAR_FLASH_PLAYER_COOKIES,
                title:"Cookies",
            }
        ]
    },
    {
        id:"google_chrome",
        title:"Google Chrome",
        children:[
            {
                id:channels.CLEAR_GOOGLE_CHROME_CACHE,
                title:"Cache",
            },
            {
                id:channels.CLEAR_GOOGLE_CHROME_URL_HISTORY,
                title:"URL History",
            }
        ]
    },
]
export default menuItems