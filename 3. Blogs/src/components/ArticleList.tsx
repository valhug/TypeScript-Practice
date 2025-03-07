import { useBlogs } from "../shared/BlogContext";
import ArticleCard from "./ArticleCard";
import { Blog } from "../types";

interface ArticleListProps {
    onEdit: (blog: Blog) => void;
}

function ArticleList({ onEdit } : ArticleListProps) {
    const { blogs, deleteBlog } = useBlogs();

    return (
        <div className="ml-[5rem]">
            {blogs.map((blog) => (
                <ArticleCard 
                    key={blog.id} 
                    article={blog} 
                    onDelete={() => deleteBlog(blog.id)} 
                    onEdit={() => onEdit(blog)}
                 />
            ))}
        </div>
    );
};

export default ArticleList;