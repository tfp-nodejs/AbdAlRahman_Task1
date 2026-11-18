
async function getFilteredPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        const filteredPosts = data.filter((post) => {
            return post.title.length <= 25;
        });

        console.log("Filtered Posts:", filteredPosts);

    } catch (error) {
        console.error("AJAX Request Failed:", error);
    }
}

getFilteredPosts();
