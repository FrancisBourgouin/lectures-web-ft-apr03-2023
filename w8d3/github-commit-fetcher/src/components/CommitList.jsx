import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;
  return (
    <section>
      <h1>List of commits</h1>
      {commits && (
        <ul data-testid="commitList">
          <CommitListItem />
          <CommitListItem />
        </ul>
      )}
      {!commits && <p>There is no commits to show</p>}
    </section>
  );
}
