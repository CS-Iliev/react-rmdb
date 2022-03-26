// Convert time to hours and minutes
export const calcTime = time =>
{
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money =>
{
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = stateName =>
{
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

var wildcardSearch = function (arr, str)
{
  // If there are no items in the array, return an empty array
  if (typeof arr === 'undefined' || arr.length === 0) return [];
  // If the string is empty return all items in the array
  if (typeof str === 'undefined' || str.length === 0) return arr;

  // Create a new array to hold the results.
  var res = [];

  // Check where the start (*) is in the string
  var starIndex = str.indexOf('*');

  // If the star is the first character...
  if (starIndex === 0)
  {

    // Get the string without the star.
    str = str.substr(1);
    for (var i = 0; i < arr.length; i++)
    {

      // Check if each item contains an indexOf function, if it doesn't it's not a (standard) string.
      // It doesn't necessarily mean it IS a string either.
      if (!arr[i].indexOf) continue;

      // Check if the string is at the end of each item.
      if (arr[i].indexOf(str) === arr[i].length - str.length)
      {
        // If it is, add the item to the results.
        res.push(arr[i]);
      }
    }
  }
  // Otherwise, if the star is the last character
  else if (starIndex === str.length - 1)
  {
    // Get the string without the star.
    str = str.substr(0, str.length - 1);
    for (var i = 0; i < arr.length; i++)
    {
      // Check indexOf function                
      if (!arr[i].indexOf) continue;
      // Check if the string is at the beginning of each item
      if (arr[i].indexOf(str) === 0)
      {
        // If it is, add the item to the results.
        res.push(arr[i]);
      }
    }
  }
  // In any other case...
  else
  {
    for (var i = 0; i < arr.length; i++)
    {
      // Check indexOf function
      if (!arr[i].indexOf) continue;
      // Check if the string is anywhere in each item
      if (arr[i].indexOf(str) !== -1)
      {
        // If it is, add the item to the results
        res.push(arr[i]);
      }
    }
  }

  // Return the results as a new array.
  return res;
}

export const filterTrailerURL = (movie) =>
{
  const trailer = movie.videos['results'].filter((e) => { return wildcardSearch(e['name'], '*Trailer') });

  const YOUTUBE_URL = 'https://www.youtube.com/embed/';

  const trailerURL = (trailer.length > 0) ? `${YOUTUBE_URL}${trailer[0]['key']}` : 'No trailer';

  return trailerURL
}
