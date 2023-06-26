import { Main } from './main/Main'
import { Works } from './works/Works'
import { About } from './about/About'
import { NSkills } from './nskills/NSkills'
import { Contact } from './contact/Contact'
import { Footer } from './footer/Footer'
import { Nav } from './nav/Nav'
import { ErrorSnackbar } from './common/component/errorSnackBar/ErrorSnackbar'

function App() {
	return (
		<>
			<ErrorSnackbar />
			<Nav />
			<Main />
			<About />
			<NSkills />
			<Works />
			<Contact />
			<Footer />
		</>
	)
}

export default App
