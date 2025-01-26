import { FormattedMessage, FormattedNumber, IntlProvider } from "react-intl"
import { useSelector } from "react-redux"
import LanguageSelector from "./components/LanguageSelector"
import TranstatedComponent from "./components/TranstatedComponent"
import Home from "./components/Home"


const App = () => {

  const locale = useSelector((state) => state.language.locale)
  const messages = useSelector((state) => state.messages[locale])

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale="en">

      <Home />
    </IntlProvider>
  )
}

export default App