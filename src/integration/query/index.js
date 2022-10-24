const LIST_PERSON = `
    query Persons($name: String!) {
        characters(filter: { name: $name }) {
            info {
                count
            }
            results {
                name
                gender
                status
                species
                image
            }
        }
    }
`;

export default LIST_PERSON;