import styled from 'styled-components';


export const Wrapper = styled.div`
    position: relative;
    height: 100vh;
`;

export const BgVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    overflow: hidden;
`;

export const BgVideContent = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

