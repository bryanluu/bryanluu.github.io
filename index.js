/**
 * Assuming page titles follow the format "Bryan L. Luu | {PAGE_TITLE}", this function returns PAGE_TITLE.
 * @returns the title of the page being shown
 */
function getPageTitle() {
  var titleText = $("title").text();
  // get everything to the right of the | separator and trim it
  var pageTitle = titleText.substring(titleText.indexOf("|") + 1).trim();
  return pageTitle;
}

$(document).ready(function () {
  $("#nav").load("/fragments/nav.html");
});
