let listingsContainerStyles =
  ReactDOMRe.Style.make(
    ~display="flex",
    ~flexDirection="row",
    ~flexWrap="wrap",
    ~justifyContent="space-evenly",
    ~alignItems="center",
    (),
  );

let imageBoxContainer =
  ReactDOMRe.Style.make(
    ~width="250px",
    ~height="250px",
    ~objectFit="cover",
    (),
  );

let tagsListStyling =
  ReactDOMRe.Style.make(
    ~listStyle="none",
    ~display="flex",
    ~flexDirection="row",
    ~justifyContent="space-around",
    ~alignItems="center",
    (),
  );

let listingBoxContainer =
  ReactDOMRe.Style.make(
    ~padding="10px",
    ~borderStyle="solid",
    ~borderWidth="1px",
    ~margin="10px",
    (),
  );

type roomMatchListing = {
  title: string,
  description: string,
  tags: list(string),
  photos: list(string),
  landmarks: list(string),
  address: string,
  currentNumberOfOcuppants: int,
  housePerks: list(string),
  monthlyRent: float,
  estimatedMonthlyUtilities: float,
  homeApplicantRequirements: string,
};

/**
 * Mock Data Set for Basic Demo
 * of this feature. This will be replaced
 * by data from a fetch request or graphql
 * query.
 */
let listingsGroup: list(roomMatchListing) = [
  {
    title: "Nice Home Near De Anza",
    description: "A Lot of Cool Kids",
    tags: ["social", "woke", "soy"],
    photos: [
      "https://www.deanza.edu/facilities/images/de-anza-pac-1024x512.jpg",
    ],
    landmarks: ["The ATC", "Le Cafe", "Philz Coffee"],
    address: "21250 Stevens Creek Blvd, Cupertino CA",
    currentNumberOfOcuppants: 5,
    housePerks: [
      "Sociable House",
      "Communal Fridge Fridays",
      "Shortest Commute Ever",
    ],
    monthlyRent: 1350.60,
    estimatedMonthlyUtilities: 0.0,
    homeApplicantRequirements: "A+ and Above Grades, Must Love Using Loftly! and needs to like the Golden State Warriors",
  },
  {
    title: "Nice Home Near De Anza",
    description: "A Lot of Cool Kids",
    tags: ["social", "woke", "soy"],
    photos: [
      "https://www.deanza.edu/facilities/images/de-anza-pac-1024x512.jpg",
    ],
    landmarks: ["The ATC", "Le Cafe", "Philz Coffee"],
    address: "21250 Stevens Creek Blvd, Cupertino CA",
    currentNumberOfOcuppants: 5,
    housePerks: [
      "Sociable House",
      "Communal Fridge Fridays",
      "Shortest Commute Ever",
    ],
    monthlyRent: 1350.60,
    estimatedMonthlyUtilities: 0.0,
    homeApplicantRequirements: "A+ and Above Grades, Must Love Using Loftly! and needs to like the Golden State Warriors",
  },
  {
    title: "Nice Home Near De Anza",
    description: "A Lot of Cool Kids",
    tags: ["social", "woke", "soy"],
    photos: [
      "https://www.deanza.edu/facilities/images/de-anza-pac-1024x512.jpg",
    ],
    landmarks: ["The ATC", "Le Cafe", "Philz Coffee"],
    address: "21250 Stevens Creek Blvd, Cupertino CA",
    currentNumberOfOcuppants: 5,
    housePerks: [
      "Sociable House",
      "Communal Fridge Fridays",
      "Shortest Commute Ever",
    ],
    monthlyRent: 1350.60,
    estimatedMonthlyUtilities: 0.0,
    homeApplicantRequirements: "A+ and Above Grades, Must Love Using Loftly! and needs to like the Golden State Warriors",
  },
  {
    title: "Nice Home Near De Anza",
    description: "A Lot of Cool Kids",
    tags: ["social", "woke", "soy"],
    photos: [
      "https://www.deanza.edu/facilities/images/de-anza-pac-1024x512.jpg",
    ],
    landmarks: ["The ATC", "Le Cafe", "Philz Coffee"],
    address: "21250 Stevens Creek Blvd, Cupertino CA",
    currentNumberOfOcuppants: 5,
    housePerks: [
      "Sociable House",
      "Communal Fridge Fridays",
      "Shortest Commute Ever",
    ],
    monthlyRent: 1350.60,
    estimatedMonthlyUtilities: 0.0,
    homeApplicantRequirements: "A+ and Above Grades, Must Love Using Loftly! and needs to like the Golden State Warriors",
  },
];

let tagsMapProcessed = (tags: list(string)) =>
  List.mapi(
    (index, tag) =>
      <li key={string_of_int(index)}>
        <p> {ReasonReact.string(tag)} </p>
      </li>,
    tags,
  );

let landmarksMapProcessed = (landmarks: list(string)) =>
  List.mapi(
    (index, tag) =>
      <li key={string_of_int(index)}>
        <p> {ReasonReact.string(tag)} </p>
      </li>,
    landmarks,
  );

let housePerksMapProcessed = (housePerks: list(string)) =>
  List.mapi(
    (index, tag) =>
      <li key={string_of_int(index)}>
        <p> {ReasonReact.string(tag)} </p>
      </li>,
    housePerks,
  );

let listingsProcessed =
  List.mapi(
    (index, listing) =>
      <div style=listingBoxContainer key={string_of_int(index)}>
        <h2> {ReasonReact.string(listing.title)} </h2>
        <img style=imageBoxContainer src={List.hd(listing.photos)} />
        <div>
          <p> {ReasonReact.string(listing.address)} </p>
          <p>
            {ReasonReact.string(
               "Current Occupants: "
               ++ string_of_int(listing.currentNumberOfOcuppants),
             )}
          </p>
          <p>
            {ReasonReact.string(
               "Monthly Rent: " ++ Js.Float.toString(listing.monthlyRent),
             )}
          </p>
          <p>
            {ReasonReact.string(
               "Estimated Monthly Utilities: "
               ++ Js.Float.toString(listing.estimatedMonthlyUtilities),
             )}
          </p>
        </div>
        <h3> {ReasonReact.string("Description")} </h3>
        <p> {ReasonReact.string(listing.description)} </p>
        <h3> {ReasonReact.string("Applicant Requirements")} </h3>
        <p> {ReasonReact.string(listing.homeApplicantRequirements)} </p>
        <div>
          <p> {ReasonReact.string("tags: ")} </p>
          <ul style=tagsListStyling>
            {ReasonReact.array(
               Array.of_list(tagsMapProcessed(listing.tags)),
             )}
          </ul>
        </div>
        <div>
          <p> {ReasonReact.string("landmarks: ")} </p>
          <ul style=tagsListStyling>
            {ReasonReact.array(
               Array.of_list(landmarksMapProcessed(listing.landmarks)),
             )}
          </ul>
        </div>
        <div>
          <p> {ReasonReact.string("house perks: ")} </p>
          <ul style=tagsListStyling>
            {ReasonReact.array(
               Array.of_list(housePerksMapProcessed(listing.housePerks)),
             )}
          </ul>
        </div>
      </div>,
    listingsGroup,
  );

/**
 * The gen type annotation adds type declaration files for us automatically
 * be careful where you put this annotation since we only need to generate ts
 * definitions for parts of the Reason Code that is going to explicitly
 * called from outside of Reason and inside the normal React codebase
 */
[@genType]
[@react.component]
let make = (~name: string, _children) => {
  let (count, setCount) = React.useState(() => 0);
  let (_foo, setFoo) = React.useState(() => false);

  React.useEffect1(
    () => {
      Js.log("Hello UseEffect Reason!");
      setFoo(_ => true);
      None;
    },
    [|setFoo|],
  );
  <React.Fragment>
    <h1> {ReasonReact.string("Future Roommate Listings")} </h1>
    <p>
      {ReasonReact.string(
         "This page was developed with Reason and React this allows for strict types and better type inferences.",
       )}
    </p>
    <p>
      {ReasonReact.string(
         name ++ " clicked " ++ string_of_int(count) ++ " times",
       )}
    </p>
    <button onClick={_ => setCount(_ => count + 1)}>
      {ReasonReact.string("Click me")}
    </button>
    <div style=listingsContainerStyles>
      {ReasonReact.array(Array.of_list(listingsProcessed))}
    </div>
  </React.Fragment>;
};
