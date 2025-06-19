function gameObject() {
    const object1= {home: {
        teamName: `Brooklyn Nets`,
        colors: ["Black", "White"],
        players: {"Alan Anderson":  {"number": 0,
            "shoe": 16,
            "points": 22,
            "rebounds": 12,
            "assists": 12,
            "steals": 3,
            "blocks": 1,
            "slamDunks": 1
         },
         "Reggie Evans": {"number": 30,
            "shoe": 14,
            "points": 12,
            "rebounds": 12,
            "assists": 12,
            "steals": 12,
            "blocks": 12,
            "slamDunks": 7
         },
         "Brook Lopez": {"number": 11,
            "shoe": 17,
            "points": 17,
            "rebounds": 7,
            "assists": 2,
            "steals": 1,
            "blocks": 2,
            "slamDunks": 4
         },
        "Mason Plumlee": {"number": 1,
            "shoe": 19,
            "points": 26,
            "rebounds": 11,
            "assists": 6,
            "steals": 3,
            "blocks": 8,
            "slamDunks": 5
        },
        "Jason Terry": {"number": 31,
            "shoe": 15,
            "points": 19,
            "rebounds": 2,
            "assists": 2,
            "steals": 4,
            "blocks": 11,
            "slamDunks": 1
        }
        }
    },
        away: {
            teamName: `Charlotte Hornets`,
            colors: ["Turquoise", "Purple"],
            players: {"Jeff Adrien": {"number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2
            },
            "Bismack Biyombo": {"number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10
            },
            "DeSagna Diop": {"number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5
            },
            "Ben Gordon": {"number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0
            },
            "Brendan Haywood": {"number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12
            }
        }
        }
    }
    return object1;
}
console.log(gameObject());
function numPointsScored(playerName) {
    if (gameObject()["home"]["players"][playerName]) {
        return gameObject()["home"]["players"][playerName]["points"];
    } else if (gameObject()["away"]["players"][playerName]) {
        return gameObject()["away"]["players"][playerName]["points"];
    } else {
        return (`Player not found`);
    }
}
function shoeSize(playerName) {
    if (gameObject()["home"]["players"][playerName]) {
        return gameObject()["home"]["players"][playerName]["shoe"];
    } else if (gameObject()["away"]["players"][playerName]) {
        return gameObject()["away"]["players"][playerName]["shoe"];
    } else {
        return (`Player not found`);
    }
}
function teamColors(team) {
    if (gameObject()["home"]["teamName"] === team) {
        return gameObject()["home"]["colors"];
    } else if (gameObject()["away"]["teamName"] === team) {
        return gameObject()["away"]["colors"];
    } else {
        return (`Team not found`);
    }
}
function teamNames() {
    return [gameObject()["home"]["teamName"], gameObject()["away"]["teamName"]];
}
function playerNumbers(team) {
    const playerNumbers = [];
    if (gameObject()["home"]["teamName"] === team) {
        for (const player in gameObject()["home"]["players"]) {
            playerNumbers.push(gameObject()["home"]["players"][player]["number"]);
        }
    } else if (gameObject()["away"]["teamName"] === team) {
        for (const player in gameObject()["away"]["players"]) {
            playerNumbers.push(gameObject()["away"]["players"][player]["number"]);
        }
    }
    return playerNumbers;
}
function playerStats(playerName) {
    if (gameObject()["home"]["players"] === playerName) {
        return gameObject()["home"]["players"][playerName];
    }
    else if (gameObject()["away"]["players"] === playerName) {
        return gameObject()["away"]["players"][playerName];
    }                                                             
}