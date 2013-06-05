// Define custom server-side HTTP routes for lineman's development server
//   These might be as simple as stubbing a little JSON to
//   facilitate development of code that interacts with an HTTP service
//   (presumably, mirroring one that will be reachable in a live environment).

// It's important to remember that any custom endpoints defined here
//   will only be available in development, as lineman only builds
//   static assets, it can't run server-side code.

// This file can be very useful for rapid prototyping or even organically
//   defining a spec based on the needs of the client code that emerge.


module.exports = {
  drawRoutes: function(app) {
    return app.get('/api/movies/boxoffice', function(req, res) {
      return res.json(
        {
          "movies": [
            {
              "id": "771246668",
              "title": "Fast & Furious 6",
              "year": 2013,
              "mpaa_rating": "PG-13",
              "runtime": 130,
              "critics_consensus": "With high-octane humor and terrific action scenes, Fast & Furious 6 builds upon the winning blockbuster formula that made Fast 5 a critical and commercial success.",
              "release_dates": {
                "theater": "2013-05-24"
              },
              "ratings": {
                "critics_rating": "Certified Fresh",
                "critics_score": 72,
                "audience_rating": "Upright",
                "audience_score": 87
              },
              "synopsis": "Vin Diesel, Paul Walker and Dwayne Johnson lead the returning cast of all-stars as the global blockbuster franchise built on speed races to its next continent in Fast & Furious 6. Reuniting for their most high-stakes adventure yet, fan favorites Jordana Brewster, Michelle Rodriguez, Tyrese Gibson, Sung Kang, Gal Gadot, Chris \"Ludacris\" Bridges and Elsa Pataky are joined by badass series newcomers Luke Evans and Gina Carano. Since Dom (Diesel) and Brian's (Walker) Rio heist toppled a kingpin's empire and left their crew with $100 million, our heroes have scattered across the globe. But their inability to return home and living forever on the lam have left their lives incomplete. Meanwhile, Hobbs (Johnson) has been tracking an organization of lethally skilled mercenary drivers across 12 countries, whose mastermind (Evans) is aided by a ruthless second-in-command revealed to be the love Dom thought was dead, Letty (Rodriguez). The only way to stop the criminal outfit is to outmatch them at street level, so Hobbs asks Dom to assemble his elite team in London. Payment? Full pardons for all of them so they can return home and make their families whole again. Building on the worldwide blockbuster success of Fast Five and taking the action, stunts and narrative to even greater heights, Fast & Furious 6 sees director Justin Lin back behind the camera for the fourth time. He is supported by longtime producers Neal H. Moritz and Vin Diesel, who welcome producer Clayton Townsend back to the series. (c) Fox",
              "posters": {
                "thumbnail": "http://content8.flixster.com/movie/11/16/92/11169222_mob.jpg",
                "profile": "http://content8.flixster.com/movie/11/16/92/11169222_pro.jpg",
                "detailed": "http://content8.flixster.com/movie/11/16/92/11169222_det.jpg",
                "original": "http://content8.flixster.com/movie/11/16/92/11169222_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Vin Diesel",
                  "id": "162652472",
                  "characters": [
                    "Dominic Toretto"
                  ]
                },
                {
                  "name": "Paul Walker",
                  "id": "162654234",
                  "characters": [
                    "Brian O'Conner"
                  ]
                },
                {
                  "name": "Dwayne \"The Rock\" Johnson",
                  "id": "770893686",
                  "characters": [
                    "Hobbs"
                  ]
                },
                {
                  "name": "Jordana Brewster",
                  "id": "162662313",
                  "characters": [
                    "Mia"
                  ]
                },
                {
                  "name": "Michelle Rodriguez",
                  "id": "162668831",
                  "characters": [
                    "Letty"
                  ]
                }
              ],
              "alternate_ids": {
                "imdb": "1905041"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668.json",
                "alternate": "http://www.rottentomatoes.com/m/fast_and_furious_6/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/similar.json"
              }
            },
            {
              "id": "771245005",
              "title": "Now You See Me",
              "year": 2013,
              "mpaa_rating": "PG-13",
              "runtime": 116,
              "critics_consensus": "Now You See Me's thinly sketched characters and scattered plot rely on directorial sleight of hand to distract audiences -- and director Louis Leterrier lacks sufficient cinematic prestidigitation to pull it off in the final act.",
              "release_dates": {
                "theater": "2013-05-31"
              },
              "ratings": {
                "critics_rating": "Rotten",
                "critics_score": 41,
                "audience_rating": "Upright",
                "audience_score": 75
              },
              "synopsis": "NOW YOU SEE ME pits an elite FBI squad in a game of cat and mouse against \"The Four Horsemen\", a super-team of the world's greatest illusionists. \"The Four Horsemen\" pull off a series of daring heists against corrupt business leaders during their performances, showering the stolen profits on their audiences while staying one step ahead of the law. (c) Summit/Lionsgate",
              "posters": {
                "thumbnail": "http://content6.flixster.com/movie/11/17/04/11170496_mob.jpg",
                "profile": "http://content6.flixster.com/movie/11/17/04/11170496_pro.jpg",
                "detailed": "http://content6.flixster.com/movie/11/17/04/11170496_det.jpg",
                "original": "http://content6.flixster.com/movie/11/17/04/11170496_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Jesse Eisenberg",
                  "id": "162654393",
                  "characters": [
                    "J. Daniel Atlas"
                  ]
                },
                {
                  "name": "Mark Ruffalo",
                  "id": "162653904",
                  "characters": [
                    "Dylan Rhodes"
                  ]
                },
                {
                  "name": "Woody Harrelson",
                  "id": "162654250",
                  "characters": [
                    "Merritt McKinney"
                  ]
                },
                {
                  "name": "Isla Fisher",
                  "id": "162652839",
                  "characters": [
                    "Henley Reeves"
                  ]
                },
                {
                  "name": "Dave Franco",
                  "id": "770703179",
                  "characters": [
                    "Jack Wilder"
                  ]
                }
              ],
              "alternate_ids": {
                "imdb": "1670345"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005.json",
                "alternate": "http://www.rottentomatoes.com/m/now_you_see_me/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/similar.json"
              }
            },
            {
              "id": "771268396",
              "title": "After Earth",
              "year": 2013,
              "mpaa_rating": "PG-13",
              "runtime": 100,
              "critics_consensus": "After Earth is dull, ploddingly paced exercise in sentimental sci-fi -- and the latest setback for director M. Night Shyamalan's once-promising career.",
              "release_dates": {
                "theater": "2013-05-31"
              },
              "ratings": {
                "critics_rating": "Rotten",
                "critics_score": 12,
                "audience_rating": "Spilled",
                "audience_score": 50
              },
              "synopsis": "A crash landing leaves teenager Kitai Raige (Jaden Smith) and his legendary father Cypher (Will Smith) stranded on Earth, 1,000 years after cataclysmic events forced humanity's escape. With Cypher critically injured, Kitai must embark on a perilous journey to signal for help, facing uncharted terrain, evolved animal species that now rule the planet, and an unstoppable alien creature that escaped during the crash. Father and son must learn to work together and trust one another if they want any chance of returning home. (c) Sony",
              "posters": {
                "thumbnail": "http://content6.flixster.com/movie/11/17/10/11171008_mob.jpg",
                "profile": "http://content6.flixster.com/movie/11/17/10/11171008_pro.jpg",
                "detailed": "http://content6.flixster.com/movie/11/17/10/11171008_det.jpg",
                "original": "http://content6.flixster.com/movie/11/17/10/11171008_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Will Smith",
                  "id": "162659361"
                },
                {
                  "name": "Jaden Smith",
                  "id": "364618979"
                },
                {
                  "name": "Zoe Kravitz",
                  "id": "770695268"
                },
                {
                  "name": "Sophie Okonedo",
                  "id": "162683687"
                }
              ],
              "alternate_ids": {
                "imdb": "1815862"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396.json",
                "alternate": "http://www.rottentomatoes.com/m/after_earth/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/similar.json"
              }
            },
            {
              "id": "771190753",
              "title": "Star Trek Into Darkness",
              "year": 2013,
              "mpaa_rating": "PG-13",
              "runtime": 129,
              "critics_consensus": "Visually spectacular and suitably action packed, Star Trek Into Darkness is a rock-solid installment in the venerable sci-fi franchise, even if it's not as fresh as its predecessor.",
              "release_dates": {
                "theater": "2013-05-16"
              },
              "ratings": {
                "critics_rating": "Certified Fresh",
                "critics_score": 87,
                "audience_rating": "Upright",
                "audience_score": 92
              },
              "synopsis": "In Summer 2013, pioneering director J.J. Abrams will deliver an explosive action thriller that takes 'Star Trek Into Darkness.' When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis. With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew. (c) Paramount",
              "posters": {
                "thumbnail": "http://content7.flixster.com/movie/11/17/12/11171241_mob.jpg",
                "profile": "http://content7.flixster.com/movie/11/17/12/11171241_pro.jpg",
                "detailed": "http://content7.flixster.com/movie/11/17/12/11171241_det.jpg",
                "original": "http://content7.flixster.com/movie/11/17/12/11171241_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Chris Pine",
                  "id": "326393041",
                  "characters": [
                    "Kirk"
                  ]
                },
                {
                  "name": "Zachary Quinto",
                  "id": "770678894",
                  "characters": [
                    "Spock"
                  ]
                },
                {
                  "name": "Zoe Saldana",
                  "id": "162660050",
                  "characters": [
                    "Uhura"
                  ]
                },
                {
                  "name": "Karl Urban",
                  "id": "162654704",
                  "characters": [
                    "Bones"
                  ]
                },
                {
                  "name": "Simon Pegg",
                  "id": "162684057",
                  "characters": [
                    "Scotty"
                  ]
                }
              ],
              "alternate_ids": {
                "imdb": "1408101"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753.json",
                "alternate": "http://www.rottentomatoes.com/m/star_trek_into_darkness/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/similar.json"
              }
            },
            {
              "id": "771249677",
              "title": "Epic",
              "year": 2013,
              "mpaa_rating": "PG",
              "runtime": 104,
              "critics_consensus": "Though its narrative themes are all too familiar, Epic is beautifully animated and crafted with just enough flair to make for solid family entertainment.",
              "release_dates": {
                "theater": "2013-05-24"
              },
              "ratings": {
                "critics_rating": "Fresh",
                "critics_score": 61,
                "audience_rating": "Upright",
                "audience_score": 67
              },
              "synopsis": "EPIC is a 3D CG adventure comedy that reveals a fantastical world unlike any other. From the creators of ICE AGE and RIO, EPIC tells the story of an ongoing battle between the forces of good, who keep the natural world alive, and the forces of evil, who wish to destroy it. When a teenage girl finds herself magically transported into this secret universe, she teams up with an elite band of warriors and a crew of comical, larger-than-life figures, to save their world...and ours. -- (C) Fox",
              "posters": {
                "thumbnail": "http://content7.flixster.com/movie/11/17/15/11171541_mob.jpg",
                "profile": "http://content7.flixster.com/movie/11/17/15/11171541_pro.jpg",
                "detailed": "http://content7.flixster.com/movie/11/17/15/11171541_det.jpg",
                "original": "http://content7.flixster.com/movie/11/17/15/11171541_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Beyonce Knowles",
                  "id": "326395404",
                  "characters": [
                    "Queen Tara"
                  ]
                },
                {
                  "name": "Colin Farrell",
                  "id": "162665297",
                  "characters": [
                    "Ronin"
                  ]
                },
                {
                  "name": "Josh Hutcherson",
                  "id": "162654356",
                  "characters": [
                    "Nod"
                  ]
                },
                {
                  "name": "Amanda Seyfried",
                  "id": "364614826",
                  "characters": [
                    "M.K.",
                    "Mary Katherine"
                  ]
                },
                {
                  "name": "Christoph Waltz",
                  "id": "770738334",
                  "characters": [
                    "Mandrake"
                  ]
                }
              ],
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677.json",
                "alternate": "http://www.rottentomatoes.com/m/epic_2013/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/similar.json"
              }
            },
            {
              "id": "771268395",
              "title": "The Hangover Part III",
              "year": 2013,
              "mpaa_rating": "R",
              "runtime": 100,
              "critics_consensus": "Less a comedy than an angrily dark action thriller, The Hangover Part III diverges from the series' rote formula but offers nothing compelling in its place.",
              "release_dates": {
                "theater": "2013-05-23"
              },
              "ratings": {
                "critics_rating": "Rotten",
                "critics_score": 20,
                "audience_rating": "Spilled",
                "audience_score": 50
              },
              "synopsis": "\"The Hangover Part III\" is the third and final film in director Todd Phillips' record-shattering comedy franchise. This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off. (c) WB",
              "posters": {
                "thumbnail": "http://content8.flixster.com/movie/11/17/08/11170890_mob.jpg",
                "profile": "http://content8.flixster.com/movie/11/17/08/11170890_pro.jpg",
                "detailed": "http://content8.flixster.com/movie/11/17/08/11170890_det.jpg",
                "original": "http://content8.flixster.com/movie/11/17/08/11170890_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Bradley Cooper",
                  "id": "351525448",
                  "characters": [
                    "Phil"
                  ]
                },
                {
                  "name": "Ed Helms",
                  "id": "770691762",
                  "characters": [
                    "Stu"
                  ]
                },
                {
                  "name": "Zach Galifianakis",
                  "id": "162655230",
                  "characters": [
                    "Alan"
                  ]
                },
                {
                  "name": "Justin Bartha",
                  "id": "162659095",
                  "characters": [
                    "Doug"
                  ]
                },
                {
                  "name": "Ken Jeong",
                  "id": "770692484",
                  "characters": [
                    "Mr. Chow"
                  ]
                }
              ],
              "alternate_ids": {
                "imdb": "1951261"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395.json",
                "alternate": "http://www.rottentomatoes.com/m/the_hangover_part_iii/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/similar.json"
              }
            },
            {
              "id": "771217285",
              "title": "Iron Man 3",
              "year": 2013,
              "mpaa_rating": "PG-13",
              "runtime": 109,
              "critics_consensus": "With the help of its charismatic lead, some impressive action sequences, and even a few surprises, Iron Man 3 is a witty, entertaining adventure and a strong addition to the Marvel canon.",
              "release_dates": {
                "theater": "2013-05-03"
              },
              "ratings": {
                "critics_rating": "Certified Fresh",
                "critics_score": 78,
                "audience_rating": "Upright",
                "audience_score": 83
              },
              "synopsis": "Marvel's \"Iron Man 3\" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man? (c) Disney",
              "posters": {
                "thumbnail": "http://content8.flixster.com/movie/11/17/05/11170594_mob.jpg",
                "profile": "http://content8.flixster.com/movie/11/17/05/11170594_pro.jpg",
                "detailed": "http://content8.flixster.com/movie/11/17/05/11170594_det.jpg",
                "original": "http://content8.flixster.com/movie/11/17/05/11170594_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Robert Downey Jr.",
                  "id": "162654529",
                  "characters": [
                    "Tony Stark",
                    "Tony Stark/Iron Man"
                  ]
                },
                {
                  "name": "Gwyneth Paltrow",
                  "id": "162653966",
                  "characters": [
                    "Pepper Potts"
                  ]
                },
                {
                  "name": "Don Cheadle",
                  "id": "162652206",
                  "characters": [
                    "Colonel James Rhodes",
                    "James \"Rhodey\" Rhodes",
                    "Lt. Col. James 'Rhodey' Rhodes"
                  ]
                },
                {
                  "name": "Guy Pearce",
                  "id": "162660324",
                  "characters": [
                    "Aldrich Killian"
                  ]
                },
                {
                  "name": "Rebecca Hall",
                  "id": "355028248",
                  "characters": [
                    "Maya Hansen"
                  ]
                }
              ],
              "alternate_ids": {
                "imdb": "1300854"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771217285.json",
                "alternate": "http://www.rottentomatoes.com/m/iron_man_3/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771217285/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771217285/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771217285/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771217285/similar.json"
              }
            },
            {
              "id": "771240552",
              "title": "The Great Gatsby",
              "year": 2013,
              "mpaa_rating": "PG-13",
              "runtime": 143,
              "critics_consensus": "While certainly ambitious -- and every bit as visually dazzling as one might expect -- Baz Luhrmann's The Great Gatsby emphasizes visual splendor at the expense of its source material's vibrant heart.",
              "release_dates": {
                "theater": "2013-05-10",
                "dvd": "2013-09-09"
              },
              "ratings": {
                "critics_rating": "Rotten",
                "critics_score": 50,
                "audience_rating": "Upright",
                "audience_score": 72
              },
              "synopsis": "\"The Great Gatsby\" follows Fitzgerald-like, would-be writer Nick Carraway (Tobey Maguire) as he leaves the Midwest and comes to New York City in the spring of 1922, an era of loosening morals, glittering jazz, bootleg kings, and sky-rocketing stocks. Chasing his own American Dream, Nick lands next door to a mysterious, party-giving millionaire, Jay Gatsby (Leonardo DiCaprio), and across the bay from his cousin, Daisy (Carey Mulligan), and her philandering, blue-blooded husband, Tom Buchanan (Joel Edgerton). It is thus that Nick is drawn into the captivating world of the super rich, their illusions, loves and deceits. As Nick bears witness, within and without of the world he inhabits, he pens a tale of impossible love, incorruptible dreams and high-octane tragedy, and holds a mirror to our own modern times and struggles. -- (C) WB",
              "posters": {
                "thumbnail": "http://content7.flixster.com/movie/11/17/12/11171265_mob.jpg",
                "profile": "http://content7.flixster.com/movie/11/17/12/11171265_pro.jpg",
                "detailed": "http://content7.flixster.com/movie/11/17/12/11171265_det.jpg",
                "original": "http://content7.flixster.com/movie/11/17/12/11171265_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Leonardo DiCaprio",
                  "id": "162659161",
                  "characters": [
                    "Jay Gatsby"
                  ]
                },
                {
                  "name": "Tobey Maguire",
                  "id": "162660340",
                  "characters": [
                    "Nick Carraway"
                  ]
                },
                {
                  "name": "Carey Mulligan",
                  "id": "770678627",
                  "characters": [
                    "Daisy Buchanan"
                  ]
                },
                {
                  "name": "Isla Fisher",
                  "id": "162652839",
                  "characters": [
                    "Myrtle",
                    "Myrtle Wilson"
                  ]
                },
                {
                  "name": "Joel Edgerton",
                  "id": "162733204",
                  "characters": [
                    "Tom Buchanan"
                  ]
                }
              ],
              "alternate_ids": {
                "imdb": "1343092"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771240552.json",
                "alternate": "http://www.rottentomatoes.com/m/the_great_gatsby_2012/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771240552/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771240552/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771240552/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771240552/similar.json"
              }
            },
            {
              "id": "771352819",
              "title": "Yeh Jawaani Hai Deewani",
              "year": 2013,
              "mpaa_rating": "Unrated",
              "runtime": 125,
              "release_dates": {
                "theater": "2013-05-31",
                "dvd": "2013-07-15"
              },
              "ratings": {
                "critics_score": -1,
                "audience_rating": "Upright",
                "audience_score": 68
              },
              "synopsis": "Wake up Sid's director makes his 2nd film with Dharma Productions. Starring Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur & Kalki Koechlin. This movie is slated to release on 31st May, 2013. (c) Official Facebook",
              "posters": {
                "thumbnail": "http://content7.flixster.com/movie/11/17/15/11171573_mob.jpg",
                "profile": "http://content7.flixster.com/movie/11/17/15/11171573_pro.jpg",
                "detailed": "http://content7.flixster.com/movie/11/17/15/11171573_det.jpg",
                "original": "http://content7.flixster.com/movie/11/17/15/11171573_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Deepika Padukone",
                  "id": "451735084"
                },
                {
                  "name": "Ranbir Kapoor",
                  "id": "770678460"
                },
                {
                  "name": "Kalki Koechlin",
                  "id": "770830186"
                }
              ],
              "alternate_ids": {
                "imdb": "2178470"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771352819.json",
                "alternate": "http://www.rottentomatoes.com/m/yeh_jawaani_hai_deewani_2013/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771352819/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771352819/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771352819/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771352819/similar.json"
              }
            },
            {
              "id": "771307452",
              "title": "Mud",
              "year": 2013,
              "mpaa_rating": "PG-13",
              "runtime": 130,
              "critics_consensus": "Bolstered by a strong performance from Matthew McConaughey in the title role, Mud offers an engaging Southern drama that manages to stay sweet and heartwarming without being sappy.",
              "release_dates": {
                "theater": "2013-04-26",
                "dvd": "2013-08-06"
              },
              "ratings": {
                "critics_rating": "Certified Fresh",
                "critics_score": 99,
                "audience_rating": "Upright",
                "audience_score": 87
              },
              "synopsis": "Mud is an adventure about two boys, Ellis and his friend Neckbone, who find a man named Mud hiding out on an island in the Mississippi. Mud describes fantastic scenarios-he killed a man in Texas and vengeful bounty hunters are coming to get him. He says he is planning to meet and escape with the love of his life, Juniper, who is waiting for him in town. Skeptical but intrigued, Ellis and Neckbone agree to help him. It isn't long until Mud's visions come true and their small town is besieged by a beautiful girl with a line of bounty hunters in tow. (c) Roadside Attractions",
              "posters": {
                "thumbnail": "http://content7.flixster.com/movie/11/16/93/11169361_mob.jpg",
                "profile": "http://content7.flixster.com/movie/11/16/93/11169361_pro.jpg",
                "detailed": "http://content7.flixster.com/movie/11/16/93/11169361_det.jpg",
                "original": "http://content7.flixster.com/movie/11/16/93/11169361_ori.jpg"
              },
              "abridged_cast": [
                {
                  "name": "Matthew McConaughey",
                  "id": "162652350"
                },
                {
                  "name": "Reese Witherspoon",
                  "id": "162653903"
                },
                {
                  "name": "Tye Sheridan",
                  "id": "771102163"
                },
                {
                  "name": "Jacob Lofland",
                  "id": "771409313"
                },
                {
                  "name": "Michael Shannon",
                  "id": "368451324"
                }
              ],
              "alternate_ids": {
                "imdb": "1935179"
              },
              "links": {
                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307452.json",
                "alternate": "http://www.rottentomatoes.com/m/mud_2012/",
                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307452/cast.json",
                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307452/clips.json",
                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307452/reviews.json",
                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307452/similar.json"
              }
            }
          ],
          "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country=us",
            "alternate": "http://www.rottentomatoes.com/movie/box-office/"
          },
          "link_template": "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit={num-results}&country={country-code}"
        }
      );
    });
  }
};
