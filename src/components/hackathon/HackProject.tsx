import { genProfileRoute } from "../../lib/genProfileRoute/genProfileRoute.gen";
import Link from "next/link";
// make a global author type to replace this.
type TAuthorTesting = {
  name: string;
  id: number;
};

// Can Fetch or Drill Project specific data with Server Side Props

type TProps = {
  title: string;
  problem: React.ReactNode;
  answer: React.ReactNode;
  author: TAuthorTesting;
  tags: Array<string>;
};

function HackProject(props: TProps) {
  /**
   * Todo: Style Tags
   */
  const renderTags = () => props.tags.map((node) => <div>{node}</div>);
  return (
    <div>
      <small>
        Oct 9, 2020 (harcoded change in prod) -{" "}
        <Link href={genProfileRoute(props.author.id)}>{props.author.name}</Link>
      </small>
      {renderTags()}
      <h1>The Problem</h1>
      {props.problem}
      <h1>The Answer</h1>
      {props.answer}
    </div>
  );
}

export default HackProject;
