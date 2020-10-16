/***
 * Generates Route for User Profile based on
 * valid ID in
 * TODO: Should pull biography and profile picture url
 * from ids in future.
 */
[@genType]
let genProfileRoute = (id: int) => {
  {j|/profile/$id|j};
};
