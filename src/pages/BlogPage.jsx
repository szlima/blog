
import IndexProvider from '../contexts/IndexProvider';

import Blog from '../components/Blog';

function BlogPage() {

  return (
    <IndexProvider>
      <Blog />
    </IndexProvider>
  );
}

export default BlogPage;
