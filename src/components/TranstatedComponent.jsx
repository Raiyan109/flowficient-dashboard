import { FormattedMessage } from "react-intl"


const TranstatedComponent = () => {
    return (
        <div>
            <h1><FormattedMessage id="app.title" /></h1>
            <p><FormattedMessage id="app.description" /></p>
        </div>
    )
}

export default TranstatedComponent