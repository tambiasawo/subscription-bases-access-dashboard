export const createPost = async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      slug,
      canonical_url,
      cover_image_url,
      reading_time_min,
      author_name,
      author_email,
    } = req.body;

    if (
      !title ||
      !excerpt ||
      !content ||
      !slug ||
      !canonical_url ||
      !cover_image_url ||
      !reading_time_min ||
      !author_name ||
      !author_email
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const post =
      await sql`INSERT INTO posts (title, excerpt, content, slug, canonical_url, cover_image_url, reading_time_min, author_name, author_email) VALUES (${title}, ${excerpt}, ${content}, ${slug}, ${canonical_url}, ${cover_image_url}, ${reading_time_min}, ${author_name}, ${author_email})`;
    if (!post) {
      return res.status(400).json({ message: "Post creation failed" });
    }
    console.log("post", post);

    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
