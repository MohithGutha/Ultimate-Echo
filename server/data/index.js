import mongoose from "mongoose";

// Some placeholder data to populate the database

/**
 * Array of user IDs.
 * @type {Array<mongoose.Types.ObjectId>}
 */
const userIDs = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

/**
 * Array of user objects containing user details such as name, email, password, location, occupation, etc.
 * @typedef {Object} User
 * @property {string} _id - Unique identifier for the user.
 * @property {string} firstName - First name of the user.
 * @property {string} lastName - Last name of the user.
 * @property {string} email - Email address of the user.
 * @property {string} password - Encrypted password of the user.
 * @property {string} picturePath - File path of the user's profile picture.
 * @property {string[]} friends - Array of user IDs representing the user's friends.
 * @property {string} location - Location of the user.
 * @property {string} occupation - Occupation of the user.
 * @property {string} teamAssociated - Name of the team the user is associated with.
 * @property {number} viewedProfile - Number of times the user's profile has been viewed.
 * @property {number} impressions - Number of impressions the user's profile has received.
 * @property {number} createdAt - Timestamp of when the user's account was created.
 * @property {number} updatedAt - Timestamp of when the user's account was last updated.
 * @property {number} __v - Version number of the user object.
 */

/**
 * Array of user objects containing user details such as name, email, password, location, occupation, etc.
 * @type {User[]}
 */
export const users = [
  {
    _id: userIDs[0],
    firstName: "Amit",
    lastName: "Kumar",
    email: "amit.kumar@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [userIDs[1], userIDs[2], userIDs[3]],
    location: "Mumbai, Maharashtra",
    occupation: "Software Engineer",
    teamAssociated: "Tech Innovators",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[1],
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpeg",
    friends: [userIDs[0], userIDs[2]],
    location: "Delhi, Delhi",
    occupation: "UX Designer",
    teamAssociated: "Design Wizards",
    viewedProfile: 17890,
    impressions: 735429,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[2],
    firstName: "Rahul",
    lastName: "Verma",
    email: "rahul.verma@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [userIDs[0], userIDs[1], userIDs[3]],
    location: "Bangalore, Karnataka",
    occupation: "Data Scientist",
    teamAssociated: "Data Innovators",
    viewedProfile: 15672,
    impressions: 649214,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[3],
    firstName: "Anjali",
    lastName: "Gupta",
    email: "anjali.gupta@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p4.jpeg",
    friends: [userIDs[0], userIDs[2]],
    location: "Kolkata, West Bengal",
    occupation: "Marketing Manager",
    teamAssociated: "Marketing Gurus",
    viewedProfile: 12084,
    impressions: 512345,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[4],
    firstName: "Sandeep",
    lastName: "Singh",
    email: "sandeep.singh@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [userIDs[5]],
    location: "Chennai, Tamil Nadu",
    occupation: "Product Manager",
    teamAssociated: "Product Visionaries",
    viewedProfile: 8950,
    impressions: 472321,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[5],
    firstName: "Mala",
    lastName: "Das",
    email: "mala.das@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [userIDs[4], userIDs[6]],
    location: "Hyderabad, Telangana",
    occupation: "HR Manager",
    teamAssociated: "HR Connect",
    viewedProfile: 6240,
    impressions: 369820,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[6],
    firstName: "Rajesh",
    lastName: "Patel",
    email: "rajesh.patel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [userIDs[5]],
    location: "Ahmedabad, Gujarat",
    occupation: "Sales Executive",
    teamAssociated: "Sales Pros",
    viewedProfile: 7893,
    impressions: 256780,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[7],
    firstName: "Shikha",
    lastName: "Jain",
    email: "shikha.jain@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    location: "Pune, Maharashtra",
    occupation: "Software Developer",
    teamAssociated: "Code Wizards",
    viewedProfile: 3250,
    impressions: 125432,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[8],
    firstName: "Sanjay",
    lastName: "Shukla",
    email: "sanjay.shukla@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [userIDs[9]],
    location: "Jaipur, Rajasthan",
    occupation: "Graphic Designer",
    teamAssociated: "Art Creators",
    viewedProfile: 2105,
    impressions: 95420,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  },
  {
    _id: userIDs[9],
    firstName: "Neha",
    lastName: "Garg",
    email: "neha.garg@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p10.jpeg",
    friends: [userIDs[8]],
    location: "Lucknow, Uttar Pradesh",
    occupation: "Content Writer",
    teamAssociated: "Writers Guild",
    viewedProfile: 1590,
    impressions: 76340,
    createdAt: 1635360000,
    updatedAt: 1635360000,
    __v: 0
  }
]


/**
 * An array of post objects containing information about each post.
 * @typedef {Object} Post
 * @property {mongoose.Types.ObjectId} _id - The unique identifier for the post.
 * @property {mongoose.Types.ObjectId} userID - The unique identifier for the user who created the post.
 * @property {string} firstName - The first name of the user who created the post.
 * @property {string} lastName - The last name of the user who created the post.
 * @property {string} location - The location of the user who created the post.
 * @property {string} description - The description of the post.
 * @property {string} picturePath - The file path of the picture associated with the post.
 * @property {string} userPicturePath - The file path of the user's profile picture.
 * @property {Map} likes - A map of user IDs who have liked the post.
 * @property {Array} comments - An array of comments on the post.
 */
export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIDs[4],
    firstName: "Sandeep",
    lastName: "Singh",
    location: "Chennai, Tamil Nadu",
    description: "Enjoying a day out in the city!",
    picturePath: "post1.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIDs[0], true],
      [userIDs[5], true],
      [userIDs[2], true],
    ]),
    comments: [
      "Beautiful!",
      "Looks like a fun day!",
      "Enjoy the sunshine!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIDs[5],
    firstName: "Mala",
    lastName: "Das",
    location: "Hyderabad, Telangana",
    description: "Family picnic at the park.",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIDs[4], true],
      [userIDs[6], true],
      [userIDs[0], true],
    ]),
    comments: [
      "Great family time!",
      "Lovely picnic spot!",
      "Enjoy the day!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIDs[6],
    firstName: "Rajesh",
    lastName: "Patel",
    location: "Ahmedabad, Gujarat",
    description: "Exploring the local market.",
    picturePath: "post3.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIDs[5], true],
      [userIDs[4], true],
      [userIDs[0], true],
    ]),
    comments: [
      "Amazing market!",
      "Enjoy shopping!",
      "Bargain for good deals!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIDs[7],
    firstName: "Shikha",
    lastName: "Jain",
    location: "Pune, Maharashtra",
    description: "Coding all day!",
    picturePath: "post4.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIDs[8], true],
      [userIDs[9], true],
      [userIDs[4], true],
    ]),
    comments: [
      "Keep coding!",
      "Impressive work!",
      "Hard work pays off!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIDs[8],
    firstName: "Sanjay",
    lastName: "Shukla",
    location: "Jaipur, Rajasthan",
    description: "Creating some artwork.",
    picturePath: "post5.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIDs[9], true],
      [userIDs[7], true],
      [userIDs[5], true],
    ]),
    comments: [
      "Artistic talent!",
      "Beautiful creation!",
      "Art speaks to the soul!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIDs[9],
    firstName: "Neha",
    lastName: "Garg",
    location: "Lucknow, Uttar Pradesh",
    description: "Writing stories.",
    picturePath: "post6.jpeg",
    userPicturePath: "p10.jpeg",
    likes: new Map([
      [userIDs[8], true],
      [userIDs[7], true],
      [userIDs[4], true],
    ]),
    comments: [
      "Your stories are amazing!",
      "Keep writing!",
      "Storytelling at its best!",
    ],
  }
]

