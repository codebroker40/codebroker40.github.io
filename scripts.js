/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/{query}",
  duckduckgo: "https://duckduckgo.com/?q={query}",
  ecosia: "https://www.ecosia.org/search?q={query}",
  google: "https://www.google.com/search?q={query}",
  startpage: "https://www.startpage.com/search?q={query}",
  youtube: "https://www.youtube.com/results?q={query}",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  const url = engineUrls[engine] ?? engine
  return url.replace("{query}", value)
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"0WpD01cbcgeHAEQ0","label":"Waste Time","bookmarks":[{"id":"OEOIhTwA9TJ0FWKH","label":"Youtube","url":"https://youtube.com"},{"id":"IPvrfh1tgNDU6468","label":"Bsky","url":"https://bsky.app"},{"id":"VteNTcg1O28vEBjD","label":"Reddit","url":"https://reddit.com"},{"id":"vWWQlgMUSQ0MdL8v","label":"Lichess","url":"https://lichess.org"}]},{"id":"ssNxRSZS4s0wXCvT","label":"Things To Check","bookmarks":[{"id":"TzEOrbEl8apVsegh","label":"Github","url":"https://github.com"},{"id":"eBiryKCuskmHVqgn","label":"gmail","url":"https://gmail.com"},{"id":"Zh9s2PhB2AfpOe2J","label":"pmail","url":"https://protonmail.com"}]},{"id":"AuzoMb7TMalQFESB","label":"Refs","bookmarks":[{"id":"UVPe50BHOgtR0igr","label":"Arch Wiki","url":"https://archlinux.org"},{"id":"YEYOlLAb1bEgiWHI","label":"Scryfall","url":"https://scryfall.com"},{"id":"kkGVe78QndNiefiG","label":"Godot","url":"https://docs.godotengine.org"},{"id":"ksOOOYVYRZqkCOXR","label":"Playdate SDK","url":"https://sdk.play.date/2.6.2"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
