import gql from 'graphql-tag';

// Query characters
export const CHARACTERS_QUERY = gql`
	query CharactersQuery($page: Int!){
		characters(page: $page) {
			info{
				next
				prev
			}
			results{
				id
				name
				image
			}
		}
	}
`

// Query more characters
// export const MORECHARACTERS_QUERY = gql`
// 	query MoreCharactersQuery{
// 		pageInfo{
// 			count
// 			pages
// 			next
// 			prev
// 		}
// 	}
// `

// Query Info of the characters selected
export const CHARACTERID_QUERY = gql`
	query CharactersQuery($id: String!){
		characterId(id: $id){
			id
			name
			status
			species
			type
			gender
			origin {
				name
			}
			location {
				name
			}
			image
			url
			created
		}
	}
`

// Query Info of one character selected
export const CHARACTERSID_QUERY = gql`
	query CharactersQuery($id: String!){
		charactersId(id: $id){
			id
			name
			status
			species
			type
			gender
			origin {
				name
			}
			location {
				name
			}
			image
			url
			created
		}
	}
`

// Query search characters for the name
export const SEARCH_QUERY = gql`
	query SearchQuery($name: String!) {
		search(name: $name) {
			id
			name
			image
		}
	}
`