
import { BlogProvider } from './BlogContext';
import { FaqProvider } from './FaqContext';
import { PostProvider } from './PostContext';

function composeProviders(providers){

    return providers.reduce((Accumulated, Current) => (
        ({children}) =>
            <Accumulated>
                <Current>{children}</Current>
            </Accumulated>
    ));
}

export default composeProviders([
    BlogProvider, FaqProvider, PostProvider
]);