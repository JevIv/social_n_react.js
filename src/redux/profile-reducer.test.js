import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


    let state = {
            posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
        ]
    };

test('length of posts shouldd be incremented', () => {
    //1. Start test data
    let action = addPostActionCreator("It-kamasutra.com");
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation/result
    expect(newState.posts.length).toBe(3);
});

test('message of post shouldd be correct', () => {
    //1. Start test data
    let action = addPostActionCreator("It-kamasutra.com");
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation/result
    expect(newState.posts[2].message).toBe("It-kamasutra.com");
});

test('after deleting length of message should decrement', () => {
    //1. Start test data
    let action = deletePost(1);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation/result
    expect(newState.posts.length).toBe(1);
});
