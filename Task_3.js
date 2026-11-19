
function customFilter(posts) {
    const result = [];

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.length <= 25) {
            result.push(posts[i]);
        }
    }

    return result;
}

async function getFilteredPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        const filteredPosts = customFilter(data);

        console.log("Custom Filter Results:", filteredPosts);

    } catch (error) {
        console.error("AJAX Request Failed:", error);
    }
}

getFilteredPosts();
