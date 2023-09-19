import { gql } from '@apollo/client';

export const getData =gql`
    query Get_profile {
        get_profile {
            email {
                address
            }
            name {
                first_name
                last_name
            }
        }
    }
`