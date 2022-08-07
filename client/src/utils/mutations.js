import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUder($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            -id
        }
    }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: STring!) {
    addUser(username: $username, password: $password, email: $email) {
        user {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                bookID
                image
                link
                title
                description
            }
        }
        token
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($input: savedBook!) {
    saveBook (input: $input)
        {
            _id
            username
            email
            bookCount
            savedBooks {
                # _id
                authors
                bookID
                image
                link
                title
                description
            }
        }
    }
}`;

export const REMOVE_BOOK = qgl`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            authors
            bookID
            image
            link
            title
            description
        }
    }
}`;

