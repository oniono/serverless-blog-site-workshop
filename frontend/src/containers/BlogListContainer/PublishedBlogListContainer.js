import {connect} from "react-redux";

// TODO: do not import relative
import {BlogList} from "../../components";
import {searchBlogsAction} from "../../store/actions/searchBlog";
import {deleteBlogAction} from "../../store/actions/deleteBlog";
import {getBlogAction} from "../../store/actions/getBlog";


function mapStateToProps(store) {
    // console.log("PublishedBlogListContainer; store: ", store);
    return {
        searchedBlogs: store.searchBlog,
        clickedBlog: store.getBlog,
        deletedBlog: store.deleteBlog
    };
}

function mapDispatchToProps(dispatch) {
    return {

        searchBlogs (keyword, username, startTimestamp, endTimestamp) {
            dispatch(searchBlogsAction(keyword, username, startTimestamp, endTimestamp, 'PUBLISHED'));
        },
        deleteBlog (blogId) {
            dispatch(deleteBlogAction(blogId));
        },
        getBlog (blogId) {
            dispatch(getBlogAction(blogId));
        },

    };
}

const PublishedBlogListContainer = connect(mapStateToProps, mapDispatchToProps)(BlogList);
export default PublishedBlogListContainer;