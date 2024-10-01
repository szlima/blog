
import { BlogProvider } from './BlogContext';
import { FaqProvider } from './FaqContext';
import { PostListProvider } from './PostListContext';

function composeProviders(providers){

    return providers.reduce((Accumulated, Current) => (
        ({children}) =>
            <Accumulated>
                <Current>{children}</Current>
            </Accumulated>
    ));
}

export default composeProviders([
    BlogProvider, FaqProvider, PostListProvider
]);