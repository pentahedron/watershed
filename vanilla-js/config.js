var config = {
    style: 'mapbox://styles/petitcodiacwatershedalliance/ckho796uq1jvg19o2mc1wncqm',
    accessToken: 'pk.eyJ1IjoicGV0aXRjb2RpYWN3YXRlcnNoZWRhbGxpYW5jZSIsImEiOiJja2hudWp5eDIwYXNoMnFtaWo3Y284NnNzIn0.2wyTe0GAxfMMmEud11kU4w',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Petitcodiac Watershed',
    subtitle: '',
    byline: 'Petitcodiac Watershed Alliance',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            image: './images/target.svg',
            description: 'The Petitcodiac Watershed Alliance (PWA) focuses its efforts as an organization within the boundaries of the <b>Petitcodiac and Memramcook River Watersheds</b>.',
            location: {
                center: [-64.88724, 45.96968],
                zoom: 9.92,
                pitch: 60.00,
                bearing: -0.71
            },
            onChapterEnter: [
                                {
                 layer: 'totalwcv2',
                 opacity: 0
            }
            ],
            onChapterExit: [
                {
                    layer: 'totalwcv2',
                    opacity: 0
               }
            ]
        },
        {
            id: 'other-identifier',
            image: './path/to/image/source.png',
            description: 'Both of these rivers empty into the Shepody Bay, which is the northeastern section of the larger and beloved Bay of Fundy. Each of these watersheds has many tributaries which the PWA monitors on a monthly basis, and are the focus of our many other projects.',
            location: {
                center: [-64.54608, 45.72997],
                zoom: 9.79,
                pitch: 0.00,
                bearing: -3.04
            },
            //onChapterEnter: [
            //                    {
            //     layer: 'membres1',
            //     opacity: 1
            //}
            //],
            //onChapterExit: [
            //    {
            //        layer: 'membres1',
            //        opacity: 0
            //   }
            //]
        },
        {
            id: 'what-watershed',
            title: "What is a 'watershed'?",
            image: './path/to/image/source.png',
            description: '<b>A watershed is a topographically defined area of land where the water within it flows to a common point.</b><p>In our watershed, that common point is the Petitcodiac River. Within a watershed, surface and groundwater are generally connected as water flows across the landscape and through waterways, or vertically through the various layers of soil and substrate. This movement of water across and through the landscape connects an area hydrologically.',
            location: {
                center: [-65.08344, 45.94583],
                zoom: 8.85,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                                {
                 layer: 'totalwcv2',
                 opacity: 1
            }
            ],
            onChapterExit: [
                {
                    layer: 'totalwcv2',
                    opacity: 1
               }
            ]
            },
        {
            id: 'why-watershed',
            title: "Why are watersheds important?",
            image: './path/to/image/source.png',
            description: '<b>Any activity that affects water quality, quantity, or flow rate in one part of the watershed may affect locations downstream.</b><p>Understanding this connectivity within a watershed is helpful when planning or managing activities for the future. For this reason, to protect our water resources requires us to protect the land within our watersheds.',
            location: {
                center: [-65.05712, 45.96221],
                zoom: 10.29,
                pitch: 60.00,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                layer: 'totalwcv2',
                opacity: 1
            }
            ],
            onChapterExit: [
                {
                layer: 'totalwcv2',
                opacity: 0
                }
        ]
        },
        {
            id: 'prw',
            title: "The Petitcodiac River Watershed",
            image: './path/to/image/source.png',
            description: 'The Petitcodiac River is a major drainage basin in Southeastern New Brunswick. It stretches from the boundaries of Fundy National Park, through Petitcodiac, into the Greater Moncton area and towards Hillsborough. <p>The total drainage area of the Petitcodiac Watershed is 2,831 square kilometers and it has more than 30 tributaries. It is home to more than 110,000 people and is one of the most heavily populated and fastest growing regions within the province of New Brunswick, most of whom live within an hours drive of the tri‐city area of Moncton, Riverview and Dieppe.<p><b>Click the links below for more information on the tributaries of the Petitcodiac River:</b><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/anagance-river/">Anagance River</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/pollett-river/">Pollett River</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/north-river/">North River</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/little-river/">Little River</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/jonathan-creek-and-jones-lake/">Jonathan Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/halls-creek/">Halls Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/humphreys-brook/">Humphreys Brook</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/mill-creek/">Mill Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/fox-creek/">Fox Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/turtle-creek/">Turtle Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/rabbit-brook/">Rabbit Brook</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/weldon-creek/">Weldon Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/michaels-brook/">Michaels Brook</a>',
            location: {
                center: [-64.97297, 45.82465],
                zoom: 9.92,
                pitch: 48.00,
                bearing: 0.00
            },
            onChapterEnter: [
                                {
                 layer: 'petitwcv2',
                 opacity: 1
            }
            ],
            onChapterExit: [
                {
                    layer: 'petitwcv2',
                    opacity: 0
               }
            ]
        },
        {
            id: 'mrw',
            title: "The Memramcook River Watershed",
            image: './path/to/image/source.png',
            description: 'The Memramcook River has a drainage area of 400 km², including several small tributaries. It is host to land uses such as wooded areas, farms, quarries, highways, and houses for the most part. The watersheds contain a diversity of natural forms and ecological regions and must support a wide range of human land uses. The Memramcook River stretches from the upper reaches in Painsec which remain largely wooded, to the more residential communities of Memramcook and Dorchester. It empties into the mouth of the Petitcodiac River, which together form the start of the Shepody Bay.<p><b>Click the links below for more information on the tributaries of Memramcook river.</b><p>- <a href="https://web.archive.org/web/20160709160211/http://petitcodiacwatershed.org/education/watershed/stony-creek/">Stony Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/meadow-brook/">Meadow Brook</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/breau-creek/">Breau Creek</a><p>- <a href="https://web.archive.org/web/20160709160332/http://petitcodiacwatershed.org/education/watershed/smith-creek/">Smith Creek</a>',
            location: {
                center: [-64.64820, 45.96592],
                zoom: 9.92,
                pitch: 1.00,
                bearing: -19.98
            },
            onChapterEnter: [
                                {                   
                layer: 'memramwcv2',
                opacity: 1
            }
            ],
            onChapterExit: [
                {
                layer: 'memramwcv2',
                opacity: 0
               }
            ]
        },
    ]
};
