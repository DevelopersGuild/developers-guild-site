[@react.component]
let make = (~name: string, _children) => {
  let (count, setCount) = React.useState(() => 0);
  let (_foo, setFoo) = React.useState(() => false);

  React.useEffect0(() => {
     Js.log("Hello UseEffect Reason!");
     setFoo(_ => true);
     None;
  });

  <div>
    <h1> {ReasonReact.string("Future Roommate Listings")} </h1>
    <p>
      {ReasonReact.string(
         "This page was developed with Reason and React this allows for strict types and better type inferences.",
       )}
    </p>
    <p>
      {React.string(name ++ " clicked " ++ string_of_int(count) ++ " times")}
    </p>
    <button onClick={_ => setCount(_ => count + 1)}>
      {React.string("Click me")}
    </button>
  </div>;
};
