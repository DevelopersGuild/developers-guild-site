[@react.component]
let make = (~className: string, ~style, ~href: string, ~children) => {
  <a rel="noreferrer noopener" target="__blank" className style href>
    children
  </a>;
};
