// import axios from "axios"

const handleAddSellPosts = (newSellPost, user) => {
  console.log("calling axios page");
  console.log(user);
  console.log(newSellPost);
  let newUser = user;
  newUser.published_ads.push(newSellPost);
  console.log(newUser);
  favUpdater(user.id, newUser);
};
export default handleAddSellPosts;

const favUpdater = async (id, newuser) => {
  console.log("calling patch request");

  try {
    var data = await fetch(
      `https://olx-database-3xly.onrender.com/data/${id}`,

      {
        method: "PATCH",
        body: JSON.stringify(newuser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let r = await data.json();

    console.log(r);
    //   dispater(OnSuccess(r))
  } catch (e) {
    console.log(e);
  } finally {
  }
};
