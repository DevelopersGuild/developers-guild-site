import React from "react";
import { useRecoilValue } from "recoil";
import { isCuratedVideoPlayingAtom } from "../lib/AppAtoms";

type Props = Readonly<{
  children: React.ReactNode;
}>;

function OverflowContainer(props: Props) {
  const isCuratedVideoPlaying = useRecoilValue(isCuratedVideoPlayingAtom);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: isCuratedVideoPlaying ? "hidden" : "visible",
      }}
    >
      {props.children}
    </div>
  );
}

export default OverflowContainer;
