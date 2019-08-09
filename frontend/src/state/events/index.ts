
/* eslint-disable max-len */
const INITIAL_STATE = {
    items: [
        {
            id: 1,
            name: "BCPA Boogie - 2019",
            location: "Skydive Dunkeswell",
            endTime: new Date(2019, 7, 10, 8, 0, 0),
            startTime: new Date(2019, 7, 12, 21, 0, 0),
            description: "BCPA Boogie is back again and we are off to the Beech! We have a fun week of canopy courses, tracking and some epic LO from some awesome people. Sign up and grab your goody bags and tshirts and we will see you for a week of fun and partying!",
            image: "boogie19.jpg"
        },
        {
            id: 2,
            name: "BCPA Freshers - 2019",
            location: "Skydive Langar",
            endTime: new Date(2019, 10, 15, 8, 0, 0),
            startTime: new Date(2019, 10, 18, 16, 0, 0),
            description: "BCPA freshers is our first event of the year, reuniting current BCPA members as well as welcoming in our newbies. We've got jumping for both new and experienced skydivers, coaching, load organising, and of course one of our legendary parties!",
            image: "pre-beach-jump.jpg"
        },
        {
            id: 3,
            name: "BCPA Indoors - 2020",
            location: "Twinwoods Adventure",
            endTime: new Date(2019, 2, 10, 21, 30, 0),
            startTime: new Date(2019, 2, 12, 17, 0, 0),
            description: "Get ready for the new season in both your flying and your party skills! The BCPA are heading back to Bodyflight Bedford for the BCPA Indoors 2019!",
            image: "indoors19.jpg"
        },
        {
            id: 4,
            name: "BCPA Tour - 2021",
            location: "San Diego",
            endTime: new Date(2019, 4, 20, 18, 45, 0),
            startTime: new Date(2019, 4, 29, 11, 30, 0),
            description: "Grab your beach towels, slather on the sunscreen, and get out to explore some of the best beaches and bays in the world in California's Beach City, San Diego!",
            image: "tour19.jpg"
        }
    ]
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
    default: return state;
    }
};

export default reducer;
