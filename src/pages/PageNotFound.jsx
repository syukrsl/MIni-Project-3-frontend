import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <>
            <h1>Page Not Found</h1>
            <p>What were you looking for?
                Maybe going back <Link to="/">home </Link>
                will help you find it.</p>
        </>
    )
}

export default PageNotFound