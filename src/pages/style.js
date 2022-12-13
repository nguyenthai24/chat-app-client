import  { css } from 'styled-components'

export const buttonGlobal = css`
 margin: 12px 0px;
            background-color: #997af0;
            color: white;
            padding: 10px 20px;
            border: none;
            font-weight: 700;
            cursor: pointer;
            border-radius: 4px;
            font-size: 12px;
            text-transform: uppercase;
            transition: 0.5 ease-in-out;
            &:hover {
                background-color: #4e0eff;
            }
`

// const StyledComp = styled.div`
//   /* This is an example of a nested interpolation */
//   ${props => (props.complex ? complexMixin : 'color: blue;')};
// `


