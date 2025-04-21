import BrBa3 from "../videos/Breaking Bad Deluxe Edition_ Season 3 Trailer.mp4";
import BrBa2 from "../videos/Breaking Bad Extended Trailer Season 2 (HD).mp4";
import BrBa1 from "../videos/Breaking Bad Trailer (First Season).mp4";
import BrBa4 from "../videos/Breaking Bad Season 4 Trailer.mp4";
import BrBa5 from "../videos/BREAKING BAD_ Season 5 - Official Trailer (2021).mp4";
import Godfather from "../videos/THE GODFATHER _ 50th Anniversary Trailer _ Paramount Pictures.mp4";
import Inception from "../videos/Inception (2010) Official Trailer .mp4";
import Pulp from "../videos/Pulp Fiction Official Trailer .mp4";
import TDK from "../videos/The Dark Knight (2008) Official Trailer .mp4";
import FG from "../videos/FORREST GUMP _ Official 25th Anniversary Trailer _ Paramount Movies.mp4";
import terminator from "../videos/terminator.mp4";
import ozy from "../videos/videoplayback.mp4";
const List = [
  {
    title: "The Godfather",
    description:
      "A crime drama about the powerful Italian-American crime family of Don Vito Corleone.",
    id: "MOV001",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: Godfather,
    imdb_score: 9.2,
    metascore: 100,
    type: "movie",
  },
  {
    title: "Breaking Bad",
    description:
      "A chemistry teacher turned methamphetamine producer navigates the dangers of the drug trade.",
    id: "TV001",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s",
    trailer_url: "",
    imdb_score: 9.5,
    metascore: 96,
    type: "tv_show",
    seasons: {
      1: {
        episodes: 7,
        release_year: 2008,
        avg_rating: 8.9,
        episodeTitles: {
          1: "Pilot",
          2: "Cat's in the Bag...",
          3: "...And the Bag's in the River",
          4: "Cancer Man",
          5: "Gray Matter",
          6: "Crazy Handful of Nothin'",
          7: "A No‑Rough‑Stuff‑Type Deal",
        },
        episodeDescriptions: {
          1: "Walter White celebrates his 50th birthday, learns he has lung cancer, and teams up with Jesse Pinkman to make meth.",
          2: "Walt and Jesse clean up after their first cook; Walt wrestles with killing their captive, Krazy‑8.",
          3: "Jesse flushes Emilio’s body; Walt discovers Krazy‑8 is still alive, then kills him when his life is threatened.",
          4: "Walt reveals his cancer to Skyler; Jesse struggles with his parents and Walt begins treatment.",
          5: "Walt declines a job at Gray Matter; Jesse botches a cook, and Walt lies to cover treatment costs.",
          6: "Walt starts chemo; Jesse works with Tuco after a violent first meeting.",
          7: "Walt and Jesse steal methylamine; Skyler’s baby shower erupts into chaos; they face off with Tuco.",
        },
        episodeTrailer_url: {
          1: BrBa1,
          2: BrBa1,
          3: BrBa1,
          4: BrBa1,
          5: BrBa1,
          6: BrBa1,
          7: BrBa1,
        },
      },
      2: {
        episodes: 13,
        release_year: 2009,
        avg_rating: 9.1,
        episodeTitles: {
          1: "Seven Thirty-Seven",
          2: "Grilled",
          3: "Bit by a Dead Bee",
          4: "Down",
          5: "Breakage",
          6: "Peekaboo",
          7: "Negro y Azul",
          8: "Better Call Saul",
          9: "4 Days Out",
          10: "Over",
          11: "Mandala",
          12: "Phoenix",
          13: "ABQ",
        },
        episodeDescriptions: {
          1: "Walt and Jesse learn Tuco plans violence; Walt considers drastic action to protect their business.",
          2: "Walt and Jesse are held hostage by a crazed Tuco in the desert; Hank tries to track them down.",
          3: "Walt re-enters normal life; Jesse covers up his disappearance; Skyler files for divorce.",
          4: "Jesse hits rock bottom and tries to reconnect with normalcy; Walt struggles with family tensions.",
          5: "Walt and Jesse deal with the fallout of selling meth; Hank investigates the new distribution.",
          6: "Jesse befriends a neglected kid to recover stolen cash; Walt repairs his RV.",
          7: "A drug lord in Mexico learns about Walt’s blue meth, setting new stakes.",
          8: "Walt hires Saul Goodman as his lawyer; Jesse gets mixed up in a new scheme.",
          9: "Walt and Jesse get stranded in the desert for four days during a cook-outage.",
          10: "Walt celebrates recovery from cancer but faces a new midlife crisis.",
          11: "Jesse’s girlfriend dies; Jesse spirals; Walt struggles to juggle chemo and meth.",
          12: "Walt’s lies catch up when Jane’s overdose forces Jesse into despair.",
          13: "A tragic mid-air collision caused by Jesse and Jane’s tragedy leaves Walt reeling.",
        },
        episodeTrailer_url: {
          1: BrBa2,
          2: BrBa2,
          3: BrBa2,
          4: BrBa2,
          5: BrBa2,
          6: BrBa2,
          7: BrBa2,
          8: BrBa2,
          9: BrBa2,
          10: BrBa2,
          11: BrBa2,
          12: BrBa2,
          13: BrBa2,
        },
      },
      3: {
        episodes: 13,
        release_year: 2010,
        avg_rating: 9.3,
        episodeTitles: {
          1: "No Más",
          2: "Caballo Sin Nombre",
          3: "I.F.T.",
          4: "Green Light",
          5: "Más",
          6: "Sunset",
          7: "One Minute",
          8: "I See You",
          9: "Kafkaesque",
          10: "Fly",
          11: "Abiquiu",
          12: "Half Measures",
          13: "Full Measure",
        },
        episodeDescriptions: {
          1: "Walt resumes meth cooking; Skyler reacts to Jesse’s scene at the White home.",
          2: "Jesse struggles at home; Walt plots to re-enter Gus’s operation.",
          3: "Skyler and Walt’s marriage unravels; Walt steps up production.",
          4: "Walt sabotages business rivals; Jesse persists despite threats.",
          5: "Walt negotiates with Gus while Jesse tries to move on.",
          6: "Hank targets Walt’s operation; Jesse flees after a violent altercation.",
          7: "Marie receives a call that leads to a deadly confrontation.",
          8: "Walt and Skyler spin tales to cover their crimes; Hank recovers.",
          9: "Walt and Jesse face a crisis in their operation’s logistics.",
          10: "Walt obsesses over a contaminant in the lab.",
          11: "Walt hides a secret in the desert near Abiquiu.",
          12: "Jesse almost kills a dealer in revenge; Walt counsels him to restraint.",
          13: "Walt’s life and Jesse’s loyalties collide in a climactic escape.",
        },
        episodeTrailer_url: {
          1: BrBa3,
          2: BrBa3,
          3: BrBa3,
          4: BrBa3,
          5: BrBa3,
          6: BrBa3,
          7: BrBa3,
          8: BrBa3,
          9: BrBa3,
          10: BrBa3,
          11: BrBa3,
          12: BrBa3,
          13: BrBa3,
        },
      },
      4: {
        episodes: 13,
        release_year: 2011,
        avg_rating: 9.6,
        episodeTitles: {
          1: "Box Cutter",
          2: "Thirty-Eight Snub",
          3: "Open House",
          4: "Bullet Points",
          5: "Shotgun",
          6: "Cornered",
          7: "Problem Dog",
          8: "Hermanos",
          9: "Bug",
          10: "Salud",
          11: "Crawl Space",
          12: "End Times",
          13: "Face Off",
        },
        episodeDescriptions: {
          1: "Gus punishes an associate to reassert control; Walt and Jesse’s lab is shut down.",
          2: "Walt celebrates wealth but fears Gus; Jesse acquires a weapon.",
          3: "Skyler buys a home with criminal proceeds; Walt grows isolated.",
          4: "Hank investigates the White family’s money trail.",
          5: "Jesse and Mike bond on a meth run in El Paso.",
          6: "Walt spirals amid Dobermann threats; Skyler confronts him.",
          7: "Jesse seeks therapy for his conscience; Walt pulls him back in.",
          8: "Mike recounts Gus’s rise; Walt and Jesse regroup.",
          9: "Walt installs surveillance on Jesse; paranoia mounts.",
          10: "Gus tests loyalty in Mexico; Jesse endures a fatal demonstration.",
          11: "Walt hides cash in an unreachable crawl space.",
          12: "Jesse sabotages Gus’s plan; Skyler fears for Walt.",
          13: "Walt and Jesse plot to eliminate Gus in a high‐stakes finale.",
        },
        episodeTrailer_url: {
          1: BrBa4,
          2: BrBa4,
          3: BrBa4,
          4: BrBa4,
          5: BrBa4,
          6: BrBa4,
          7: BrBa4,
          8: BrBa4,
          9: BrBa4,
          10: BrBa4,
          11: BrBa4,
          12: BrBa4,
          13: BrBa4,
        },
      },
      5: {
        episodes: 16,
        release_year: 2012,
        avg_rating: 9.7,
        episodeTitles: {
          1: "Live Free or Die",
          2: "Madrigal",
          3: "Hazard Pay",
          4: "Fifty-One",
          5: "Dead Freight",
          6: "Buyout",
          7: "Say My Name",
          8: "Gliding Over All",
          9: "Blood Money",
          10: "Buried",
          11: "Confessions",
          12: "Rabid Dog",
          13: "To'hajiilee",
          14: "Ozymandias",
          15: "Granite State",
          16: "Felina",
        },
        episodeDescriptions: {
          1: "Walt, Jesse, and Mike destroy evidence in the lab; DEA tightens the noose.",
          2: "Corporate parent Madoff’s execs face fallout; Walt seeks new distribution.",
          3: "Walt’s crew cooks meth in a secret lab; tensions rise.",
          4: "Walt celebrates a birthday milestone amid mounting threats.",
          5: "A daring train heist nets methylamine but costs innocence.",
          6: "Partners contemplate selling out; Walt plays mediator.",
          7: "Walt demands recognition; Jesse and Walt strike fear into rivals.",
          8: "Walt consolidates power, ordering hits across the cartel.",
          9: "Walt returns home; Hank discovers the truth.",
          10: "Walt buries secrets as family implodes.",
          11: "Hank and Marie turn the tables with a confession.",
          12: "Jesse plots revenge as Walt’s empire fractures.",
          13: "A desert standoff marks collapse of friendships.",
          14: "Everything unravels in one of TV’s greatest episodes.",
          15: "Walt hides in exile as his family suffers.",
          16: "Walt returns for one final reckoning and redemption.",
        },
        episodeTrailer_url: {
          1: BrBa5,
          2: BrBa5,
          3: BrBa5,
          4: BrBa5,
          5: BrBa5,
          6: BrBa5,
          7: BrBa5,
          8: BrBa5,
          9: BrBa5,
          10: BrBa5,
          11: BrBa5,
          12: BrBa5,
          13: BrBa5,
          14: ozy,
          15: BrBa5,
          16: BrBa5,
        },
      },
    },
    fun_fact:
      "The famous 'I am the danger' line was improvised by Bryan Cranston.",
  },

  {
    title: "Inception",
    description:
      "A thief who enters the dreams of others to steal secrets is given a chance to erase his criminal past.",
    id: "MOV002",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    trailer_url: Inception,
    imdb_score: 8.8,
    metascore: 74,
    type: "movie",
  },
  {
    title: "Stranger Things",
    description:
      "A group of young friends witness supernatural forces and secret government exploits in their small town.",
    id: "TV002",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
    imdb_score: 8.7,
    metascore: 76,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2016, avg_rating: 8.7 },
      2: { episodes: 9, release_year: 2017, avg_rating: 8.6 },
      3: { episodes: 8, release_year: 2019, avg_rating: 8.5 },
      4: { episodes: 9, release_year: 2022, avg_rating: 8.9 },
      5: { episodes: 8, release_year: 2024, avg_rating: null },
    },
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker, who wreaks havoc on Gotham City.",
    id: "MOV003",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    trailer_url: TDK,
    imdb_score: 9.0,
    metascore: 84,
    type: "movie",
  },
  {
    title: "The Office (U.S.)",
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    id: "TV003",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg6zfpcQ24TybzRc6p9NEh58UR-4rbKr1uQ&s",
    trailer_url: "https://www.youtube.com/watch?v=LHOtME2DL4g",
    imdb_score: 8.9,
    metascore: 81,
    type: "tv_show",
    seasons: {
      1: { episodes: 6, release_year: 2005, avg_rating: 7.9 },
      2: { episodes: 22, release_year: 2005, avg_rating: 8.5 },
      3: { episodes: 25, release_year: 2006, avg_rating: 8.8 },
      4: { episodes: 19, release_year: 2007, avg_rating: 8.7 },
      5: { episodes: 28, release_year: 2008, avg_rating: 8.8 },
      6: { episodes: 26, release_year: 2009, avg_rating: 8.6 },
      7: { episodes: 26, release_year: 2010, avg_rating: 8.6 },
      8: { episodes: 24, release_year: 2011, avg_rating: 8.2 },
      9: { episodes: 25, release_year: 2012, avg_rating: 8.1 },
    },
    fun_fact:
      "The famous 'That's what she said' joke was improvised by Steve Carell.",
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    id: "MOV004",
    thumbnail:
      "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF1000,1000_QL80_.jpg",
    trailer_url: Pulp,
    imdb_score: 8.9,
    metascore: 94,
    type: "movie",
  },
  {
    title: "Game of Thrones",
    description:
      "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros.",
    id: "TV004",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=gcTkNV5Vg1E",
    imdb_score: 9.2,
    metascore: 89,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2011, avg_rating: 9.1 },
      2: { episodes: 10, release_year: 2012, avg_rating: 9.2 },
      3: { episodes: 10, release_year: 2013, avg_rating: 9.3 },
      4: { episodes: 10, release_year: 2014, avg_rating: 9.4 },
      5: { episodes: 10, release_year: 2015, avg_rating: 9.2 },
      6: { episodes: 10, release_year: 2016, avg_rating: 9.3 },
      7: { episodes: 7, release_year: 2017, avg_rating: 9.1 },
      8: { episodes: 6, release_year: 2019, avg_rating: 6.3 },
    },
    fun_fact:
      "The phrase 'Winter is coming' was almost cut from the show as executives thought it sounded too much like a weather report.",
  },
  {
    title: "Forrest Gump",
    description:
      "The life journey of Forrest Gump, a kind-hearted man from Alabama who unknowingly influences several historical events.",
    id: "MOV005",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: FG,
    imdb_score: 8.8,
    metascore: 82,
    type: "movie",
  },
  {
    title: "The Mandalorian",
    description:
      "A lone bounty hunter navigates the galaxy, protecting a mysterious child known as 'The Child'.",
    id: "TV005",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
    imdb_score: 8.7,
    metascore: 70,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2019, avg_rating: 8.7 },
      2: { episodes: 8, release_year: 2020, avg_rating: 9.0 },
      3: { episodes: 8, release_year: 2023, avg_rating: 8.3 },
    },
    fun_fact:
      "Baby Yoda's real name (Grogu) was kept secret until Season 2 to maintain mystery.",
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    id: "MOV006",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNl1EYS9z4PfNViNWMK_V5ZspshcWfksobw&s",
    trailer_url: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    imdb_score: 8.7,
    metascore: 73,
    type: "movie",
  },
  {
    title: "Friends",
    description:
      "Follows the personal and professional lives of six twenty to thirty-something friends living in Manhattan.",
    id: "TV006",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=IEEbUzffzrk",
    imdb_score: 8.9,
    metascore: 78,
    type: "tv_show",
    seasons: {
      1: { episodes: 24, release_year: 1994, avg_rating: 8.5 },
      2: { episodes: 24, release_year: 1995, avg_rating: 8.7 },
      3: { episodes: 25, release_year: 1996, avg_rating: 9.0 },
      4: { episodes: 24, release_year: 1997, avg_rating: 9.1 },
      5: { episodes: 24, release_year: 1998, avg_rating: 9.2 },
      6: { episodes: 25, release_year: 1999, avg_rating: 9.2 },
      7: { episodes: 24, release_year: 2000, avg_rating: 9.1 },
      8: { episodes: 24, release_year: 2001, avg_rating: 9.0 },
      9: { episodes: 24, release_year: 2002, avg_rating: 8.8 },
      10: { episodes: 18, release_year: 2003, avg_rating: 8.7 },
    },
    fun_fact:
      "The famous couch in Central Perk was found in the Warner Bros. basement and was almost thrown away.",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    id: "MOV007",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    imdb_score: 8.6,
    metascore: 74,
    type: "movie",
  },
  {
    title: "The Witcher",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    id: "TV007",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
    imdb_score: 8.2,
    metascore: 68,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2019, avg_rating: 8.2 },
      2: { episodes: 8, release_year: 2021, avg_rating: 8.4 },
      3: { episodes: 8, release_year: 2023, avg_rating: 7.8 },
    },
    fun_fact:
      "Henry Cavill was such a fan of the Witcher games that he pursued the role of Geralt himself.",
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    id: "MOV008",
    thumbnail:
      "https://m.media-amazon.com/images/I/71nBGhNjGIL._AC_UF1000,1000_QL80_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    imdb_score: 9.3,
    metascore: 80,
    type: "movie",
    fun_fact:
      "Despite being considered one of the greatest films ever made, it was a box office disappointment when first released.",
  },
  {
    title: "The Crown",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    id: "TV008",
    thumbnail: "https://m.media-amazon.com/images/I/81xFn+Uvr+L.jpg",
    trailer_url: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
    imdb_score: 8.6,
    metascore: 85,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2016, avg_rating: 8.7 },
      2: { episodes: 10, release_year: 2017, avg_rating: 8.8 },
      3: { episodes: 10, release_year: 2019, avg_rating: 8.5 },
      4: { episodes: 10, release_year: 2020, avg_rating: 8.7 },
      5: { episodes: 10, release_year: 2022, avg_rating: 7.5 },
      6: { episodes: 10, release_year: 2023, avg_rating: 7.8 },
    },
    fun_fact:
      "Each season covers approximately one decade of Queen Elizabeth II's reign, with a new cast every two seasons.",
  },
  {
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    id: "MOV009",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyOogVeq0niR-YHe_eXbsb9SjUwNmj_0rDA&s",
    trailer_url: "https://www.youtube.com/watch?v=owK1qxDselE",
    imdb_score: 8.5,
    metascore: 67,
    type: "movie",
    fun_fact:
      "Russell Crowe ad-libbed the famous line 'Are you not entertained?' during filming.",
  },
  {
    title: "Black Mirror",
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    id: "TV009",
    thumbnail:
      "https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg",
    trailer_url: "https://www.youtube.com/watch?v=jDiYGjp5iFg",
    imdb_score: 8.7,
    metascore: 83,
    type: "tv_show",
    seasons: {
      1: { episodes: 3, release_year: 2011, avg_rating: 8.3 },
      2: { episodes: 4, release_year: 2013, avg_rating: 8.5 },
      3: { episodes: 6, release_year: 2016, avg_rating: 8.8 },
      4: { episodes: 6, release_year: 2017, avg_rating: 8.6 },
      5: { episodes: 3, release_year: 2019, avg_rating: 7.3 },
      6: { episodes: 5, release_year: 2023, avg_rating: 7.9 },
    },
    fun_fact:
      "The episode 'San Junipero' was the first Black Mirror episode with a happy ending.",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth.",
    id: "MOV010",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
    trailer_url: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    imdb_score: 8.8,
    metascore: 92,
    type: "movie",
    fun_fact:
      "Viggo Mortensen broke two toes when he kicked the Uruk-hai helmet in the famous scream scene - the scream of pain was real.",
  },
  {
    title: "Westworld",
    description:
      "Set in a futuristic theme park, where guests can live out their fantasies through the use of lifelike robots.",
    id: "TV010",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjM2MTA5NjIwNV5BMl5BanBnXkFtZTgwNjI2OTMxNTM@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=IuS5huqOND4",
    imdb_score: 8.5,
    metascore: 74,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2016, avg_rating: 8.9 },
      2: { episodes: 10, release_year: 2018, avg_rating: 8.3 },
      3: { episodes: 8, release_year: 2020, avg_rating: 7.8 },
      4: { episodes: 8, release_year: 2022, avg_rating: 7.5 },
    },
    fun_fact:
      "Anthony Hopkins' character Dr. Ford was originally supposed to die in the first season, but his performance was so compelling they rewrote the story.",
  },
  {
    title: "The Silence of the Lambs",
    description:
      "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    id: "MOV011",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXD5EzCfvxKSqbAfp8BlsWjDQumsX0S9rYVg&s",
    trailer_url: "https://www.youtube.com/watch?v=RuX2MQeb8UM",
    imdb_score: 8.6,
    metascore: 85,
    type: "movie",
    fun_fact:
      "Only one of three films to win all five major Academy Awards (Best Picture, Director, Actor, Actress, and Screenplay).",
  },
  {
    title: "Narcos",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    id: "TV011",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=xl8zdCY-abw",
    imdb_score: 8.8,
    metascore: 77,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2015, avg_rating: 8.9 },
      2: { episodes: 10, release_year: 2016, avg_rating: 9.0 },
      3: { episodes: 10, release_year: 2017, avg_rating: 8.8 },
    },
    fun_fact:
      "Wagner Moura, who played Pablo Escobar, didn't speak Spanish before being cast and learned it specifically for the role.",
  },
  {
    title: "The Revenant",
    description:
      "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by bear and left for dead by members of his own hunting team.",
    id: "MOV012",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=LoebZZ8K5N0",
    imdb_score: 8.0,
    metascore: 76,
    type: "movie",
    fun_fact:
      "Leonardo DiCaprio actually ate raw bison liver during filming, despite being vegetarian.",
  },
  {
    title: "The Boys",
    description:
      "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    id: "TV012",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nTHbkR8hRo2JHZ7L1lXa5VWCatbPHWeY8A&s",
    trailer_url: "https://www.youtube.com/watch?v=M1bhOaLV4FU",
    imdb_score: 8.7,
    metascore: 74,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2019, avg_rating: 8.7 },
      2: { episodes: 8, release_year: 2020, avg_rating: 8.8 },
      3: { episodes: 8, release_year: 2022, avg_rating: 8.6 },
      4: { episodes: 8, release_year: 2024, avg_rating: null },
    },
    fun_fact:
      "Antony Starr (Homelander) was arrested in Spain for assault after getting into a bar fight while still in costume and makeup.",
  },
  {
    title: "The Social Network",
    description:
      "The story of the creation of Facebook and the legal battles that followed.",
    id: "MOV013",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
    trailer_url: "https://www.youtube.com/watch?v=lB95KLmpLR4",
    imdb_score: 7.8,
    metascore: 95,
    type: "movie",
    fun_fact:
      "Jesse Eisenberg met Mark Zuckerberg only once before filming - at a urinal in a restaurant bathroom.",
  },
  {
    title: "The Umbrella Academy",
    description:
      "A dysfunctional family of superheroes comes together to solve the mystery of their father's death and the threat of an impending apocalypse.",
    id: "TV013",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMzlmMmIxODItYzBjNC00YjMwLWIwOTAtNzVlMTBlNTNkMjZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=0DAmWHxeoKw",
    imdb_score: 8.0,
    metascore: 69,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2019, avg_rating: 8.0 },
      2: { episodes: 10, release_year: 2020, avg_rating: 8.2 },
      3: { episodes: 10, release_year: 2022, avg_rating: 7.8 },
      4: { episodes: 6, release_year: 2024, avg_rating: null },
    },
    fun_fact:
      "Elliot Page came out as transgender between seasons 2 and 3, leading to changes in how his character Vanya (now Viktor) was written.",
  },
  {
    title: "The Grand Budapest Hotel",
    description:
      "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    id: "MOV014",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png",
    trailer_url: "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
    imdb_score: 8.1,
    metascore: 88,
    type: "movie",
    fun_fact:
      "Wes Anderson created an entirely fictional country (Zubrowka) and even had newspapers printed in a fake language for set dressing.",
  },

  {
    title: "Peaky Blinders",
    description:
      "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    id: "TV014",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
    imdb_score: 8.8,
    metascore: 85,
    type: "tv_show",
    seasons: {
      1: { episodes: 6, release_year: 2013, avg_rating: 8.3 },
      2: { episodes: 6, release_year: 2014, avg_rating: 8.7 },
      3: { episodes: 6, release_year: 2016, avg_rating: 8.9 },
      4: { episodes: 6, release_year: 2017, avg_rating: 9.0 },
      5: { episodes: 6, release_year: 2019, avg_rating: 9.1 },
      6: { episodes: 6, release_year: 2022, avg_rating: 9.2 },
    },
    fun_fact:
      "Cillian Murphy learned the Birmingham accent by listening to recordings of his co-star Helen McCrory's father, who was from Birmingham.",
  },
  {
    title: "The Departed",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    id: "MOV015",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjnR2unZpV2CbntiL9sooRKG62mtKCiyI1A&s",
    trailer_url: "https://www.youtube.com/watch?v=auYbpnEwBBg",
    imdb_score: 8.5,
    metascore: 85,
    type: "movie",
    fun_fact:
      "Jack Nicholson improvised the famous 'You're a fucking rat' line and actually cut his hand on the glass during the scene.",
  },
  {
    title: "The Handmaid's Tale",
    description:
      "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",
    id: "TV015",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODFiMDg5NjItY2JlMS00NWY0LThmMTItOTI1MjkzNTBmYTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=PJTonrzXTJs",
    imdb_score: 8.4,
    metascore: 82,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2017, avg_rating: 8.7 },
      2: { episodes: 13, release_year: 2018, avg_rating: 8.5 },
      3: { episodes: 13, release_year: 2019, avg_rating: 8.3 },
      4: { episodes: 10, release_year: 2021, avg_rating: 8.1 },
      5: { episodes: 10, release_year: 2022, avg_rating: 7.9 },
    },
    fun_fact:
      "The red color of the handmaids' costumes is officially called 'Handmaid's Red' and was specifically created for the show.",
  },
  {
    title: "The Big Lebowski",
    description:
      "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
    id: "MOV016",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDQwMTAzOTkxNV5BMl5BanBnXkFtZTgwMjc0MTAwMjE@._V1_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=cd-go0oBF4Y",
    imdb_score: 8.1,
    metascore: 71,
    type: "movie",
    fun_fact:
      "Jeff Bridges wore the same sweater throughout filming - it was his personal sweater that he'd owned for years.",
  },
  {
    title: "The Haunting of Hill House",
    description:
      "A family confronts haunting memories of their old home and the terrifying events that drove them from it.",
    id: "TV016",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=3eqxXqJDmcY",
    imdb_score: 8.6,
    metascore: 79,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2018, avg_rating: 8.7 },
    },
    fun_fact:
      "Episode 6 features a 17-minute continuous shot that took 7 takes to perfect and required the actors to perform 11 pages of dialogue flawlessly.",
  },
  {
    title: "The Truman Show",
    description:
      "An insurance salesman discovers his entire life is actually a reality TV show.",
    id: "MOV017",
    thumbnail:
      "https://m.media-amazon.com/images/I/91AJYESZaVL._AC_UF894,1000_QL80_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=dlnmQbPGuls",
    imdb_score: 8.2,
    metascore: 90,
    type: "movie",
    fun_fact:
      "The film's concept was so prescient that it's now studied in universities as a precursor to modern reality TV and social media culture.",
  },
  {
    title: "The Expanse",
    description:
      "In the 24th century, a group of humans untangle a vast plot that threatens the Solar System's fragile state of detente.",
    id: "TV017",
    thumbnail:
      "https://sfrareview.org/wp-content/uploads/2021/04/the-expanse.jpg",
    trailer_url: "https://www.youtube.com/watch?v=kQuTAPWJxNo",
    imdb_score: 8.5,
    metascore: 77,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2015, avg_rating: 8.0 },
      2: { episodes: 13, release_year: 2017, avg_rating: 8.5 },
      3: { episodes: 13, release_year: 2018, avg_rating: 8.8 },
      4: { episodes: 10, release_year: 2019, avg_rating: 8.7 },
      5: { episodes: 10, release_year: 2020, avg_rating: 8.5 },
      6: { episodes: 6, release_year: 2021, avg_rating: 8.4 },
    },
    fun_fact:
      "NASA scientists are fans of the show and have praised its realistic physics, even inviting the cast to tour NASA facilities.",
  },
  {
    title: "The Prestige",
    description:
      "Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.",
    id: "MOV018",
    thumbnail:
      "https://static.thcdn.com/images/large/original/productimg/960/960/8600679-6494327177021158.JPEG",
    trailer_url: "https://www.youtube.com/watch?v=o4gHCmTQDVI",
    imdb_score: 8.5,
    metascore: 66,
    type: "movie",
    fun_fact:
      "Christian Bale and Hugh Jackman learned real magic tricks for their roles, including the famous 'cups and balls' routine.",
  },
  {
    title: "The Marvelous Mrs. Maisel",
    description:
      "A housewife in the 1950s decides to become a stand-up comedian.",
    id: "TV018",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1DT5ykdCIKx33_gQmiuLmwVCBMUl90UyAw&s",
    trailer_url: "https://www.youtube.com/watch?v=whVqYtNq3zY",
    imdb_score: 8.7,
    metascore: 80,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2017, avg_rating: 8.5 },
      2: { episodes: 10, release_year: 2018, avg_rating: 8.8 },
      3: { episodes: 8, release_year: 2019, avg_rating: 8.7 },
      4: { episodes: 8, release_year: 2022, avg_rating: 8.4 },
      5: { episodes: 9, release_year: 2023, avg_rating: 8.6 },
    },
    fun_fact:
      "Rachel Brosnahan had no stand-up comedy experience before the show and trained extensively to perform Midge's routines.",
  },
  {
    title: "The Lion King",
    description:
      "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.",
    id: "MOV019",
    thumbnail:
      "https://m.media-amazon.com/images/I/81x1-7zDMsL._AC_UF1000,1000_QL80_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=4sj1MT05lAA",
    imdb_score: 8.5,
    metascore: 88,
    type: "movie",
    fun_fact:
      "The 'Circle of Life' opening sequence took animators three years to create and features over 5,000 individually drawn frames.",
  },
  {
    title: "The Witcher: Blood Origin",
    description:
      "A prequel series to 'The Witcher', set in an elven world 1200 years before the events of the main series.",
    id: "TV019",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjNiYjc1ODItNmYyMi00OWRiLThiN2ItNjY2YTYwNTExNTQ0XkEyXkFqcGc@._V1_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=UcFpVZ4zNw0",
    imdb_score: 5.3,
    metascore: 42,
    type: "tv_show",
    seasons: {
      1: { episodes: 4, release_year: 2022, avg_rating: 5.5 },
    },
    fun_fact:
      "Michelle Yeoh performed all her own stunts despite being 60 years old during filming.",
  },
  {
    title: "The Irishman",
    description:
      "An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, and his rival, Frank Sheeran.",
    id: "MOV020",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYL67RNuK-HMGByYsIW7b3FjViOLJPw9RT2w&s",
    trailer_url: "https://www.youtube.com/watch?v=WHXxVmeGQUc",
    imdb_score: 7.8,
    metascore: 94,
    type: "movie",
    fun_fact:
      "The de-aging technology used on the actors required them to wear special head rigs that added 2-3 hours to their daily makeup routine.",
  },
  {
    title: "The Queen's Gambit",
    description:
      "Orphaned at a young age, a girl discovers an astonishing talent for chess while struggling with addiction.",
    id: "TV020",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=CDrieqwSdgI",
    imdb_score: 8.6,
    metascore: 79,
    type: "tv_show",
    seasons: {
      1: { episodes: 7, release_year: 2020, avg_rating: 8.8 },
    },
    fun_fact:
      "Chess grandmaster Garry Kasparov served as a consultant and helped choreograph all the chess scenes.",
  },
  {
    title: "The Shining",
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    id: "MOV021",
    thumbnail: "https://m.media-amazon.com/images/I/81nwnHTcV2L.jpg",
    trailer_url: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
    imdb_score: 8.4,
    metascore: 66,
    type: "movie",
    fun_fact:
      "Shelley Duvall's distressed performance was genuine - Kubrick intentionally isolated her and put her through exhausting takes to get authentic reactions.",
  },
  {
    title: "The Mandalorian",
    description:
      "A lone bounty hunter navigates the galaxy, protecting a mysterious child known as 'The Child'.",
    id: "TV021",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/The_Mandalorian_season_2_poster.jpg",
    trailer_url: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
    imdb_score: 8.7,
    metascore: 70,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2019, avg_rating: 8.7 },
      2: { episodes: 8, release_year: 2020, avg_rating: 9.0 },
      3: { episodes: 8, release_year: 2023, avg_rating: 8.3 },
    },
    fun_fact:
      "Baby Yoda (Grogu) was kept completely secret during production - even most of the cast didn't know about the character until filming.",
  },
  {
    title: "The Green Mile",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    id: "MOV022",
    thumbnail:
      "https://play-lh.googleusercontent.com/hZuesjSWMLsJK9UdfKut2LM4fVk7bfMoaGaRMt6gDR5mJSjv0AlbBUnR7PY0oBkzM1j5eoE9csuESEWzzNY",
    trailer_url: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
    imdb_score: 8.6,
    metascore: 61,
    type: "movie",
    fun_fact:
      "Michael Clarke Duncan was so convincing in his role that the crew believed he was actually performing miracles on set.",
  },
  {
    title: "The Office (U.K.)",
    description:
      "A mockumentary on a group of typical office workers in the Slough branch of the fictitious Wernham Hogg Paper Company.",
    id: "TV022",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqIvrTUKsf0px0PKEBipC-dU5-WmnCsBTZA&s",
    trailer_url: "https://www.youtube.com/watch?v=4vfe5KZ8W3Y",
    imdb_score: 8.5,
    metascore: 88,
    type: "tv_show",
    seasons: {
      1: { episodes: 6, release_year: 2001, avg_rating: 8.3 },
      2: { episodes: 6, release_year: 2002, avg_rating: 8.8 },
      Special: { episodes: 2, release_year: 2003, avg_rating: 9.0 },
    },
    fun_fact:
      "Ricky Gervais based David Brent's character on real office managers he'd encountered during his corporate career.",
  },
  {
    title: "The Sixth Sense",
    description:
      "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
    id: "MOV023",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png",
    trailer_url: "https://www.youtube.com/watch?v=VG9AGf66tXM",
    imdb_score: 8.2,
    metascore: 64,
    type: "movie",
    fun_fact:
      "Bruce Willis wore the same outfit throughout the entire film to help audiences subconsciously realize his character was dead.",
  },
  {
    title: "The Walking Dead",
    description:
      "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
    id: "TV023",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=R1v0uFms68U",
    imdb_score: 8.2,
    metascore: 79,
    type: "tv_show",
    seasons: {
      1: { episodes: 6, release_year: 2010, avg_rating: 8.4 },
      2: { episodes: 13, release_year: 2011, avg_rating: 8.2 },
      3: { episodes: 16, release_year: 2012, avg_rating: 8.5 },
      4: { episodes: 16, release_year: 2013, avg_rating: 8.6 },
      5: { episodes: 16, release_year: 2014, avg_rating: 8.8 },
      6: { episodes: 16, release_year: 2015, avg_rating: 8.4 },
      7: { episodes: 16, release_year: 2016, avg_rating: 7.8 },
      8: { episodes: 16, release_year: 2017, avg_rating: 7.5 },
      9: { episodes: 16, release_year: 2018, avg_rating: 8.1 },
      10: { episodes: 22, release_year: 2019, avg_rating: 7.9 },
      11: { episodes: 24, release_year: 2021, avg_rating: 7.6 },
    },
    fun_fact:
      "The zombie extras were called 'walkers' on set and had their own green room where they could relax between takes.",
  },
  {
    title: "The Wolf of Wall Street",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption and the federal government.",
    id: "MOV024",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOr1zhOeb6S7LEnRoZx7TQ365yjW9UGLgJ_A&s",
    trailer_url: "https://www.youtube.com/watch?v=iszwuX1AK6A",
    imdb_score: 8.2,
    metascore: 75,
    type: "movie",
    fun_fact:
      "Leonardo DiCaprio actually injured himself during the quaaludes scene when he started crawling for real and cut his hand on glass.",
  },
  {
    title: "The Witcher",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    id: "TV024",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
    imdb_score: 8.2,
    metascore: 68,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2019, avg_rating: 8.2 },
      2: { episodes: 8, release_year: 2021, avg_rating: 8.4 },
      3: { episodes: 8, release_year: 2023, avg_rating: 7.8 },
    },
    fun_fact:
      "Henry Cavill performed nearly all of his own stunts, including sword fights, due to his experience with action roles.",
  },
  {
    title: "Avengers Endgame",
    description:
      "Avengers: Endgame follows the remaining Avengers as they embark on a time-travel mission to reverse the devastation caused by Thanos. With powerful themes of sacrifice, redemption, and heroism, this epic conclusion to Marvel's Infinity Saga delivers an unforgettable showdown featuring iconic heroes.",
    id: "MOV025",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw6QTsDE3d6-qOL5xMa4-JDdBNTa3uspCrg&s",
    trailer_url: "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
    imdb_score: 8.4,
    metascore: 78,
    type: "movie",
    fun_fact:
      "The final battle scene took over 50 days to film and involved nearly every living actor who had ever appeared in the MCU.",
  },
  {
    title: "Family Guy",
    description:
      "An animated sitcom following the misadventures of the Griffin family in the fictional town of Quahog. With outrageous humor and pop culture references, it explores the chaotic lives of Peter, Lois, Meg, Chris, Stewie, and their talking dog Brian.",
    id: "TV025",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=tukFYdbTNRY",
    imdb_score: 8.2,
    metascore: 71,
    type: "tv_show",
    seasons: {
      1: { episodes: 7, release_year: 1999, avg_rating: 7.7 },
      2: { episodes: 21, release_year: 1999, avg_rating: 8.1 },
      3: { episodes: 22, release_year: 2001, avg_rating: 8.4 },
      4: { episodes: 30, release_year: 2005, avg_rating: 8.3 },
      5: { episodes: 18, release_year: 2006, avg_rating: 8.2 },
      6: { episodes: 12, release_year: 2007, avg_rating: 8.1 },
      7: { episodes: 16, release_year: 2008, avg_rating: 8.2 },
      8: { episodes: 21, release_year: 2009, avg_rating: 8.1 },
      9: { episodes: 18, release_year: 2010, avg_rating: 8.0 },
      10: { episodes: 23, release_year: 2011, avg_rating: 7.9 },
      11: { episodes: 22, release_year: 2012, avg_rating: 7.8 },
      12: { episodes: 21, release_year: 2013, avg_rating: 7.7 },
      13: { episodes: 18, release_year: 2014, avg_rating: 7.6 },
      14: { episodes: 20, release_year: 2015, avg_rating: 7.5 },
      15: { episodes: 20, release_year: 2016, avg_rating: 7.4 },
      16: { episodes: 20, release_year: 2017, avg_rating: 7.3 },
      17: { episodes: 20, release_year: 2018, avg_rating: 7.2 },
      18: { episodes: 20, release_year: 2019, avg_rating: 7.1 },
      19: { episodes: 20, release_year: 2020, avg_rating: 7.0 },
      20: { episodes: 20, release_year: 2021, avg_rating: 6.9 },
      21: { episodes: 20, release_year: 2022, avg_rating: 6.8 },
      22: { episodes: 20, release_year: 2023, avg_rating: 6.7 },
    },
    fun_fact:
      "Seth MacFarlane voices Peter, Stewie, Brian, and Quagmire, among others - sometimes having conversations with himself in the recording booth.",
  },
  {
    title: "Pistruiatul",
    description:
      "A Romanian drama series set during the communist regime, following the adventures of a brave red-haired boy named Pistruiatul, who becomes involved in resistance efforts against the oppressive government.",
    id: "MOV026",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzg4ZDk0ZTQtOWMxOS00MDM4LTg2NjktMTBjM2M3YzdhNzc5XkEyXkFqcGc@._V1_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=auYbpnEwBBg",
    imdb_score: 7.9,
    metascore: 68,
    type: "movie",
    fun_fact:
      "The film's authentic depiction of communist-era Romania led to it being temporarily banned when first released.",
  },
  {
    title: "Adolescence",
    description:
      "A coming-of-age drama that explores the emotional struggles, friendships, and identity challenges faced by teenagers as they navigate high school life.",
    id: "TV026",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGY1YjBiNzMtYWZhNC00OWViLWE0MzItNjc4YzczOGNiM2I0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=PJTonrzXTJs",
    imdb_score: null,
    metascore: null,
    type: "tv_show",
    seasons: {
      1: { episodes: 4, release_year: 2025, avg_rating: null },
    },
    fun_fact:
      "This series features an entirely unknown cast of teenage actors discovered through open casting calls across high schools.",
  },
  {
    title: "Mufasa: The Lion King",
    description:
      "A prequel exploring the rise of Mufasa, revealing his journey from an orphaned cub to the noble king of the Pride Lands. The story follows his struggles, friendships, and the trials that shaped him into the legendary leader we know.",
    id: "MOV027",
    thumbnail: "https://lumiere-a.akamaihd.net/v1/images/image_b0edeb2c.jpeg",
    trailer_url: "https://www.youtube.com/watch?v=ZjXf7wKyyhU",
    imdb_score: null,
    metascore: null,
    type: "movie",
    fun_fact:
      "This marks the first time Disney has created a prequel to one of their animated classics using the photorealistic CGI technology.",
  },
  {
    title: "Rick and Morty",
    description:
      "An eccentric scientist named Rick Sanchez drags his impressionable grandson Morty on dangerous and bizarre adventures across the multiverse.",
    id: "TV027",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=E9c_KSZ6zMk",
    imdb_score: 9.1,
    metascore: 85,
    type: "tv_show",
    seasons: {
      1: { episodes: 11, release_year: 2013, avg_rating: 8.6 },
      2: { episodes: 10, release_year: 2015, avg_rating: 9.0 },
      3: { episodes: 10, release_year: 2017, avg_rating: 9.2 },
      4: { episodes: 10, release_year: 2019, avg_rating: 8.9 },
      5: { episodes: 10, release_year: 2021, avg_rating: 8.5 },
      6: { episodes: 10, release_year: 2022, avg_rating: 8.7 },
      7: { episodes: 10, release_year: 2023, avg_rating: 8.8 },
    },
    fun_fact:
      "The iconic 'Pickle Rick' episode was originally conceived as a throwaway joke in the writers' room before becoming one of the show's most famous episodes.",
  },
  {
    title: "The Good, the Bad and the Ugly",
    description:
      "A classic spaghetti western that follows three gunslingers in a hunt for buried treasure amidst a backdrop of violence and betrayal.",
    id: "MOV028",
    thumbnail:
      "https://imgs.search.brave.com/7eS3kFSObnuJDuKfqj5fkp517w26eeJ0aN2TRLureVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RlLzc5/L2JlL2RlNzliZTcy/MTMzNmRkNjFmYTJj/YmE4OGE1ZTlkNzBi/LmpwZw",
    trailer_url: "",
    imdb_score: 8.8,
    metascore: 90,
    type: "movie",
  },
  {
    title: "Schindler's List",
    description:
      "A powerful historical drama depicting the true story of Oskar Schindler, who saved over a thousand lives during the Holocaust.",
    id: "MOV029",
    thumbnail:
      "https://imgs.search.brave.com/r6liKPNpEsblvhlRieMKxk42POagnHAA-iixrSPOhAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qSmtaakZo/WmpJdE16Rm1OeTAw/WWpRMkxUaGlOR0V0/TmpsbU5UUTBOVEpo/WWpaaFhrRXlYa0Zx/Y0djQC5qcGc",
    trailer_url: "",
    imdb_score: 8.9,
    metascore: 94,
    type: "movie",
  },
  ,
  {
    title: "Dr. House",
    description:
      "A brilliant but misanthropic diagnostician, Dr. Gregory House, leads a team of doctors at Princeton-Plainsboro Teaching Hospital, solving complex medical cases while battling his own addiction and skepticism.",
    id: "TV029",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjgxYjAwNmMtYTAwZC00YmQxLWJlOTMtMWM0NGJmNDE0YmI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=MczMB8nU5vY",
    imdb_score: 8.7,
    metascore: 84,
    type: "tv_show",
    seasons: {
      1: { episodes: 22, release_year: 2004, avg_rating: 8.5 },
      2: { episodes: 24, release_year: 2005, avg_rating: 8.8 },
      3: { episodes: 24, release_year: 2006, avg_rating: 9.0 },
      4: { episodes: 16, release_year: 2007, avg_rating: 8.7 },
      5: { episodes: 24, release_year: 2008, avg_rating: 8.8 },
      6: { episodes: 22, release_year: 2009, avg_rating: 8.6 },
      7: { episodes: 23, release_year: 2010, avg_rating: 8.4 },
      8: { episodes: 22, release_year: 2011, avg_rating: 8.2 },
    },
    fun_fact:
      "Hugh Laurie's American accent was so convincing that many American crew members were surprised to learn he was actually British.",
  },
  {
    title: "12 Angry Men",
    description:
      "A gripping courtroom drama that follows twelve jurors as they deliberate a seemingly straightforward case, revealing deep personal biases and moral dilemmas.",
    id: "MOV030",
    thumbnail:
      "https://imgs.search.brave.com/01zjGE6605SYqgg_VQLyNSiMESsv3uCN-kwmX6J-GJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUaGhPR0Zo/T0RrdE5HRXdOaTAw/TXpZMkxUZzNZV1l0/TnpBelpURTBNVEZs/TVdReFhrRXlYa0Zx/Y0djQC5qcGc",
    trailer_url: "",
    imdb_score: 9.0,
    metascore: 96,
    type: "movie",
  },
  {
    title: "Suits",
    description:
      "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best closing attorneys. Together they navigate the cutthroat world of corporate law while hiding Mike's lack of a legal degree.",
    id: "TV030",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjBjZDMyOTktZTRjYS00ZjQ1LTlmYTEtOTBkY2U0MDNmMjVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=85z53bAebsI",
    imdb_score: 8.4,
    metascore: 72,
    type: "tv_show",
    seasons: {
      1: { episodes: 12, release_year: 2011, avg_rating: 8.5 },
      2: { episodes: 16, release_year: 2012, avg_rating: 8.7 },
      3: { episodes: 16, release_year: 2013, avg_rating: 8.8 },
      4: { episodes: 16, release_year: 2014, avg_rating: 8.6 },
      5: { episodes: 16, release_year: 2015, avg_rating: 8.4 },
      6: { episodes: 16, release_year: 2016, avg_rating: 8.2 },
      7: { episodes: 16, release_year: 2017, avg_rating: 8.0 },
      8: { episodes: 16, release_year: 2018, avg_rating: 7.8 },
      9: { episodes: 10, release_year: 2019, avg_rating: 7.9 },
    },
    fun_fact:
      "Meghan Markle's role as Rachel Zane made her famous before she became the Duchess of Sussex, and the show experienced a massive surge in popularity after her royal engagement.",
  },
  {
    title: "Aferim!",
    description:
      "In 19th-century Wallachia, a policeman and his son hunt a runaway Roma slave, confronting the brutal realities of feudalism and prejudice.",
    id: "MOV031",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ro/6/6d/Aferim_film_poster.jpg",
    trailer_url: "https://www.youtube.com/watch?v=8X5gFo2lUh4",
    imdb_score: 7.5,
    metascore: 81,
    type: "movie",
    release_year: 2015,
    genre: ["Romanian", "Historical Drama", "Dark Comedy"],
    fun_fact:
      "The film's dialogue was reconstructed from historical documents to authentically represent 19th-century Romanian speech patterns.",
  },
  {
    title: "Collective (Colectiv)",
    description:
      "A documentary exposing corruption in Romania's healthcare system after a nightclub fire leaves dozens dead due to hospital mismanagement.",
    id: "MOV032",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ro/2/23/Colectiv_2020.jpg",
    trailer_url: "https://www.youtube.com/watch?v=H-6f6uFr5A0",
    imdb_score: 8.4,
    metascore: 91,
    type: "movie",
    release_year: 2019,
    genre: ["Romanian", "Documentary", "Political Thriller"],
    fun_fact:
      "The documentary crew continued filming even as the health minister they were investigating unexpectedly resigned during an interview.",
    awards: [
      "Nominated for Best Documentary Feature at the 93rd Academy Awards",
    ],
  },
  {
    title: "The Whistlers (La Gomera)",
    description:
      "A crooked policeman learns an ancient whistling language to free a mobster in this absurdist crime comedy set in the Canary Islands and Romania.",
    id: "MOV033",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvHLLEFB4CLSJow82DhdYGyEhPI9b9gbDpg&s",
    trailer_url: "https://www.youtube.com/watch?v=4XpL6GmB8H4",
    imdb_score: 7.1,
    metascore: 72,
    type: "movie",
    release_year: 2019,
    genre: ["Romanian", "Crime Comedy", "Absurdist"],
    fun_fact:
      "The actors actually learned the real Silbo Gomero whistling language used by Canary Island shepherds.",
  },
  {
    title: "Umbre",
    description:
      "A taxi driver working for the Bucharest mafia struggles to balance his double life, but when his daughter witnesses a crime, his world collapses.",
    id: "TV031",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYkY04yk6KhYVhuQzVeE6RBYR4F46Q0ALTA&s",
    trailer_url: "https://www.youtube.com/watch?v=1Z5PiMhYFRk",
    imdb_score: 8.3,
    metascore: 78,
    type: "tv_show",
    seasons: {
      1: { episodes: 12, release_year: 2014, avg_rating: 8.2 },
      2: { episodes: 12, release_year: 2017, avg_rating: 8.5 },
      3: { episodes: 12, release_year: 2019, avg_rating: 8.7 },
      4: { episodes: 12, release_year: 2021, avg_rating: 8.8 },
    },
    genre: ["Romanian", "Crime Drama", "Noir"],
    fun_fact:
      "The show was originally developed as a comedy before evolving into a gritty crime drama during production.",
  },
  {
    title: "The Council (Consiliul)",
    description:
      "A dark comedy about a dysfunctional local council in rural Romania, where corruption and incompetence collide with hilarious results.",
    id: "TV032",
    thumbnail:
      "https://resizing.flixster.com/2q1vJCj5QKAeB7ivEeTyTdwaOlc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19241802_p_v8_aa.jpg",
    trailer_url: "https://www.youtube.com/watch?v=7K5Qk7V5JZ8",
    imdb_score: 7.9,
    metascore: 68,
    type: "tv_show",
    seasons: {
      1: { episodes: 8, release_year: 2023, avg_rating: 7.9 },
      2: { episodes: 8, release_year: 2024, avg_rating: null },
    },
    genre: ["Romanian", "Political Satire", "Dark Comedy"],
    fun_fact:
      "Many of the absurd bureaucratic situations were based on real incidents reported in Romanian local newspapers.",
  },
  {
    title: "The Forgotten Game",
    description:
      "A retired chess prodigy returns to competitive play to uncover the truth behind her coach's mysterious death. (Romanian thriller)",
    id: "MOV034",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ICOmYkbQAkSVGonXb3yHYlvT2DwZ9Dhw8g&s",
    trailer_url: "https://www.youtube.com/watch?v=NEW_TRAILER_PLACEHOLDER",
    imdb_score: null,
    metascore: null,
    type: "movie",
    release_year: 2024,
    genre: ["Romanian", "Thriller", "Mystery"],
    fun_fact:
      "The chess matches were choreographed by Romanian Grandmaster Mihail Marin to ensure technical accuracy.",
  },
  {
    title: "Shadows of the Past",
    description:
      "A historian in Transylvania uncovers a vampire cult linked to her family's dark secrets. (Romanian horror-drama)",
    id: "TV033",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOWQzY2UzM2MtYWQxMi00MTViLTg1ZTUtYTBlMDYwYjI2ZTA3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=NEW_TRAILER_PLACEHOLDER",
    imdb_score: 7.1,
    metascore: null,
    type: "tv_show",
    seasons: {
      1: { episodes: 6, release_year: 2024, avg_rating: null },
    },
    genre: ["Romanian", "Gothic Horror", "Historical Drama"],
    fun_fact:
      "Filmed on location in authentic Transylvanian castles with permission from descendants of Vlad the Impaler.",
  },
  {
    title: "Luxury Hotel",
    description:
      "A washed-up musician takes a job at a decaying Communist-era hotel, where guests and staff hide surreal secrets. (Romanian magical realism)",
    id: "MOV035",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmQ0MThjZDgtOTJmMi00Y2QyLThlYzctZmJjNzBlMDAxZDZhXkEyXkFqcGc@._V1_.jpg",
    trailer_url: "https://www.youtube.com/watch?v=PLACEHOLDER",
    imdb_score: 7.3,
    metascore: 65,
    type: "movie",
    release_year: 2023,
    genre: ["Romanian", "Magical Realism", "Dark Comedy"],
    fun_fact:
      "The hotel set was constructed inside an actual abandoned Communist-era resort on the Black Sea coast.",
  },
  {
    title: "Black Meadow",
    description:
      "In a remote Carpathian village, a journalist investigates disappearances tied to an ancient forest cult. (Romanian folk horror)",
    id: "TV034",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693549846i/198348489.jpg",
    trailer_url: "https://www.youtube.com/watch?v=PLACEHOLDER",
    imdb_score: 7.8,
    metascore: 72,
    type: "tv_show",
    seasons: {
      1: { episodes: 6, release_year: 2023, avg_rating: 7.8 },
      2: { episodes: 6, release_year: 2024, avg_rating: null },
    },
    genre: ["Romanian", "Folk Horror", "Mystery"],
    fun_fact:
      "The show incorporates authentic Romanian folk rituals and superstitions rarely seen in Western media.",
  },

  {
    title: "Fight Club",
    description:
      "A dark and provocative drama that explores the underground world of anarchic fight clubs and the search for identity in modern society.",
    id: "MOV036",
    thumbnail:
      "https://imgs.search.brave.com/DfjJuGG6Bcvw109H-phLtpD3mjyB8BZzTp1lIOKUbwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JpZ2luYWxmaWxt/YXJ0LmNvbS9jZG4v/c2hvcC9maWxlcy9m/aWdodF9jbHViXzE5/OTlfYWR2YW5jZV9z/dHlsZV9BX29yaWdp/bmFsX2ZpbG1fYXJ0/XzU5YzE4MDJjLTg2/YTAtNGJlOC04ODk0/LWQ2ZmQ5ZTBkZGU5/My53ZWJwP3Y9MTcw/MzAyODE5NyZ3aWR0/aD0xMjAw",
    trailer_url: "",
    imdb_score: 8.8,
    metascore: 66,
    type: "movie",
  },
  {
    title: "Se7en",
    description:
      "A grim thriller where two detectives pursue a serial killer who orchestrates murders based on the seven deadly sins.",
    id: "MOV037",
    thumbnail:
      "https://imgs.search.brave.com/GoqaMIxuL6f47-ua0AZmXRrzhRDSCOrlF8hNBWZg3vM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L25pZ2h0amFycHJv/ZC9jb250ZW50L3Vw/bG9hZHMvc2l0ZXMv/MTMwLzIwMjIvMDEv/MjAxODI1NTIvNzc4/azdobTNpNmY0anA2/end5Zm05ZGRzM2hm/dXQ5NDVtNzI4b2Fh/MTEwOG54MjRnMW5q/c2RzZnltNHU4dTFj/NTJoZTdzZjBnMDdx/NmZoNW8uanBn",
    trailer_url: "",
    imdb_score: 8.6,
    metascore: 65,
    type: "movie",
  },
  {
    title: "Severance",
    description:
      "A mind-bending sci-fi thriller series that explores the dark side of corporate life through a mysterious procedure separating work and personal memories.",
    id: "TV028",
    thumbnail:
      "https://imgs.search.brave.com/SRa3bYhzNpDI82bohz3CsLrR1AVSYcsxMjg34GVM9nE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpESTVZekpo/T0RRdE16UXlOeTAw/WVdObUxXSXhNalV0/TkRCak5qQTVZV1Jq/TXpFeFhrRXlYa0Zx/Y0djQC5qcGc",
    trailer_url: "",
    imdb_score: 8.5,
    metascore: 80,
    type: "tv_show",
    seasons: {
      1: { episodes: 9, release_year: 2022, avg_rating: 8.5 },
      2: { episodes: 10, release_year: 2025, avg_rating: 8.4 },
    },
    fun_fact:
      "The show's unique premise sparked widespread discussion about work-life balance and corporate ethics.",
  },
  {
    title: "The Wire",
    description:
      "A critically acclaimed crime drama that offers a deep exploration of Baltimore's drug trade, institutions, and social challenges.",
    id: "TV035",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/The_Wire_logo.svg/250px-The_Wire_logo.svg.png",
    trailer_url: "",
    imdb_score: 9.3,
    metascore: 90,
    type: "tv_show",
    seasons: {
      1: { episodes: 13, release_year: 2002, avg_rating: 9.0 },
      2: { episodes: 12, release_year: 2003, avg_rating: 9.1 },
      3: { episodes: 13, release_year: 2004, avg_rating: 9.2 },
      4: { episodes: 13, release_year: 2006, avg_rating: 9.4 },
      5: { episodes: 10, release_year: 2008, avg_rating: 9.3 },
    },
    fun_fact:
      "Despite modest viewership during its original run, the series is now regarded as one of the greatest TV dramas of all time.",
  },
  {
    title: "Avatar: The Last Airbender",
    description:
      "An epic animated adventure following Aang and his friends as they journey to restore balance in a world divided by elemental forces.",
    id: "TV040",
    thumbnail:
      "https://imgs.search.brave.com/vGNd1fNgBRPf-bikmKQ2rPkxPH6RLyTrPf_3NKDKg5Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E5L0F2/YXRhcl9UaGVfTGFz/dF9BaXJiZW5kZXJf/bG9nby5zdmcvMjUw/cHgtQXZhdGFyX1Ro/ZV9MYXN0X0FpcmJl/bmRlcl9sb2dvLnN2/Zy5wbmc",
    trailer_url: "",
    imdb_score: 9.2,
    metascore: 83,
    type: "tv_show",
    seasons: {
      1: { episodes: 20, release_year: 2005, avg_rating: 8.9 },
      2: { episodes: 20, release_year: 2006, avg_rating: 9.0 },
      3: { episodes: 21, release_year: 2007, avg_rating: 9.2 },
    },
    fun_fact:
      "The series is celebrated for its deep world-building and ability to tackle complex themes across all ages.",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    description:
      "A critically acclaimed anime series that follows two brothers on a quest to restore their bodies using the art of alchemy.",
    id: "TV036",
    thumbnail:
      "https://imgs.search.brave.com/FbYUUw_7OHYp6Uzf3-RE99MDGHT6LxNX9ked8NAmre4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ny83ZS9GdWxsbWV0/YWxfQWxjaGVtaXN0/X0Jyb3RoZXJob29k/X2tleV92aXN1YWwu/cG5nLzUxMnB4LUZ1/bGxtZXRhbF9BbGNo/ZW1pc3RfQnJvdGhl/cmhvb2Rfa2V5X3Zp/c3VhbC5wbmc",
    trailer_url:
      "https://imgs.search.brave.com/FbYUUw_7OHYp6Uzf3-RE99MDGHT6LxNX9ked8NAmre4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ny83ZS9GdWxsbWV0/YWxfQWxjaGVtaXN0/X0Jyb3RoZXJob29k/X2tleV92aXN1YWwu/cG5nLzUxMnB4LUZ1/bGxtZXRhbF9BbGNo/ZW1pc3RfQnJvdGhl/cmhvb2Rfa2V5X3Zp/c3VhbC5wbmc",
    imdb_score: 9.1,
    metascore: 90,
    type: "tv_show",
    seasons: {
      1: { episodes: 64, release_year: 2009, avg_rating: 9.1 },
    },
    fun_fact:
      "Widely regarded as one of the best anime series, it remains a benchmark for storytelling in animation.",
  },
  {
    title: "Attack on Titan",
    description:
      "A dark, intense anime series where humanity fights for survival against colossal humanoid giants beyond massive protective walls.",
    id: "TV037",
    thumbnail:
      "https://imgs.search.brave.com/ann40_4Vu1kNNxissZRojfAiuw8xu-M9FDiXVGpOS40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvYXR0YWNrLW9u/LXRpdGFuLTIwMTMt/YW5pbWUtcG9zdGVy/LmpwZw",
    trailer_url: "",
    imdb_score: 8.8,
    metascore: 80,
    type: "tv_show",
    seasons: {
      1: { episodes: 25, release_year: 2013, avg_rating: 8.7 },
      2: { episodes: 12, release_year: 2017, avg_rating: 8.8 },
      3: { episodes: 22, release_year: 2018, avg_rating: 8.9 },
      4: { episodes: 16, release_year: 2020, avg_rating: 8.7 },
    },
    fun_fact:
      "Its shocking plot twists and high-stakes battles have sparked endless debates among fans worldwide.",
  },
  {
    title: "Arcane",
    description:
      "An animated series set in the League of Legends universe, exploring the origins and complex relationships of iconic champions.",
    id: "TV038",
    thumbnail:
      "https://imgs.search.brave.com/3XDpPYeNsjiSEqtEA5NLCvB-h__mvcgeY92X-BqYhWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYXJjYW5lLWxl/YWd1ZS1vZi1sZWdl/bmRzLXBpY3R1cmVz/LXl2ZGZ2aDA3bDh6/bTN3bnYuanBn",
    trailer_url: "",
    imdb_score: 8.9,
    metascore: 82,
    type: "tv_show",
    seasons: {
      1: { episodes: 9, release_year: 2021, avg_rating: 8.9 },
    },
    fun_fact:
      "The series received widespread acclaim for its groundbreaking animation style and intricate storytelling.",
  },
  {
    title: "Succession",
    description:
      "A darkly humorous drama that chronicles the power struggles within a wealthy media dynasty battling for control of their empire.",
    id: "TV039",
    thumbnail:
      "https://imgs.search.brave.com/Cu4cw3gBAqKT5osifroZBNEwUxYdkHbxO_Kxv4wiKjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9udHZi/LnRtc2ltZy5jb20v/YXNzZXRzL3AxNTA1/MjkwMF9iX2g4X2Fs/LmpwZz93PTk2MCZo/PTU0MA",
    trailer_url: "",
    imdb_score: 8.8,
    metascore: 85,
    type: "tv_show",
    seasons: {
      1: { episodes: 10, release_year: 2018, avg_rating: 8.7 },
      2: { episodes: 10, release_year: 2019, avg_rating: 8.8 },
      3: { episodes: 9, release_year: 2021, avg_rating: 8.9 },
      4: { episodes: 9, release_year: 2023, avg_rating: 8.8 },
    },
    fun_fact:
      "Its razor-sharp dialogue and complex characters have made it a standout in modern television drama.",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "An epic fantasy adventure where a humble hobbit and his companions embark on a perilous quest to destroy a powerful ring.",
    id: "MOV038",
    thumbnail:
      "https://imgs.search.brave.com/gSMrf32AzqBVOiDuFp-uMM4OrXX13F8w2T30hb_oc-w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk56SXhNRFEy/WVRjdE5EWTRNQzAw/WlRSaExUazRPRFF0/TVRWbE9XWTROVGRp/WW1Nd1hrRXlYa0Zx/Y0djQC5qcGc",
    trailer_url: "",
    imdb_score: 8.8,
    metascore: 92,
    type: "movie",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    description:
      "The journey continues as the fellowship faces new challenges and the forces of darkness converge in a battle for Middle-earth.",
    id: "MOV039",
    thumbnail:
      "https://imgs.search.brave.com/o9Rh-pz8FZ-Ljy_IpGboZFG0Jib4j_YnkmHrR58Xcag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1HUXhNRGRp/T1dVdFlqYzFOaTAw/WXpNMUxXRTJOak10/WlRnM1kySmtNakV6/TVRKalhrRXlYa0Zx/Y0djQC5qcGc",

    trailer_url: "",
    imdb_score: 8.7,
    metascore: 87,
    type: "movie",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    description:
      "The epic conclusion of the saga, where courage, sacrifice, and destiny converge in the final battle for the fate of Middle-earth.",
    id: "MOV040",
    thumbnail:
      "https://imgs.search.brave.com/GDcF44HLC1GqQcMEpBWaZwxELUnQsFpVOwQPLZofIJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UWmtNakJq/TldNdFpHSTVPQzAw/TUdVMExUazRaVEl0/T0RnMk5XTTNOVFZt/TldRNFhrRXlYa0Zx/Y0djQC5qcGc",
    trailer_url: "",
    imdb_score: 9.0,
    metascore: 94,
    type: "movie",
  },
  {
    title: "Terminator",
    description: "The Terminator takes on Timisoara’s most notorious crimes.",
    id: "MOV041",
    thumbnail: "/Screenshot_20230606_225741_Gallery (2).png",
    trailer_url: terminator,
    imdb_score: 10,
    metascore: 100,
    type: "movie",
  },
];

export default List;
