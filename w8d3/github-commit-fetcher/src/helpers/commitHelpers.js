export const convertCommitObj = (commit) => {
  if (!commit) {
    return null;
  }

  if (typeof commit !== "object" || Array.isArray(commit)) {
    throw new Error("THAT AINT AN OBJECT CHIEF.");
  }

  const commitObject = {};
  commitObject.author = commit.commit.author.name;
  commitObject.message = commit.commit.message;
  commitObject.dateCreated = commit.commit.author.date;
  commitObject.commitUrl = commit.html_url;

  for (const key in commitObject) {
    if (!commitObject[key]) {
      throw new Error("WHY YOU GIVE BAD OBJECT");
    }
  }

  return commitObject;
};

// author: commits[0].commit.author.name,
// message: commits[0].commit.message,
// dateCreated: commits[0].commit.author.date,
// commitUrl: commits[0].html_url,
