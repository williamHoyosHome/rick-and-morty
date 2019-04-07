const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')
const axios = require('axios')

const uri = `https://rickandmortyapi.com/api/character`;

// Character Type
const CharacterType = new GraphQLObjectType({
	name: 'Character',
	fields: () => ({
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		status: { type: GraphQLString },
		species: { type: GraphQLString },
		type: { type: GraphQLString },
		gender: { type: GraphQLString },
		origin: { type: OriginType },
		location: { type: LocationType },
		image: { type: GraphQLString },
		url: { type: GraphQLString },
		created: { type: GraphQLString }
	})
})

// Origin Type
const OriginType = new GraphQLObjectType({
	name: 'Origin',
	fields: () => ({
		name: { type: GraphQLString },
		url: { type: GraphQLString }
	})
})

// Location Type
const LocationType = new GraphQLObjectType({
	name: 'Location',
	fields: () => ({
		name: { type: GraphQLString },
		url: { type: GraphQLString }
	})
})

// PageInfo Type
const PageInfoType = new GraphQLObjectType({
	name: 'pageInfo',
	fields: () => ({
		count: { type: GraphQLInt },
		pages: { type: GraphQLInt },
		next: { type: GraphQLInt },
		prev: { type: GraphQLInt }
	})
})

// Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		characters: {
			type: new GraphQLList(CharacterType),
			resolve(parent, args){
				return axios.get(uri)
					.then(res => res.data.results);
			}
		},
		character: {
			type: CharacterType,
			args: {
				id: { type: GraphQLInt }
			},
			resolve(parent, args){
				return axios.get(`${uri}/${args.id}`)
					.then(res => res.data)
			}
		},
		search: {
			type: new GraphQLList(CharacterType),
			args: {
				name: { type: GraphQLString }
			},
			resolve(parent, args){
				return axios.get(`${uri}/?name=${args.name}`)
					.then(res => res.data.results)
			}
		},
		pageInfo: {
			type: new GraphQLList(PageInfoType),
			resolve(parent, args){
				return axios.get(uri)
					.then(res => res.data.info);
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})