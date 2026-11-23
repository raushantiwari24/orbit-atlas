const worlds = [
  {
    id: 'mercury', name: 'Mercury', order: '01', type: 'ROCKY PLANET', colour: '#a7a49e', texture: 'mercury', diameter: '4,879 km', diameterKm: 4879, distance: '0.39 AU', year: '88 days', day: '176 days', gravity: '0.38× Earth', moons: '0', orbit: 3.5, yearDays: 88, size: .39,
    summary: 'The smallest planet races around the Sun. With almost no atmosphere to hold heat, its days are scorching and its nights are freezing.',
    question: 'How can a world so close to the Sun still have ice in some shadowed craters?', fact: 'A solar day is longer than its year.',
    missions: 'Spacecraft have only flown past or orbited Mercury; no lander has touched down there.'
  },
  {
    id: 'venus', name: 'Venus', order: '02', type: 'ROCKY PLANET', colour: '#e8c486', texture: 'venus', diameter: '12,104 km', diameterKm: 12104, distance: '0.72 AU', year: '225 days', day: '117 days', gravity: '0.91× Earth', moons: '0', orbit: 5.0, yearDays: 224.7, size: .95,
    summary: 'Earth’s similar-sized neighbour is wrapped in thick clouds. Its dense atmosphere traps heat, making the surface hotter than Mercury’s.',
    question: 'Why did Venus and Earth, despite their similarities, develop such different climates?', fact: 'Hottest planetary surface.',
    missions: 'Radar and atmospheric probes help reveal what thick clouds hide from ordinary cameras.'
  },
  {
    id: 'earth', name: 'Earth', order: '03', type: 'ROCKY PLANET', colour: '#4a91d5', texture: 'earth', diameter: '12,756 km', diameterKm: 12756, distance: '1.00 AU', year: '365.2 days', day: '24 hours', gravity: '1.00× Earth', moons: '1', orbit: 6.7, yearDays: 365.2, size: 1,
    summary: 'Our ocean-covered home is the only world known to have life. Its atmosphere, liquid water, and steady sunlight help make that possible.',
    question: 'What clues should we look for when asking whether a distant world could support life?', fact: 'The only world known to support life.',
    missions: 'Earth is our launchpad. This guide lists a few Earth-orbit missions, not every satellite around our planet.'
  },
  {
    id: 'mars', name: 'Mars', order: '04', type: 'ROCKY PLANET', colour: '#d77a5a', texture: 'mars', diameter: '6,792 km', diameterKm: 6792, distance: '1.52 AU', year: '687 days', day: '24.7 hours', gravity: '0.38× Earth', moons: '2', orbit: 8.8, yearDays: 687, size: .73,
    summary: 'This cold desert has ancient river valleys, polar ice, and the tallest volcano in the solar system. Robotic explorers study whether it could once have supported tiny life.',
    question: 'What can rocks and underground samples tell us about water on ancient Mars?', fact: 'Home to Olympus Mons.',
    missions: 'Rovers and orbiters study Mars from the ground and from above.'
  },
  {
    id: 'jupiter', name: 'Jupiter', order: '05', type: 'GAS GIANT', colour: '#d9b995', texture: 'jupiter', diameter: '142,984 km', diameterKm: 142984, distance: '5.20 AU', year: '11.9 years', day: '9.9 hours', gravity: '2.36× Earth', moons: '95', orbit: 12.8, yearDays: 4331, size: 3.35,
    summary: 'The largest planet is a vast ball of gas with powerful storms and a family of remarkable moons. Some of those moons may hide oceans beneath ice.',
    question: 'What would it take for an ocean under ice to be a place where simple life could survive?', fact: 'Largest planet.',
    missions: 'Europa Clipper and JUICE are already travelling to Jupiter; their close-up science comes later.'
  },
  {
    id: 'saturn', name: 'Saturn', order: '06', type: 'GAS GIANT', colour: '#d8bf91', texture: 'saturn', diameter: '120,536 km', diameterKm: 120536, distance: '9.58 AU', year: '29.4 years', day: '10.7 hours', gravity: '0.92× Earth', moons: '274', orbit: 17.2, yearDays: 10747, size: 3.08,
    summary: 'Saturn’s rings are made mostly of icy pieces, from tiny grains to boulders. Its moon Titan has rivers and lakes of liquid methane.',
    question: 'What can the chemistry on Titan teach us about the ingredients needed for life?', fact: 'Its rings are broad but thin.',
    missions: 'Cassini explored Saturn for 13 years. Next, NASA plans to send a flying robot to Titan.'
  },
  {
    id: 'uranus', name: 'Uranus', order: '07', type: 'ICE GIANT', colour: '#a8d4d2', texture: 'uranus', diameter: '51,118 km', diameterKm: 51118, distance: '19.2 AU', year: '84 years', day: '17.2 hours', gravity: '0.89× Earth', moons: '28', orbit: 22.7, yearDays: 30589, size: 1.98,
    summary: 'This pale blue ice giant spins almost on its side. Only one spacecraft has ever visited it, during a brief flyby in 1986.',
    question: 'What huge event could have tipped a planet onto its side?', fact: 'One year lasts 84 Earth years.',
    missions: 'Voyager 2 is still the only spacecraft to have visited Uranus.'
  },
  {
    id: 'neptune', name: 'Neptune', order: '08', type: 'ICE GIANT', colour: '#6286e1', texture: 'neptune', diameter: '49,528 km', diameterKm: 49528, distance: '30.1 AU', year: '164.8 years', day: '16.1 hours', gravity: '1.12× Earth', moons: '16', orbit: 28.2, yearDays: 59800, size: 1.94,
    summary: 'A distant, deep-blue ice giant with extremely fast winds. It is so far away that sunlight takes more than four hours to reach it.',
    question: 'How can Neptune have powerful winds where sunlight is so weak?', fact: 'Farthest of the eight planets.',
    missions: 'Voyager 2 made the first close visit in 1989. No spacecraft has returned since.'
  },
  {
    id: 'moon', name: 'Earth’s Moon', order: 'LUNA', type: 'NATURAL SATELLITE', colour: '#bec1c7', texture: 'moon', diameter: '3,475 km', diameterKm: 3475, distance: '384,400 km from Earth', year: '27.3 days around Earth', day: '29.5 days', gravity: '0.16× Earth', moons: '0', orbit: .97, yearDays: 27.3, size: .36,
    summary: 'Earth’s nearest neighbour is a rocky world with deep craters, ancient lava plains, and water ice in some permanently shadowed places.',
    question: 'Why are scientists especially interested in ice near the lunar south pole?', fact: 'The first world beyond Earth explored by people.',
    missions: 'The Moon is our closest testing ground for science, robots, and human spaceflight.'
  }
];

const missions = [
  {
    id: 'apollo-7', bodies: ['earth'], status: 'past', date: '1968', sort: 1968, title: 'Apollo 7', agency: 'NASA', partner: 'UNITED STATES', vehicle: 'Saturn IB · crewed Earth-orbit test',
    detail: 'Apollo 7 was the first crewed Apollo flight. Three astronauts spent 11 days testing their spacecraft in Earth orbit before later missions travelled to the Moon.',
    source: 'https://www.nasa.gov/mission/apollo-7/'
  },
  {
    id: 'iss', bodies: ['earth'], status: 'active', date: '1998–TODAY', sort: 1998, title: 'International Space Station', agency: 'NASA', partner: 'INTERNATIONAL TEAM', vehicle: 'Orbiting research laboratory',
    detail: 'The ISS is a shared science laboratory and home for rotating crews about 400 kilometres above Earth. Researchers use it to study how people, plants, materials, and technology behave in space.',
    source: 'https://www.nasa.gov/international-space-station/space-station-research-and-technology/iss-national-laboratory/'
  },
  {
    id: 'gaganyaan-g1', bodies: ['earth'], status: 'planned', date: '2026 TARGET', sort: 2026.1, title: 'Gaganyaan G1', agency: 'ISRO', partner: 'INDIA', vehicle: 'LVM3 · uncrewed test flight', timeline: true, timelineKind: 'launch',
    detail: 'G1 is a test flight before Indian astronauts fly. It will check how the crew capsule and service module work in orbit and test systems that help bring the capsule safely back to Earth. ISRO lists a 2026 launch target.',
    source: 'https://www.isro.gov.in/ISRO_EN/Crew_Module_Service_Module_Separation_Tests.html'
  },
  {
    id: 'artemis-iii', bodies: ['earth'], status: 'planned', date: '2027', sort: 2027.1, title: 'Artemis III', agency: 'NASA', partner: 'SPACEX · BLUE ORIGIN', vehicle: 'NASA SLS rocket · Orion · Earth-orbit test', timeline: true, timelineKind: 'launch',
    detail: 'Artemis III will send four astronauts into low Earth orbit. They will practise docking Orion with test versions of Moon landers being built by SpaceX and Blue Origin. This is a test for a later Moon landing, not a lunar landing itself.',
    source: 'https://www.nasa.gov/missions/artemis/nasas-artemis-iii-mission-to-test-future-moon-lander-operations/'
  },
  {
    id: 'mariner-10', bodies: ['mercury', 'venus'], status: 'past', date: '1974', sort: 1974, title: 'Mariner 10', agency: 'NASA', partner: 'JPL', vehicle: 'Atlas-Centaur · planetary flybys',
    detail: 'Mariner 10 used Venus’s gravity to change course, then flew past Mercury three times. It was the first spacecraft to study Mercury up close and also returned science data from Venus.',
    source: 'https://science.nasa.gov/mission/mariner-10/'
  },
  {
    id: 'messenger', bodies: ['mercury'], status: 'past', date: '2011–2015', sort: 2011, title: 'MESSENGER', agency: 'NASA', partner: 'APL', vehicle: 'Delta II · Mercury orbiter',
    detail: 'MESSENGER was the first spacecraft to orbit Mercury. It mapped the planet and helped scientists learn about its surface, magnetic field, and icy deposits near the poles.',
    source: 'https://science.nasa.gov/mission/messenger/'
  },
  {
    id: 'bepicolombo', bodies: ['mercury'], status: 'active', date: 'ORBIT · SCIENCE FROM 2027', sort: 2026, title: 'BepiColombo', agency: 'ESA + JAXA', partner: 'EUROPE · JAPAN', vehicle: 'Two science orbiters · launched 2018',
    detail: 'BepiColombo entered Mercury orbit on 21 November 2026. Its European and Japanese orbiters are preparing for separate science orbits; full science operations are scheduled to begin in April 2027.',
    source: 'https://www.esa.int/articles/about-us/directorates/science/bepicolombo/latest-updates-bepicolombo-s-arrival-at-mercury'
  },
  {
    id: 'mariner-2', bodies: ['venus'], status: 'past', date: '1962', sort: 1962, title: 'Mariner 2', agency: 'NASA', partner: 'JPL', vehicle: 'Atlas-Agena · Venus flyby',
    detail: 'Mariner 2 flew past Venus and sent back the first close-up measurements of another planet. Its readings showed that Venus was much hotter than scientists expected.',
    source: 'https://science.nasa.gov/mission/mariner-2/'
  },
  {
    id: 'magellan', bodies: ['venus'], status: 'past', date: '1990–1994', sort: 1990, title: 'Magellan', agency: 'NASA', partner: 'JPL', vehicle: 'Space Shuttle · radar-mapping orbiter',
    detail: 'Magellan used radar to map almost the entire surface of cloud-covered Venus. Its maps revealed mountains, valleys, and volcanoes hidden beneath the clouds.',
    source: 'https://science.nasa.gov/mission/magellan/'
  },
  {
    id: 'venus-express', bodies: ['venus'], status: 'past', date: '2006–2014', sort: 2006, title: 'Venus Express', agency: 'ESA', partner: 'EUROPE', vehicle: 'Soyuz-Fregat · atmospheric orbiter',
    detail: 'Venus Express studied the planet’s atmosphere and weather from orbit. It found evidence of active volcanoes and followed how the thick clouds and winds change.',
    source: 'https://www.esa.int/Science_Exploration/Space_Science/Venus_Express'
  },
  {
    id: 'venus-orbiter', bodies: ['venus'], status: 'planned', date: '2028 TARGET', sort: 2028.01, title: 'Venus Orbiter Mission', agency: 'ISRO', partner: 'INDIA', vehicle: 'LVM3 · orbiter', timeline: true, timelineKind: 'launch',
    detail: 'India plans to send an orbiter to study Venus’s clouds, atmosphere, surface, and interior. ISRO lists a 2028 launch target; spacecraft schedules can change.',
    source: 'https://www.isro.gov.in/ISRO_Organised_National_Science_Meet.html'
  },
  {
    id: 'davinci', bodies: ['venus'], status: 'planned', date: 'TENTATIVE · JUN 2029', sort: 2029.06, title: 'DAVINCI', agency: 'NASA', partner: 'GODDARD', vehicle: 'Spacecraft + atmospheric probe', timeline: true, timelineKind: 'launch',
    detail: 'DAVINCI will send a probe through Venus’s clouds toward the surface. As it falls, the probe will measure the air and take pictures to help explain how Venus formed and changed.',
    source: 'https://science.nasa.gov/planetary-science/programs/discovery/'
  },
  {
    id: 'veritas', bodies: ['venus'], status: 'planned', date: 'NO EARLIER THAN 2031', sort: 2031.01, title: 'VERITAS', agency: 'NASA', partner: 'JPL', vehicle: 'Radar-mapping orbiter', timeline: true, timelineKind: 'launch',
    detail: 'VERITAS will map Venus with radar to reveal its landforms and rocks beneath the clouds. The maps can help scientists work out whether volcanoes have changed the planet recently.',
    source: 'https://science.nasa.gov/mission/veritas/overview/'
  },
  {
    id: 'envision', bodies: ['venus'], status: 'planned', date: 'NOV 2031 TARGET', sort: 2031.11, title: 'EnVision', agency: 'ESA', partner: 'NASA', vehicle: 'Ariane 6 · orbiter', timeline: true, timelineKind: 'launch',
    detail: 'EnVision will study Venus from its inner layers to its upper atmosphere. It will help explain why Venus and Earth, despite being similar in size, developed so differently.',
    source: 'https://www.esa.int/missions/about-us/directorates/science/envision'
  },
  {
    id: 'apollo-11', bodies: ['moon'], status: 'past', date: '1969', sort: 1969, title: 'Apollo 11', agency: 'NASA', partner: 'UNITED STATES', vehicle: 'Saturn V · first crewed Moon landing',
    detail: 'Apollo 11 carried the first people to walk on the Moon. Neil Armstrong and Buzz Aldrin explored the surface while Michael Collins stayed in orbit. The crew returned Moon rocks to Earth.',
    source: 'https://www.nasa.gov/mission/apollo-11/'
  },
  {
    id: 'chandrayaan-3', bodies: ['moon'], status: 'past', date: '2023', sort: 2023, title: 'Chandrayaan-3', agency: 'ISRO', partner: 'INDIA', vehicle: 'LVM3 · lander and rover',
    detail: 'Chandrayaan-3 placed the Vikram lander and Pragyan rover on the Moon. They measured the soil, temperature, and other conditions near the lunar south pole.',
    source: 'https://www.isro.gov.in/Release_of_Chandrayaan-3_science_data_to_the_Scientific_Community.html'
  },
  {
    id: 'artemis-ii', bodies: ['moon'], status: 'past', date: 'APR 2026', sort: 2026.04, title: 'Artemis II', agency: 'NASA + CSA', partner: 'CANADA', vehicle: 'SLS rocket · Orion · crewed lunar flyby',
    detail: 'Four astronauts flew around the Moon and returned safely to Earth on a nearly 10-day test flight. They did not land; the flight checked systems and gathered observations for future missions.',
    source: 'https://www.nasa.gov/mission/artemis-ii/'
  },
  {
    id: 'lro', bodies: ['moon'], status: 'active', date: 'ACTIVE SINCE 2009', sort: 2009, title: 'Lunar Reconnaissance Orbiter', agency: 'NASA', partner: 'GODDARD', vehicle: 'Atlas V · lunar mapping orbiter',
    detail: 'LRO maps the Moon from orbit and measures its surface, temperature, and radiation. Its maps help science teams choose safer landing areas.',
    source: 'https://science.nasa.gov/mission/lro/'
  },
  {
    id: 'blue-moon-mk1', bodies: ['moon'], status: 'planned', date: 'DATE TO BE CONFIRMED', sort: 2026.2, title: 'Blue Moon Mark 1', agency: 'BLUE ORIGIN', partner: 'NASA CLPS', vehicle: 'Blue Moon · uncrewed cargo lander',
    detail: 'Blue Origin’s robotic lander is designed to deliver NASA science equipment to the Moon’s south pole and test precision landing. NASA has described a target no earlier than fall 2026; the schedule may move.',
    source: 'https://www.nasa.gov/news-release/nasa-provides-update-on-moon-base-rovers-landers-missions/'
  },
  {
    id: 'blue-ghost-2', bodies: ['moon'], status: 'planned', date: '2027', sort: 2027.01, title: 'Blue Ghost Mission 2', agency: 'FIREFLY AEROSPACE', partner: 'NASA CLPS', vehicle: 'Blue Ghost lunar lander', timeline: true, timelineKind: 'launch',
    detail: 'Firefly plans to deliver science equipment to the Moon’s far side. One instrument will test a radio telescope that could listen for signals from the early universe.',
    source: 'https://www.nasa.gov/event/clps-flight-firefly-aerospaces-blue-ghost-mission-2/'
  },
  {
    id: 'chandrayaan-4', bodies: ['moon'], status: 'planned', date: '2027 TARGET', sort: 2027.08, title: 'Chandrayaan-4', agency: 'ISRO', partner: 'INDIA', vehicle: 'LVM3 · lunar sample return', timeline: true, timelineKind: 'launch',
    detail: 'India plans to land on the Moon, collect rocks and soil, and bring samples back to Earth. It will test how to launch from the Moon and safely return those samples.',
    source: 'https://www.isro.gov.in/media_isro/pdf/AnnualReport/Annual_Report_2025-26_EN_28042026.pdf'
  },
  {
    id: 'artemis-iv', bodies: ['moon'], status: 'planned', date: 'EARLY 2028 TARGET', sort: 2028.01, title: 'Artemis IV', agency: 'NASA', partner: 'COMMERCIAL LANDER', vehicle: 'SLS rocket · Orion · planned crewed landing', timeline: true, timelineKind: 'launch',
    detail: 'NASA plans to send astronauts to the lunar surface near the south pole. The crew will travel in Orion, use a commercial lander to reach the Moon, then return to Orion for the trip home.',
    source: 'https://www.nasa.gov/mission/artemis-iv/'
  },
  {
    id: 'mars-pathfinder', bodies: ['mars'], status: 'past', date: '1997', sort: 1997, title: 'Mars Pathfinder', agency: 'NASA', partner: 'JPL', vehicle: 'Delta II · lander and Sojourner rover',
    detail: 'Pathfinder showed that a small spacecraft could land on Mars and release a rover. Sojourner drove among nearby rocks and sent pictures and measurements back to Earth.',
    source: 'https://science.nasa.gov/mission/mars-pathfinder/'
  },
  {
    id: 'mangalyaan', bodies: ['mars'], status: 'past', date: '2014–2022', sort: 2014, title: 'Mars Orbiter Mission', agency: 'ISRO', partner: 'INDIA', vehicle: 'PSLV · Mars orbiter',
    detail: 'India’s first Mars mission, often called Mangalyaan, studied Mars from orbit for about eight years. ISRO declared the mission over after communication with the spacecraft was lost.',
    source: 'https://www.isro.gov.in/MOM_NationalMeet_2022SEP.html'
  },
  {
    id: 'curiosity', bodies: ['mars'], status: 'active', date: 'ACTIVE SINCE 2012', sort: 2012, title: 'Curiosity', agency: 'NASA', partner: 'JPL', vehicle: 'Atlas V · Mars rover',
    detail: 'Curiosity studies rocks and soil in Gale Crater to find out whether ancient Mars had conditions that could support tiny life forms called microbes.',
    source: 'https://science.nasa.gov/mission/msl-curiosity/'
  },
  {
    id: 'mro', bodies: ['mars'], status: 'active', date: 'ACTIVE SINCE 2006', sort: 2006, title: 'Mars Reconnaissance Orbiter', agency: 'NASA', partner: 'JPL', vehicle: 'Atlas V · Mars orbiter',
    detail: 'MRO circles Mars, studies its surface and atmosphere, and relays messages between Earth and some spacecraft on the ground.',
    source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/'
  },
  {
    id: 'mars-express', bodies: ['mars'], status: 'active', date: 'ACTIVE SINCE 2003', sort: 2003, title: 'Mars Express', agency: 'ESA', partner: 'EUROPE', vehicle: 'Soyuz-Fregat · Mars orbiter',
    detail: 'Mars Express maps the planet in 3D and studies its atmosphere, surface, and underground. It has helped reveal where water shaped the landscape long ago.',
    source: 'https://www.esa.int/Science_Exploration/Space_Science/Mars_Express'
  },
  {
    id: 'tgo', bodies: ['mars'], status: 'active', date: 'ACTIVE SINCE 2016', sort: 2016, title: 'ExoMars Trace Gas Orbiter', agency: 'ESA + ROSCOSMOS', partner: 'EUROPE', vehicle: 'Proton-M · Mars orbiter',
    detail: 'The Trace Gas Orbiter studies gases in Mars’s atmosphere, including tiny amounts of methane, and helps relay messages from surface missions.',
    source: 'https://science.nasa.gov/mission/tgo/'
  },
  {
    id: 'rosalind-franklin', bodies: ['mars'], status: 'planned', date: 'SEP–DEC 2028 LAUNCH WINDOW', sort: 2028.09, title: 'Rosalind Franklin rover', agency: 'ESA', partner: 'SPACEX', vehicle: 'SpaceX Falcon Heavy · rover and lander', timeline: true, timelineKind: 'launch',
    detail: 'ESA’s rover will drill up to two metres below the Martian surface. Deep samples are protected from some surface radiation and may preserve clues about Mars’s past.',
    source: 'https://www.esa.int/missions/about-us/directorates/human-and-robotic-exploration/mars/exomars/rosalind-franklin-rover'
  },
  {
    id: 'voyager-2-jupiter', bodies: ['jupiter'], status: 'past', date: '1979', sort: 1979, title: 'Voyager 2 flyby', agency: 'NASA', partner: 'JPL', vehicle: 'Titan IIIE-Centaur · flyby',
    detail: 'Voyager 2 flew past Jupiter and discovered active volcanoes on the moon Io. It used Jupiter’s gravity to continue towards Saturn and the outer planets.',
    source: 'https://science.nasa.gov/mission/voyager/voyager-2/'
  },
  {
    id: 'galileo', bodies: ['jupiter'], status: 'past', date: '1995–2003', sort: 1995, title: 'Galileo', agency: 'NASA', partner: 'JPL', vehicle: 'Orbiter and atmospheric probe',
    detail: 'Galileo was the first spacecraft to orbit Jupiter. A small probe dropped into the planet’s atmosphere, while the orbiter studied Jupiter and its moons for almost eight years.',
    source: 'https://science.nasa.gov/mission/galileo/'
  },
  {
    id: 'juno', bodies: ['jupiter'], status: 'active', date: 'ACTIVE SINCE 2016', sort: 2016, title: 'Juno', agency: 'NASA', partner: 'JPL', vehicle: 'Atlas V · Jupiter orbiter',
    detail: 'Juno is still orbiting Jupiter. It studies the planet’s atmosphere, deep interior, magnetic field, and moons. NASA reported in November 2026 that the spacecraft continues to pass Jupiter about every 33 days.',
    source: 'https://science.nasa.gov/image-article/apod-2026-november-22-swirl-and-colors-on-jupiter-from-juno/'
  },
  {
    id: 'europa-clipper', bodies: ['jupiter'], status: 'active', date: 'EARTH FLYBY · 3 DEC 2026', sort: 2024, timelineSort: 2026.12, title: 'Europa Clipper', agency: 'NASA', partner: 'JPL · SPACEX', vehicle: 'Falcon Heavy · en route to Jupiter', timeline: true, timelineKind: 'event',
    detail: 'Europa Clipper launched in 2024 and is travelling to Jupiter. It will swing past Earth in December 2026 to gain speed, then reach Jupiter in 2030 to make close flybys of icy moon Europa. This is an in-space event, not a launch.',
    source: 'https://science.nasa.gov/mission/europa-clipper/'
  },
  {
    id: 'juice', bodies: ['jupiter'], status: 'active', date: 'EN ROUTE · ARRIVES 2031', sort: 2023, title: 'JUICE', agency: 'ESA', partner: 'EUROPE', vehicle: 'Ariane 5 · Jupiter-moons explorer',
    detail: 'JUICE launched in 2023 and is on a long trip to Jupiter. It will study three large icy moons, especially Ganymede, to learn more about oceans that may lie beneath their surfaces.',
    source: 'https://www.esa.int/missions/about-us/directorates/science/juice'
  },
  {
    id: 'voyager-2-saturn', bodies: ['saturn'], status: 'past', date: '1981', sort: 1981, title: 'Voyager 2 flyby', agency: 'NASA', partner: 'JPL', vehicle: 'Titan IIIE-Centaur · flyby',
    detail: 'Voyager 2 flew past Saturn and returned close-up views of its rings and moons before heading toward Uranus and Neptune.',
    source: 'https://science.nasa.gov/mission/voyager/voyager-2/'
  },
  {
    id: 'cassini', bodies: ['saturn'], status: 'past', date: '2004–2017', sort: 2004, title: 'Cassini–Huygens', agency: 'NASA · ESA · ASI', partner: 'INTERNATIONAL MISSION', vehicle: 'Saturn orbiter and Titan lander',
    detail: 'Cassini explored Saturn, its rings, and many moons for 13 years. Its Huygens probe landed on Titan. Cassini’s final dive into Saturn ended the mission in 2017.',
    source: 'https://science.nasa.gov/mission/cassini/'
  },
  {
    id: 'dragonfly', bodies: ['saturn'], status: 'planned', date: 'NO EARLIER THAN JUL 2028', sort: 2028.07, title: 'Dragonfly', agency: 'NASA', partner: 'SPACEX', vehicle: 'SpaceX Falcon Heavy · flying rotorcraft', timeline: true, timelineKind: 'launch',
    detail: 'NASA plans to send a nuclear-powered flying robot to Titan, Saturn’s largest moon. Dragonfly will fly between locations and study the surface and air for clues about chemistry linked to life’s building blocks.',
    source: 'https://science.nasa.gov/mission/dragonfly/'
  },
  {
    id: 'voyager-2-uranus', bodies: ['uranus'], status: 'past', date: '1986', sort: 1986, title: 'Voyager 2 flyby', agency: 'NASA', partner: 'JPL', vehicle: 'Titan IIIE-Centaur · flyby',
    detail: 'Voyager 2 is the only spacecraft to visit Uranus. Its 1986 flyby discovered new moons and rings and gave scientists their first close views of this tilted ice giant.',
    source: 'https://science.nasa.gov/mission/voyager/voyager-2/'
  },
  {
    id: 'voyager-2-neptune', bodies: ['neptune'], status: 'past', date: '1989', sort: 1989, title: 'Voyager 2 flyby', agency: 'NASA', partner: 'JPL', vehicle: 'Titan IIIE-Centaur · flyby',
    detail: 'Voyager 2 is the only spacecraft to visit Neptune. It found dark storms, fast winds, and new details about the planet’s rings and moons.',
    source: 'https://science.nasa.gov/mission/voyager/voyager-2/'
  }
];

const worldMap = Object.fromEntries(worlds.map((world) => [world.id, world]));
let selectedWorldId = 'earth';
let selectedMissionId = null;
let labelsVisible = false;
let timelineByDate = missions.filter((mission) => mission.timeline).sort((a, b) => (a.timelineSort ?? a.sort) - (b.timelineSort ?? b.sort));
const statusOrder = { past: 0, active: 1, planned: 2 };
const statusLabels = { past: 'COMPLETED', active: 'ACTIVE / EN ROUTE', planned: 'PLANNED' };

const textureFiles = {
  mercury: '2k_mercury.jpg', venus: '2k_venus_atmosphere.jpg', earth: '2k_earth_daymap.jpg',
  mars: '2k_mars.jpg', jupiter: '2k_jupiter.jpg', saturn: '2k_saturn.jpg',
  uranus: '2k_uranus.jpg', neptune: '2k_neptune.jpg', moon: '2k_moon.jpg', sun: '2k_sun.jpg'
};

// NASA/JPL approximate Keplerian elements (J2000 ecliptic, table 2a), with rates per century.
// Semimajor axes are compressed separately for display; eccentricity, inclination, and phase are retained.
const jplOrbitElements = {
  mercury: { a:[.38709843,0], e:[.20563661,.00002123], i:[7.00559432,-.00590158], L:[252.25166724,149472.67486623], peri:[77.45771895,.15940013], node:[48.33961819,-.12214182] },
  venus: { a:[.72332102,-.00000026], e:[.00676399,-.00005107], i:[3.39777545,.00043494], L:[181.97970850,58517.81560260], peri:[131.76755713,.05679648], node:[76.67261496,-.27274174] },
  earth: { a:[1.00000018,-.00000003], e:[.01673163,-.00003661], i:[-.00054346,-.01337178], L:[100.46691572,35999.37306329], peri:[102.93005885,.31795260], node:[-5.11260389,-.24123856] },
  mars: { a:[1.52371243,.00000097], e:[.09336511,.00009149], i:[1.85181869,-.00724757], L:[-4.56813164,19140.29934243], peri:[-23.91744784,.45223625], node:[49.71320984,-.26852431] },
  jupiter: { a:[5.20248019,-.00002864], e:[.04853590,.00018026], i:[1.29861416,-.00322699], L:[34.33479152,3034.90371757], peri:[14.27495244,.18199196], node:[100.29282654,.13024619], periodic:[-.00012452,.06064060,-.35635438,38.35125] },
  saturn: { a:[9.54149883,-.00003065], e:[.05550825,-.00032044], i:[2.49424102,.00451969], L:[50.07571329,1222.11494724], peri:[92.86136063,.54179478], node:[113.63998702,-.25015002], periodic:[.00025899,-.13434469,.87320147,38.35125] },
  uranus: { a:[19.18797948,-.00020455], e:[.04685740,-.00001550], i:[.77298127,-.00180155], L:[314.20276625,428.49512595], peri:[172.43404441,.09266985], node:[73.96250215,.05739699], periodic:[.00058331,-.97731848,.17689245,7.67025] },
  neptune: { a:[30.06952752,.00006447], e:[.00895439,.00000818], i:[1.77005520,.00022400], L:[304.22289287,218.46515314], peri:[46.68158724,.01009938], node:[131.78635853,-.00606302], periodic:[-.00041348,.68346318,-.10162547,7.67025] }
};
const axialTiltDegrees = { mercury:.034, venus:177.4, earth:23.4, moon:6.7, mars:25.2, jupiter:3.1, saturn:26.7, uranus:97.8, neptune:28.3 };

function getJplElementsAtDate(bodyId, date = new Date()) {
  const source = jplOrbitElements[bodyId];
  const julianDay = date.getTime() / 86400000 + 2440587.5;
  const centuries = (julianDay - 2451545) / 36525;
  const valueAtDate = ([base, rate]) => base + rate * centuries;
  const a = valueAtDate(source.a);
  const e = valueAtDate(source.e);
  const inclination = valueAtDate(source.i) * Math.PI / 180;
  const meanLongitude = valueAtDate(source.L);
  const perihelion = valueAtDate(source.peri);
  const ascendingNode = valueAtDate(source.node);
  let meanAnomalyDegrees = meanLongitude - perihelion;
  if (source.periodic) {
    const [b, c, s, f] = source.periodic;
    const angle = f * centuries * Math.PI / 180;
    meanAnomalyDegrees += b * centuries * centuries + c * Math.cos(angle) + s * Math.sin(angle);
  }
  const meanAnomaly = ((meanAnomalyDegrees % 360) + 360) % 360 * Math.PI / 180;
  return { a, e, inclination, argumentOfPerihelion:(perihelion - ascendingNode) * Math.PI / 180, ascendingNode:ascendingNode * Math.PI / 180, meanAnomaly };
}

function solveEccentricAnomaly(meanAnomaly, eccentricity) {
  let eccentricAnomaly = meanAnomaly;
  for (let iteration = 0; iteration < 8; iteration++) {
    const correction = (eccentricAnomaly - eccentricity * Math.sin(eccentricAnomaly) - meanAnomaly) / (1 - eccentricity * Math.cos(eccentricAnomaly));
    eccentricAnomaly -= correction;
    if (Math.abs(correction) < 1e-10) break;
  }
  return eccentricAnomaly;
}

function getOrbitPoint(THREE, world, elements, meanAnomaly) {
  const eccentricAnomaly = solveEccentricAnomaly(meanAnomaly, elements.e);
  const xPeri = world.orbit * (Math.cos(eccentricAnomaly) - elements.e);
  const yPeri = world.orbit * Math.sqrt(1 - elements.e * elements.e) * Math.sin(eccentricAnomaly);
  const cosPeri = Math.cos(elements.argumentOfPerihelion), sinPeri = Math.sin(elements.argumentOfPerihelion);
  const cosNode = Math.cos(elements.ascendingNode), sinNode = Math.sin(elements.ascendingNode);
  const cosInclination = Math.cos(elements.inclination), sinInclination = Math.sin(elements.inclination);
  const xOrbit = xPeri * cosPeri - yPeri * sinPeri;
  const yOrbit = xPeri * sinPeri + yPeri * cosPeri;
  const x = xOrbit * cosNode - yOrbit * sinNode * cosInclination;
  const y = xOrbit * sinNode + yOrbit * cosNode * cosInclination;
  const z = yOrbit * sinInclination;
  return new THREE.Vector3(x, z, -y);
}

function renderWorldPicker() {
  const host = document.getElementById('world-list');
  host.innerHTML = worlds.map((world) => `
    <button class="world-button" type="button" data-planet="${world.id}" aria-pressed="${world.id === selectedWorldId}" style="--planet-color:${world.colour};--planet-texture:url('./assets/textures/${textureFiles[world.id]}')" aria-label="Explore ${world.name}">
      <i class="planet-mini" aria-hidden="true"></i><span class="world-name">${world.id === 'moon' ? 'Moon' : world.name}</span>
    </button>`).join('');
  host.querySelectorAll('.world-button').forEach((button) => button.addEventListener('click', () => selectWorld(button.dataset.planet)));
}

function renderWorldBriefing(requestedMissionId) {
  const world = worldMap[selectedWorldId];
  const worldMissions = missions.filter((mission) => mission.bodies.includes(selectedWorldId))
    .sort((a, b) => statusOrder[a.status] - statusOrder[b.status] || a.sort - b.sort);
  if (requestedMissionId === false) selectedMissionId = null;
  else if (typeof requestedMissionId === 'string' && worldMissions.some((mission) => mission.id === requestedMissionId)) selectedMissionId = requestedMissionId;
  else if (!worldMissions.some((mission) => mission.id === selectedMissionId)) {
    selectedMissionId = worldMissions.find((mission) => mission.status === 'planned')?.id
      || worldMissions.find((mission) => mission.status === 'active')?.id
      || worldMissions[0]?.id || null;
  }

  const destinationLabel = selectedWorldId === 'earth' ? 'EARTH ORBIT' : selectedWorldId === 'moon' ? 'THE MOON' : ['jupiter', 'saturn'].includes(selectedWorldId) ? `${world.name.toUpperCase()} SYSTEM` : world.name.toUpperCase();
  document.getElementById('target-kicker').textContent = world.type;
  document.getElementById('target-name').textContent = world.name;
  document.getElementById('data-world-name').textContent = world.name;
  document.getElementById('target-index').textContent = world.order;
  document.getElementById('target-summary').textContent = world.summary;
  document.getElementById('target-highlight').textContent = world.fact;
  document.getElementById('scene-world-type').textContent = world.type;
  document.getElementById('status-target').textContent = destinationLabel;
  document.getElementById('mission-target').textContent = selectedWorldId === 'earth' ? 'EARTH-ORBIT EXAMPLES' : `MISSIONS TO ${destinationLabel}`;
  document.getElementById('target-facts').innerHTML = `
    <div class="world-fact"><span>DIAMETER</span><strong>${world.diameter}</strong></div>
    <div class="world-fact"><span>${selectedWorldId === 'moon' ? 'FROM EARTH' : 'FROM THE SUN'}</span><strong>${world.distance}</strong></div>
    <div class="world-fact"><span>LENGTH OF A DAY</span><strong>${world.day}</strong><small>One sunrise to the next, on average.</small></div>
    <div class="world-fact"><span>${selectedWorldId === 'moon' ? 'ONE ORBIT' : 'LENGTH OF A YEAR'}</span><strong>${world.year}</strong></div>
    <div class="world-fact"><span>GRAVITY · EARTH = 1</span><strong>${world.gravity}</strong><small>Compared with Earth’s gravity.</small></div>
    <div class="world-fact"><span>KNOWN MOONS</span><strong>${world.moons}</strong></div>`;
  document.getElementById('world-data-note').textContent = selectedWorldId === 'moon'
    ? 'Moon facts are compared with Earth. For planets, 1 AU is the average Earth–Sun distance. Moon counts can change as new ones are confirmed.'
    : `${['jupiter', 'saturn', 'uranus', 'neptune'].includes(selectedWorldId) ? 'Gas and ice giants have no solid ground; their gravity is measured at a reference cloud level. ' : ''}A day is one sunrise-to-sunrise cycle; a year is one orbit around the Sun. 1 AU is the average Earth–Sun distance. Moon counts can change as new ones are confirmed.`;
  document.getElementById('mission-count').textContent = `${String(worldMissions.length).padStart(2, '0')} EXAMPLES`;
  document.getElementById('count-past').textContent = worldMissions.filter((mission) => mission.status === 'past').length;
  document.getElementById('count-active').textContent = worldMissions.filter((mission) => mission.status === 'active').length;
  document.getElementById('count-planned').textContent = worldMissions.filter((mission) => mission.status === 'planned').length;
  document.getElementById('mission-list').hidden = !worldMissions.length;
  document.getElementById('no-missions').hidden = Boolean(worldMissions.length);
  if (!worldMissions.length) {
    document.getElementById('mission-list').innerHTML = '';
    return;
  }

  document.getElementById('mission-list').innerHTML = worldMissions.map((mission) => `
    <article class="mission-item ${mission.id === selectedMissionId ? 'is-selected' : ''}" data-mission="${mission.id}">
      <button class="mission-item-head" type="button" aria-expanded="${mission.id === selectedMissionId}" aria-label="${statusLabels[mission.status]}: ${mission.title}, ${mission.date}">
        <span class="mission-when">${mission.date}<span class="mission-status-tag ${mission.status}">${statusLabels[mission.status]}</span></span>
        <span class="mission-name-wrap"><span class="mission-name">${mission.title}</span><span class="mission-meta">${mission.agency} <span>·</span> ${mission.partner}</span></span>
        <span class="mission-expand" aria-hidden="true">＋</span>
      </button>
      <div class="mission-details"><p>${mission.detail}</p><div class="mission-vehicle"><span>ROCKET / SPACECRAFT</span><b>${mission.vehicle}</b></div><a href="${mission.source}" target="_blank" rel="noreferrer">READ THE OFFICIAL MISSION SOURCE ↗</a></div>
    </article>`).join('');

  document.getElementById('mission-list').querySelectorAll('.mission-item-head').forEach((button) => button.addEventListener('click', () => {
    const id = button.closest('.mission-item').dataset.mission;
    if (selectedMissionId === id) renderWorldBriefing(false);
    else renderWorldBriefing(id);
  }));
}

function renderTimeline() {
  const host = document.getElementById('timeline-rail');
  host.innerHTML = timelineByDate.map((mission) => {
    const destination = mission.bodies.map((id) => worldMap[id].name).join(' / ');
    const event = mission.timelineKind === 'event';
    return `<button class="timeline-item ${event ? 'event' : ''}" type="button" data-mission="${mission.id}" aria-label="${event ? 'Upcoming spacecraft event' : 'Planned launch'}: ${mission.title}, ${mission.date}, ${destination}">
      <span class="timeline-date">${mission.date}</span><strong>${mission.title}</strong><span class="timeline-destination">${destination}</span><span class="timeline-partner">${event ? 'UPCOMING SPACECRAFT EVENT' : 'PLANNED LAUNCH'} · ${mission.agency} · ${mission.partner}</span><span class="timeline-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join('');
  host.querySelectorAll('.timeline-item').forEach((button) => button.addEventListener('click', () => {
    const mission = missions.find((item) => item.id === button.dataset.mission);
    const bodyId = mission.bodies.find((id) => id !== 'earth') || mission.bodies[0];
    selectWorld(bodyId, mission.id);
    document.querySelector('.mission-guide').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function selectWorld(id, missionId = null) {
  if (!worldMap[id]) return;
  selectedWorldId = id;
  selectedMissionId = null;
  document.querySelectorAll('.world-button').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.planet === id)));
  renderWorldBriefing(missionId);
  document.getElementById('focus-name').textContent = id === 'moon' ? 'EARTH’S MOON' : id.toUpperCase();
  if (window.solarScene) window.solarScene.focus(id);
}

document.getElementById('reset-view').addEventListener('click', () => {
  if (window.solarScene) window.solarScene.reset();
  document.getElementById('focus-name').textContent = 'THE SOLAR SYSTEM';
  document.getElementById('scene-world-type').textContent = 'ALL EIGHT PLANETS';
});
document.getElementById('labels-toggle').addEventListener('click', (event) => {
  labelsVisible = !labelsVisible;
  event.currentTarget.setAttribute('aria-pressed', String(labelsVisible));
  if (window.solarScene) window.solarScene.setLabels(labelsVisible);
});
document.getElementById('timeline-back').addEventListener('click', () => document.getElementById('timeline-rail').scrollBy({ left: -490, behavior: 'smooth' }));
document.getElementById('timeline-forward').addEventListener('click', () => document.getElementById('timeline-rail').scrollBy({ left: 490, behavior: 'smooth' }));
renderWorldPicker();
renderWorldBriefing();
document.getElementById('scene-world-type').textContent = 'ALL EIGHT PLANETS';
renderTimeline();

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296; };
}

function makePlanetTexture(THREE, kind) {
  const texture = new THREE.TextureLoader().load(`./assets/textures/${textureFiles[kind]}`);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 12;
  return texture;
}

function makeTextSprite(THREE, text, color) {
  const canvas = document.createElement('canvas'); canvas.width = 360; canvas.height = 88;
  const context = canvas.getContext('2d');
  context.fillStyle = 'rgba(7,18,31,.7)';
  context.beginPath(); context.roundRect(8, 13, 344, 60, 16); context.fill();
  context.fillStyle = color; context.beginPath(); context.arc(31, 43, 5, 0, Math.PI * 2); context.fill();
  context.font = '500 23px -apple-system, BlinkMacSystemFont, sans-serif'; context.fillStyle = '#f4f5f7'; context.textAlign = 'left'; context.textBaseline = 'middle'; context.fillText(text, 48, 44);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, sizeAttenuation: true }));
  sprite.scale.set(4.8, 1.17, 1);
  return sprite;
}

async function initSolarScene() {
  let THREE, OrbitControls;
  try {
    THREE = await import('three');
    ({ OrbitControls } = await import('three/addons/controls/OrbitControls.js'));
  } catch (error) {
    const sceneError = document.getElementById('scene-error');
    sceneError.textContent = 'The 3D library could not start. The planet profiles and mission index are still available below.';
    sceneError.hidden = false;
    console.warn('3D module could not load:', error);
    return;
  }
  const canvas = document.getElementById('solar-canvas');
  const wrap = document.getElementById('scene-wrap');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 500);
  const viewDirection = new THREE.Vector3(38, 28, 47).normalize();
  let startCamera = viewDirection.clone().multiplyScalar(45);
  camera.position.copy(startCamera);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (error) {
    const sceneError = document.getElementById('scene-error');
    sceneError.textContent = 'This browser cannot start a WebGL 3D scene. The planet profiles and mission index are still available below.';
    sceneError.hidden = false;
    console.warn('WebGL renderer could not start:', error);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(wrap.clientWidth, wrap.clientHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  scene.add(new THREE.AmbientLight(0xaebbd0, .48));
  const sunLight = new THREE.PointLight(0xffdda9, 260, 0, 1.04);
  sunLight.position.set(0, 0, 0); scene.add(sunLight);
  const fill = new THREE.DirectionalLight(0x9ab0cf, .34); fill.position.set(-25, 18, 24); scene.add(fill);

  const starsPositions = [];
  const random = seededRandom(21923);
  for (let i = 0; i < 3200; i++) {
    const radius = 48 + random() * 170;
    const u = random() * Math.PI * 2, v = Math.acos(2 * random() - 1);
    starsPositions.push(radius * Math.sin(v) * Math.cos(u), radius * Math.cos(v), radius * Math.sin(v) * Math.sin(u));
  }
  const starsGeometry = new THREE.BufferGeometry(); starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsPositions, 3));
  const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xdce6f4, size: .12, sizeAttenuation: true, transparent: true, opacity: .62 })); scene.add(stars);

  const sunTexture = makePlanetTexture(THREE, 'sun');
  const sun = new THREE.Mesh(new THREE.SphereGeometry(2.05, 72, 56), new THREE.MeshBasicMaterial({ map: sunTexture, toneMapped: false })); scene.add(sun);
  const sunGlowCanvas = document.createElement('canvas'); sunGlowCanvas.width = 128; sunGlowCanvas.height = 128;
  const glowContext = sunGlowCanvas.getContext('2d'); const gradient = glowContext.createRadialGradient(64,64,2,64,64,64);
  gradient.addColorStop(0,'rgba(255,220,150,.78)'); gradient.addColorStop(.2,'rgba(255,162,67,.36)'); gradient.addColorStop(1,'rgba(255,137,33,0)'); glowContext.fillStyle=gradient; glowContext.fillRect(0,0,128,128);
  const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(sunGlowCanvas), transparent:true, depthWrite:false, blending:THREE.AdditiveBlending })); sunGlow.scale.set(8,8,1); scene.add(sunGlow);
  const sunLabel = makeTextSprite(THREE, 'Sun', '#eab579'); sunLabel.position.set(0, 2.75, 0); scene.add(sunLabel);

  const objects = {};
  const orbitObjects = [];
  const orbitLines = [];
  const ephemerisDate = new Date();
  worlds.filter((world) => world.id !== 'moon').forEach((world, index) => {
    const elements = getJplElementsAtDate(world.id, ephemerisDate);
    const orbitPoints = [];
    for (let step = 0; step <= 192; step++) {
      const meanAnomaly = step / 192 * Math.PI * 2;
      orbitPoints.push(getOrbitPoint(THREE, world, elements, meanAnomaly));
    }
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x9aacc2, transparent: true, opacity: index < 4 ? .18 : .13 });
    const orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial); scene.add(orbitLine); orbitLines.push(orbitLine);
    const group = new THREE.Group(); group.position.copy(getOrbitPoint(THREE, world, elements, elements.meanAnomaly)); scene.add(group);
    const visualRadius = .52 * world.size;
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(visualRadius, 72, 56), new THREE.MeshStandardMaterial({ map: makePlanetTexture(THREE, world.texture), roughness: world.id === 'earth' ? .78 : .94, metalness: .005 }));
    sphere.userData.worldId = world.id; group.add(sphere);
    const pickVolume = new THREE.Mesh(new THREE.SphereGeometry(Math.max(visualRadius * 1.45, .32), 20, 16), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, colorWrite: false, depthWrite: false }));
    pickVolume.userData.worldId = world.id; group.add(pickVolume);
    const tilt = axialTiltDegrees[world.id] * Math.PI / 180;
    sphere.rotation.z = tilt;
    const glowColor = world.id === 'earth' ? 0x4f8fff : world.id === 'venus' ? 0xf5c575 : world.id === 'neptune' ? 0x3e73ff : 0xc1b08c;
    const baseHaloOpacity = world.id === 'earth' || world.id === 'venus' ? .055 : .018;
    const halo = new THREE.Mesh(new THREE.SphereGeometry(visualRadius * 1.04, 40, 32), new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: baseHaloOpacity, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    group.add(halo);
    let cloudLayer = null;
    if (world.id === 'earth') {
      const cloudTexture = new THREE.TextureLoader().load('./assets/textures/2k_earth_clouds.jpg'); cloudTexture.colorSpace = THREE.SRGBColorSpace;
      cloudLayer = new THREE.Mesh(new THREE.SphereGeometry(visualRadius * 1.012, 72, 56), new THREE.MeshStandardMaterial({ alphaMap: cloudTexture, color: 0xffffff, transparent: true, opacity: .5, depthWrite: false, roughness: 1 })); group.add(cloudLayer);
    }
    if (world.id === 'saturn') {
      const ringMap = new THREE.TextureLoader().load('./assets/textures/2k_saturn_ring_alpha.png');
      ringMap.colorSpace = THREE.SRGBColorSpace;
      const ringGroup = new THREE.Group(); ringGroup.rotation.z = tilt; group.add(ringGroup);
      const ring = new THREE.Mesh(new THREE.RingGeometry(visualRadius * 1.28, visualRadius * 2.2, 140), new THREE.MeshStandardMaterial({ map: ringMap, side: THREE.DoubleSide, transparent: true, opacity: .91, depthWrite: false, roughness: .95 }));
      ring.rotation.x = -Math.PI / 2; ringGroup.add(ring);
    }
    const label = makeTextSprite(THREE, world.name, world.colour); label.position.set(0, visualRadius + .63, 0); group.add(label);
    objects[world.id] = { world, group, sphere, pickVolume, cloudLayer, label, halo, baseHaloOpacity, visualRadius, elements, angle: elements.meanAnomaly };
    orbitObjects.push(objects[world.id]);
  });

  // A faint asteroid belt makes the gap between Mars and Jupiter visible without implying individual rocks are to scale.
  const asteroidPositions = [];
  for (let i = 0; i < 1300; i++) {
    const angle = random() * Math.PI * 2, radius = 9.8 + (random() - .5) * 1.5, height = (random() - .5) * .42;
    asteroidPositions.push(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
  }
  const asteroidGeometry = new THREE.BufferGeometry(); asteroidGeometry.setAttribute('position', new THREE.Float32BufferAttribute(asteroidPositions, 3));
  const asteroidBelt = new THREE.Points(asteroidGeometry, new THREE.PointsMaterial({ color: 0xc1a780, size: .08, sizeAttenuation: true, transparent: true, opacity: .43 }));
  scene.add(asteroidBelt);

  const earth = objects.earth;
  const moonGroup = new THREE.Group(); earth.group.add(moonGroup);
  const moon = worldMap.moon;
  const moonRadius = .52 * moon.size;
  const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(moonRadius, 56, 40), new THREE.MeshStandardMaterial({ map: makePlanetTexture(THREE, 'moon'), roughness: 1 }));
  moonMesh.rotation.z = axialTiltDegrees.moon * Math.PI / 180;
  moonMesh.userData.worldId = 'moon'; moonGroup.add(moonMesh);
  const moonHaloOpacity = .018;
  const moonHalo = new THREE.Mesh(new THREE.SphereGeometry(moonRadius * 1.04, 36, 28), new THREE.MeshBasicMaterial({ color: 0xd6c2a8, transparent: true, opacity: moonHaloOpacity, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  moonGroup.add(moonHalo);
  const moonPickVolume = new THREE.Mesh(new THREE.SphereGeometry(Math.max(moonRadius * 1.45, .32), 20, 16), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, colorWrite: false, depthWrite: false }));
  moonPickVolume.userData.worldId = 'moon'; moonGroup.add(moonPickVolume);
  const moonLabel = makeTextSprite(THREE, 'Earth’s Moon', moon.colour); moonLabel.position.set(0, moonRadius + .22, 0); moonGroup.add(moonLabel);
  objects.moon = { world: moon, group: moonGroup, sphere: moonMesh, pickVolume: moonPickVolume, label: moonLabel, halo: moonHalo, baseHaloOpacity: moonHaloOpacity, visualRadius: moonRadius, angle: 0 };

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = .055;
  controls.minDistance = 1.35; controls.maxDistance = 110; controls.enablePan = false;
  controls.target.set(0,0,0); controls.update();
  const raycaster = new THREE.Raycaster(); raycaster.params.Points.threshold = .4;
  const pointer = new THREE.Vector2();
  let pointerDown = null;
  let speed = Number(document.getElementById('speed-range').value);
  let paused = false;
  let targetGoal = new THREE.Vector3(0,0,0);
  let cameraGoal = startCamera.clone();
  let movingCamera = false;
  let visibleFocusId = null;
  controls.addEventListener('start', () => { movingCamera = false; });
  const clock = new THREE.Clock();
  function resize() {
    const width = wrap.clientWidth, height = wrap.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (!movingCamera) {
      startCamera.copy(viewDirection).multiplyScalar(Math.max(39, 76 / Math.max(camera.aspect, .55)));
      camera.position.copy(startCamera); controls.target.set(0, 0, 0); controls.update();
    }
  }
  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(wrap);
  document.getElementById('speed-range').addEventListener('input', (event) => { speed = Number(event.target.value); document.getElementById('speed-value').textContent = `${speed.toFixed(1)}×`; });
  document.getElementById('motion-toggle').addEventListener('click', (event) => {
    paused = !paused;
    event.currentTarget.innerHTML = paused ? 'Resume <span class="motion-icon">▶</span>' : 'Pause <span class="motion-icon">Ⅱ</span>';
    event.currentTarget.setAttribute('aria-label', paused ? 'Resume planetary motion' : 'Pause planetary motion');
  });
  function focus(id) {
    const object = objects[id]; if (!object) return;
    setFocusVisibility(id);
    object.group.getWorldPosition(targetGoal);
    targetGoal.multiplyScalar(.14);
    const cameraDirection = camera.position.clone().sub(controls.target).normalize();
    const cameraDistance = Math.min(startCamera.length() * .9, camera.position.distanceTo(controls.target));
    cameraGoal.copy(cameraDirection).multiplyScalar(cameraDistance).add(targetGoal);
    movingCamera = true;
    document.getElementById('focus-name').textContent = id === 'moon' ? 'EARTH’S MOON' : id.toUpperCase();
  }
  function setFocusVisibility(id) {
    visibleFocusId = id;
    sun.visible = true; sunGlow.visible = true;
    sunLabel.visible = labelsVisible;
    orbitLines.forEach((line) => { line.visible = true; });
    asteroidBelt.visible = true;
    Object.entries(objects).forEach(([bodyId, object]) => {
      if (bodyId === 'moon') return;
      object.group.visible = true;
      object.sphere.visible = true;
      object.pickVolume.visible = true;
      object.halo.visible = true;
      object.halo.material.opacity = id === bodyId ? .32 : object.baseHaloOpacity;
      object.halo.scale.setScalar(id === bodyId ? 1.45 : 1);
      if (object.cloudLayer) object.cloudLayer.visible = true;
      object.label.visible = labelsVisible;
    });
    moonGroup.visible = true;
    objects.moon.halo.material.opacity = id === 'moon' ? .32 : objects.moon.baseHaloOpacity;
    objects.moon.halo.scale.setScalar(id === 'moon' ? 1.45 : 1);
    objects.moon.label.visible = labelsVisible;
  }
  function reset() {
    targetGoal.set(0,0,0); cameraGoal.copy(startCamera); movingCamera = true;
    setFocusVisibility(null);
    document.getElementById('focus-name').textContent = 'THE SOLAR SYSTEM';
  }
  function setLabels(visible) { labelsVisible = visible; setFocusVisibility(visibleFocusId); }
  canvas.addEventListener('pointerdown', (event) => { pointerDown = { x: event.clientX, y: event.clientY }; });
  canvas.addEventListener('pointerup', (event) => {
    if (!pointerDown || Math.hypot(event.clientX-pointerDown.x, event.clientY-pointerDown.y) > 5) { pointerDown = null; return; }
    pointerDown = null;
    const rect = canvas.getBoundingClientRect(); pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    scene.updateMatrixWorld(true);
    camera.updateMatrixWorld(true);
    const hits = raycaster.intersectObjects(Object.values(objects).map((object) => object.pickVolume), false);
    if (hits.length) selectWorld(hits[0].object.userData.worldId);
  });
  window.solarScene = { focus, reset, setLabels };

  function animate() {
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), .05);
    if (!paused) {
      orbitObjects.forEach((object, index) => {
        object.angle += delta * speed * (Math.PI * 2 / 71) * (365.2 / object.world.yearDays);
        object.group.position.copy(getOrbitPoint(THREE, object.world, object.elements, object.angle));
        object.sphere.rotation.y += delta * speed * (.28 + index * .035);
        if (object.cloudLayer) object.cloudLayer.rotation.y += delta * speed * .17;
      });
      objects.moon.angle += delta * speed * (Math.PI * 2 / 71) * (365.2 / moon.yearDays);
      sun.rotation.y += delta * speed * .018;
    }
    const moonEccentricity = .0549;
    const moonEccentricAnomaly = solveEccentricAnomaly(objects.moon.angle, moonEccentricity);
    const moonX = moon.orbit * (Math.cos(moonEccentricAnomaly) - moonEccentricity);
    const moonZ = moon.orbit * Math.sqrt(1 - moonEccentricity * moonEccentricity) * Math.sin(moonEccentricAnomaly);
    const moonInclination = 5.145 * Math.PI / 180;
    objects.moon.group.position.set(moonX, .04 + Math.sin(moonInclination) * moonZ, Math.cos(moonInclination) * moonZ);
    if (movingCamera) {
      camera.position.lerp(cameraGoal, .045); controls.target.lerp(targetGoal, .045);
      if (camera.position.distanceTo(cameraGoal) < .08 && controls.target.distanceTo(targetGoal) < .08) movingCamera = false;
    }
    controls.update(); renderer.render(scene, camera);
  }
  setLabels(labelsVisible);
  resize();
  animate();
  window.solarScene = { focus, reset, setLabels };
}

initSolarScene();
