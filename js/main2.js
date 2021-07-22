$(window).bind('load', function() {
    AOS.init();
    // alert('hello world')
    var menu_open = false;

    get_init_width();

    resize_all();

    toggle_menu_bar();


})

// $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        } else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

function get_init_width() {
    var init_w = $(window).width();
    // console.log(init_w)
    if (init_w < 960) {
        $('.card').removeAttr('data-aos-delay')
    }

}

function resize_all() {
    // $('style').text('.timeline::before{height:'+($('.timeline').height()+100)+'px !important;}')
    $(window).resize(function() {

        // get_timeline_h()

        var w = $(window).width();
        if (w >= 960) {
            menu_open = false;
            $('.menu-btn').removeClass('open')
            $('.menu_list').hide()
            $('nav').css('height', 'unset')

            var i = 0;
            $('.card').each(function() {
                $(this).attr('data-aos-delay', i)
                i += 250

            })
        } else {
            $('.card').removeAttr('data-aos-delay')
        }
    });
}

function toggle_menu_bar(menu_open) {
    // let menu_open = false;
    $('.menu-btn').click(function() {
        if (!menu_open) {
            $(this).addClass('open');
            menu_open = true;
            $('nav').animate({ height: '100vh' });
            $('.menu_list').fadeIn(200)
        } else {
            $('nav').animate({ height: '60px' });
            $(this).removeClass('open')
            $('.menu_list').fadeOut(200)
            menu_open = false;
        }
    })
}

//video

// myVid=document.getElementById("video1");
// myVid.playbackRate=0.5;

//plotly.js

var trace1 = {
    x: ['~2009', '2010~2014', '2015', '2016', '2017', '2018', '2019'],
    y: [617, 2770, 2597, 4361, 6357, 8160, 10924],
    marker: {
        color: ['rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,4,4,1)']
    },
    type: 'bar'
};

var data = [trace1];
var config = { responsive: true }
var layout = {
    // title: '開發遊戲款數',
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    // xaxis: {'type': 'category',
    // 			color: 'white'},
    xaxis: {
        'type': 'category',
        color: 'white',
        title: {
            text: '※ 2019年僅統計至5月，圖表中的數量為推估值。',
            font: {
                family: 'Courier New, monospace',
                size: 12,
                color: '#fff'
            }
        },
    },
    yaxis: { color: 'white' }
};

Plotly.newPlot('myDiv', data, layout, config);

// inde game
// 非
var trace1 = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [179, 162, 187, 235, 884, 1057, 1782, 2411, 2649, 3610],

    mode: 'lines+markers',
    connectgaps: true,
    name: '非獨立遊戲',
    line: {
        color: '#00bcd4',
        width: 2
    }
};

var trace2 = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [59, 77, 133, 183, 671, 1540, 2579, 3946, 5511, 7314],

    mode: 'lines+markers',
    connectgaps: true,
    name: '獨立遊戲',
    line: {
        color: 'orange',
        width: 4
    }
};

var data = [trace1, trace2];
var config = { responsive: true }
var layout = {
    // showlegend: false,
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    xaxis: {
        showgrid: false,
        color: 'white',
        type: 'category',
    },
    yaxis: {
        // showgrid: false,
        color: 'white'
    },
    showlegend: false
};

Plotly.newPlot('inde_graph', data, layout, config);

//playing time plot
var labels = ["Game types", 'Action', 'Indie', 'Adventure', 'Early Access', 'Casual', 'Strategy',
    'Free to Play', 'RPG', 'Simulation', 'Racing', 'Warp Rider', 'Counter-Strike', 'Tank Destroyer', 'Solarix',
    'Counter-Strike: Source', 'MONSTER HUNTER: WORLD',
    'Crispy Chicken', 'Call of Duty®: Infinite Warfare',
    'Nioh: Complete Edition / 仁王 Complete Edition', 'Toukiden 2',
    'Call of Duty®: Black Ops', 'Turok', 'Sekiro™: Shadows Die Twice',
    'Tomb Raider VI: The Angel of Darkness', 'Homefront',
    'Darksiders III', 'Resident Evil 6 / Biohazard 6',
    'Batman: Arkham City - Game of the Year Edition',
    'Toukiden: Kiwami', 'Floppy Heroes', 'The Price of Freedom',
    'Wordlase', 'Idling to Rule the Gods', 'Pictopix',
    'Hooligan Vasja', 'The Binding of Isaac: Rebirth',
    'The Madness of Little Emma', '1,000 Heads Among the Trees',
    'Asteria', 'Lazy Galaxy', 'Once in Yaissor', "Charlie's Adventure",
    'Windforge', 'Airscape - The Fall of Gravity', 'Super LOH',
    'Forget Me Not: My Organic Garden', 'Dungelot: Shattered Lands',
    'Unexplored', 'Monster Slayers', 'FORCED SHOWDOWN',
    "Heroine's Quest: The Herald of Ragnarok", 'The Slug', 'Unrest',
    'Thronebreaker: The Witcher Tales',
    "What's under your blanket 2 !?", 'Tiny Rails',
    'OKAMI HD / 大神 絶景版', 'SteamWorld Dig 2',
    'Nancy Drew®: Ghost of Thornton Hall', 'Syberia 3',
    'Portal Knights', "Broken Sword: Director's Cut", 'Home Behind',
    'Renowned Explorers: International Society', 'Hob', 'Q.U.B.E. 2',
    'Quern - Undying Thoughts', 'Rise of the Tomb Raider™', 'The Dig®',
    'Thimbleweed Park™', 'Medieval Engineers', 'INTERSHELTER',
    'Factorio', '东方大战争 ~ Touhou Big Big Battle',
    'Idle Champions of the Forgotten Realms', 'Survarium',
    '探灵笔记-1v5(Notes of Soul)', 'Russian Fishing 4', 'Startup Company',
    'Hurtworld', 'Idle Adventure', '了不起的修仙模拟器', '灵魂筹码 Soul at Stake',
    'Mist Survival', 'Avorion', 'Deep Rock Galactic', 'Stationeers',
    'Squad', 'StarMade', '7 Days to Die', 'The Moon Night',
    '12 Labours of Hercules V: Kids of Hellas (Platinum Edition)',
    'Picross Touch', 'Caveman World: Mountains of Unga Boonga',
    'Draw Puzzle 画之谜', 'Cube Runner',
    'Delicious! Pretty Girls Mahjong Solitaire',
    'Pixel Puzzles 2: RADical ROACH',
    'Clue/Cluedo: The Classic Mystery Game', 'Neon Prism', 'Chime',
    'LUMINES REMASTERED', 'Adventure of a Lifetime',
    'SnakEscape [REMASTERED]', 'GemBreak', 'InfiniPicross',
    'Christmas Adventure: Candy Storm', 'Age of Castles: Warlords',
    'LOR - League of Runners', 'Fatal Twelve',
    'Trivia Vault: Science & History Trivia', 'Hearts of Iron IV',
    'Unity of Command: Stalingrad Campaign',
    'Rebuild 3: Gangs of Deadsville',
    'Heroes of Might & Magic V: Tribes of the East',
    'Total War™: ROME II - Emperor Edition',
    'Europa Universalis: Rome - Gold Edition ',
    'Total War: WARHAMMER II', 'Men of War: Assault Squad 2',
    'Total War: WARHAMMER', 'Sid Meier’s Civilization® VI',
    'Total War: EMPIRE – Definitive Edition', 'Infested Planet',
    'Bloons TD 6', 'Onmyoji', 'Call to Arms',
    'Disciples III - Renaissance Steam Special Edition',
    'Surviving Mars', 'UFO: Afterlight',
    'Rise of Nations: Extended Edition', 'The Abbey of Crime Extensum',
    'The Banner Saga: Factions',
    'The Secret of Tremendous Corporation', 'Dota 2', 'MANDAGON',
    'Dr. Langeskov, The Tiger, and The Terribly Cursed Emerald: A Whirlwind Heist',
    'Duelyst', 'Boring Man - Online Tactical Stickman Combat',
    'Champions Online', 'You Have to Win the Game', 'Iron Snout',
    'Shonen Idle Z', 'Team Fortress 2', 'Floating Point',
    'Double Action: Boogaloo', 'Warframe', 'VEGA Conflict',
    'Path of Exile', 'Dream Of Mirror Online', 'Star Conflict',
    'Shroud of the Avatar: Forsaken Virtues', 'Fantasy Grounds',
    'Darkstone', 'The Desolate Hope', 'Vulture for NetHack',
    'The Elder Scrolls® Online',
    'Tales of Vesperia: Definitive Edition', 'Warhammer Quest',
    '侠客风云传(Tale of Wuxia)', 'DARK SOULS™ II: Scholar of the First Sin',
    'Divinity: Original Sin 2 - Definitive Edition', '古剑奇谭(GuJian)',
    'SpellForce - Platinum Edition', 'Stardew Valley',
    "The Bard's Tale IV: Barrows Deep",
    'LIGHTNING RETURNS™: FINAL FANTASY® XIII', 'Dragon Cliff',
    "Divinity II: Developer's Cut", 'DARK SOULS™ II',
    'Pillars of Eternity II: Deadfire', 'X-Plane 11', '懒人修仙传',
    'Arma 3', 'Aerofly FS 2 Flight Simulator',
    'Arma 2: Operation Arrowhead', 'OMSI 2: Steam Edition',
    'Euro Truck Simulator 2', 'The Sims™ 3', 'Farming Simulator 17',
    'Football Manager 2019', 'RollerCoaster Tycoon World™',
    'DCS World Steam Edition', 'Autobahn Police Simulator',
    'American Truck Simulator', 'PC Building Simulator',
    'Spintires®: The Original Game', 'SPORE™ Galactic Adventures',
    'Farming Simulator 15', 'IL-2 Sturmovik: 1946',
    'Two Point Hospital', 'Project CARS - Pagani Edition',
    'Trackmania® Turbo', 'TrackMania² Stadium',
    'Trackmania United Forever Star Edition', 'F1 2018',
    'TrackMania² Canyon', 'Assetto Corsa', 'The Crew™ 2', 'RACE 07',
    'F1 2012™', 'F1 2014', 'Street Legal Racing: Redline v2.3.1',
    'F1 2016', 'Test Drive: Ferrari Racing Legends', 'SkyDrift',
    'Trials® Rising', 'F1™ 2017', 'MX vs. ATV Reflex', 'Xpand Rally',
    'Need for Speed Undercover'
]
var parents = ["", "Game types", "Game types", "Game types", "Game types", "Game types", "Game types", "Game types", "Game types", "Game types", "Game types", 'Action', 'Action', 'Action', 'Action', 'Action', 'Action',
    'Action', 'Action', 'Action', 'Action', 'Action', 'Action',
    'Action', 'Action', 'Action', 'Action', 'Action', 'Action',
    'Action', 'Action', 'Indie', 'Indie', 'Indie', 'Indie', 'Indie',
    'Indie', 'Indie', 'Indie', 'Indie', 'Indie', 'Indie', 'Indie',
    'Indie', 'Indie', 'Indie', 'Indie', 'Indie', 'Indie', 'Indie',
    'Indie', 'Adventure', 'Adventure', 'Adventure', 'Adventure',
    'Adventure', 'Adventure', 'Adventure', 'Adventure', 'Adventure',
    'Adventure', 'Adventure', 'Adventure', 'Adventure', 'Adventure',
    'Adventure', 'Adventure', 'Adventure', 'Adventure', 'Adventure',
    'Adventure', 'Early Access', 'Early Access', 'Early Access',
    'Early Access', 'Early Access', 'Early Access', 'Early Access',
    'Early Access', 'Early Access', 'Early Access', 'Early Access',
    'Early Access', 'Early Access', 'Early Access', 'Early Access',
    'Early Access', 'Early Access', 'Early Access', 'Early Access',
    'Early Access', 'Casual', 'Casual', 'Casual', 'Casual', 'Casual',
    'Casual', 'Casual', 'Casual', 'Casual', 'Casual', 'Casual',
    'Casual', 'Casual', 'Casual', 'Casual', 'Casual', 'Casual',
    'Casual', 'Casual', 'Casual', 'Strategy', 'Strategy', 'Strategy',
    'Strategy', 'Strategy', 'Strategy', 'Strategy', 'Strategy',
    'Strategy', 'Strategy', 'Strategy', 'Strategy', 'Strategy',
    'Strategy', 'Strategy', 'Strategy', 'Strategy', 'Strategy',
    'Strategy', 'Strategy', 'Free to Play', 'Free to Play',
    'Free to Play', 'Free to Play', 'Free to Play', 'Free to Play',
    'Free to Play', 'Free to Play', 'Free to Play', 'Free to Play',
    'Free to Play', 'Free to Play', 'Free to Play', 'Free to Play',
    'Free to Play', 'Free to Play', 'Free to Play', 'Free to Play',
    'Free to Play', 'Free to Play', 'RPG', 'RPG', 'RPG', 'RPG', 'RPG',
    'RPG', 'RPG', 'RPG', 'RPG', 'RPG', 'RPG', 'RPG', 'RPG', 'RPG',
    'RPG', 'RPG', 'RPG', 'RPG', 'RPG', 'RPG', 'Simulation',
    'Simulation', 'Simulation', 'Simulation', 'Simulation',
    'Simulation', 'Simulation', 'Simulation', 'Simulation',
    'Simulation', 'Simulation', 'Simulation', 'Simulation',
    'Simulation', 'Simulation', 'Simulation', 'Simulation',
    'Simulation', 'Simulation', 'Simulation', 'Racing', 'Racing',
    'Racing', 'Racing', 'Racing', 'Racing', 'Racing', 'Racing',
    'Racing', 'Racing', 'Racing', 'Racing', 'Racing', 'Racing',
    'Racing', 'Racing', 'Racing', 'Racing', 'Racing', 'Racing'
]
var data = [{
    type: "treemap",
    labels: labels,
    parents: parents,
    // 'Action', 'Indie', 'Adventure', 'Early Access', 'Casual', 'Strategy',
    //'Free to Play', 'RPG', 'Simulation', 'Racing'
    // 1581338,117134, 99562, 62636, 115257, 51406, 107435, 564272, 220490, 179448, 63698
    values: [200, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25324, 17612, 15655, 12173, 6842, 6512, 4122, 3609,
        3456, 3315, 2672, 2092, 2059, 1995, 1772, 1716,
        1602, 1554, 1532, 1520, 36029, 10603, 7194, 6345,
        5402, 4583, 4277, 4275, 2908, 2741, 2170, 2138,
        2075, 1718, 1709, 1467, 1296, 935, 875, 822,
        21247, 12661, 4435, 3967, 2098, 1866, 1737, 1726,
        1642, 1302, 1241, 1177, 1160, 1109, 1103, 913,
        856, 817, 801, 778, 11517, 10575, 10087, 8659,
        8508, 6569, 6332, 5647, 5442, 5439, 5185, 4164,
        3958, 3925, 3584, 3350, 3233, 3173, 2957, 2953,
        25317, 7919, 4420, 1529, 1469, 1449, 1004, 779,
        760, 748, 707, 691, 648, 606, 604, 591,
        578, 542, 532, 513, 25322, 9413, 8368, 6704,
        6679, 5760, 4975, 4721, 4678, 3610, 3371, 3176,
        2974, 2819, 2616, 2550, 2486, 2454, 2380, 2379,
        190625, 95245, 95242, 23944, 21233, 15907, 14620, 12984,
        12952, 12787, 10647, 10247, 8495, 7076, 5852, 5845,
        5448, 5263, 5237, 4623, 54618, 43074, 27375, 21168,
        13714, 10659, 9848, 5934, 4048, 3189, 2938, 2938,
        2886, 2868, 2834, 2639, 2638, 2511, 2377, 2234,
        44169, 43632, 18823, 17954, 8488, 7999, 4942, 4730,
        4377, 3865, 2577, 2343, 2284, 2086, 2021, 1922,
        1905, 1902, 1812, 1617, 15906, 8159, 6516, 4774,
        3824, 3793, 3107, 2029, 1636, 1623, 1508, 1423,
        1397, 1350, 1329, 1281, 1164, 1024, 939, 916
    ],
    textinfo: "label+value",
    // domain: {"x": [0, 0.48]},
    outsidetextfont: { "size": 20, "color": "#377eb8" },
    marker: { "line": { "width": 2 } },
    pathbar: { "visible": false }
}];

var config = { responsive: true }
var layout = {
    // showlegend: false,
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent"
}
Plotly.newPlot('treemap_plot', data, layout)