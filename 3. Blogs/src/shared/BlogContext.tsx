import { createContext, useState, useContext, Children } from 'react'
import { Blog } from "../types";

interface BlogContextType {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider ({children} : {children: React.ReactNode} )  {
    const [blogs, setBlogs ] = useState<Blog[]>([]);
    const addBlog = (blog: Blog) => {
        setBlogs([...blogs, blog]);
    };

    const updateBlog = (updatedBlog: Blog) => {
        setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)));
    };

    const deleteBlog = (id: number) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    }

    return (
        <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog}}>
            {children}
        </BlogContext.Provider>
    )
}

export function useBlogs() {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
}