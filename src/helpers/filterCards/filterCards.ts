import { TestData } from '../../components/TestCards/TestCards'

const filterCards = (cardsData: TestData[], filterValue: string) => {
	const filterValueLowerCase = filterValue.toLowerCase()

	const filtered = cardsData.filter((data) => {
		return data.name.toLowerCase().includes(filterValueLowerCase)
	})

	return filtered
}

export default filterCards
