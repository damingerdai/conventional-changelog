export const breakingHeaderPattern = /^(\w*)(?:\((.*)\))?!: (.*)$/

export function addBangNotes (commit) {
  const match = commit.header.match(breakingHeaderPattern)
  if (match && commit.notes.length === 0) {
    const noteText = match[3] // the description of the change.
    commit.notes.push({
      text: noteText
    })
  }
}
