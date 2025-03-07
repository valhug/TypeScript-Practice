import { useState } from 'react'
import { BlogProvider } from './shared/BlogContext'
import Navigation from './components/Navigation'
import { IoMdAddCircle } from 'react-icons/io';
import ArticleList from './components/ArticleList';
import Modal from './components/Modal';
import BlogForm from './components/BlogForm';
import PeopleToFollow from './components/PeopleToFollow';
import TrendList from './components/TrendList';
import TopTopics from './components/TopTopics';
import { Blog } from './types';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

  const openModalForNewBlog = () => {
    setEditingBlog(undefined);
    setIsModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  }
  
  
  return (
   <div> 
    <BlogProvider >
      <Navigation />
      
      <div className='flex justify-center'>
        <div className='mx-auto p-6'>
          <div>
            <button
              onClick={openModalForNewBlog}
              className='ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4'
              >
                Add New Blog <IoMdAddCircle className='ml-[.5rem]' />
              </button>

              <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <BlogForm existingBlog={editingBlog} onClose={() => setIsModalOpen(false)} />
                </Modal>
              )}
          </div>
        </div>

        <div className='w-[30%]'>
          <PeopleToFollow />
          <TrendList />
          <TopTopics />
        </div>
      </div>
    </BlogProvider>
   </div>
  );
};

export default App
