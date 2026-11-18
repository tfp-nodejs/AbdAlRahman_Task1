
async function getAllPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        console.log("All Posts:", data);

    } catch (error) {
        console.error("AJAX Request Failed:", error);
    }
}

getAllPosts();
