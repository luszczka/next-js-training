import styled from 'styled-components'

const StyledNavigation = styled.div`
    display: flex;
    box-shadow: 0px 10px 24px -15px rgba(0, 24, 37, 1);
    justify-content: space-between;
    height: 4rem;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    align-items: center;

    svg {
        padding-right: 20px;
        animation: poppingIn .3s;
        :hover {
            opacity: 1;
            animation: poppingOut .3s;
        }
    }

    div {
        padding-left: 20px;
    }

    @keyframes poppingIn {   
        0% { transform: rotate(0deg); }
        50% { transform: rotate(-7deg); }
        100% { transform: rotate(0deg); }
    }
    @keyframes poppingOut {   
        0% { transform: rotate(0deg); }
        50% { transform: rotate(7deg); }
        100% { transform: rotate(0deg); }
    }
`

export { StyledNavigation }
