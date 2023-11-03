async function asyncGetHero() {
	// select the input value
	var heroID = document.querySelector("#heroID").value;
	// select the image tag
	var heroImg = document.querySelector("#heroImg");

	var response = await fetch(
		"https://akabab.github.io/superhero-api/api/id/" + heroID + ".json"
	);
	// (error handling) if the response was rejected return a 404 image
	if (!response.ok) {
		console.log("We have a problem !!!");
		heroImg.src = "assets/not_found.png";
	} else {
		// convert the response into json
		var heroData = await response.json();
		// select the h2 tag
		document.querySelector("#heroName").innerText = heroData.name;
		// assign the selected hero image to the image tag src
		heroImg.src = heroData.images.md;
	}
}

// asyncGetHero();
// https://akabab.github.io/superhero-api/api
